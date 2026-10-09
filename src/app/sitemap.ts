import type { MetadataRoute } from "next";

import { PAGES, REGION_PAGES } from "@/config/pages";
import { BUSINESS } from "@/config/site";
import { ROUTE_ALTERNATES } from "@/components/site-config";

const LEGAL_ROUTES = new Set(["/impressum", "/datenschutz", "/agb"]);

// Per-page <lastmod> comes from the `updatedAt` field in src/config/pages.ts —
// the real date the content last changed, never the build date.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [...PAGES, ...REGION_PAGES];
  const updatedAt = new Map(entries.map((p) => [p.path, p.updatedAt]));

  // Fail the build rather than ship a page without a truthful date.
  for (const pair of ROUTE_ALTERNATES) {
    for (const path of [pair.de, pair.fr]) {
      if (!updatedAt.has(path)) throw new Error(`[sitemap] Missing updatedAt for ${path}`);
    }
  }

  const url = (path: string) => `${BUSINESS.url}${path}`;

  return entries.map(({ path }) => {
    const pair = ROUTE_ALTERNATES.find((p) => p.de === path || p.fr === path);
    const isHome = path === "/" || path === "/fr";
    const isRegion = REGION_PAGES.some((r) => r.path === path);
    return {
      url: url(path),
      lastModified: updatedAt.get(path),
      changeFrequency: isHome ? "weekly" : LEGAL_ROUTES.has(path) ? "yearly" : "monthly",
      priority: isHome ? 1 : LEGAL_ROUTES.has(path) ? 0.3 : isRegion ? 0.7 : 0.8,
      // City pages are standalone (no translated counterpart): no hreflang.
      ...(pair && {
        alternates: {
          languages: {
            "de-CH": url(pair.de),
            "fr-CH": url(pair.fr),
            "x-default": url(pair.de),
          },
        },
      }),
    };
  });
}
