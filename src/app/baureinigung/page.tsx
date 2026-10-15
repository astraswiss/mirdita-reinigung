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

const PHOTO = GENERIC_PHOTOS.construction;

export const metadata: Metadata = {
  title: "Baureinigung & Bauendreinigung Oberwallis | Mirdita",
  description:
    "Baureinigung im Oberwallis: Grob- und Feinreinigung nach Neubau, Umbau oder Renovation in Brig, Visp und Naters. Verbindliche Offerte innert 24 Stunden.",
  alternates: alternatesFor("/baureinigung"),
  openGraph: {
    title: "Baureinigung & Bauendreinigung im Oberwallis",
    description:
      "Grob- und Feinreinigung nach Neubau, Umbau oder Renovation — termingerecht bezugsfertig in Brig, Visp, Naters und im ganzen Oberwallis.",
    url: "/baureinigung",
    images: [{ url: PHOTO.src, width: PHOTO.width, height: PHOTO.height }],
  },
};

const CHECKLIST = [
  {
    title: "Grobreinigung nach Bauabschluss",
    items: [
      "Bauschutt-Reste, Folien, Verpackungen & Klebebänder entfernen",
      "Kleine Rückstände direkt entsorgen",
      "Groben Baustaub von Böden, Treppen & Fensterbänken aufnehmen",
      "Zement-, Mörtel- & Gipsspritzer anlösen und entfernen",
    ],
  },
  {
    title: "Feinreinigung vor der Übergabe",
    items: [
      "Fenster inkl. Rahmen, Falze & Fensterbänke, ohne Schleif- & Farbspuren",
      "Böden materialgerecht: Versiegelungsreste & Verschmutzungen",
      "Sanitär: Lavabos, Duschen, WC & Armaturen bezugsfertig",
      "Küche: Fronten, Schubladen & Geräte innen und aussen",
      "Feinstaub auf Türen, Zargen, Steckdosen, Schaltern & Heizkörpern",
      "Storen & Rollläden von Baustaub befreit",
    ],
  },
];

const AUDIENCE = [
  {
    title: "Bauherren & Private",
    body: "Sie ziehen in Ihr neues Zuhause ein oder haben renoviert? Wir sorgen dafür, dass Sie in saubere Räume einziehen — ohne Baustaub in Schränken, Fugen und Fensterrahmen.",
  },
  {
    title: "Architekten & Bauleitung",
    body: "Wir richten uns nach Ihrem Bauzeitplan und reinigen in Etappen, damit Abnahmen und Übergaben an die Bauherrschaft pünktlich stattfinden können.",
  },
  {
    title: "Generalunternehmen",
    body: "Mehrere Wohnungen oder ein ganzes Objekt? Wir planen die Reinigung pro Einheit und übergeben Wohnung für Wohnung bezugsfertig.",
  },
  {
    title: "Hausverwaltungen",
    body: "Nach Sanierungen oder Umbauten im Bestand bereiten wir Wohnungen und Allgemeinflächen für die Neuvermietung vor.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Anfrage & Besichtigung",
    body: "Sie schildern uns das Objekt — in den meisten Fällen schauen wir es uns vor Ort an.",
  },
  {
    n: "02",
    title: "Offerte innert 24 h",
    body: "Sie erhalten eine verbindliche Offerte mit festem Preis inkl. Material.",
  },
  {
    n: "03",
    title: "Grob- & Feinreinigung",
    body: "Wir reinigen in den vereinbarten Etappen, abgestimmt auf Ihren Bauzeitplan.",
  },
  {
    n: "04",
    title: "Abnahme",
    body: "Gemeinsame Kontrolle — wir bessern nach, bis alles stimmt.",
  },
];

const FAQ = [
  {
    q: "Was ist der Unterschied zwischen Grob- und Feinreinigung?",
    a: "Die Grobreinigung erfolgt direkt nach Abschluss der Hauptarbeiten: Wir entfernen Folien, Verpackungen, Bauschutt-Reste und den groben Baustaub. Die Feinreinigung folgt kurz vor der Übergabe und macht alle Oberflächen, Fenster, Böden, Küche und Sanitär bezugsfertig.",
  },
  {
    q: "Wann sollte ich die Bauendreinigung einplanen?",
    a: "Sobald der Übergabetermin feststeht. Die Feinreinigung findet statt, wenn alle Handwerkerarbeiten abgeschlossen sind. Melden Sie sich frühzeitig, dann reservieren wir den Termin passend zu Ihrem Bauzeitplan.",
  },
  {
    q: "Reinigen Sie auch nach einem Umbau oder einer Renovation?",
    a: "Ja. Wir reinigen nach Neubauten ebenso wie nach Umbauten, Sanierungen und Renovationen — von der einzelnen Wohnung bis zum ganzen Objekt.",
  },
  {
    q: "Wie wird der Preis berechnet?",
    a: "In den meisten Fällen besichtigen wir das Objekt vorab — oder auf Ihren Wunsch. Danach erhalten Sie innert 24 Stunden eine verbindliche Offerte mit festem Preis inkl. Material und klar definiertem Leistungsumfang.",
  },
  {
    q: "Was passiert mit Bauschutt und Abfällen?",
    a: "Kleine Rückstände wie Folien, Verpackungen und Bauschutt-Reste entfernen und entsorgen wir im Rahmen der Grobreinigung. Wie mit grösseren Mengen umgegangen wird, halten wir vorab in der Offerte fest.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja. Mirdita Reinigung ist betriebshaftpflichtversichert — Ihr Objekt ist während unserer Arbeit abgesichert.",
  },
];

const RELATED = [
  {
    href: "/grundreinigung",
    label: "Grundreinigung",
    desc: "Intensive Tiefenreinigung, wenn ein Objekt mehr als die übliche Reinigung braucht.",
  },
  {
    href: "/fensterreinigung",
    label: "Fensterreinigung",
    desc: "Fenster, Glasflächen und Storen streifenfrei — auch nach dem Bau.",
  },
  {
    href: "/hauswartung",
    label: "Hauswartung",
    desc: "Regelmässige Pflege von Treppenhaus und Allgemeinflächen nach dem Bezug.",
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
              Baureinigung
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Baureinigung & <span className="text-brand-bright">Bauendreinigung</span> im
              Oberwallis.
            </h1>
            <p className="mt-6 text-lg text-brand-deep/65 max-w-xl leading-relaxed">
              Nach dem letzten Pinselstrich beginnt unsere Arbeit. Wir entfernen Bauschutt-Reste,
              Schleifstaub, Farb- und Kleberreste und übergeben Ihre Liegenschaft termingerecht
              bezugsfertig — ob Neubau, Umbau oder Renovation in Brig-Glis, Visp, Naters oder im
              ganzen Oberwallis.
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
                <span>Termingerecht nach Bauzeitplan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-brand-bright" />
                <span>Offerte innert 24 Stunden</span>
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
              Das gehört zur Bauendreinigung
            </h2>
            <p className="mt-4 text-brand-deep/65 leading-relaxed max-w-2xl">
              Eine Bauendreinigung besteht aus zwei Etappen: der Grobreinigung direkt nach den
              Hauptarbeiten und der Feinreinigung kurz vor der Schlüsselübergabe. Wir übernehmen
              beide — einzeln oder als Paket — und halten den vereinbarten Termin ein.
            </p>
            <ChecklistGroups groups={CHECKLIST} />
          </Reveal>
        </div>
      </section>

      <AudienceSection
        eyebrow="Für wen"
        title="Für wen wir Baureinigungen übernehmen"
        intro="Ob Einfamilienhaus, Mehrfamilienhaus oder Gewerbefläche: Wir passen Umfang und Ablauf an Ihr Projekt an."
        items={AUDIENCE}
      />

      <ProcessSteps title="So läuft Ihre Baureinigung ab" steps={STEPS} />

      <ProseSection
        eyebrow="Einsatzgebiet"
        title="Baureinigung in Brig-Glis, Naters, Visp und im ganzen Oberwallis"
        paragraphs={[
          <>
            Von unserem Sitz in Naters aus sind wir schnell auf Ihrer Baustelle — in{" "}
            <Link href="/reinigung-brig-glis" className={PROSE_LINK}>
              Brig-Glis
            </Link>
            ,{" "}
            <Link href="/reinigung-naters" className={PROSE_LINK}>
              Naters
            </Link>
            ,{" "}
            <Link href="/reinigung-visp" className={PROSE_LINK}>
              Visp
            </Link>{" "}
            und im ganzen Oberwallis, von{" "}
            <Link href="/reinigung-fiesch" className={PROSE_LINK}>
              Fiesch
            </Link>{" "}
            bis{" "}
            <Link href="/reinigung-leuk" className={PROSE_LINK}>
              Leuk
            </Link>
            . Kurze Wege bedeuten für Sie: Verschiebt sich der Bauzeitplan, können wir eine Etappe
            auch kurzfristig neu einplanen.
          </>,
          <>
            In wachsenden Gemeinden wie{" "}
            <Link href="/reinigung-gampel" className={PROSE_LINK}>
              Gampel
            </Link>
            ,{" "}
            <Link href="/reinigung-steg" className={PROSE_LINK}>
              Steg
            </Link>{" "}
            oder{" "}
            <Link href="/reinigung-baltschieder" className={PROSE_LINK}>
              Baltschieder
            </Link>{" "}
            entstehen laufend neue Wohnungen und Gewerberäume. In Ferienorten wie{" "}
            <Link href="/reinigung-zermatt" className={PROSE_LINK}>
              Zermatt
            </Link>{" "}
            und{" "}
            <Link href="/reinigung-saas-fee" className={PROSE_LINK}>
              Saas-Fee
            </Link>{" "}
            reinigen wir Chalets und Ferienwohnungen nach dem Umbau, damit sie rechtzeitig zum
            Saisonstart bereit sind.
          </>,
        ]}
      />

      <DeServiceLinks
        eyebrow="Passende Leistungen"
        title="Nach dem Bau: weitere Reinigungen"
        services={RELATED}
      />

      <ReviewsSection googleReviews={googleReviews} />

      <FaqSection eyebrow="Häufige Fragen" title="Fragen zur Baureinigung" items={FAQ} />

      <EinsatzgebietSection />

      <ContactSection
        title="Termin im Bauablauf? Wir richten uns danach."
        intro="Fordern Sie eine kostenlose Offerte für Ihre Bau- oder Bauendreinigung an — wir planen flexibel rund um Ihren Bauzeitplan und melden uns innert 24 Stunden."
        defaultType="Baureinigung"
      />

      <SiteFooter />
    </div>
  );
}
