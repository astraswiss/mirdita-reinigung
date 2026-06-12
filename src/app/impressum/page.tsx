import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Impressum | Mirdita Reinigung Berisha",
  description: "Impressum und rechtliche Angaben der Mirdita Reinigung Berisha in Naters, Wallis.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Rechtliches
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Impressum</h1>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">Anbieter</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Mirdita Reinigung Berisha
                <br />
                Einzelunternehmen
                <br />
                Belalpstrasse 2
                <br />
                3904 Naters
                <br />
                Schweiz
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Kontakt</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Telefon:{" "}
                <a href="tel:+41762027984" className="text-brand-bright hover:underline">
                  +41 76 202 79 84
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@mirdita.ch" className="text-brand-bright hover:underline">
                  info@mirdita.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Inhaber &amp; Geschäftsführung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">Familie Berisha</p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Haftungsausschluss</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Alle Angaben auf dieser Website wurden sorgfältig geprüft. Dennoch kann keine Gewähr
                für deren Richtigkeit, Vollständigkeit und Aktualität übernommen werden.
                Haftungsansprüche gegen Mirdita Reinigung Berisha, welche sich auf Schäden
                materieller oder immaterieller Art beziehen, die durch die Nutzung oder Nichtnutzung
                der veröffentlichten Informationen verursacht wurden, werden ausgeschlossen, sofern
                kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Diese Website kann Verweise auf externe Webseiten Dritter enthalten, auf deren
                Inhalt wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
                der jeweilige Anbieter oder Betreiber der Seite verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Urheberrecht</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen
                Dateien auf dieser Website gehören ausschliesslich Mirdita Reinigung Berisha oder
                den jeweils genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist
                die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
