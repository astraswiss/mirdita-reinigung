import type { Metadata } from "next";

import { FrCityPage } from "@/components/fr/fr-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-martigny";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Martigny | Mirdita Reinigung",
  description:
    "Entreprise de nettoyage à Martigny : nettoyage fin de bail avec garantie de remise, appartements, bureaux, fin de chantier et vitres. Devis gratuit, réponse sous 24 h.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Entreprise de nettoyage à Martigny | Mirdita Reinigung",
    description: "Nettoyage fin de bail, bureaux et fin de chantier à Martigny.",
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
      city="Martigny"
      path={PATH}
      schemaDescription="Entreprise de nettoyage active à Martigny : nettoyage fin de bail avec garantie de remise, appartements, bureaux et fin de chantier."
      badge="Martigny et environs"
      intro="Carrefour entre le Grand-Saint-Bernard, Chamonix et la plaine du Rhône, Martigny ne cesse de se développer. Nous y réalisons des nettoyages de fin de bail avec garantie de remise, le nettoyage de fin de chantier pour les nouveaux immeubles et l’entretien régulier de bureaux et commerces."
      proseEyebrow="Au carrefour des Alpes"
      proseTitle="Nettoyage à Martigny"
      paragraphs={[
        "Les Romains l’appelaient Octodure : Martigny était déjà un carrefour il y a deux mille ans, et l’amphithéâtre en témoigne encore. Aujourd’hui, la ville est connue loin à la ronde pour la Fondation Pierre Gianadda, construite sur les vestiges d’un temple gallo-romain.",
        "Martigny compte parmi les plus grandes communes du canton et de nombreux immeubles y ont été construits ces dernières années. Pour les entreprises générales, régies et propriétaires, nous assurons le nettoyage de fin de chantier avant la remise des appartements, puis l’entretien des parties communes.",
        "Pour les locataires qui déménagent, notre nettoyage de fin de bail inclut une garantie de remise. Les bureaux, cabinets et commerces du centre-ville peuvent compter sur un entretien régulier, réalisé avec discrétion en dehors des heures d’ouverture.",
      ]}
      servicesTitle="Nos services à Martigny"
      services={[
        {
          href: "/fr/nettoyage-fin-de-bail-valais",
          label: "Nettoyage fin de bail",
          desc: "Garantie de remise : nous repassons sans frais en cas de remarque.",
        },
        {
          href: "/fr/nettoyage-fin-de-chantier-valais",
          label: "Fin de chantier",
          desc: "Nouveaux immeubles prêts à être habités ou remis.",
        },
        {
          href: "/fr/nettoyage-bureaux-valais",
          label: "Nettoyage de bureaux",
          desc: "Entretien régulier des bureaux et commerces du centre.",
        },
        {
          href: "/fr/nettoyage-cabinets-medicaux-valais",
          label: "Cabinets médicaux",
          desc: "Nettoyage soigné des espaces sensibles.",
        },
        {
          href: "/fr/nettoyage-vitres-valais",
          label: "Nettoyage de vitres",
          desc: "Vitrines, fenêtres et surfaces vitrées sans traces.",
        },
        {
          href: "/fr/conciergerie-valais",
          label: "Conciergerie",
          desc: "Parties communes entretenues toute l’année.",
        },
      ]}
      processTitle="De la demande à la remise des clés à Martigny"
      ctaTitle="Besoin d’un nettoyage à Martigny ?"
      ctaBody="Fin de bail, fin de chantier ou entretien régulier : décrivez-nous votre projet et recevez sous 24 heures une offre claire."
    />
  );
}
