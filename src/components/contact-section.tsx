"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, ImagePlus, Mail, MapPin, MessageCircle, Phone, X } from "lucide-react";

import { cta, trackLead, type CtaAttributes } from "@/lib/analytics";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { PHOTO_PUTZEN, SERVICE_LINKS_DE, SERVICE_LINKS_FR } from "@/components/site-config";
import { BUSINESS, FULL_ADDRESS, WHATSAPP_URL } from "@/config/site";

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
    errBody: `Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch unter ${BUSINESS.phone}.`,
    cardTitle: "Direkt erreichbar",
    cardBody: "Lieber per Telefon oder E-Mail? Kein Problem.",
    address: "Adresse",
    photoAlt: "Mirdita Detailreinigung",
    photos: "Bilder (falls vorhanden)",
    photosAdd: "Fotos hinzufügen",
    photosHint: "Bis zu 5 Fotos — hilft uns, schneller eine genaue Offerte zu erstellen.",
    photosMax: "Maximal 5 Fotos pro Anfrage.",
    photosFailed: "Ein Foto konnte nicht gelesen werden. Bitte als JPG oder PNG versuchen.",
    photoRemove: "Foto entfernen",
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
    errBody: `Veuillez réessayer ou nous appeler directement au ${BUSINESS.phone}.`,
    cardTitle: "Joignables directement",
    cardBody: "Vous préférez le téléphone ou l’e-mail ? Aucun problème.",
    address: "Adresse",
    photoAlt: "Nettoyage de détail Mirdita",
    photos: "Photos (si disponibles)",
    photosAdd: "Ajouter des photos",
    photosHint: "Jusqu’à 5 photos — cela nous aide à établir plus vite un devis précis.",
    photosMax: "5 photos au maximum par demande.",
    photosFailed: "Une photo n’a pas pu être lue. Veuillez essayer en JPG ou PNG.",
    photoRemove: "Retirer la photo",
  },
};

const MAX_PHOTOS = 5;
const MAX_EDGE = 1600;
// 5 photos × ~600 KB (≈ 800 KB as base64) keeps a request near 4 MB at most,
// below Vercel's ~4.5 MB body limit.
const MAX_PHOTO_BYTES = 600 * 1024;

type Photo = { name: string; data: string; preview: string };

/**
 * Downscales a picked image in the browser to a JPEG of at most ~600 KB: starts
 * at 1600 px / quality 0.72 and steps quality, then size, down until it fits.
 */
async function compressImage(file: File): Promise<Photo> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  let edge = MAX_EDGE;
  let quality = 0.72;
  let dataUrl = "";
  for (let attempt = 0; attempt < 8; attempt++) {
    const scale = Math.min(1, edge / Math.max(bitmap.width, bitmap.height));
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    dataUrl = canvas.toDataURL("image/jpeg", quality);
    if ((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75 <= MAX_PHOTO_BYTES) break;
    if (quality > 0.5) quality -= 0.1;
    else edge = Math.round(edge * 0.8);
  }
  bitmap.close();
  const base = file.name.replace(/\.[^.]+$/, "") || "foto";
  return { name: `${base}.jpg`, data: dataUrl.split(",")[1], preview: dataUrl };
}

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
  // Synchronous lock: guarantees one request (and at most one lead) per submit.
  const submitting = useRef(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  async function handlePhotos(e: ChangeEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const files = Array.from(input.files ?? []);
    input.value = "";
    const room = MAX_PHOTOS - photos.length;
    if (files.length > room) toast.error(t.photosMax);
    const added: Photo[] = [];
    for (const file of files.slice(0, Math.max(0, room))) {
      try {
        added.push(await compressImage(file));
      } catch {
        toast.error(t.photosFailed);
      }
    }
    setPhotos((current) => [...current, ...added].slice(0, MAX_PHOTOS));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
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
          photos: photos.map(({ name, data }) => ({ name, data })),
        }),
      });

      if (!res.ok) throw new Error("request_failed");

      form.reset();
      setPhotos([]);
      // Only real submissions count: a filled honeypot means a bot, which the
      // API silently accepts without sending anything.
      if (!data.get("website")) trackLead("offerte_formular");
      toast.success(t.okTitle, { description: t.okBody });
    } catch {
      toast.error(t.errTitle, { description: t.errBody });
    } finally {
      setIsSubmitting(false);
      submitting.current = false;
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
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-brand-deep/70">{t.photos}</span>
              <div className="flex flex-wrap gap-2">
                {photos.map((photo, i) => (
                  <div
                    key={`${photo.name}-${i}`}
                    className="relative size-20 overflow-hidden rounded-xl border border-brand-deep/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo.preview} alt="" className="size-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPhotos((cur) => cur.filter((_, j) => j !== i))}
                      aria-label={t.photoRemove}
                      className="absolute right-1 top-1 grid size-6 place-items-center rounded-full bg-brand-deep/80 text-white"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
                {photos.length < MAX_PHOTOS && (
                  <label className="flex size-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-brand-deep/20 bg-brand-light text-brand-deep/60 transition-colors hover:border-brand-bright hover:text-brand-bright">
                    <ImagePlus className="size-5" />
                    <span className="text-[10px] font-semibold leading-tight text-center px-1">
                      {t.photosAdd}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotos}
                      className="sr-only"
                    />
                  </label>
                )}
              </div>
              <span className="text-xs text-brand-deep/50">{t.photosHint}</span>
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
              value={BUSINESS.phone}
              href={BUSINESS.phoneHref}
              tracking={cta("phone_contact_card", "contact_card")}
            />
            <InfoLine
              icon={MessageCircle}
              label="WhatsApp"
              value={BUSINESS.phone}
              href={WHATSAPP_URL}
              tracking={cta("whatsapp_contact_card", "contact_card")}
              external
            />
            <InfoLine
              icon={Mail}
              label={t.email}
              value={BUSINESS.email}
              href={`mailto:${BUSINESS.email}`}
              tracking={cta("email_contact_card", "contact_card")}
            />
            <InfoLine
              icon={MapPin}
              label={t.address}
              value={FULL_ADDRESS}
              href={BUSINESS.mapsUrl}
              tracking={cta("maps_contact_card", "contact_card")}
              external
            />
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
  tracking,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  tracking?: CtaAttributes;
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
          {...tracking}
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
