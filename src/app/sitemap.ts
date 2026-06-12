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

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
