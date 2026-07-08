import { NextResponse, type NextRequest } from "next/server";

/**
 * Soft language redirect for the homepage only.
 *
 * Behaviour — deliberately conservative to protect SEO:
 * - Runs ONLY on the exact path "/" (never on /fr or deep links), so there is
 *   no redirect loop and shared service-page links keep their language.
 * - Never redirects crawlers: the German homepage stays the canonical, directly
 *   indexable "/" for Googlebot & co. (avoids locale-cloaking issues).
 * - Only redirects a first-time visitor whose browser clearly prefers French
 *   over German. English/Italian/other browsers keep the German homepage.
 * - Uses a temporary 307 (not a permanent 308) and records the choice in a
 *   cookie, so it fires at most once. An explicit click on the DE/FR switcher
 *   sets the same cookie and always wins.
 */

const BOT_RE =
  /bot|crawl|spider|slurp|bing|google|yandex|duckduck|baidu|facebookexternalhit|embedly|quora|pinterest|slackbot|vkshare|whatsapp|telegram|applebot|petalbot|semrush|ahrefs|lighthouse|headless/i;

function prefersFrench(acceptLanguage: string): boolean {
  const langs = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of langs) {
    if (tag.startsWith("fr")) return true;
    if (tag.startsWith("de")) return false;
  }
  return false;
}

export function middleware(req: NextRequest) {
  // Respect any prior choice (switcher click or a previous redirect).
  if (req.cookies.has("mirdita_lang")) return NextResponse.next();

  // Keep the homepage canonical for search engines and previews.
  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return NextResponse.next();

  if (!prefersFrench(req.headers.get("accept-language") ?? "")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/fr";
  const res = NextResponse.redirect(url, 307);
  res.cookies.set("mirdita_lang", "fr", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Only the exact homepage — nothing else is ever touched.
  matcher: "/",
};
