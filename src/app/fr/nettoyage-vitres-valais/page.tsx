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

const PATH = "/fr/nettoyage-vitres-valais";

export const metadata: Metadata = {
  title: "Nettoyage de vitres dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage professionnel de vitres, fenêtres, vitrines et surfaces vitrées dans le Valais, pour particuliers et entreprises. Intervention ponctuelle ou périodique. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de vitres dans le Valais",
    description:
      "Vitres, fenêtres et vitrines sans traces, à l’intérieur comme à l’extérieur, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_SPEZIAL, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage de vitres Valais"
        description="Nettoyage professionnel des vitres, fenêtres, vitrines et surfaces vitrées dans le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage de vitres"
        title={
          <>
            Nettoyage de vitres <span className="text-brand-bright">sans traces</span> dans le
            Valais.
          </>
        }
        intro={
          <>
            Nettoyage professionnel des vitres, fenêtres, vitrines et surfaces vitrées dans le
            Valais. Pour les particuliers comme pour les entreprises, les bureaux, les commerces et
            les immeubles — en intervention ponctuelle ou en entretien périodique.
          </>
        }
        image={PHOTO_SPEZIAL}
        imageAlt="Collaborateur de Mirdita nettoyant une grande surface vitrée dans le Valais"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Des surfaces vitrées claires et nettes"
        intro="Nous nettoyons vos vitres à l’intérieur comme à l’extérieur, avec le matériel adapté à la hauteur et au type de surface."
        items={[
          "Fenêtres intérieur et extérieur",
          "Surfaces vitrées et baies vitrées",
          "Vitrines de commerces et showrooms",
          "Cadres, rebords et encadrements",
          "Stores et lamelles selon l’accès",
          "Nettoyage ponctuel ou périodique",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-bureaux-valais",
            label: "Nettoyage de bureaux",
            desc: "Entretien régulier de vos bureaux, vitres comprises.",
          },
          {
            href: "/fr/nettoyage-regulier-valais",
            label: "Nettoyage régulier",
            desc: "Un entretien suivi de vos locaux tout au long de l’année.",
          },
          {
            href: "/fr/nettoyage-fin-de-bail-valais",
            label: "Nettoyage fin de bail",
            desc: "Vitres impeccables pour la remise de votre logement.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage de vitres" />

      <FrCtaBanner
        title="Un devis pour le nettoyage de vos vitres ?"
        body="Indiquez-nous le nombre de fenêtres ou la surface vitrée — nous vous répondons rapidement avec une offre adaptée."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
