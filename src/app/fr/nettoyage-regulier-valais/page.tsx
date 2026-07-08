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

const PATH = "/fr/nettoyage-regulier-valais";

export const metadata: Metadata = {
  title: "Nettoyage régulier dans le Valais | Mirdita Reinigung",
  description:
    "Nettoyage régulier et fiable dans le Valais : hebdomadaire, mensuel ou entretien continu, avec une qualité constante et des horaires flexibles. Devis gratuit.",
  alternates: alternatesFor(PATH),
  openGraph: {
    title: "Nettoyage régulier dans le Valais",
    description: "Un entretien régulier et fiable pour garder vos espaces propres toute l’année.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_BUERO, width: 1200, height: 844 }],
  },
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema
        name="Nettoyage régulier Valais"
        description="Nettoyage régulier fiable pour maintenir les espaces propres toute l’année, pour particuliers et entreprises dans le Valais."
        path={PATH}
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage régulier"
        title={
          <>
            Nettoyage régulier et <span className="text-brand-bright">fiable</span> dans le Valais.
          </>
        }
        intro={
          <>
            Un nettoyage régulier pour garder vos espaces propres toute l’année. Nous intervenons
            chez les particuliers comme dans les bureaux, les immeubles, les entreprises et les
            copropriétés — avec une qualité constante et des horaires adaptés à votre rythme.
          </>
        }
        image={PHOTO_BUERO}
        imageAlt="Espaces entretenus régulièrement par Mirdita Reinigung dans le Valais"
        imagePosition="object-left"
      />

      <FrChecklist
        eyebrow="Ce qui est compris"
        title="Une propreté constante, sans y penser"
        intro="Nous définissons ensemble la fréquence et l’étendue de l’entretien, puis nous nous y tenons — avec la même équipe autant que possible."
        items={[
          "Nettoyage hebdomadaire selon vos besoins",
          "Nettoyage mensuel ou par intervalle défini",
          "Entretien continu avec une qualité constante",
          "Horaires flexibles, aussi en dehors des heures d’ouverture",
          "Interlocuteur fixe et suivi régulier",
          "Adaptation à l’évolution de vos besoins",
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
            href: "/fr/conciergerie-valais",
            label: "Conciergerie d’immeubles",
            desc: "Entretien régulier des parties communes pour PPE et régies.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et surfaces vitrées, en entretien périodique.",
          },
        ]}
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage régulier" />

      <FrCtaBanner
        title="Une offre de nettoyage régulier ?"
        body="Indiquez-nous la surface à entretenir et la fréquence souhaitée — nous établissons une offre claire et adaptée."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
