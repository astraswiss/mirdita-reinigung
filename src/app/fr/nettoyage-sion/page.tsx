import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { CitySchema } from "@/components/city-schema";
import { CtaBanner } from "@/components/cta-banner";
import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrRelated } from "@/components/fr/fr-related";
import { Photo } from "@/components/photo";
import { ProseSection } from "@/components/prose-section";
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

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <MapPin className="size-3.5" />
              Nettoyage dans la région de Sion
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Entreprise de nettoyage à <span className="text-brand-bright">Sion</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Mirdita Reinigung intervient dans la région de Sion et dans tout le Valais central.
              Notre spécialité : le nettoyage de fin de bail avec garantie de remise, pour que la
              remise des clés se passe sans stress. Nous nettoyons aussi appartements, bureaux et
              immeubles — pour les particuliers, les régies et les entreprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr#kontakt"
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Demander un devis
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+41762027984"
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                <Phone className="size-4" />
                Appeler maintenant
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo
              src={PHOTO_PUTZEN}
              alt="Nettoyage réalisé par Mirdita Reinigung dans la région de Sion"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition="object-left"
            />
          </div>
        </div>
      </section>

      <ProseSection
        eyebrow="Au cœur du Valais central"
        title="Nettoyage à Sion et dans le Valais central"
        paragraphs={[
          "Sion, capitale du Valais, est au cœur de la région francophone du canton. Depuis notre base à Naters, dans le Haut-Valais, nous nous déplaçons régulièrement dans le Valais central pour les nettoyages de fin de bail, l’entretien d’appartements et le nettoyage de bureaux.",
          "Que vous soyez un particulier qui rend son appartement, une régie qui prépare un état des lieux ou une entreprise à la recherche d’un entretien régulier, nous adaptons notre intervention à votre besoin. Vous pouvez nous envoyer des photos par WhatsApp pour recevoir un devis rapide, sans engagement.",
        ]}
      />

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

      <CtaBanner
        title="Un devis pour un nettoyage à Sion ?"
        body="Décrivez-nous votre besoin ou envoyez des photos par WhatsApp — nous vous répondons sous 24 heures avec une offre claire."
        ctaLabel="Demander un devis"
        ctaHref="/fr#kontakt"
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
