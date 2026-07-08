import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { CitySchema } from "@/components/city-schema";
import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrContact } from "@/components/fr/fr-contact";
import { FrCtaBanner } from "@/components/fr/fr-cta-banner";
import { FrHero } from "@/components/fr/fr-hero";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrRelated } from "@/components/fr/fr-related";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_PUTZEN } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/fr/nettoyage-sion";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Sion | Mirdita Reinigung",
  description:
    "Entreprise de nettoyage active dans la région de Sion : nettoyage fin de bail avec garantie de remise, appartements, bureaux et immeubles dans le Valais central. Devis gratuit.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Entreprise de nettoyage à Sion — Mirdita Reinigung",
    description:
      "Nettoyage fin de bail, appartements et bureaux dans la région de Sion et le Valais central.",
    url: PATH,
    locale: "fr_CH",
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <CitySchema
        city="Sion"
        name="Nettoyage à Sion"
        description="Entreprise de nettoyage active dans la région de Sion : nettoyage fin de bail, appartements et bureaux dans le Valais central."
        path={PATH}
        inLanguage="fr-CH"
      />
      <SiteHeader />

      <FrHero
        badge="Nettoyage dans la région de Sion"
        title={
          <>
            Entreprise de nettoyage à <span className="text-brand-bright">Sion</span>.
          </>
        }
        intro={
          <>
            Mirdita Reinigung intervient dans la région de Sion et dans tout le Valais central.
            Notre spécialité : le nettoyage de fin de bail avec garantie de remise, pour que la
            remise des clés se passe sans stress. Nous nettoyons aussi appartements, bureaux et
            immeubles — pour les particuliers, les régies et les entreprises.
          </>
        }
        image={PHOTO_PUTZEN}
        imageAlt="Nettoyage réalisé par Mirdita Reinigung dans la région de Sion"
        imagePosition="object-left"
        trust="Garantie de remise incluse"
      />

      <section className="px-5 md:px-10 pb-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="rounded-[28px] bg-brand-deep text-white p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-3xl">
              Basés à Naters, actifs dans la région de Sion
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed max-w-3xl">
              Notre entreprise est basée à Naters, dans le Haut-Valais, et nous nous déplaçons dans
              tout le canton — Sion, Sierre, Martigny et le Valais central compris. Vous pouvez nous
              envoyer des photos de votre logement par WhatsApp pour recevoir un devis rapide, sans
              engagement.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck className="size-4 text-brand-bright" />
              Devis gratuit · Réponse sous 24 h · Garantie de remise
            </div>
          </Reveal>
        </div>
      </section>

      <FrRelated
        title="Nos services dans la région de Sion"
        links={[
          {
            href: "/fr/nettoyage-fin-de-bail-valais",
            label: "Nettoyage fin de bail",
            desc: "Nettoyage complet avec garantie de remise avant l’état des lieux.",
          },
          {
            href: "/fr/nettoyage-appartement-valais",
            label: "Nettoyage d’appartement",
            desc: "Ponctuel ou régulier, adapté à votre logement.",
          },
          {
            href: "/fr/nettoyage-bureaux-valais",
            label: "Nettoyage de bureaux",
            desc: "Entretien discret et régulier de vos locaux.",
          },
          {
            href: "/fr/nettoyage-vitres-valais",
            label: "Nettoyage de vitres",
            desc: "Vitres et surfaces vitrées sans traces.",
          },
          {
            href: "/fr/nettoyage-fin-de-chantier-valais",
            label: "Fin de chantier",
            desc: "Nettoyage après travaux avant la remise des locaux.",
          },
          {
            href: "/fr/nettoyage-en-profondeur-valais",
            label: "Nettoyage en profondeur",
            desc: "Un nettoyage intensif pour remettre les espaces en état.",
          },
        ]}
      />

      <FrProcessSteps title="De la demande à la remise des clés à Sion" />

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrAreaSection />

      <FrContact defaultType="Nettoyage fin de bail" />

      <FrCtaBanner
        title="Un devis pour un nettoyage à Sion ?"
        body="Décrivez-nous votre besoin ou envoyez des photos par WhatsApp — nous vous répondons sous 24 heures avec une offre claire."
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
