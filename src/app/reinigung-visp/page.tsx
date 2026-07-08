import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { CitySchema } from "@/components/city-schema";
import { CtaBanner } from "@/components/cta-banner";
import { DeServiceLinks } from "@/components/de/de-service-links";
import { EinsatzgebietSection } from "@/components/einsatzgebiet-section";
import { Photo } from "@/components/photo";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_PUTZEN } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-visp";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Visp — Mirdita Reinigung",
  description:
    "Reinigung in Visp: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie. Für Privathaushalte und Betriebe im Oberwallis — zuverlässig und termingerecht. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Visp — Mirdita Reinigung",
    description: "Zuverlässige Reinigung in Visp und im Oberwallis — mit Abnahmegarantie.",
    url: PATH,
    images: [{ url: PHOTO_PUTZEN, width: 1536, height: 1426 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <CitySchema
        city="Visp"
        name="Reinigung in Visp"
        description="Professionelle Reinigung in Visp: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie."
        path={PATH}
      />
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <MapPin className="size-3.5" />
              Im Raum Visp
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Reinigungsfirma in <span className="text-brand-bright">Visp</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Visp ist der Verkehrs- und Wirtschaftsknoten des Oberwallis — und für uns von Naters
              aus in wenigen Minuten erreichbar. Wir übernehmen Umzugsreinigungen mit
              Abnahmegarantie, die Reinigung von Wohnungen und Häusern sowie Büro-, Praxis- und
              Gewerbereinigung für Betriebe in und um Visp. Zuverlässig, termingerecht und nach
              Schweizer Standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#kontakt"
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
              src={PHOTO_PUTZEN}
              alt="Mirdita Reinigung im Einsatz in Visp im Oberwallis"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition="object-left"
            />
          </div>
        </div>
      </section>

      <DeServiceLinks title="Was wir in Visp für Sie reinigen" />

      <ProcessSteps title="In vier Schritten zu Ihrer Reinigung in Visp" />

      <ReviewsSection googleReviews={googleReviews} />

      <EinsatzgebietSection />

      <CtaBanner
        title="Reinigung in Visp gesucht?"
        body="Von Naters aus sind wir schnell in Visp und Umgebung. Fordern Sie jetzt Ihre kostenlose Offerte an."
      />

      <SiteFooter />
    </div>
  );
}
