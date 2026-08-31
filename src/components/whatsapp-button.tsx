"use client";

import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "41762027984";

const COPY = {
  de: {
    label: "WhatsApp Chat öffnen",
    message: "Guten Tag, ich interessiere mich für eine Reinigung und hätte gerne eine Offerte.",
  },
  fr: {
    label: "Ouvrir le chat WhatsApp",
    message: "Bonjour, je souhaite un devis pour un nettoyage.",
  },
} as const;

/**
 * Floating WhatsApp button, fixed bottom-right on every page. The pre-filled
 * message and label follow the current language (French under /fr, German
 * otherwise). It links to wa.me, so the existing AnalyticsEvents listener
 * already tracks clicks as a `contact_click` (method: whatsapp) conversion.
 */
export function WhatsappButton() {
  const pathname = usePathname();
  const copy = pathname?.startsWith("/fr") ? COPY.fr : COPY.de;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.label}
      title={copy.label}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-1 ring-black/5 transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 md:bottom-6 md:right-6"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.005c6.582 0 11.940-5.334 11.943-11.892a11.821 11.821 0 00-3.480-8.413z" />
      </svg>
    </a>
  );
}
