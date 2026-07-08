import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_BUERO, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-bureaux-valais";

export const metadata: Metadata = {
  title: "Nettoyage de bureaux dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage de bureaux fiable, discret et régulier dans le Canton du Valais : postes de travail, sanitaires, salles de réunion et entrées. Horaires flexibles, contrats récurrents. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de bureaux dans le Valais",
    description:
      "Un entretien de bureaux discret et régulier dans tout le Valais, en dehors de vos horaires.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_BUERO, width: 1200, height: 844 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage de bureaux Valais",
        description: "Nettoyage de bureaux fiable, discret et régulier dans le Canton du Valais.",
        path: PATH,
      }}
      badge="Nettoyage de bureaux"
      title={
        <>
          Nettoyage de bureaux <span className="text-brand-bright">discret et régulier</span> dans
          le Valais.
        </>
      }
      intro={
        <>
          Des espaces de travail propres sont votre carte de visite. Nous nettoyons vos bureaux de
          manière fiable et discrète, si vous le souhaitez en dehors de vos horaires de travail.
          Pour les entreprises, les études, les administrations, les agences et les petites
          structures du Valais.
        </>
      }
      image={PHOTO_BUERO}
      imageAlt="Bureau moderne après le nettoyage par Mirdita Reinigung dans le Valais"
      imagePosition="object-left"
      trust="Contrats récurrents"
      checklistTitle="Ce qui fait partie du nettoyage de bureaux"
      checklistIntro="Nous adaptons l’étendue et la fréquence à votre entreprise, avec des contrats récurrents et des horaires flexibles."
      items={[
        "Postes de travail et surfaces",
        "Sols de tous les espaces",
        "Sanitaires et WC",
        "Cuisines et espaces de pause",
        "Salles de réunion et entrées",
        "Horaires flexibles et contrats récurrents",
      ]}
      processTitle="En quatre étapes vers des bureaux entretenus"
      ctaTitle="Une offre pour vos bureaux ?"
      ctaBody="Indiquez-nous la surface et la fréquence souhaitée — nous établissons une offre claire pour l’entretien de vos bureaux."
    />
  );
}
