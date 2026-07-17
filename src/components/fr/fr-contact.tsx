"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/reveal";

const TYPES = [
  "Nettoyage fin de bail",
  "Nettoyage d’appartement",
  "Nettoyage régulier",
  "Nettoyage de bureaux",
  "Nettoyage de vitres",
  "Nettoyage de fin de chantier",
  "Autre demande",
];

/**
 * French quote form. Posts to the same /api/contact endpoint as the German
 * site; only the labels and toasts are French. `defaultType` preselects the
 * relevant service when embedded on a specific service page.
 */
export function FrContact({ defaultType }: { defaultType?: string }) {
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
        }),
      });

      if (!res.ok) throw new Error("request_failed");

      form.reset();
      trackEvent("generate_lead", { method: "contact_form" });
      toast.success("Demande envoyée", {
        description: "Merci — nous vous répondons dans les 24 heures.",
      });
    } catch {
      toast.error("Échec de l’envoi", {
        description: "Veuillez réessayer ou nous appeler directement au +41 76 202 79 84.",
      });
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
        <Reveal className="lg:col-span-3 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-10">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Contact
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Demander un devis gratuit
          </h2>
          <p className="mt-3 text-brand-deep/65">
            Décrivez-nous brièvement votre besoin. Nous vous répondons dans les 24 heures. Vous
            pouvez aussi nous envoyer des photos par WhatsApp pour un devis rapide.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <Field label="Nom" name="name" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Téléphone" name="phone" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-brand-deep/70">Type de nettoyage</label>
              <select
                name="type"
                defaultValue={defaultType ?? ""}
                className="h-12 rounded-xl border border-brand-deep/10 px-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright"
              >
                <option value="" disabled>
                  Veuillez choisir…
                </option>
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-brand-deep/70">Message</label>
              <textarea
                name="message"
                rows={4}
                className="rounded-xl border border-brand-deep/10 p-4 text-sm bg-white text-brand-deep focus:outline-none focus:border-brand-bright resize-none"
                placeholder="Adresse, date souhaitée, taille du logement ou des locaux …"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 inline-flex justify-center items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi…" : "Envoyer la demande"}
              <ArrowRight className="size-4" />
            </button>
          </form>
        </Reveal>

        <aside className="lg:col-span-2 rounded-[28px] bg-brand-deep text-white p-8 md:p-10 flex flex-col">
          <h3 className="text-xl font-bold">Joignables directement</h3>
          <p className="mt-2 text-white/65 text-sm">
            Vous préférez le téléphone ou WhatsApp ? Aucun problème.
          </p>
          <ul className="mt-8 space-y-5">
            <InfoLine
              icon={Phone}
              label="Téléphone"
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
              label="E-mail"
              value="info@mirdita.ch"
              href="mailto:info@mirdita.ch"
            />
            <InfoLine icon={MapPin} label="Région" value="Tout le Valais · Naters" />
          </ul>
        </aside>
      </div>
    </section>
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
