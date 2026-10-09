"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { PHOTO_PUTZEN, SERVICE_LINKS_DE, SERVICE_LINKS_FR } from "@/components/site-config";

const COPY = {
  de: {
    eyebrow: "Kontakt",
    title: "Offerte anfordern",
    intro: "Erzählen Sie uns kurz von Ihrem Anliegen. Wir melden uns innert 24 Stunden.",
    types: [...SERVICE_LINKS_DE.map((s) => s.label), "Etwas anderes"],
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    type: "Art der Reinigung",
    choose: "Bitte wählen…",
    message: "Nachricht",
    placeholder: "Adresse, gewünschter Termin, Grösse des Objekts …",
    sending: "Senden…",
    submit: "Anfrage senden",
    okTitle: "Anfrage gesendet",
    okBody: "Danke — wir melden uns innert 24 Stunden bei Ihnen.",
    errTitle: "Senden fehlgeschlagen",
    errBody:
      "Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch unter +41 76 202 79 84.",
    cardTitle: "Direkt erreichbar",
    cardBody: "Lieber per Telefon oder E-Mail? Kein Problem.",
    address: "Adresse",
    addressValue: "Wallis, Schweiz",
    photoAlt: "Mirdita Detailreinigung",
  },
  fr: {
    eyebrow: "Contact",
    title: "Demander un devis",
    intro: "Décrivez-nous brièvement votre besoin. Nous vous répondons dans les 24 heures.",
    types: [...SERVICE_LINKS_FR.map((s) => s.label), "Autre demande"],
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    type: "Type de nettoyage",
    choose: "Veuillez choisir…",
    message: "Message",
    placeholder: "Adresse, date souhaitée, taille de l’objet …",
    sending: "Envoi…",
    submit: "Envoyer la demande",
    okTitle: "Demande envoyée",
    okBody: "Merci — nous vous répondons dans les 24 heures.",
    errTitle: "Échec de l’envoi",
    errBody: "Veuillez réessayer ou nous appeler directement au +41 76 202 79 84.",
    cardTitle: "Joignables directement",
    cardBody: "Vous préférez le téléphone ou l’e-mail ? Aucun problème.",
    address: "Adresse",
    addressValue: "Valais, Suisse",
    photoAlt: "Nettoyage de détail Mirdita",
  },
};

/**
 * Quote form + direct-contact card, used at the bottom of the homepages and of
 * every service, city and about page (anchor #kontakt). Title and intro can be
 * set per page; `defaultType` preselects the matching service. The page path
 * is sent along so the email shows where the request came from.
 */
export function ContactSection({
  lang = "de",
  title,
  intro,
  defaultType,
}: {
  lang?: "de" | "fr";
  title?: string;
  intro?: string;
  defaultType?: string;
}) {
  const t = COPY[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          website: data.get("website"),
          page: window.location.pathname,
        }),
      });

      if (!res.ok) throw new Error("request_failed");

      form.reset();
      trackEvent("generate_lead", { method: "contact_form" });
      toast.success(t.okTitle, { description: t.okBody });
    } catch {
      toast.error(t.errTitle, { description: t.errBody });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="px-5 md:px-10 py-20">
      <div
        id="kontakt"
        className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-6 lg:gap-8 scroll-mt-20"
      >
        {/* Form */}
        <Reveal className="lg:col-span-3 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-10">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-balance">
            {title ?? t.title}
          </h2>
          <p className="mt-3 text-brand-deep/65">{intro ?? t.intro}</p>
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <Field label={t.name} name="name" autoComplete="name" required />
            <Field label={t.email} name="email" type="email" autoComplete="email" required />
            <Field label={t.phone} name="phone" type="tel" autoComplete="tel" />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-type" className="text-xs font-semibold text-brand-deep/70">
                {t.type}
              </label>
              <select
                id="contact-type"
                name="type"
                defaultValue={defaultType ?? ""}
                className="h-12 rounded-xl border border-brand-deep/10 px-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright"
              >
                <option value="" disabled>
                  {t.choose}
                </option>
                {t.types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold text-brand-deep/70">
                {t.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="rounded-xl border border-brand-deep/10 p-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright resize-none"
                placeholder={t.placeholder}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 inline-flex justify-center items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.sending : t.submit}
              <ArrowRight className="size-4" />
            </button>
          </form>
        </Reveal>

        {/* Info card */}
        <aside className="lg:col-span-2 rounded-[28px] bg-brand-deep text-white p-8 md:p-10 flex flex-col">
          <h3 className="text-xl font-bold">{t.cardTitle}</h3>
          <p className="mt-2 text-white/65 text-sm">{t.cardBody}</p>
          <ul className="mt-8 space-y-5">
            <InfoLine
              icon={Phone}
              label={t.phone}
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
              label={t.email}
              value="info@mirdita.ch"
              href="mailto:info@mirdita.ch"
            />
            <InfoLine icon={MapPin} label={t.address} value={t.addressValue} />
          </ul>
          <div className="hidden lg:block mt-auto pt-8">
            <Photo
              src={PHOTO_PUTZEN}
              alt={t.photoAlt}
              className="aspect-[4/3] w-full rounded-2xl border border-white/10"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`contact-${name}`} className="text-xs font-semibold text-brand-deep/70">
        {label}
        {required && <span className="text-brand-bright"> *</span>}
      </label>
      <input
        id={`contact-${name}`}
        type={type}
        name={name}
        autoComplete={autoComplete}
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
