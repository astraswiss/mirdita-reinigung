import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Star } from "lucide-react";

import { ContactSection } from "@/components/contact-section";
import { DeServiceLinks } from "@/components/de/de-service-links";
import { EinsatzgebietSection } from "@/components/einsatzgebiet-section";
import { Photo } from "@/components/photo";
import { ProcessSteps } from "@/components/process-steps";
import { ProseSection } from "@/components/prose-section";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import {
  AudienceSection,
  ChecklistGroups,
  FaqSection,
  PROSE_LINK,
} from "@/components/service-sections";
import { alternatesFor } from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GENERIC_PHOTOS } from "@/config/images";
import { getGoogleReviews } from "@/lib/google-reviews";
import { cta } from "@/lib/analytics";

const PHOTO = GENERIC_PHOTOS.office;

export const metadata: Metadata = {
  title: "Praxisreinigung Oberwallis – Arztpraxen | Mirdita",
  description:
    "Praxisreinigung im Oberwallis: hygienische Reinigung für Arzt-, Zahnarzt- und Therapiepraxen in Brig, Visp und Naters – ausserhalb der Sprechzeiten.",
  alternates: alternatesFor("/praxisreinigung"),
  openGraph: {
    title: "Praxisreinigung im Oberwallis",
    description:
      "Reinigung und Desinfektion von Behandlungsräumen, Wartezimmern und Sanitäranlagen — ausserhalb Ihrer Sprechstunden.",
    url: "/praxisreinigung",
    images: [{ url: PHOTO.src, width: PHOTO.width, height: PHOTO.height }],
  },
};

const CHECKLIST = [
  {
    title: "Behandlungs- und Wartebereiche",
    items: [
      "Behandlungsräume: Arbeitsflächen, Ablagen & Böden",
      "Wartezimmer: Stühle, Tische & Ablagen",
      "Empfang & Anmeldebereich inkl. Theke",
      "Türen, Glasflächen & Trennwände",
    ],
  },
  {
    title: "Hygiene & Desinfektion",
    items: [
      "Desinfektion von Kontaktflächen: Türgriffe, Lichtschalter, Handläufe & Theke",
      "Sanitäranlagen mit erhöhtem Hygienestandard",
      "Lavabos & Armaturen in Behandlungsräumen",
      "Reinigungsmittel, die für medizinische Räume geeignet sind",
    ],
  },
  {
    title: "Organisation",
    items: [
      "Reinigung ausserhalb der Sprechstunden: früh morgens, abends oder am Wochenende",
      "Fester Rhythmus — täglich oder mehrmals pro Woche",
      "Ein fester Ansprechpartner für Ihre Praxis",
    ],
  },
];

const AUDIENCE = [
  {
    title: "Arztpraxen",
    body: "Hausarzt-, Gruppen- und Spezialarztpraxen: saubere Wartezimmer und Behandlungsräume, jeden Tag zur ersten Sprechstunde bereit.",
  },
  {
    title: "Zahnarztpraxen",
    body: "Empfang, Wartezimmer, Behandlungs- und Sanitärräume — gründlich gereinigt und Kontaktflächen gezielt desinfiziert.",
  },
  {
    title: "Physiotherapie",
    body: "Behandlungsräume, Liegenbereiche und Garderoben mit vielen Patientinnen und Patienten am Tag brauchen einen verlässlichen Rhythmus.",
  },
  {
    title: "Therapiezentren",
    body: "Ob Ergotherapie, Psychotherapie oder Gesundheitszentrum: Wir passen Umfang und Zeiten an Ihre Räume und Ihren Betrieb an.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Anfrage & Besichtigung",
    body: "Sie zeigen uns Ihre Räume und Sprechzeiten — meist bei einer Besichtigung vor Ort.",
  },
  {
    n: "02",
    title: "Offerte innert 24 h",
    body: "Sie erhalten eine verbindliche Offerte mit festem Preis inkl. Material.",
  },
  {
    n: "03",
    title: "Reinigung im Rhythmus",
    body: "Wir reinigen zuverlässig ausserhalb Ihrer Sprechstunden.",
  },
  {
    n: "04",
    title: "Kontrolle",
    body: "Regelmässige Abstimmung — wir passen an, bis alles stimmt.",
  },
];

const FAQ = [
  {
    q: "Wann reinigen Sie unsere Praxis?",
    a: "Ausserhalb Ihrer Sprechstunden — früh morgens, abends oder am Wochenende. So läuft Ihr Praxisbetrieb ungestört und die Räume sind zur ersten Konsultation sauber.",
  },
  {
    q: "Welche Flächen werden desinfiziert?",
    a: "Alle Kontaktflächen, die viele Hände berühren: Türgriffe, Lichtschalter, Handläufe, Empfangstheke, Armaturen sowie Stühle und Tische im Wartezimmer. Dazu kommen die Sanitäranlagen mit erhöhtem Hygienestandard.",
  },
  {
    q: "Für welche Praxen arbeiten Sie?",
    a: "Für Arzt- und Zahnarztpraxen, Physiotherapien und Therapiezentren im ganzen Oberwallis — von der kleinen Einzelpraxis bis zur Gruppenpraxis.",
  },
  {
    q: "Wie oft wird gereinigt?",
    a: "So oft, wie Ihre Praxis es braucht — täglich oder mehrmals pro Woche. Den Rhythmus legen wir gemeinsam fest; Sie haben dabei immer denselben Ansprechpartner.",
  },
  {
    q: "Was kostet die Praxisreinigung?",
    a: "Der Preis hängt von Grösse, Räumen und Rhythmus ab. Sie erhalten innert 24 Stunden eine verbindliche Offerte mit festem Preis inkl. Material und klar definiertem Leistungsumfang.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja. Mirdita Reinigung ist betriebshaftpflichtversichert. Wir arbeiten diskret und gehen mit Ihren Räumlichkeiten sorgfältig um.",
  },
];

const RELATED = [
  {
    href: "/bueroreinigung",
    label: "Büroreinigung",
    desc: "Diskret und zuverlässig für Büros und Verwaltungsräume.",
  },
  {
    href: "/unterhaltsreinigung",
    label: "Unterhaltsreinigung",
    desc: "Wiederkehrende Pflege in gleichbleibender Qualität.",
  },
  {
    href: "/fensterreinigung",
    label: "Fensterreinigung",
    desc: "Fenster, Glasflächen und Storen streifenfrei.",
  },
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
              Praxisreinigung
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Praxisreinigung für <span className="text-brand-bright">Arztpraxen</span> im
              Oberwallis.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              In Arzt-, Zahnarzt- und Therapiepraxen zählt Hygiene besonders. Wir reinigen und
              desinfizieren Behandlungsräume, Wartezimmer und Sanitäranlagen — diskret und
              ausserhalb Ihrer Sprechstunden, in Brig-Glis, Visp, Naters und im ganzen Oberwallis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#kontakt"
                {...cta("offerte_hero", "hero")}
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Kostenlose Offerte
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#leistungen"
                {...cta("leistungen_hero", "hero")}
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                Was ist enthalten?
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>Erhöhte Hygienestandards</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-brand-bright" />
                <span>Ausserhalb der Sprechstunden</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="size-4 text-brand-bright" />
                <span>{googleReviews.rating.toFixed(1)}/5 auf Google</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              src={PHOTO.src}
              alt={PHOTO.alt.de}
              width={PHOTO.width}
              height={PHOTO.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
              objectPosition="object-left"
            />
          </div>
        </div>
      </section>

      {/* Was ist enthalten */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
          <Reveal className="rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Was ist enthalten
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Das gehört zur Praxisreinigung
            </h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">
              Neben der klassischen Unterhaltsreinigung legen wir bei Praxen besonderen Wert auf
              Hygiene — mit gezielter Desinfektion von Kontaktflächen und Reinigungsmitteln, die für
              medizinische Räume geeignet sind.
            </p>
            <ChecklistGroups groups={CHECKLIST} />
          </Reveal>
        </div>
      </section>

      <AudienceSection
        eyebrow="Für wen"
        title="Für welche Praxen wir arbeiten"
        intro="Jede Praxis hat ihre eigenen Abläufe. Wir richten Reinigungsumfang und Zeiten nach Ihren Räumen und Sprechstunden."
        items={AUDIENCE}
      />

      <ProseSection
        eyebrow="Hygiene im Praxisalltag"
        title="Saubere Räume, denen Ihre Patientinnen und Patienten vertrauen"
        paragraphs={[
          "Das Wartezimmer ist der erste Eindruck Ihrer Praxis. Saubere Böden, gepflegte Sitzplätze und frische Sanitäranlagen zeigen Ihren Patientinnen und Patienten, dass sie in guten Händen sind — noch bevor die Behandlung beginnt.",
          "Gleichzeitig berühren jeden Tag viele Menschen dieselben Flächen: Türgriffe, Lichtschalter, die Theke am Empfang. Diese Kontaktflächen desinfizieren wir bei jedem Einsatz gezielt. Behandlungsräume und Sanitäranlagen reinigen wir nach erhöhten Hygienestandards und mit Mitteln, die für medizinische Räume geeignet sind.",
        ]}
      />

      <ProcessSteps title="So läuft Ihre Praxisreinigung ab" steps={STEPS} />

      <ProseSection
        eyebrow="Einsatzgebiet"
        title="Praxisreinigung in Brig-Glis, Visp, Naters und im Oberwallis"
        paragraphs={[
          <>
            Von unserem Sitz in Naters aus betreuen wir Praxen in{" "}
            <Link href="/reinigung-brig-glis" className={PROSE_LINK}>
              Brig-Glis
            </Link>
            ,{" "}
            <Link href="/reinigung-visp" className={PROSE_LINK}>
              Visp
            </Link>
            ,{" "}
            <Link href="/reinigung-naters" className={PROSE_LINK}>
              Naters
            </Link>{" "}
            und im ganzen Oberwallis — von{" "}
            <Link href="/reinigung-moerel" className={PROSE_LINK}>
              Mörel
            </Link>{" "}
            bis{" "}
            <Link href="/reinigung-leuk" className={PROSE_LINK}>
              Leuk
            </Link>
            . Weil wir in der Region zu Hause sind, sind wir auch bei kurzfristigen Anliegen schnell
            vor Ort.
          </>,
          <>
            Auch in den Ferienorten wie{" "}
            <Link href="/reinigung-zermatt" className={PROSE_LINK}>
              Zermatt
            </Link>{" "}
            und{" "}
            <Link href="/reinigung-saas-fee" className={PROSE_LINK}>
              Saas-Fee
            </Link>{" "}
            reinigen wir Praxen und Gesundheitsbetriebe ausserhalb der Öffnungszeiten — damit Ihre
            Räume jeden Morgen bereit sind.
          </>,
        ]}
      />

      <DeServiceLinks
        eyebrow="Passende Leistungen"
        title="Weitere Reinigungen für Ihre Praxis"
        services={RELATED}
      />

      <ReviewsSection googleReviews={googleReviews} />

      <FaqSection eyebrow="Häufige Fragen" title="Fragen zur Praxisreinigung" items={FAQ} />

      <EinsatzgebietSection />

      <ContactSection
        title="Hygiene, auf die Sie sich verlassen können."
        intro="Fordern Sie eine kostenlose Offerte für die Reinigung Ihrer Praxis an — wir planen rund um Ihre Sprechstunden und melden uns innert 24 Stunden."
        defaultType="Praxisreinigung"
      />

      <SiteFooter />
    </div>
  );
}
