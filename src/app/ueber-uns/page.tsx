import type { Metadata } from "next";

import { AboutPage, OWNER } from "@/components/about-page";
import { alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Über uns — Mirdita Reinigung aus Naters",
  description:
    "Lernen Sie Mirdita Reinigung kennen: Walliser Familienbetrieb mit Sitz in Naters, geführt von Mergim Berisha. Fester Preis, Abnahmegarantie, versichert und persönlich erreichbar.",
  alternates: alternatesFor("/ueber-uns"),
  openGraph: {
    title: "Über uns — Mirdita Reinigung aus Naters",
    description: "Ihr persönlicher Reinigungspartner im Wallis — mit Abnahmegarantie.",
    url: "/ueber-uns",
    images: [{ url: OWNER.photo, width: 1086, height: 1448 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();
  return <AboutPage lang="de" googleReviews={googleReviews} />;
}
