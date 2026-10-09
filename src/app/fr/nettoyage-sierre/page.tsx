import type { Metadata } from "next";

import { FrCityPage } from "@/components/fr/fr-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-sierre";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Sierre | Mirdita Reinigung",
  description:
    "Entreprise de nettoyage à Sierre et environs : nettoyage fin de bail avec garantie de remise, appartements, villas et bureaux. Bilingue français-allemand. Devis gratuit.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Entreprise de nettoyage à Sierre | Mirdita Reinigung",
    description:
      "Nettoyage fin de bail, appartements et bureaux à Sierre — en français et en allemand.",
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
      city="Sierre"
      path={PATH}
      schemaDescription="Entreprise de nettoyage active à Sierre : nettoyage fin de bail avec garantie de remise, appartements, villas et bureaux."
      badge="Sierre — Siders"
      intro="À la frontière des langues, Sierre est réputée pour son soleil et ses vignobles. Mirdita Reinigung y intervient pour les nettoyages de fin de bail avec garantie de remise, l’entretien d’appartements et de villas et le nettoyage de bureaux — en français comme en allemand."
      proseEyebrow="Entre deux langues"
      proseTitle="Nettoyage à Sierre et environs"
      paragraphs={[
        "Sierre — Siders en allemand — se trouve sur la frontière linguistique du Valais. Entourée de vignobles et réputée pour son ensoleillement, la ville abrite le Château de Villa et son Musée du vin, ainsi que la Fondation Rilke : le poète a vécu ses dernières années à Muzot, tout près.",
        "Basés dans le Haut-Valais, nous parlons allemand et français. C’est un vrai avantage dans la région de Sierre, où régies, propriétaires et locataires travaillent souvent dans les deux langues. Nous réalisons les nettoyages de fin de bail avec garantie de remise : en cas de remarque lors de l’état des lieux, nous repassons sans frais.",
        "Pour les villas et maisons des coteaux, nous proposons le nettoyage en profondeur et le nettoyage des vitres ; pour les commerces et bureaux du centre-ville, un entretien régulier en dehors des heures d’ouverture.",
      ]}
      servicesTitle="Nos services à Sierre"
      services={[
        {
          href: "/fr/nettoyage-fin-de-bail-valais",
          label: "Nettoyage fin de bail",
          desc: "Avec garantie de remise, pour un état des lieux sans stress.",
        },
        {
          href: "/fr/nettoyage-appartement-valais",
          label: "Nettoyage d’appartement",
          desc: "Pour appartements et villas, ponctuel ou régulier.",
        },
        {
          href: "/fr/nettoyage-vitres-valais",
          label: "Nettoyage de vitres",
          desc: "Baies vitrées et fenêtres des maisons sur les coteaux.",
        },
        {
          href: "/fr/nettoyage-bureaux-valais",
          label: "Nettoyage de bureaux",
          desc: "Entretien discret des commerces et bureaux du centre.",
        },
        {
          href: "/fr/nettoyage-en-profondeur-valais",
          label: "Nettoyage en profondeur",
          desc: "Remise en état complète avant une vente ou une location.",
        },
        {
          href: "/fr/conciergerie-valais",
          label: "Conciergerie",
          desc: "Entretien des parties communes pour régies et PPE.",
        },
      ]}
      processTitle="Votre nettoyage à Sierre en quatre étapes"
      ctaTitle="Un nettoyage à Sierre ?"
      ctaBody="En français ou en allemand : décrivez-nous votre besoin et recevez sous 24 heures une offre claire et sans engagement."
    />
  );
}
