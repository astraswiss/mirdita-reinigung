import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_BUERO, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-regulier-valais";

export const metadata: Metadata = {
  title: "Nettoyage régulier dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage régulier et fiable dans le Valais : hebdomadaire, mensuel ou entretien continu, avec une qualité constante et des horaires flexibles. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage régulier dans le Valais",
    description: "Un entretien régulier et fiable pour garder vos espaces propres toute l’année.",
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
        name: "Nettoyage régulier Valais",
        description:
          "Nettoyage régulier fiable pour maintenir les espaces propres toute l’année, pour particuliers et entreprises dans le Valais.",
        path: PATH,
      }}
      badge="Nettoyage régulier"
      title={
        <>
          Nettoyage régulier et <span className="text-brand-bright">fiable</span> dans le Valais.
        </>
      }
      intro={
        <>
          Un nettoyage régulier pour garder vos espaces propres toute l’année. Nous intervenons chez
          les particuliers comme dans les bureaux, les immeubles, les entreprises et les
          copropriétés — avec une qualité constante et des horaires adaptés à votre rythme.
        </>
      }
      image={PHOTO_BUERO}
      imageAlt="Espaces entretenus régulièrement par Mirdita Reinigung dans le Valais"
      imagePosition="object-left"
      trust="Qualité constante"
      checklistTitle="Ce qui fait partie du nettoyage régulier"
      checklistIntro="Nous définissons ensemble la fréquence et l’étendue de l’entretien, puis nous nous y tenons — avec la même équipe autant que possible."
      items={[
        "Nettoyage hebdomadaire selon vos besoins",
        "Nettoyage mensuel ou par intervalle défini",
        "Entretien continu avec une qualité constante",
        "Horaires flexibles, aussi hors heures d’ouverture",
        "Interlocuteur fixe et suivi régulier",
        "Adaptation à l’évolution de vos besoins",
      ]}
      processTitle="En quatre étapes vers un entretien régulier"
      ctaTitle="Une offre de nettoyage régulier ?"
      ctaBody="Indiquez-nous la surface à entretenir et la fréquence souhaitée — nous établissons une offre claire et adaptée."
    />
  );
}
