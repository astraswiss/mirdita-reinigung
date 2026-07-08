import type { MetadataRoute } from "next";

import { ROUTE_ALTERNATES } from "@/components/site-config";

const BASE_URL = "https://mirdita.ch";

// City landing pages. Standalone (no translated counterpart), so no hreflang
// alternates — a self-referencing canonical is enough.
const CITY_ROUTES = [
  "/reinigung-naters",
  "/reinigung-brig-glis",
  "/reinigung-visp",
  "/fr/nettoyage-sion",
];

const LEGAL_ROUTES = ["/impressum", "/datenschutz", "/agb"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Emit both the German and French URL of every mapped route, each pointing to
  // its counterpart via hreflang alternates.
  const pages = ROUTE_ALTERNATES.flatMap((pair) => {
    const isHome = pair.de === "/";
    const languages = {
      "de-CH": `${BASE_URL}${pair.de}`,
      "fr-CH": `${BASE_URL}${pair.fr}`,
      "x-default": `${BASE_URL}${pair.de}`,
    };
    const shared = {
      lastModified: now,
      changeFrequency: (isHome ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: isHome ? 1 : 0.8,
      alternates: { languages },
    };
    return [
      { url: `${BASE_URL}${pair.de}`, ...shared },
      { url: `${BASE_URL}${pair.fr}`, ...shared },
    ];
  });

  const cityPages = CITY_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalPages = LEGAL_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...pages, ...cityPages, ...legalPages];
}
