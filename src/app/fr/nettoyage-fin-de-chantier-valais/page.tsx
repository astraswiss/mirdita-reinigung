import type { Metadata } from "next";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrChecklist } from "@/components/fr/fr-checklist";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrRelated } from "@/components/fr/fr-related";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { PHOTO_SPEZIAL, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const PATH = "/fr/nettoyage-fin-de-chantier-valais";

export const metadata: Metadata = {
  title: "Nettoyage fin de chantier dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage après travaux et nettoyage de fin de chantier dans le Valais : poussière de chantier, sols, vitres et résidus, avant la remise ou l’utilisation des locaux. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage fin de chantier dans le Valais",
    description:
      "Nettoyage après travaux avant la remise ou l’utilisation des locaux, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_SPEZIAL, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage fin de chantier Valais"
        description="Nettoyage après travaux et nettoyage de fin de chantier dans le Valais, avant remise ou utilisation des locaux."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Fin de chantier"
        title={
          <>
            Nettoyage de fin de chantier dans le <span className="text-brand-bright">Valais</span>.
          </>
        }
        intro={
          <>
            Nettoyage après travaux et nettoyage de fin de chantier dans le Valais, avant la remise
            ou l’utilisation des locaux. Nous intervenons pour les entreprises de construction, les
            architectes, les promoteurs, les artisans et les particuliers après une rénovation.
          </>
        }
        image={PHOTO_SPEZIAL}
        imageAlt="Nettoyage de fin de chantier réalisé par Mirdita Reinigung dans le Valais"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Des locaux prêts à être livrés"
        intro="Nous éliminons les résidus de travaux et la poussière de chantier pour que les locaux soient prêts à être remis ou utilisés."
        items={[
          "Poussière de chantier sur toutes les surfaces",
          "Sols, plinthes et seuils",
          "Vitres, cadres et rebords",
          "Surfaces, sanitaires et cuisines",
          "Élimination des résidus et traces de travaux",
          "Préparation avant la première remise des locaux",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-en-profondeur-valais",
            label: "Nettoyage en profondeur",
            desc: "Un nettoyage intensif pour remettre les espaces en état.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et surfaces vitrées après travaux, sans traces.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage de fin de chantier" />

      <FrCtaBanner
        title="Un devis pour votre nettoyage de chantier ?"
        body="Indiquez-nous la surface et l’état du chantier — nous établissons une offre claire pour le nettoyage après travaux."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
