import type { MetadataRoute } from "next";

const BASE_URL = "https://mirdita.ch";

const ROUTES = [
  "",
  "/umzugsreinigung",
  "/wohnungsreinigung",
  "/bueroreinigung",
  "/baureinigung",
  "/fensterreinigung",
  "/hauswartung",
  "/unterhaltsreinigung",
  "/teppichreinigung",
  "/grundreinigung",
  "/praxisreinigung",
];

const LEGAL_ROUTES = ["/impressum", "/datenschutz", "/agb"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const legalPages = LEGAL_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...pages, ...legalPages];
}
