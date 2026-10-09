import type { Metadata } from "next";
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
import { PHOTO_HERO } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-naters";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Naters — Mirdita Reinigung",
  description:
    "Mirdita Reinigung hat ihren Sitz in Naters: lokaler Reinigungspartner für Umzugs-, Wohnungs- und Büroreinigung. Kurze Wege, schnelle Termine, Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Naters — Mirdita Reinigung",
    description: "Ihr lokaler Reinigungspartner direkt in Naters — mit Abnahmegarantie.",
    url: PATH,
    images: [{ url: PHOTO_HERO, width: 1200, height: 844 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <CitySchema
        city="Naters"
        name="Reinigung in Naters"
        description="Professionelle Reinigung in Naters: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie."
        path={PATH}
      />
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <MapPin className="size-3.5" />
              Unser Sitz in Naters
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Reinigungsfirma in <span className="text-brand-bright">Naters</span>.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Mirdita Reinigung ist in Naters zu Hause — unser Sitz liegt an der Belalpstrasse 2.
              Als lokaler Partner sind wir schnell bei Ihnen: für Umzugs- und Wohnungsreinigungen,
              Büro- und Gewerbereinigung oder die regelmässige Unterhaltsreinigung. Kurze Wege,
              persönlicher Kontakt und bei Wohnungsübergaben unsere Abnahmegarantie.
            </p>
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
              src={PHOTO_HERO}
              alt="Mirdita Reinigung im Einsatz in Naters im Wallis"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
          </div>
        </div>
      </section>

      <ProseSection
        eyebrow="Lokal verankert"
        title="Ihre Reinigungsfirma direkt in Naters"
        paragraphs={[
          "Wir sind in Naters zu Hause. Vom Sitz an der Belalpstrasse sind wir in wenigen Minuten im Dorfkern, in den Wohnquartieren am Hang oder unten Richtung Rhonebrücke. Für Sie heisst das: kurze Reaktionszeiten und Termine, die sich auch kurzfristig einrichten lassen.",
          "Seit 2013 gehören auch Birgisch und Mund zur Gemeinde, dazu Weiler wie Hegdorn, Geimen oder Rischinen und oben Blatten und die Belalp. Dort reinigen wir Einfamilienhäuser, Chalets und Ferienwohnungen — inklusive Endreinigung zwischen zwei Vermietungen und Grundreinigung nach der Wintersaison.",
          "Im Dorf selbst übernehmen wir vor allem Umzugsreinigungen. Wir kennen die Ansprüche der Verwaltungen und Vermieter in Naters bei der Wohnungsübergabe und reinigen so, dass die Abnahme reibungslos verläuft — und falls doch etwas beanstandet wird, bessern wir dank Abnahmegarantie kostenlos nach.",
        ]}
      />

      <DeServiceLinks title="Unsere Reinigungen in Naters, Birgisch und Mund" />

      <ProcessSteps title="So läuft Ihre Reinigung in Naters ab" />

      <ReviewsSection googleReviews={googleReviews} />

      <EinsatzgebietSection />

      <ContactSection
        title="Reinigungsfirma aus Naters gesucht?"
        intro="Wir sind im Dorf zu Hause und schnell bei Ihnen — vom Dorfkern bis Blatten und Belalp. Fordern Sie jetzt Ihre kostenlose Offerte an."
      />

      <SiteFooter />
    </div>
  );
}
