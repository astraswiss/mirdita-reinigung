import type { Metadata } from "next";

import { FrCityPage } from "@/components/fr/fr-city-page";
import { PHOTO_BUERO } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-monthey";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Monthey | Mirdita Reinigung",
  description:
    "Entreprise de nettoyage à Monthey et dans le Chablais valaisan : nettoyage fin de bail avec garantie de remise, bureaux, locaux d’entreprise et appartements. Devis gratuit.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Entreprise de nettoyage à Monthey | Mirdita Reinigung",
    description: "Nettoyage fin de bail, bureaux et appartements à Monthey et dans le Chablais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_BUERO, width: 1280, height: 854 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrCityPage
      googleReviews={googleReviews}
      city="Monthey"
      path={PATH}
      schemaDescription="Entreprise de nettoyage active à Monthey et dans le Chablais valaisan : nettoyage fin de bail, bureaux et appartements."
      badge="Monthey — Chablais valaisan"
      intro="Au pied des Dents du Midi, Monthey est le centre urbain du Chablais valaisan et un pôle industriel important. Nous nettoyons bureaux et locaux d’entreprise, appartements et immeubles, et réalisons des nettoyages de fin de bail avec garantie de remise."
      image={PHOTO_BUERO}
      imagePosition="object-left"
      imageAlt="Bureaux propres après un nettoyage par Mirdita à Monthey"
      proseEyebrow="Au pied des Dents du Midi"
      proseTitle="Nettoyage à Monthey et dans le Chablais"
      paragraphs={[
        "Chef-lieu de district et troisième commune du Valais par sa population, Monthey est la porte d’entrée du val d’Illiez. La ville est connue pour son carnaval, l’un des plus grands de Suisse romande, et pour son site chimique qui accueille plusieurs entreprises internationales.",
        "Ce tissu économique génère de nombreux besoins : bureaux, vestiaires, sanitaires et salles de réunion doivent être entretenus de façon fiable. Nous proposons un nettoyage régulier, planifié selon vos horaires, avec un interlocuteur fixe.",
        "Monthey attire aussi beaucoup de nouveaux habitants. Pour les locataires qui quittent leur logement, notre nettoyage de fin de bail inclut une garantie de remise ; pour les régies et PPE, nous assurons l’entretien des parties communes.",
      ]}
      servicesTitle="Nos services à Monthey"
      services={[
        {
          href: "/fr/nettoyage-bureaux-valais",
          label: "Nettoyage de bureaux",
          desc: "Bureaux et locaux d’entreprise entretenus selon vos horaires.",
        },
        {
          href: "/fr/nettoyage-regulier-valais",
          label: "Nettoyage régulier",
          desc: "Un rythme fixe, une qualité constante.",
        },
        {
          href: "/fr/nettoyage-fin-de-bail-valais",
          label: "Nettoyage fin de bail",
          desc: "Avec garantie de remise avant l’état des lieux.",
        },
        {
          href: "/fr/nettoyage-appartement-valais",
          label: "Nettoyage d’appartement",
          desc: "Ponctuel ou régulier, adapté à votre logement.",
        },
        {
          href: "/fr/conciergerie-valais",
          label: "Conciergerie",
          desc: "Entretien des immeubles pour régies et PPE.",
        },
        {
          href: "/fr/nettoyage-tapis-valais",
          label: "Nettoyage de tapis",
          desc: "Tapis et moquettes nettoyés en profondeur.",
        },
      ]}
      processTitle="Votre nettoyage à Monthey, étape par étape"
      ctaTitle="Un devis pour Monthey ou le Chablais ?"
      ctaBody="Pour vos bureaux, votre immeuble ou votre déménagement : décrivez-nous votre besoin, nous répondons sous 24 heures."
    />
  );
}
