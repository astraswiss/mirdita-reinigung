import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Fehler 404
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Seite nicht gefunden
          </h1>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12">
            <p className="text-brand-deep/70 leading-relaxed">
              Die gesuchte Seite existiert nicht oder wurde verschoben. Vielleicht hilft Ihnen einer
              dieser Links weiter:
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-brand-bright text-white rounded-full px-6 py-3.5 font-semibold hover:brightness-110 transition-all w-fit"
            >
              Zur Startseite
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
