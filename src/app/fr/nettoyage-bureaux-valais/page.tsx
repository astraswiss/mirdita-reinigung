import type { Metadata } from "next";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrChecklist } from "@/components/fr/fr-checklist";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrRelated } from "@/components/fr/fr-related";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { PHOTO_BUERO, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage de bureaux Valais"
        description="Nettoyage de bureaux fiable, discret et régulier dans le Canton du Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
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
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Des bureaux prêts pour la journée"
        intro="Nous adaptons l’étendue et la fréquence à votre entreprise, avec des contrats récurrents et des horaires flexibles."
        items={[
          "Postes de travail et surfaces",
          "Sols de tous les espaces",
          "Sanitaires et WC",
          "Cuisines et espaces de pause",
          "Salles de réunion et entrées",
          "Horaires flexibles et contrats récurrents",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-regulier-valais",
            label: "Nettoyage régulier",
            desc: "Un entretien suivi avec une qualité constante.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et surfaces vitrées de vos locaux, sans traces.",
          },
          {
            href: "/fr/nettoyage-cabinets-medicaux-valais",
            label: "Cabinets médicaux",
            desc: "Nettoyage soigné et régulier pour espaces professionnels sensibles.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage de bureaux" />

      <FrCtaBanner
        title="Une offre pour vos bureaux ?"
        body="Indiquez-nous la surface et la fréquence souhaitée — nous établissons une offre claire pour l’entretien de vos bureaux."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
