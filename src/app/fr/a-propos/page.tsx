import type { Metadata } from "next";

import { AboutPage, OWNER } from "@/components/about-page";
import { alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "À propos — Mirdita Reinigung, entreprise de nettoyage à Naters",
  description:
    "Découvrez Mirdita Reinigung : entreprise de nettoyage basée à Naters, dirigée par Mergim Berisha. Prix fixe, garantie de remise, assurée et joignable personnellement.",
  alternates: alternatesFor("/fr/a-propos"),
  openGraph: {
    title: "À propos — Mirdita Reinigung",
    description:
      "Votre partenaire de nettoyage personnel dans le Valais — avec garantie de remise.",
    url: "/fr/a-propos",
    locale: "fr_CH",
    images: [{ url: OWNER.photo, width: 1086, height: 1448 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();
  return <AboutPage lang="fr" googleReviews={googleReviews} />;
}
