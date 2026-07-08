import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_PUTZEN, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-en-profondeur-valais";

export const metadata: Metadata = {
  title: "Nettoyage en profondeur dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage en profondeur dans le Valais pour remettre vos espaces en état : nettoyage intensif des surfaces, angles, sols, cuisine et salle de bains. Pour particuliers et entreprises. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage en profondeur dans le Valais",
    description:
      "Un nettoyage intensif et détaillé pour remettre vos espaces en état, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage en profondeur Valais",
        description:
          "Nettoyage en profondeur pour remettre les espaces en état avec un travail détaillé et soigné, dans le Valais.",
        path: PATH,
      }}
      badge="Nettoyage en profondeur"
      title={
        <>
          Nettoyage en profondeur dans le <span className="text-brand-bright">Valais</span>.
        </>
      }
      intro={
        <>
          Un nettoyage en profondeur pour remettre vos espaces en état, avec un travail détaillé et
          soigné. Idéal pour les logements et locaux après une longue utilisation, ou lorsqu’un
          nettoyage intensif s’impose — pour les particuliers comme pour les entreprises du Valais.
        </>
      }
      image={PHOTO_PUTZEN}
      imageAlt="Nettoyage en profondeur réalisé par Mirdita Reinigung dans le Valais"
      imagePosition="object-left"
      trust="Travail détaillé et soigné"
      checklistTitle="Ce qui fait partie du nettoyage en profondeur"
      checklistIntro="Nous nous attaquons à la saleté accumulée et aux endroits difficiles d’accès, pour un résultat net et durable."
      items={[
        "Nettoyage intensif des surfaces",
        "Saleté accumulée et dépôts tenaces",
        "Angles et zones difficiles d’accès",
        "Sols de toutes les pièces",
        "Cuisine et salle de bains en détail",
        "Locaux professionnels après un usage prolongé",
      ]}
      processTitle="En quatre étapes vers des espaces remis en état"
      ctaTitle="Un devis pour un nettoyage en profondeur ?"
      ctaBody="Décrivez-nous l’état des lieux et la surface concernée — vous pouvez aussi nous envoyer des photos par WhatsApp pour un devis rapide."
    />
  );
}
