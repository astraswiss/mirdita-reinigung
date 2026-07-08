import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_BUERO, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-cabinets-medicaux-valais";

export const metadata: Metadata = {
  title: "Nettoyage de cabinets médicaux dans le Valais | Mirdita",
  description:
    "Nettoyage soigné et régulier pour cabinets médicaux, dentaires et espaces professionnels sensibles dans le Valais : salles d’attente, surfaces, sanitaires. Discrétion assurée. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de cabinets médicaux dans le Valais",
    description:
      "Un nettoyage soigné, discret et régulier pour cabinets médicaux et espaces sensibles du Valais.",
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
        name: "Nettoyage de cabinets médicaux Valais",
        description:
          "Nettoyage soigné et régulier pour cabinets médicaux et espaces professionnels sensibles dans le Valais.",
        path: PATH,
      }}
      badge="Cabinets médicaux"
      title={
        <>
          Nettoyage de cabinets médicaux{" "}
          <span className="text-brand-bright">soigné et discret</span> dans le Valais.
        </>
      }
      intro={
        <>
          Un nettoyage soigné et régulier pour les cabinets médicaux, dentaires et les espaces
          professionnels sensibles. Nous travaillons avec attention à l’hygiène et discrétion, pour
          les médecins, dentistes, physiothérapeutes, thérapeutes et cabinets du Valais.
        </>
      }
      image={PHOTO_BUERO}
      imageAlt="Espace de cabinet médical entretenu par Mirdita Reinigung dans le Valais"
      imagePosition="object-left"
      trust="Discrétion et hygiène"
      checklistTitle="Ce qui fait partie du nettoyage de cabinets"
      checklistIntro="Nous adaptons l’entretien à votre cabinet et à vos horaires, avec une attention particulière à l’hygiène des surfaces et des espaces communs."
      items={[
        "Salles d’attente et réception",
        "Surfaces et espaces de travail",
        "Sanitaires et WC",
        "Sols de tous les locaux",
        "Nettoyage régulier et discret",
        "Attention particulière à l’hygiène",
      ]}
      processTitle="En quatre étapes vers un cabinet impeccable"
      ctaTitle="Une offre pour votre cabinet ?"
      ctaBody="Indiquez-nous la taille de votre cabinet et la fréquence souhaitée — nous établissons une offre adaptée à vos besoins."
    />
  );
}
