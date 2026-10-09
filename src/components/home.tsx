"use client";

import { ArrowRight, Star } from "lucide-react";

import { TrustedBy } from "@/components/trusted-by";
import { ContactSection } from "@/components/contact-section";
import { EinsatzgebietSection } from "@/components/einsatzgebiet-section";
import { Photo } from "@/components/photo";
import { ProcessSteps } from "@/components/process-steps";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceCards } from "@/components/service-cards";
import { PHOTO_HERO, SERVICES, type ServiceKey } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { GoogleReviewsData } from "@/lib/google-reviews";
import { cta } from "@/lib/analytics";

export function Home({ googleReviews }: { googleReviews: GoogleReviewsData }) {
  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
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
                <span className="text-brand-deep/60">· {googleReviews.total} Bewertungen</span>
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                Ihre Profis für Glanz & <span className="text-brand-bright">Sauberkeit</span> im
                Wallis.
              </h1>
              <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
                Umzugs-, Wohnungs- und Büroreinigungen — schnell, gründlich und mit Abnahmegarantie.
                Wir nehmen Ihnen die Arbeit ab.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  {...cta("offerte_hero", "hero")}
                  className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
                >
                  Kostenlose Offerte
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#leistungen"
                  {...cta("leistungen_hero", "hero")}
                  className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>

            <TrustedBy align="left" className="mt-12 lg:mt-auto lg:pt-10" />
          </div>

          <div className="lg:col-span-5 flex">
            <Photo
              src={PHOTO_HERO}
              alt="Mirdita Mitarbeiter reinigt eine Glasfront mit Walliser Bergen im Hintergrund"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
          <Reveal className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
                Leistungen
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
                Wofür dürfen wir putzen?
              </h2>
            </div>
            <p className="text-brand-deep/65 md:max-w-sm">
              Von Privathaushalten über Firmen bis zu Spezialreinigungen — alles aus einer Hand.
            </p>
          </Reveal>

          <ServiceCards
            ctaLabel="Offerte anfordern"
            services={(Object.keys(SERVICES) as ServiceKey[]).map((key) => ({
              key,
              ...SERVICES[key],
            }))}
          />
        </div>
      </section>

      <ProcessSteps />

      <ReviewsSection googleReviews={googleReviews} />

      <EinsatzgebietSection />

      <ContactSection />

      <SiteFooter />
    </div>
  );
}
