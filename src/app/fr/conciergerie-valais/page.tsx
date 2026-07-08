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

const PATH = "/fr/conciergerie-valais";

export const metadata: Metadata = {
  title: "Conciergerie et entretien d’immeubles dans le Valais | Mirdita",
  description:
    "Conciergerie et entretien d’immeubles dans le Valais pour PPE, régies et copropriétés : escaliers, entrées, couloirs, parties communes et caves. Service régulier et fiable. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Conciergerie d’immeubles dans le Valais",
    description:
      "Entretien régulier et fiable des parties communes pour PPE, régies et copropriétés du Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_BUERO, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Conciergerie Valais"
        description="Conciergerie et entretien d’immeubles dans le Valais, avec service régulier et fiable."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Conciergerie d’immeubles"
        title={
          <>
            Conciergerie et entretien d’immeubles dans le{" "}
            <span className="text-brand-bright">Valais</span>.
          </>
        }
        intro={
          <>
            Conciergerie et entretien d’immeubles dans le Valais, avec un service régulier et
            fiable. Nous intervenons pour les PPE, les régies, les copropriétés et les
            administrations immobilières, afin de garder les parties communes propres et
            accueillantes.
          </>
        }
        image={PHOTO_BUERO}
        imageAlt="Entrée d’immeuble entretenue par Mirdita Reinigung dans le Valais"
        imagePosition="object-left"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Des parties communes toujours soignées"
        intro="Nous assurons l’entretien régulier de votre immeuble et un contrôle suivi, pour des espaces communs propres tout au long de l’année."
        items={[
          "Escaliers et paliers",
          "Entrées et halls",
          "Couloirs et parties communes",
          "Locaux communs et caves",
          "Extérieurs proches selon l’immeuble",
          "Contrôle régulier et entretien suivi",
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
            desc: "Vitres des parties communes et entrées, sans traces.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Conciergerie d’immeubles" />

      <FrCtaBanner
        title="Une offre pour votre immeuble ?"
        body="Indiquez-nous la taille de l’immeuble et la fréquence souhaitée — nous établissons une offre claire pour l’entretien des parties communes."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
