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

const PATH = "/fr/nettoyage-tapis-valais";

export const metadata: Metadata = {
  title: "Nettoyage de tapis dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage de tapis et moquettes professionnel dans le Valais : nettoyage en profondeur pour éliminer saletés, poussières et traces d’usage. Pour particuliers et entreprises. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de tapis dans le Valais",
    description:
      "Nettoyage de tapis et moquettes en profondeur pour un rendu propre et sain, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_SPEZIAL, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage de tapis Valais"
        description="Nettoyage de tapis professionnel pour éliminer saletés, poussières et traces d’usage, dans le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage de tapis"
        title={
          <>
            Nettoyage de tapis <span className="text-brand-bright">en profondeur</span> dans le
            Valais.
          </>
        }
        intro={
          <>
            Nettoyage de tapis professionnel pour éliminer les saletés, la poussière et les traces
            d’usage. Nous intervenons chez les particuliers comme dans les bureaux, les hôtels, les
            immeubles et les locaux commerciaux du Valais, pour redonner à vos tapis un aspect
            propre et sain.
          </>
        }
        image={PHOTO_SPEZIAL}
        imageAlt="Nettoyage en profondeur d’un tapis par Mirdita Reinigung dans le Valais"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Des tapis propres et assainis"
        intro="Nous adaptons la méthode à la matière et à l’état de vos tapis, pour un nettoyage en profondeur sans les abîmer."
        items={[
          "Tapis de toutes tailles",
          "Moquettes selon la surface et la matière",
          "Nettoyage en profondeur des fibres",
          "Élimination des poussières et des traces d’usage",
          "Entretien régulier sur demande",
          "Meilleure hygiène des espaces de vie et de travail",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-en-profondeur-valais",
            label: "Nettoyage en profondeur",
            desc: "Un nettoyage intensif de vos espaces, au-delà des tapis.",
          },
          {
            href: "/fr/nettoyage-appartement-valais",
            label: "Nettoyage d’appartement",
            desc: "Nettoyage complet de votre logement, tapis compris.",
          },
          {
            href: "/fr/nettoyage-bureaux-valais",
            label: "Nettoyage de bureaux",
            desc: "Entretien régulier de vos bureaux et espaces communs.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage de tapis" />

      <FrCtaBanner
        title="Un devis pour le nettoyage de vos tapis ?"
        body="Indiquez-nous le nombre et la taille des tapis — vous pouvez aussi nous envoyer des photos par WhatsApp pour un devis rapide."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
