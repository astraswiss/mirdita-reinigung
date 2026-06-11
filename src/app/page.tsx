import type { Metadata } from "next";

import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: "Mirdita Reinigungen — Glanz & Sauberkeit im Wallis",
  description:
    "Mirdita Reinigungen: Umzugs-, Wohnungs- und Büroreinigungen im Wallis. Schnell, gründlich und mit Abnahmegarantie.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mirdita Reinigungen — Sauberkeit im Wallis",
    description: "Professionelle Reinigungen im Wallis — mit Abnahmegarantie.",
    url: "/",
  },
};

export default function Page() {
  return <Home />;
}
