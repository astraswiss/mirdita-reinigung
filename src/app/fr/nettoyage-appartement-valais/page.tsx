import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_PRIVAT, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-appartement-valais";

export const metadata: Metadata = {
  title: "Nettoyage d’appartement dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage d’appartement professionnel dans le Valais, ponctuel ou régulier : cuisine, salle de bains, chambres, sols et surfaces. Devis gratuit, réponse rapide.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage d’appartement dans le Valais",
    description:
      "Nettoyage d’appartement ponctuel ou régulier, adapté à vos besoins, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PRIVAT, width: 1200, height: 844 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrServicePage
      googleReviews={googleReviews}
      schema={{
        name: "Nettoyage d’appartement Valais",
        description:
          "Nettoyage d’appartement professionnel dans le Valais, ponctuel ou régulier, adapté aux besoins du client.",
        path: PATH,
      }}
      badge="Nettoyage d’appartement"
      title={
        <>
          Nettoyage d’appartement dans le <span className="text-brand-bright">Valais</span>.
        </>
      }
      intro={
        <>
          Un nettoyage d’appartement professionnel, ponctuel ou régulier, adapté à vos besoins. Que
          ce soit avant ou après un déménagement, pour un grand nettoyage ou un entretien suivi,
          nous laissons votre logement propre et net — pour les familles, les propriétaires comme
          les locataires, dans tout le Valais.
        </>
      }
      image={PHOTO_PRIVAT}
      imageAlt="Collaborateur de Mirdita nettoyant un plan de travail dans un appartement en Valais"
      imagePosition="object-bottom"
      trust="Ponctuel ou régulier"
      checklistTitle="Ce qui fait partie du nettoyage d’appartement"
      checklistIntro="Nous adaptons le nettoyage à votre appartement et à vos priorités. Voici ce que nous prenons en charge le plus souvent."
      items={[
        "Cuisine : plans de travail, façades d’armoires et évier",
        "Salle de bains et WC : sanitaires, robinetterie et miroirs",
        "Chambres et salon : surfaces, meubles et dépoussiérage",
        "Sols : aspiration et lavage de toutes les pièces",
        "Vitres et fenêtres sur demande",
        "Nettoyage avant ou après un déménagement",
      ]}
      processTitle="En quatre étapes vers un appartement propre"
      ctaTitle="Un devis pour votre appartement ?"
      ctaBody="Dites-nous la taille de votre logement et vos priorités — nous vous répondons avec une offre claire sous 24 heures."
    />
  );
}
