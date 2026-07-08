import type { Metadata } from "next";

import { FrServicePage } from "@/components/fr/fr-service-page";
import { PHOTO_BUERO, alternatesFor } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/conciergerie-valais";

export const metadata: Metadata = {
  title: "Conciergerie et entretien d’immeubles dans le Valais | Mirdita",
  description:
    "Conciergerie et entretien d’immeubles dans le Valais pour PPE, régies et copropriétés : escaliers, entrées, couloirs, parties communes et caves. Service régulier et fiable. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Conciergerie d’immeubles dans le Valais",
    description:
      "Entretien régulier et fiable des parties communes pour PPE, régies et copropriétés du Valais.",
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
        name: "Conciergerie Valais",
        description:
          "Conciergerie et entretien d’immeubles dans le Valais, avec service régulier et fiable.",
        path: PATH,
      }}
      badge="Conciergerie d’immeubles"
      title={
        <>
          Conciergerie et entretien d’immeubles dans le{" "}
          <span className="text-brand-bright">Valais</span>.
        </>
      }
      intro={
        <>
          Conciergerie et entretien d’immeubles dans le Valais, avec un service régulier et fiable.
          Nous intervenons pour les PPE, les régies, les copropriétés et les administrations
          immobilières, afin de garder les parties communes propres et accueillantes.
        </>
      }
      image={PHOTO_BUERO}
      imageAlt="Entrée d’immeuble entretenue par Mirdita Reinigung dans le Valais"
      imagePosition="object-left"
      trust="Service régulier et fiable"
      checklistTitle="Ce qui fait partie de la conciergerie"
      checklistIntro="Nous assurons l’entretien régulier de votre immeuble et un contrôle suivi, pour des espaces communs propres tout au long de l’année."
      items={[
        "Escaliers et paliers",
        "Entrées et halls",
        "Couloirs et parties communes",
        "Locaux communs et caves",
        "Extérieurs proches selon l’immeuble",
        "Contrôle régulier et entretien suivi",
      ]}
      processTitle="En quatre étapes vers un immeuble entretenu"
      ctaTitle="Une offre pour votre immeuble ?"
      ctaBody="Indiquez-nous la taille de l’immeuble et la fréquence souhaitée — nous établissons une offre claire pour l’entretien des parties communes."
    />
  );
}
