import type { Metadata } from "next";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrChecklist } from "@/components/fr/fr-checklist";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrRelated } from "@/components/fr/fr-related";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { PHOTO_PRIVAT, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const PATH = "/fr/nettoyage-appartement-valais";

export const metadata: Metadata = {
  title: "Nettoyage d’appartement dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage d’appartement professionnel dans le Valais, ponctuel ou régulier : cuisine, salle de bains, chambres, sols et surfaces. Devis gratuit, réponse rapide.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage d’appartement dans le Valais",
    description:
      "Nettoyage d’appartement ponctuel ou régulier, adapté à vos besoins, dans tout le Valais.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PRIVAT, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage d’appartement Valais"
        description="Nettoyage d’appartement professionnel dans le Valais, ponctuel ou régulier, adapté aux besoins du client."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage d’appartement"
        title={
          <>
            Nettoyage d’appartement dans le <span className="text-brand-bright">Valais</span>.
          </>
        }
        intro={
          <>
            Un nettoyage d’appartement professionnel, ponctuel ou régulier, adapté à vos besoins.
            Que ce soit avant ou après un déménagement, pour un grand nettoyage ou un entretien
            suivi, nous laissons votre logement propre et net — pour les familles, les propriétaires
            comme les locataires, dans tout le Valais.
          </>
        }
        image={PHOTO_PRIVAT}
        imageAlt="Collaborateur de Mirdita nettoyant un plan de travail dans un appartement en Valais"
        imagePosition="object-bottom"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Un logement propre, du sol au plafond"
        intro="Nous adaptons le nettoyage à votre appartement et à vos priorités. Voici ce que nous prenons en charge le plus souvent."
        items={[
          "Cuisine : plans de travail, façades d’armoires et évier",
          "Salle de bains et WC : sanitaires, robinetterie et miroirs",
          "Chambres et salon : surfaces, meubles et dépoussiérage",
          "Sols : aspiration et lavage de toutes les pièces",
          "Vitres et fenêtres sur demande",
          "Nettoyage avant ou après un déménagement",
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
            href: "/fr/nettoyage-regulier-valais",
            label: "Nettoyage régulier",
            desc: "Un entretien suivi pour garder votre logement propre toute l’année.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Fenêtres et surfaces vitrées sans traces.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage d’appartement" />

      <FrCtaBanner
        title="Un devis pour votre appartement ?"
        body="Dites-nous la taille de votre logement et vos priorités — nous vous répondons avec une offre claire sous 24 heures."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
