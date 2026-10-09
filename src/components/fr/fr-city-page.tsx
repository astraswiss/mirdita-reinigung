import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { CitySchema } from "@/components/city-schema";
import { ContactSection } from "@/components/contact-section";
import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrRelated, type FrRelatedLink } from "@/components/fr/fr-related";
import { Photo } from "@/components/photo";
import { regionHero } from "@/config/region-media";
import { BUSINESS } from "@/config/site";
import { ProseSection } from "@/components/prose-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { GoogleReviewsData } from "@/lib/google-reviews";

/**
 * French city landing page — same layout as /fr/nettoyage-sion (hero → local
 * prose → related services → process → reviews → région → contact form). All copy
 * is passed in per city so every page carries its own local content.
 */
export function FrCityPage({
  city,
  path,
  schemaDescription,
  badge,
  intro,
  proseEyebrow,
  proseTitle,
  paragraphs,
  servicesTitle,
  services,
  processTitle,
  ctaTitle,
  ctaBody,
  googleReviews,
}: {
  city: string;
  path: string;
  schemaDescription: string;
  badge: string;
  intro: string;
  proseEyebrow: string;
  proseTitle: string;
  paragraphs: string[];
  servicesTitle: string;
  services: FrRelatedLink[];
  processTitle: string;
  ctaTitle: string;
  ctaBody: string;
  googleReviews: GoogleReviewsData;
}) {
  const hero = regionHero(path, "fr");

  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <CitySchema
        city={city}
        name={`Nettoyage à ${city}`}
        description={schemaDescription}
        path={path}
        inLanguage="fr-CH"
      />
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <MapPin className="size-3.5" />
              {badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Entreprise de nettoyage à <span className="text-brand-bright">{city}</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Demander un devis
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                <Phone className="size-4" />
                Appeler maintenant
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition={hero.position}
            />
          </div>
        </div>
      </section>

      <ProseSection eyebrow={proseEyebrow} title={proseTitle} paragraphs={paragraphs} />

      <FrRelated title={servicesTitle} links={services} />

      <FrProcessSteps title={processTitle} />

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrAreaSection />

      <ContactSection lang="fr" title={ctaTitle} intro={ctaBody} />

      <SiteFooter lang="fr" />
    </div>
  );
}
