import { ArrowRight, MessageCircle, Phone } from "lucide-react";

/**
 * Primary French call-to-action row: quote request, phone call and WhatsApp.
 * Reused across the French homepage and every French service page.
 */
export function FrCtaRow({
  devisHref = "/fr#kontakt",
  devisLabel = "Demander un devis gratuit",
}: {
  devisHref?: string;
  devisLabel?: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={devisHref}
        className="inline-flex items-center gap-2 bg-brand-deep text-white rounded-full px-6 py-3.5 font-semibold hover:bg-brand-deep/90 transition-all"
      >
        {devisLabel}
        <ArrowRight className="size-4" />
      </a>
      <a
        href="tel:+41762027984"
        className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
      >
        <Phone className="size-4" />
        Appeler maintenant
      </a>
      <a
        href="https://wa.me/41762027984"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-brand-deep rounded-full px-6 py-3.5 font-semibold border border-brand-deep/10 hover:border-brand-deep/30 transition-all"
      >
        <MessageCircle className="size-4 text-brand-bright" />
        WhatsApp
      </a>
    </div>
  );
}
