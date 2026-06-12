"use client";

import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Photo } from "@/components/photo";
import { ProcessSteps } from "@/components/process-steps";
import {
  PHOTO_HERO,
  PHOTO_PUTZEN,
  PHOTO_TEAM,
  SERVICES,
  type ServiceKey,
} from "@/components/site-config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews";

function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="w-[320px] md:w-[380px] shrink-0 rounded-2xl bg-white border border-brand-deep/5 p-6 flex flex-col">
      <div className="flex text-brand-bright mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-current" />
        ))}
      </div>
      <p className="text-brand-deep/80 leading-relaxed text-sm line-clamp-6">
        „{review.text}&quot;
      </p>
      <div className="mt-5 pt-5 border-t border-brand-deep/5">
        <div className="font-semibold text-sm">{review.name}</div>
        <div className="text-xs text-brand-deep/55">{review.time}</div>
      </div>
    </div>
  );
}

function ReviewsMarquee({ reviews }: { reviews: GoogleReview[] }) {
  const items = [...reviews, ...reviews];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const SPEED = 40; // px per second
    let frameId: number;
    let lastTime: number | null = null;

    function tick(now: number) {
      if (lastTime === null) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      if (!draggingRef.current) {
        offsetRef.current -= (SPEED * dt) / 1000;
      }

      const track = trackRef.current;
      if (track) {
        const setWidth = track.scrollWidth / 2;
        if (setWidth > 0) {
          let o = offsetRef.current % setWidth;
          if (o > 0) o -= setWidth;
          offsetRef.current = o;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    offsetRef.current = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current);
  }

  function handlePointerUp() {
    draggingRef.current = false;
  }

  return (
    <div className="relative -mx-5 md:-mx-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-brand-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-brand-light to-transparent" />
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="flex w-max cursor-grab touch-pan-y gap-5 px-5 select-none active:cursor-grabbing md:px-10"
      >
        {items.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export function Home({ googleReviews }: { googleReviews: GoogleReviewsData }) {
  const [activeService, setActiveService] = useState<ServiceKey>("privat");
  const [reviews, setReviews] = useState(googleReviews.reviews);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const active = SERVICES[activeService];
  const ActiveIcon = active.icon;

  useEffect(() => {
    setReviews((current) => {
      const shuffled = [...current];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          type: data.get("type"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("request_failed");

      form.reset();
      toast.success("Anfrage gesendet", {
        description: "Danke — wir melden uns innert 24 Stunden bei Ihnen.",
      });
    } catch {
      toast.error("Senden fehlgeschlagen", {
        description:
          "Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch unter +41 76 202 79 84.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      {/* Hero — asymmetric split */}
      <section id="top" className="px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24 scroll-mt-16">
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
                <span className="font-semibold text-brand-deep">
                  {googleReviews.rating.toFixed(1)}/5
                </span>
                <span>· {googleReviews.total} Bewertungen</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-bright" />
                <span>Abnahmegarantie</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              src={PHOTO_HERO}
              alt="Mirdita Mitarbeiter reinigt eine Glasfront mit Walliser Bergen im Hintergrund"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,21,63,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Services — Tabs */}
      <section className="px-5 md:px-10 py-20">
        <div id="leistungen" className="max-w-7xl mx-auto scroll-mt-20">
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
            <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[600px]">
              <div className="p-8 md:p-12 flex flex-col justify-center">
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
                objectPosition={active.imagePosition}
                className="hidden lg:block min-h-[320px] lg:min-h-full aspect-[16/10] lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* About */}
      <section className="px-5 md:px-10 py-20">
        <div
          id="ueber-uns"
          className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center scroll-mt-20"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
              Über uns
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-balance">
              Wir versprechen weniger — und halten mehr.
            </h2>
            <p className="mt-4 text-brand-deep/70 leading-relaxed">
              Viele versprechen Sauberkeit. Wir definieren vorab präzise, was gereinigt wird, zu
              welchem Preis und bis wann. Danach halten wir uns daran — ohne Nachverhandlungen, ohne
              Überraschungen. Bei Umzugsreinigungen gehen wir einen Schritt weiter: Mit unserer
              Abnahmegarantie tragen wir das Risiko der Wohnungsübergabe. Wird etwas beanstandet,
              bessern wir kostenlos nach.
            </p>
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
      <section className="px-5 md:px-10 py-20">
        <div id="bewertungen" className="max-w-7xl mx-auto scroll-mt-20">
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
              <div className="text-4xl font-bold">{googleReviews.rating.toFixed(1)}</div>
              <div>
                <div className="flex text-brand-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <a
                  href="https://www.google.com/maps/place/Mirdita+Reinigung,+Belalpstrasse+2,+3904+Naters/@0,0,22z/data=!4m2!3m1!1s0x42c5237190cbda61:0xdc13d84cf19fc3d0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 flex items-center gap-1.5 text-xs text-brand-deep/60 hover:text-brand-bright transition-colors"
                >
                  <GoogleLogo className="size-3.5" />
                  {googleReviews.total} Bewertungen
                </a>
              </div>
            </div>
          </div>
          <ReviewsMarquee reviews={reviews} />
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 md:px-10 py-20">
        <div
          id="kontakt"
          className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-6 lg:gap-8 scroll-mt-20"
        >
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
                disabled={isSubmitting}
                className="sm:col-span-2 inline-flex justify-center items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Senden…" : "Anfrage senden"}
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
                value="+41 76 202 79 84"
                href="tel:+41762027984"
              />
              <InfoLine
                icon={MessageCircle}
                label="WhatsApp"
                value="+41 76 202 79 84"
                href="https://wa.me/41762027984"
                external
              />
              <InfoLine
                icon={Mail}
                label="E-Mail"
                value="info@mirdita.ch"
                href="mailto:info@mirdita.ch"
              />
              <InfoLine icon={MapPin} label="Adresse" value="Wallis, Schweiz" />
            </ul>
            <div className="hidden lg:block mt-auto pt-8">
              <Photo
                src={PHOTO_PUTZEN}
                alt="Mirdita Detailreinigung"
                className="aspect-[4/3] w-full rounded-2xl border border-white/10"
              />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
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
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
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
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-3">{content}</div>
      )}
    </li>
  );
}
