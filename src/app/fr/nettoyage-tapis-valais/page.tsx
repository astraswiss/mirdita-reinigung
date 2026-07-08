import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_SPEZIAL, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-tapis-valais";

export const metadata: Metadata = {
  title: "Nettoyage de tapis dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage de tapis et moquettes professionnel dans le Valais : nettoyage en profondeur pour éliminer saletés, poussières et traces d’usage. Pour particuliers et entreprises. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de tapis dans le Valais",
    description:
      "Nettoyage de tapis et moquettes en profondeur pour un rendu propre et sain, dans tout le Valais.",
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
        name: "Nettoyage de tapis Valais",
        description:
          "Nettoyage de tapis professionnel pour éliminer saletés, poussières et traces d’usage, dans le Valais.",
        path: PATH,
      }}
      badge="Nettoyage de tapis"
      title={
        <>
          Nettoyage de tapis <span className="text-brand-bright">en profondeur</span> dans le
          Valais.
        </>
      }
      intro={
        <>
          Nettoyage de tapis professionnel pour éliminer les saletés, la poussière et les traces
          d’usage. Nous intervenons chez les particuliers comme dans les bureaux, les hôtels, les
          immeubles et les locaux commerciaux du Valais, pour redonner à vos tapis un aspect propre
          et sain.
        </>
      }
      image={PHOTO_SPEZIAL}
      imageAlt="Nettoyage en profondeur d’un tapis par Mirdita Reinigung dans le Valais"
      trust="Nettoyage en profondeur"
      checklistTitle="Ce qui fait partie du nettoyage de tapis"
      checklistIntro="Nous adaptons la méthode à la matière et à l’état de vos tapis, pour un nettoyage en profondeur sans les abîmer."
      items={[
        "Tapis de toutes tailles",
        "Moquettes selon la surface et la matière",
        "Nettoyage en profondeur des fibres",
        "Élimination des poussières et des traces d’usage",
        "Entretien régulier sur demande",
        "Meilleure hygiène des espaces de vie et de travail",
      ]}
      processTitle="En quatre étapes vers des tapis assainis"
      ctaTitle="Un devis pour le nettoyage de vos tapis ?"
      ctaBody="Indiquez-nous le nombre et la taille des tapis — vous pouvez aussi nous envoyer des photos par WhatsApp pour un devis rapide."
    />
  );
}
