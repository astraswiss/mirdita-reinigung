import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_HERO, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-vitres-valais";

export const metadata: Metadata = {
  title: "Nettoyage de vitres dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage professionnel de vitres, fenêtres, vitrines et surfaces vitrées dans le Valais, pour particuliers et entreprises. Intervention ponctuelle ou périodique. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de vitres dans le Valais",
    description:
      "Vitres, fenêtres et vitrines sans traces, à l’intérieur comme à l’extérieur, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_HERO, width: 1200, height: 1600 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage de vitres Valais",
        description:
          "Nettoyage professionnel des vitres, fenêtres, vitrines et surfaces vitrées dans le Valais.",
        path: PATH,
      }}
      badge="Nettoyage de vitres"
      title={
        <>
          Nettoyage de vitres <span className="text-brand-bright">sans traces</span> dans le Valais.
        </>
      }
      intro={
        <>
          Nettoyage professionnel des vitres, fenêtres, vitrines et surfaces vitrées dans le Valais.
          Pour les particuliers comme pour les entreprises, les bureaux, les commerces et les
          immeubles — en intervention ponctuelle ou en entretien périodique.
        </>
      }
      image={PHOTO_HERO}
      imageAlt="Nettoyage de vitres avec vue sur les montagnes du Valais"
      trust="Intérieur et extérieur"
      checklistTitle="Ce qui fait partie du nettoyage de vitres"
      checklistIntro="Nous nettoyons vos vitres à l’intérieur comme à l’extérieur, avec le matériel adapté à la hauteur et au type de surface."
      items={[
        "Fenêtres intérieur et extérieur",
        "Surfaces vitrées et baies vitrées",
        "Vitrines de commerces et showrooms",
        "Cadres, rebords et encadrements",
        "Stores et lamelles selon l’accès",
        "Nettoyage ponctuel ou périodique",
      ]}
      processTitle="En quatre étapes vers des vitres nettes"
      ctaTitle="Un devis pour le nettoyage de vos vitres ?"
      ctaBody="Indiquez-nous le nombre de fenêtres ou la surface vitrée — nous vous répondons rapidement avec une offre adaptée."
    />
  );
}
