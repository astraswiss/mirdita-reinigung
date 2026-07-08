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

const PATH = "/fr/nettoyage-cabinets-medicaux-valais";

export const metadata: Metadata = {
  title: "Nettoyage de cabinets médicaux dans le Valais | Mirdita",
  description:
    "Nettoyage soigné et régulier pour cabinets médicaux, dentaires et espaces professionnels sensibles dans le Valais : salles d’attente, surfaces, sanitaires. Discrétion assurée. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage de cabinets médicaux dans le Valais",
    description:
      "Un nettoyage soigné, discret et régulier pour cabinets médicaux et espaces sensibles du Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_BUERO, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage de cabinets médicaux Valais"
        description="Nettoyage soigné et régulier pour cabinets médicaux et espaces professionnels sensibles dans le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Cabinets médicaux"
        title={
          <>
            Nettoyage de cabinets médicaux{" "}
            <span className="text-brand-bright">soigné et discret</span> dans le Valais.
          </>
        }
        intro={
          <>
            Un nettoyage soigné et régulier pour les cabinets médicaux, dentaires et les espaces
            professionnels sensibles. Nous travaillons avec attention à l’hygiène et discrétion,
            pour les médecins, dentistes, physiothérapeutes, thérapeutes et cabinets du Valais.
          </>
        }
        image={PHOTO_BUERO}
        imageAlt="Espace de cabinet médical entretenu par Mirdita Reinigung dans le Valais"
        imagePosition="object-left"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Un environnement propre pour vos patients"
        intro="Nous adaptons l’entretien à votre cabinet et à vos horaires, avec une attention particulière à l’hygiène des surfaces et des espaces communs."
        items={[
          "Salles d’attente et réception",
          "Surfaces et espaces de travail",
          "Sanitaires et WC",
          "Sols de tous les locaux",
          "Nettoyage régulier et discret",
          "Attention particulière à l’hygiène",
        ]}
      />

      <FrRelated
        links={[
          {
            href: "/fr/nettoyage-bureaux-valais",
            label: "Nettoyage de bureaux",
            desc: "Entretien discret et régulier de vos bureaux et locaux.",
          },
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
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage de cabinets médicaux" />

      <FrCtaBanner
        title="Une offre pour votre cabinet ?"
        body="Indiquez-nous la taille de votre cabinet et la fréquence souhaitée — nous établissons une offre adaptée à vos besoins."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
