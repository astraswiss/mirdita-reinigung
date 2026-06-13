import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { Photo } from "@/components/photo";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewsSection } from "@/components/reviews-section";
import { PHOTO_PUTZEN } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Umzugsreinigung mit Abnahmegarantie im Wallis | Mirdita",
  description:
    "Professionelle Umzugsreinigung im Wallis mit Abnahmegarantie: Küche, Bad, Böden und Fenster bezugsfertig — bei Beanstandung bessern wir kostenlos nach.",
  alternates: {
    canonical: "/umzugsreinigung",
  },
  openGraph: {
    title: "Umzugsreinigung mit Abnahmegarantie im Wallis",
    description:
      "Wohnungsübergabe ohne Stress: Wir reinigen gründlich und übernehmen das Risiko mit unserer Abnahmegarantie.",
    url: "/umzugsreinigung",
  },
};

const ITEMS = [
  "Küche inkl. Backofen, Dunstabzug & Kühlschrank",
  "Bad & WC: Kalk, Fugen und Armaturen",
  "Böden, Türrahmen & Lichtschalter",
  "Fenster, Fensterbänke & Storen",
  "Keller, Balkon & Garage nach Wunsch",
  "Abnahmegarantie mit kostenloser Nachbesserung",
];

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      {/* Hero */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="size-1.5 rounded-full bg-brand-bright" />
              Umzugsreinigung
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Umzugsreinigung mit <span className="text-brand-bright">Abnahmegarantie</span> im
              Wallis.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Der Umzug ist stressig genug — die Wohnungsübergabe muss es nicht sein. Wir reinigen
              Ihre alte Wohnung gründlich und bezugsfertig, von der Backofentiefe bis zur letzten
              Fensterecke. Mit unserer Abnahmegarantie übernehmen wir das Risiko: Wird bei der
              Übergabe etwas beanstandet, bessern wir kostenlos nach.
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
                href="#leistungen"
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                Was ist enthalten?
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>Abnahmegarantie inklusive</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              src={PHOTO_PUTZEN}
              alt="Mirdita Mitarbeiter reinigt eine Küchenarbeitsplatte für die Wohnungsübergabe"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition="object-left"
            />
          </div>
        </div>
      </section>

      {/* Was ist enthalten */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
          <div className="rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Was ist enthalten
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Das gehört zur Umzugsreinigung
            </h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">
              Wir reinigen jede Ecke Ihrer alten Wohnung so gründlich, dass die Übergabe an
              Vermieter oder Verwaltung zum Formalakt wird — inklusive schriftlicher
              Abnahmegarantie.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-brand-deep/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps title="In vier Schritten zur abgenommenen Wohnung" />

      <ReviewsSection googleReviews={googleReviews} />

      <CtaBanner
        title="Bereit für die Wohnungsübergabe?"
        body="Holen Sie sich jetzt eine kostenlose Offerte für Ihre Umzugsreinigung — transparent, verbindlich und mit Abnahmegarantie."
      />

      <SiteFooter />
    </div>
  );
}
