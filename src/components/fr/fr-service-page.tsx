import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { FrAreaSection } from "@/components/fr/fr-area-section";
import { FrProcessSteps } from "@/components/fr/fr-process-steps";
import { FrServiceSchema } from "@/components/fr/fr-service-schema";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { GoogleReviewsData } from "@/lib/google-reviews";

/**
 * French service page — a 1:1 structural mirror of the German service pages
 * (hero → "was ist enthalten" card → process steps → reviews → Einsatzgebiet →
 * CtaBanner). Content is passed in per page; the layout is identical so the two
 * language versions stay coherent.
 */
export function FrServicePage({
  schema,
  badge,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "object-center",
  trust,
  checklistEyebrow = "Ce qui est compris",
  checklistTitle,
  checklistIntro,
  items,
  processTitle,
  ctaTitle,
  ctaBody,
  googleReviews,
}: {
  schema: { name: string; description: string; path: string };
  badge: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  trust?: string;
  checklistEyebrow?: string;
  checklistTitle: string;
  checklistIntro: string;
  items: string[];
  processTitle: string;
  ctaTitle: string;
  ctaBody: string;
  googleReviews: GoogleReviewsData;
}) {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <FrServiceSchema name={schema.name} description={schema.description} path={schema.path} />
      <SiteHeader />

      {/* Hero */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="size-1.5 rounded-full bg-brand-bright" />
              {badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">{intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr#kontakt"
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Demander un devis
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                Ce qui est compris ?
              </a>
            </div>

            {trust && (
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-brand-bright" />
                  <span>{trust}</span>
                </div>
              </div>
            )}
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

      {/* Ce qui est compris */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
          <Reveal className="rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              {checklistEyebrow}
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{checklistTitle}</h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">{checklistIntro}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-brand-deep/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FrProcessSteps title={processTitle} />

      <ReviewsSection
        googleReviews={googleReviews}
        eyebrow="Avis"
        title="Ce que disent nos clients"
        reviewsLabel="avis"
      />

      <FrAreaSection />

      <CtaBanner
        title={ctaTitle}
        body={ctaBody}
        ctaLabel="Demander un devis"
        ctaHref="/fr#kontakt"
      />

      <SiteFooter lang="fr" />
    </div>
  );
}
