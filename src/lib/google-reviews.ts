import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { unstable_cache } from "next/cache";

export type GoogleReview = {
  name: string;
  time: string;
  text: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  reviews: GoogleReview[];
};

const CURATED_REVIEWS: GoogleReview[] = [
  {
    name: "Thierry A.",
    time: "vor 5 Monaten",
    text: "Berisha und sein Team haben bei uns die Baureinigung für ein grösseres EFH durchgeführt! Wir sind sehr zufrieden, absolut empfehlenswert!",
  },
  {
    name: "Karl G.",
    time: "vor 8 Monaten",
    text: "Ich bin rundum zufrieden mit der Mirdita Reinigung! Das Team arbeitet absolut zuverlässig, gründlich und mit viel Sorgfalt – jedes Detail wird beachtet. Besonders gefällt mir, dass sie sehr flexibel auf individuelle Wünsche eingehen und immer freundlich auftreten. Ich kann die Mirdita Reinigung uneingeschränkt weiterempfehlen. Wer Wert auf Qualität und Zuverlässigkeit legt, ist hier genau richtig!",
  },
  {
    name: "Lisa E.",
    time: "vor 1 Monat",
    text: "Das Mirdita-Team erledigt die Reinigung der Büros der Volken-Group zuverlässig, professionell, kundenorientiert und flexibel. Absolut empfehlenswert!",
  },
];

// Last-resort static values, only used if a live result was never cached.
const FALLBACK: GoogleReviewsData = {
  rating: 5,
  total: 40,
  reviews: CURATED_REVIEWS,
};

type PlacesApiReview = {
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
};

function abbreviateName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length < 2) return fullName;
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

/**
 * Fetches the live reviews from the Places API. Throws on any problem (missing
 * config, API error, …) on purpose: wrapped in unstable_cache below, a throwing
 * refresh does NOT overwrite the cache, so the last successful result keeps
 * being served (e.g. when the daily quota is exhausted) instead of reverting to
 * the static fallback.
 */
async function fetchLiveReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    throw new Error(
      `[google-reviews] Missing env: ${[
        !apiKey && "GOOGLE_PLACES_API_KEY",
        !placeId && "GOOGLE_PLACE_ID",
      ]
        .filter(Boolean)
        .join(", ")}`,
    );
  }

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=de`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "rating,userRatingCount,reviews",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    // Surface the real reason (403 billing/quota, 429 quota cap, 404 wrong
    // Place ID, key restriction, …) in the logs, then throw to keep the cache.
    const body = await res.text().catch(() => "");
    throw new Error(
      `[google-reviews] Places API error ${res.status} ${res.statusText}: ${body.slice(0, 300)}`,
    );
  }

  const data: PlacesApiResponse = await res.json();
  const liveReviews = (data.reviews ?? [])
    .filter((r): r is PlacesApiReview & { text: { text: string } } => !!r.text?.text)
    .map((r) => ({
      name: abbreviateName(r.authorAttribution?.displayName ?? "Google Nutzer"),
      time: r.relativePublishTimeDescription ?? "",
      text: r.text.text,
    }));

  const extraReviews = liveReviews.filter((r) => !CURATED_REVIEWS.some((c) => c.name === r.name));

  return {
    rating: data.rating ?? FALLBACK.rating,
    total: data.userRatingCount ?? FALLBACK.total,
    reviews: [...CURATED_REVIEWS, ...extraReviews],
  };
}

// Refresh at most once a day. When the stale entry's background refresh throws
// (quota cap hit, API error), the cached last-good value is preserved and kept
// on screen — only a cold cache with a failing fetch falls through to FALLBACK.
// During `next build` every page hits the cold cache at once; share a single
// API request per build worker instead of one per page. (Kept inside the cached
// function so each page still registers the daily revalidation.)
let buildRequest: Promise<GoogleReviewsData> | undefined;
function fetchLiveReviewsOnce(): Promise<GoogleReviewsData> {
  if (process.env.NEXT_PHASE !== "phase-production-build") return fetchLiveReviews();
  return (buildRequest ??= fetchLiveReviews());
}

const getCachedReviews = unstable_cache(fetchLiveReviewsOnce, ["google-reviews"], {
  revalidate: 60 * 60 * 24,
  tags: ["google-reviews"],
});

/**
 * Durable copy of the last successful API response in `.next/cache`, which
 * Vercel restores between builds — so it survives deploys even when the Data
 * Cache starts empty. Only read/written at build time.
 */
function snapshotFile() {
  return path.join(process.cwd(), ".next", "cache", "google-reviews.json");
}

async function loadSnapshot(): Promise<GoogleReviewsData | null> {
  try {
    const data = JSON.parse(await readFile(snapshotFile(), "utf8")) as GoogleReviewsData;
    return typeof data.rating === "number" && Array.isArray(data.reviews) ? data : null;
  } catch {
    return null;
  }
}

async function saveSnapshot(data: GoogleReviewsData) {
  try {
    const file = snapshotFile();
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, JSON.stringify(data));
  } catch {
    // Best effort only.
  }
}

/**
 * Reviews to render, in order of preference:
 * 1. the cached / freshly fetched live result,
 * 2. the snapshot of the last successful response (build time),
 * 3. at runtime: throw, so an ISR refresh is aborted and the page keeps showing
 *    its last good version instead of reverting to static data,
 * 4. at build time with no snapshot at all: the static FALLBACK.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const isBuild = process.env.NEXT_PHASE === "phase-production-build";
  try {
    const data = await getCachedReviews();
    if (isBuild) await saveSnapshot(data);
    return data;
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    if (isBuild) return (await loadSnapshot()) ?? FALLBACK;
    throw new Error("[google-reviews] Refresh failed; keeping the previously rendered page");
  }
}
