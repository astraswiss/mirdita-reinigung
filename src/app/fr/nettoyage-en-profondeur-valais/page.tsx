import type { Metadata } from "next";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrChecklist } from "@/components/fr/fr-checklist";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrRelated } from "@/components/fr/fr-related";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { PHOTO_PUTZEN, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const PATH = "/fr/nettoyage-en-profondeur-valais";

export const metadata: Metadata = {
  title: "Nettoyage en profondeur dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage en profondeur dans le Valais pour remettre vos espaces en état : nettoyage intensif des surfaces, angles, sols, cuisine et salle de bains. Pour particuliers et entreprises. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage en profondeur dans le Valais",
    description:
      "Un nettoyage intensif et détaillé pour remettre vos espaces en état, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage en profondeur Valais"
        description="Nettoyage en profondeur pour remettre les espaces en état avec un travail détaillé et soigné, dans le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage en profondeur"
        title={
          <>
            Nettoyage en profondeur dans le <span className="text-brand-bright">Valais</span>.
          </>
        }
        intro={
          <>
            Un nettoyage en profondeur pour remettre vos espaces en état, avec un travail détaillé
            et soigné. Idéal pour les logements et locaux après une longue utilisation, ou lorsqu’un
            nettoyage intensif s’impose — pour les particuliers comme pour les entreprises du
            Valais.
          </>
        }
        image={PHOTO_PUTZEN}
        imageAlt="Nettoyage en profondeur réalisé par Mirdita Reinigung dans le Valais"
        imagePosition="object-left"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Un travail détaillé, jusque dans les angles"
        intro="Nous nous attaquons à la saleté accumulée et aux endroits difficiles d’accès, pour un résultat net et durable."
        items={[
          "Nettoyage intensif des surfaces",
          "Saleté accumulée et dépôts tenaces",
          "Angles et zones difficiles d’accès",
          "Sols de toutes les pièces",
          "Cuisine et salle de bains en détail",
          "Locaux professionnels après un usage prolongé",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-fin-de-bail-valais",
            label: "Nettoyage fin de bail",
            desc: "Nettoyage complet avec garantie de remise avant l’état des lieux.",
          },
          {
            href: "/fr/nettoyage-tapis-valais",
            label: "Nettoyage de tapis",
            desc: "Nettoyage en profondeur de vos tapis et moquettes.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et surfaces vitrées sans traces.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage en profondeur" />

      <FrCtaBanner
        title="Un devis pour un nettoyage en profondeur ?"
        body="Décrivez-nous l’état des lieux et la surface concernée — vous pouvez aussi nous envoyer des photos par WhatsApp pour un devis rapide."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
