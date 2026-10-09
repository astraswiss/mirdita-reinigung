import type { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";

import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrContact } from "@/components/fr/fr-contact";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrServices } from "@/components/fr/fr-services";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_HERO, alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustedBy } from "@/components/trusted-by";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Mirdita Reinigung — Entreprise de nettoyage dans le Valais",
  description:
    "Entreprise de nettoyage professionnelle basée à Naters, active dans tout le Canton du Valais. Nettoyage fin de bail avec garantie de remise, appartements, bureaux et immeubles. Devis gratuit.",
  alternates: alternatesFor("/fr"),
  openGraph: {
    title: "Mirdita Reinigung — Nettoyage professionnel dans le Valais",
    description:
      "Nettoyage fin de bail, appartements, bureaux et immeubles dans tout le Valais. Devis gratuit, réponse rapide.",
    url: "/fr",
    locale: "fr_CH",
    images: [{ url: "/hero.jpg", width: 1200, height: 844 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      {/* Hero — asymmetric split */}
      <section id="top" className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col justify-center lg:flex-1">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-brand-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-brand-deep">
                  {googleReviews.rating.toFixed(1)}/5
                </span>
                <span className="text-brand-deep/60">· {googleReviews.total} avis</span>
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                Vos pros de la <span className="text-brand-bright">propreté</span> dans le Valais.
              </h1>
              <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
                Nettoyages de fin de bail, d’appartements et de bureaux — rapides, minutieux et avec
                garantie de remise. Nous nous occupons de tout.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
                >
                  Devis gratuit
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
                >
                  Voir les services
                </a>
              </div>
            </div>

            <TrustedBy
              label="Ces entreprises nous font confiance"
              align="left"
              className="mt-12 lg:mt-auto lg:pt-10"
            />
          </div>

          <div className="lg:col-span-5 flex">
            <Photo
              src={PHOTO_HERO}
              alt="Collaborateur de Mirdita nettoyant une façade vitrée avec les montagnes valaisannes en arrière-plan"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
          </div>
        </div>
      </section>

      <FrServices />

      <FrProcessSteps />

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrAreaSection />

      <FrContact />

      <SiteFooter lang="fr" />
    </div>
  );
}
