"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Home as HomeIcon,
  Menu,
  X,
  Quote,
} from "lucide-react";

const LOGO = "/mirdita-logo.svg";
const MARK = "/mirdita-mark.svg";
const PHOTO_HERO = "/hero-fenster.svg";
const PHOTO_DETAIL = "/detail-kueche.svg";
const PHOTO_TEAM = "/team-reinigung.svg";

const NAV = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

type ServiceKey = "privat" | "firmen" | "spezial";

const SERVICES: Record<
  ServiceKey,
  {
    label: string;
    icon: typeof HomeIcon;
    title: string;
    description: string;
    items: string[];
    image: string;
    imageAlt: string;
  }
> = {
  privat: {
    label: "Privathaushalt",
    icon: HomeIcon,
    title: "Reinigung für Ihr Zuhause",
    description:
      "Ob Umzug, Frühlingsputz oder regelmässige Pflege — wir hinterlassen Ihr Zuhause makellos sauber. Mit Abnahmegarantie bei Wohnungsübergaben.",
    items: [
      "Umzugsreinigung mit Abnahmegarantie",
      "Wohnungs- & Hausreinigung",
      "Unterhalts- & Frühlingsputz",
      "Fenster, Storen & Rollläden",
      "Teppich- & Polsterpflege",
    ],
    image: PHOTO_DETAIL,
    imageAlt: "Mirdita Mitarbeiter reinigt eine Küchenarbeitsplatte",
  },
  firmen: {
    label: "Firmen & Gewerbe",
    icon: Building2,
    title: "Sauberkeit für Ihren Betrieb",
    description:
      "Repräsentative Räume sind Ihre Visitenkarte. Wir reinigen diskret ausserhalb Ihrer Geschäftszeiten — zuverlässig und nach Schweizer Standard.",
    items: [
      "Büro- & Praxisreinigung",
      "Ladenlokale & Showrooms",
      "Fitness- & Wellnessbereiche",
      "Baureinigung & Bauendreinigung",
      "Regelmässige Wartungsabos",
    ],
    image: PHOTO_TEAM,
    imageAlt: "Mirdita Mitarbeiterin bei der Reinigung einer Küchenfront",
  },
  spezial: {
    label: "Spezialreinigungen",
    icon: Sparkles,
    title: "Spezielle Anforderungen",
    description:
      "Für alles, was über die klassische Reinigung hinausgeht. Wir bringen das richtige Equipment und die Erfahrung mit.",
    items: [
      "Fassaden- & Glasflächenreinigung",
      "Teppich- & Polster-Tiefenreinigung",
      "Desinfektion & Geruchsneutralisation",
      "Steinboden- & Parkettpflege",
      "Wasser- & Brandschadenreinigung",
    ],
    image: PHOTO_HERO,
    imageAlt: "Mirdita Mitarbeiter reinigt eine grosse Glasfront",
  },
};

const STEPS = [
  { n: "01", title: "Anfrage", body: "Sie kontaktieren uns per Formular oder Telefon." },
  { n: "02", title: "Offerte", body: "Innert 24 h erhalten Sie ein transparentes Angebot." },
  { n: "03", title: "Reinigung", body: "Unser Team arbeitet zuverlässig und termingerecht." },
  { n: "04", title: "Abnahme", body: "Garantierte Übergabe — wir bleiben bis alles stimmt." },
];

const REVIEWS = [
  {
    name: "Sandra B.",
    location: "Sion",
    text: "Pünktlich, super gründlich und sehr freundlich. Die Wohnungsübergabe war problemlos — sehr empfehlenswert!",
  },
  {
    name: "Marco F.",
    location: "Visp",
    text: "Wir lassen unser Büro seit zwei Jahren von Mirdita reinigen. Top Qualität und faire Preise.",
  },
  {
    name: "Lea M.",
    location: "Sierre",
    text: "Hatte kurzfristig eine Umzugsreinigung gebraucht — innert 48 Stunden organisiert. Klare Empfehlung.",
  },
];

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-brand-deep/5 ${className}`}>
      <Image src={src} alt={alt} fill unoptimized className="object-cover" />
    </div>
  );
}

export function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey>("privat");
  const active = SERVICES[activeService];
  const ActiveIcon = active.icon;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Anfrage gesendet", {
      description: "Danke — wir melden uns innert 24 Stunden bei Ihnen.",
    });
  }

  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-brand-light/85 backdrop-blur border-b border-brand-deep/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center" aria-label="Mirdita — Startseite">
            <Image
              src={LOGO}
              alt="Mirdita Reinigungsdienste"
              width={459}
              height={91}
              unoptimized
              className="h-7 md:h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-deep/70">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-brand-deep transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+41000000000"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-brand-deep/80 hover:text-brand-deep border border-brand-deep/10 rounded-full px-3 py-2"
            >
              <Phone className="size-3.5" />
              <span className="hidden lg:inline">+41 27 000 00 00</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-brand-bright text-white text-sm font-semibold rounded-full px-4 py-2.5 hover:brightness-110 transition-all"
            >
              Offerte
              <ArrowRight className="size-3.5" />
            </a>
            <button
              className="md:hidden p-2 -mr-2 text-brand-deep"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menü"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-brand-deep/5 px-5 py-4 space-y-3 bg-brand-light">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1.5 text-sm font-medium text-brand-deep/80"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero — asymmetric split */}
      <section id="top" className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold tracking-wide">
              <span className="size-1.5 rounded-full bg-brand-bright" />
              Reinigung im ganzen Wallis
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
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
                className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
              >
                Kostenlose Offerte
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-deep/70">
              <div className="flex items-center gap-2">
                <div className="flex text-brand-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-brand-deep">4.9/5</span>
                <span>· 120+ Bewertungen</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>Abnahmegarantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-brand-bright" />
                <span>Eigenes Profi-Equipment</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <Photo
              src={PHOTO_HERO}
              alt="Mirdita Mitarbeiter reinigt eine Glasfront mit Walliser Bergen im Hintergrund"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
            {/* Floating stat card */}
            <div className="absolute -left-4 md:-left-8 bottom-6 md:bottom-10 bg-white rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,21,63,0.25)] border border-brand-deep/5 p-4 md:p-5 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-brand-deep grid place-items-center p-1.5">
                  <Image
                    src={MARK}
                    alt=""
                    width={140}
                    height={64}
                    unoptimized
                    className="max-h-full max-w-full w-auto h-auto brightness-0 invert"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold leading-none">100%</div>
                  <div className="text-xs text-brand-deep/60 mt-1">Abnahmegarantie</div>
                </div>
              </div>
            </div>
            {/* Floating badge top */}
            <div className="hidden md:flex absolute -right-4 top-8 bg-brand-bright text-white rounded-full px-4 py-2 text-xs font-semibold shadow-lg gap-2 items-center">
              <Sparkles className="size-3.5" />
              Seit 2014 im Wallis
            </div>
          </div>
        </div>
      </section>

      {/* Services — Tabs */}
      <section id="leistungen" className="px-5 md:px-10 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
                Leistungen
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
                Wofür dürfen wir putzen?
              </h2>
            </div>
            <p className="text-brand-deep/65 md:max-w-sm">
              Wählen Sie Ihren Bereich — wir zeigen Ihnen, was wir konkret übernehmen.
            </p>
          </div>

          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(SERVICES) as ServiceKey[]).map((key) => {
              const s = SERVICES[key];
              const Icon = s.icon;
              const isActive = key === activeService;
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all border ${
                    isActive
                      ? "bg-brand-deep text-white border-brand-deep"
                      : "bg-white text-brand-deep/75 border-brand-deep/10 hover:border-brand-deep/30"
                  }`}
                >
                  <Icon className="size-4" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="rounded-[28px] bg-white border border-brand-deep/5 overflow-hidden shadow-[0_20px_50px_-30px_rgba(0,21,63,0.2)]">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col">
                <div className="inline-flex items-center gap-2 w-fit rounded-full bg-brand-bright/10 text-brand-bright px-3 py-1.5 text-xs font-semibold">
                  <ActiveIcon className="size-3.5" />
                  {active.label}
                </div>
                <h3 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 text-brand-deep/65 leading-relaxed">{active.description}</p>
                <ul className="mt-6 space-y-3">
                  {active.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="size-5 rounded-full bg-brand-bright/15 text-brand-bright grid place-items-center shrink-0 mt-0.5">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-brand-deep/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 w-fit bg-brand-bright text-white rounded-full px-5 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  Offerte für {active.label}
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <Photo
                src={active.image}
                alt={active.imageAlt}
                className="min-h-[320px] lg:min-h-full aspect-[16/10] lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              So einfach geht&apos;s
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              In vier Schritten zum sauberen Ergebnis
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white border border-brand-deep/5 p-6"
              >
                <div className="text-xs font-bold text-brand-bright tracking-widest">{s.n}</div>
                <h4 className="mt-2 font-semibold text-lg">{s.title}</h4>
                <p className="mt-2 text-sm text-brand-deep/60 leading-relaxed">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 size-5 text-brand-deep/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — Quote */}
      <section id="ueber-uns" className="px-5 md:px-10 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Über uns
            </span>
            <Quote className="mt-4 size-10 text-brand-bright/30" strokeWidth={1.5} />
            <blockquote className="mt-2 text-2xl md:text-3xl font-medium leading-snug tracking-tight text-balance">
              „Wir sind ein lokales Familienunternehmen aus dem Wallis. Jede Reinigung erledigen
              wir, als wäre es unser eigenes Zuhause — mit echter Sorgfalt und Schweizer
              Gründlichkeit.&quot;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <Photo
                src={PHOTO_TEAM}
                alt="Mirdita Team"
                className="size-14 rounded-full shrink-0"
              />
              <div>
                <div className="font-semibold">Familie Mirdita</div>
                <div className="text-sm text-brand-deep/60">Gründer · Wallis</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              { v: "10+", l: "Jahre Erfahrung" },
              { v: "500+", l: "Aufträge" },
              { v: "100%", l: "Garantie" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl bg-white border border-brand-deep/5 p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-deep">{s.v}</div>
                <div className="mt-1 text-xs text-brand-deep/60 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="bewertungen" className="px-5 md:px-10 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
                Bewertungen
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
                Was unsere Kund:innen sagen
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold">4.9</div>
              <div>
                <div className="flex text-brand-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-brand-deep/60 mt-0.5">120+ Bewertungen</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl bg-white border border-brand-deep/5 p-6 flex flex-col"
              >
                <div className="flex text-brand-bright mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-brand-deep/80 leading-relaxed text-sm flex-grow">
                  „{r.text}&quot;
                </p>
                <div className="mt-5 pt-5 border-t border-brand-deep/5">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-brand-deep/55">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="px-5 md:px-10 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-3 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-10">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Kontakt
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Offerte anfordern
            </h2>
            <p className="mt-3 text-brand-deep/65">
              Erzählen Sie uns kurz von Ihrem Anliegen. Wir melden uns innert 24 Stunden.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="E-Mail" name="email" type="email" required />
              <Field label="Telefon" name="phone" />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-brand-deep/70">
                  Art der Reinigung
                </label>
                <select
                  name="type"
                  defaultValue=""
                  className="h-12 rounded-xl border border-brand-deep/10 px-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright"
                >
                  <option value="" disabled>
                    Bitte wählen…
                  </option>
                  <option>Umzugsreinigung</option>
                  <option>Wohnungs-/Hausreinigung</option>
                  <option>Büro- & Gewerbereinigung</option>
                  <option>Spezialreinigung</option>
                  <option>Etwas anderes</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-brand-deep/70">Nachricht</label>
                <textarea
                  name="message"
                  rows={4}
                  className="rounded-xl border border-brand-deep/10 p-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright resize-none"
                  placeholder="Adresse, gewünschter Termin, Grösse des Objekts …"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex justify-center items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all"
              >
                Anfrage senden
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          {/* Info card */}
          <aside className="lg:col-span-2 rounded-[28px] bg-brand-deep text-white p-8 md:p-10 flex flex-col">
            <h3 className="text-xl font-bold">Direkt erreichbar</h3>
            <p className="mt-2 text-white/65 text-sm">
              Lieber per Telefon oder E-Mail? Kein Problem.
            </p>
            <ul className="mt-8 space-y-5">
              <InfoLine
                icon={Phone}
                label="Telefon"
                value="+41 27 000 00 00"
                href="tel:+41270000000"
              />
              <InfoLine
                icon={Mail}
                label="E-Mail"
                value="info@mirdita.ch"
                href="mailto:info@mirdita.ch"
              />
              <InfoLine icon={MapPin} label="Adresse" value="Wallis, Schweiz" />
              <InfoLine icon={Clock} label="Öffnungszeiten" value="Mo–Fr 08:00–18:00" />
            </ul>
            <div className="mt-auto pt-8">
              <Photo
                src={PHOTO_DETAIL}
                alt="Mirdita Detailreinigung"
                className="aspect-[4/3] w-full rounded-2xl border border-white/10"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-deep/5 px-5 md:px-10 py-12 mt-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <a href="#top" className="flex items-center" aria-label="Mirdita — nach oben">
              <Image
                src={LOGO}
                alt="Mirdita Reinigungsdienste"
                width={459}
                height={91}
                unoptimized
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-3 text-sm text-brand-deep/55 max-w-xs">
              Ihr Partner für Sauberkeit im ganzen Kanton Wallis.
            </p>
          </div>
          <FooterCol
            title="Leistungen"
            links={["Umzugsreinigung", "Wohnungsreinigung", "Büroreinigung", "Spezialreinigung"]}
          />
          <FooterCol
            title="Kontakt"
            links={["+41 27 000 00 00", "info@mirdita.ch", "Wallis, CH"]}
          />
          <FooterCol title="Rechtliches" links={["Impressum", "Datenschutz", "AGB"]} />
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-brand-deep/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-deep/50">
          <span>© {new Date().getFullYear()} Mirdita GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <span className="font-semibold text-brand-deep/70">DE</span>
            <span>FR</span>
            <span>IT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-brand-deep/70">
        {label}
        {required && <span className="text-brand-bright"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-12 rounded-xl border border-brand-deep/10 px-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright"
      />
    </div>
  );
}

function InfoLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="size-10 rounded-xl bg-white/10 grid place-items-center shrink-0">
        <Icon className="size-4" />
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-widest text-white/50">{label}</span>
        <span className="font-semibold">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-3 hover:text-brand-bright transition-colors"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-3">{content}</div>
      )}
    </li>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-deep mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-brand-deep/60">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-brand-bright transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
