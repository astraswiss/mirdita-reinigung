import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_SPEZIAL, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-fin-de-chantier-valais";

export const metadata: Metadata = {
  title: "Nettoyage fin de chantier dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage après travaux et nettoyage de fin de chantier dans le Valais : poussière de chantier, sols, vitres et résidus, avant la remise ou l’utilisation des locaux. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage fin de chantier dans le Valais",
    description:
      "Nettoyage après travaux avant la remise ou l’utilisation des locaux, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_SPEZIAL, width: 1200, height: 844 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage fin de chantier Valais",
        description:
          "Nettoyage après travaux et nettoyage de fin de chantier dans le Valais, avant remise ou utilisation des locaux.",
        path: PATH,
      }}
      badge="Fin de chantier"
      title={
        <>
          Nettoyage de fin de chantier dans le <span className="text-brand-bright">Valais</span>.
        </>
      }
      intro={
        <>
          Nettoyage après travaux et nettoyage de fin de chantier dans le Valais, avant la remise ou
          l’utilisation des locaux. Nous intervenons pour les entreprises de construction, les
          architectes, les promoteurs, les artisans et les particuliers après une rénovation.
        </>
      }
      image={PHOTO_SPEZIAL}
      imageAlt="Nettoyage de fin de chantier réalisé par Mirdita Reinigung dans le Valais"
      trust="Avant remise des locaux"
      checklistTitle="Ce qui fait partie du nettoyage de fin de chantier"
      checklistIntro="Nous éliminons les résidus de travaux et la poussière de chantier pour que les locaux soient prêts à être remis ou utilisés."
      items={[
        "Poussière de chantier sur toutes les surfaces",
        "Sols, plinthes et seuils",
        "Vitres, cadres et rebords",
        "Surfaces, sanitaires et cuisines",
        "Élimination des résidus et traces de travaux",
        "Préparation avant la première remise des locaux",
      ]}
      processTitle="En quatre étapes vers des locaux livrables"
      ctaTitle="Un devis pour votre nettoyage de chantier ?"
      ctaBody="Indiquez-nous la surface et l’état du chantier — nous établissons une offre claire pour le nettoyage après travaux."
    />
  );
}
