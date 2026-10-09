import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { CitySchema } from "@/components/city-schema";
import { ContactSection } from "@/components/contact-section";
import { DeServiceLinks } from "@/components/de/de-service-links";
import { EinsatzgebietSection } from "@/components/einsatzgebiet-section";
import { Photo } from "@/components/photo";
import { ProseSection } from "@/components/prose-section";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { GoogleReviewsData } from "@/lib/google-reviews";

/**
 * German city landing page — same layout as /reinigung-naters, -brig-glis and
 * -visp (hero → local prose → service links → process → reviews →
 * Einsatzgebiet → contact form). All copy is passed in per city so every page
 * carries its own, locally specific content rather than a swapped place name.
 */
export function DeCityPage({
  city,
  path,
  schemaDescription,
  badge,
  intro,
  image,
  imageAlt,
  imagePosition,
  proseEyebrow,
  proseTitle,
  paragraphs,
  servicesTitle,
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
  image: string;
  imageAlt: string;
  imagePosition?: string;
  proseEyebrow: string;
  proseTitle: string;
  paragraphs: string[];
  servicesTitle: string;
  processTitle: string;
  ctaTitle: string;
  ctaBody: string;
  googleReviews: GoogleReviewsData;
}) {
  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <CitySchema
        city={city}
        name={`Reinigung in ${city}`}
        description={schemaDescription}
        path={path}
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
              Reinigungsfirma in <span className="text-brand-bright">{city}</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Kostenlose Offerte
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+41762027984"
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                <Phone className="size-4" />
                Jetzt anrufen
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo
              src={image}
              alt={imageAlt}
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition={imagePosition}
            />
          </div>
        </div>
      </section>

      <ProseSection eyebrow={proseEyebrow} title={proseTitle} paragraphs={paragraphs} />

      <DeServiceLinks title={servicesTitle} />

      <ProcessSteps title={processTitle} />

      <ReviewsSection googleReviews={googleReviews} />

      <EinsatzgebietSection />

      <ContactSection title={ctaTitle} intro={ctaBody} />

      <SiteFooter />
    </div>
  );
}
