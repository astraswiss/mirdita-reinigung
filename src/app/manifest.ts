import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mirdita Reinigung Berisha",
    short_name: "Mirdita",
    description:
      "Mirdita Reinigungen: Umzugs-, Wohnungs- und Büroreinigungen im Wallis. Schnell, gründlich und mit Abnahmegarantie.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9f9",
    theme_color: "#00153f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
