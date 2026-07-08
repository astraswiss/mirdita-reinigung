import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";

/** Closing conversion banner for French pages: quote + phone + WhatsApp. */
export function FrCtaBanner({ title, body }: { title: string; body: string }) {
  return (
    <section className="px-5 md:px-10 py-20">
      <Reveal className="max-w-7xl mx-auto rounded-[28px] bg-brand-deep text-white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-3 text-white/70 leading-relaxed">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="/fr#kontakt"
            className="inline-flex items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all w-fit"
          >
            Demander un devis
            <ArrowRight className="size-4" />
          </a>
          <a
            href="tel:+41762027984"
            className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-6 py-3.5 font-semibold hover:bg-white/20 transition-all w-fit"
          >
            <Phone className="size-4" />
            Appeler
          </a>
          <a
            href="https://wa.me/41762027984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-6 py-3.5 font-semibold hover:bg-white/20 transition-all w-fit"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
