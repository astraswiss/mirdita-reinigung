import type { Metadata } from "next";

import { FrCityPage } from "@/components/fr/fr-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-sion";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Sion | Mirdita Reinigung",
  description:
    "Entreprise de nettoyage active dans la région de Sion : nettoyage fin de bail avec garantie de remise, appartements, bureaux et immeubles dans le Valais central. Devis gratuit.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Entreprise de nettoyage à Sion — Mirdita Reinigung",
    description:
      "Nettoyage fin de bail, appartements et bureaux dans la région de Sion et le Valais central.",
    url: PATH,
    locale: "fr_CH",
    images: regionOgImages(PATH, "fr"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <FrCityPage
      googleReviews={googleReviews}
      city="Sion"
      path={PATH}
      schemaDescription="Entreprise de nettoyage active dans la région de Sion : nettoyage fin de bail, appartements et bureaux dans le Valais central."
      badge="Nettoyage dans la région de Sion"
      intro="Mirdita Reinigung intervient dans la région de Sion et dans tout le Valais central. Notre spécialité : le nettoyage de fin de bail avec garantie de remise, pour que la remise des clés se passe sans stress. Nous nettoyons aussi appartements, bureaux et immeubles — pour les particuliers, les régies et les entreprises."
      proseEyebrow="Au cœur du Valais central"
      proseTitle="Nettoyage à Sion et dans le Valais central"
      paragraphs={[
        "Sion, capitale du Valais, est au cœur de la région francophone du canton. Depuis notre base à Naters, dans le Haut-Valais, nous nous déplaçons régulièrement dans le Valais central pour les nettoyages de fin de bail, l’entretien d’appartements et le nettoyage de bureaux.",
        "Que vous soyez un particulier qui rend son appartement, une régie qui prépare un état des lieux ou une entreprise à la recherche d’un entretien régulier, nous adaptons notre intervention à votre besoin. Vous pouvez nous envoyer des photos par WhatsApp pour recevoir un devis rapide, sans engagement.",
      ]}
      servicesTitle="Nos services dans la région de Sion"
      services={[
        {
          href: "/fr/nettoyage-fin-de-bail-valais",
          label: "Nettoyage fin de bail",
          desc: "Nettoyage complet avec garantie de remise avant l’état des lieux.",
        },
        {
          href: "/fr/nettoyage-appartement-valais",
          label: "Nettoyage d’appartement",
          desc: "Ponctuel ou régulier, adapté à votre logement.",
        },
        {
          href: "/fr/nettoyage-bureaux-valais",
          label: "Nettoyage de bureaux",
          desc: "Entretien discret et régulier de vos locaux.",
        },
        {
          href: "/fr/nettoyage-vitres-valais",
          label: "Nettoyage de vitres",
          desc: "Vitres et surfaces vitrées sans traces.",
        },
        {
          href: "/fr/nettoyage-fin-de-chantier-valais",
          label: "Fin de chantier",
          desc: "Nettoyage après travaux avant la remise des locaux.",
        },
        {
          href: "/fr/nettoyage-en-profondeur-valais",
          label: "Nettoyage en profondeur",
          desc: "Un nettoyage intensif pour remettre les espaces en état.",
        },
      ]}
      processTitle="De la demande à la remise des clés à Sion"
      ctaTitle="Un devis pour un nettoyage à Sion ?"
      ctaBody="Décrivez-nous votre besoin ou envoyez des photos par WhatsApp — nous vous répondons sous 24 heures avec une offre claire."
    />
  );
}
