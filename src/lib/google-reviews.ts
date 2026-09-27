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

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    // Not an error per se, but the #1 reason live reviews silently fall back:
    // the env vars are missing on the host. Make it visible in the logs.
    console.warn(
      `[google-reviews] Falling back to static reviews — missing env: ${[
        !apiKey && "GOOGLE_PLACES_API_KEY",
        !placeId && "GOOGLE_PLACE_ID",
      ]
        .filter(Boolean)
        .join(", ")}`,
    );
    return FALLBACK;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=de`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) {
      // Surface the real reason (403 billing/quota, 404 wrong Place ID, key
      // restriction, "Places API (New)" not enabled, …) instead of failing mute.
      const body = await res.text().catch(() => "");
      console.error(
        `[google-reviews] Google Places API error ${res.status} ${res.statusText}: ${body.slice(0, 500)}`,
      );
      return FALLBACK;
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
  } catch (err) {
    console.error("[google-reviews] Failed to fetch live reviews:", err);
    return FALLBACK;
  }
}
