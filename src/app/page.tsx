import type { Metadata } from "next";

import { Home } from "@/components/home";
import { alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Mirdita Reinigungen — Glanz & Sauberkeit im Wallis",
  description:
    "Mirdita Reinigungen: Umzugs-, Wohnungs- und Büroreinigungen im Wallis. Schnell, gründlich und mit Abnahmegarantie.",
  alternates: alternatesFor("/"),
  openGraph: {
    title: "Mirdita Reinigungen — Sauberkeit im Wallis",
    description: "Professionelle Reinigungen im Wallis — mit Abnahmegarantie.",
    url: "/",
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();
  return <Home googleReviews={googleReviews} />;
}
