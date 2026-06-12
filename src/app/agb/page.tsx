import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "AGB | Mirdita Reinigung Berisha",
  description:
    "Allgemeine Geschäftsbedingungen der Mirdita Reinigung Berisha für Reinigungsdienstleistungen im Wallis.",
  alternates: {
    canonical: "/agb",
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
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">1. Geltungsbereich</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Aufträge und
                Verträge zwischen Mirdita Reinigung Berisha, Belalpstrasse 2, 3904 Naters
                (&bdquo;Mirdita Reinigung&ldquo;) und ihren Kundinnen und Kunden über Reinigungs-
                und Unterhaltsdienstleistungen, soweit nicht ausdrücklich schriftlich etwas anderes
                vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">2. Offerte und Vertragsabschluss</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Unsere Offerten sind freibleibend und unverbindlich, sofern nichts anderes vermerkt
                ist. Ein Vertrag kommt zustande, sobald die Offerte vom Kunden mündlich, schriftlich
                oder per E-Mail bestätigt wird. Die Offerte basiert auf den vom Kunden gemachten
                Angaben (z. B. Grösse des Objekts, gewünschter Umfang). Stellt sich vor Ort heraus,
                dass der tatsächliche Aufwand erheblich vom besprochenen Umfang abweicht,
                informieren wir den Kunden vorab über allfällige Mehrkosten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">3. Leistungserbringung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Mirdita Reinigung führt die vereinbarten Arbeiten mit geschultem Personal sorgfältig
                und nach den vereinbarten Inhalten durch. Für die Reinigung erforderliche
                Infrastruktur (z. B. Strom- und Wasseranschluss) ist vom Kunden kostenlos zur
                Verfügung zu stellen, soweit nichts anderes vereinbart wurde. Mitgebrachtes
                Reinigungsmaterial und -equipment bleibt Eigentum von Mirdita Reinigung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">4. Preise und Zahlungsbedingungen</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Es gelten die in der jeweiligen Offerte genannten Preise (in Schweizer Franken).
                Rechnungen sind, sofern nicht anders vereinbart, innert 30 Tagen nach Rechnungsdatum
                ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug kann Mirdita Reinigung
                Mahngebühren sowie Verzugszinsen in gesetzlicher Höhe verrechnen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">5. Abnahmegarantie bei Umzugsreinigungen</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Bei beauftragten Umzugsreinigungen gewährt Mirdita Reinigung eine Abnahmegarantie:
                Wird die Reinigung bei der Wohnungsübergabe durch Vermieterschaft oder Verwaltung
                begründet beanstandet, behebt Mirdita Reinigung die betroffenen Punkte kostenlos und
                so rasch wie möglich, in der Regel innert 24 bis 48 Stunden. Voraussetzung für die
                Abnahmegarantie ist, dass die Beanstandung Mirdita Reinigung innerhalb von 48
                Stunden nach der Übergabe schriftlich (per E-Mail oder WhatsApp) mit Angabe der
                konkreten Mängel mitgeteilt wird. Die Abnahmegarantie deckt keine Schäden oder
                Mängel, die nicht Gegenstand der vereinbarten Reinigungsleistung waren (z. B.
                bauliche Mängel, Abnutzungsspuren, vorbestehende Schäden).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">6. Terminänderung und Stornierung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Terminverschiebungen sind nach Möglichkeit kostenlos, sofern sie uns mindestens 48
                Stunden vor dem vereinbarten Termin mitgeteilt werden. Bei kurzfristigeren Absagen
                oder bei Nichterreichbarkeit vor Ort (z. B. kein Zugang zum Objekt) kann Mirdita
                Reinigung den bereits eingeplanten Aufwand ganz oder teilweise in Rechnung stellen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">7. Zugang und Schlüssel</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Sofern Mirdita Reinigung für die Auftragserfüllung Schlüssel oder Zugangscodes
                übergeben werden, werden diese sorgfältig verwahrt und ausschliesslich für den
                vereinbarten Zweck verwendet. Nach Abschluss des Auftrags werden Schlüssel
                vereinbarungsgemäss zurückgegeben oder hinterlegt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">8. Haftung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Mirdita Reinigung haftet für Schäden, die nachweislich durch grob fahrlässiges oder
                vorsätzliches Verhalten ihrer Mitarbeitenden verursacht wurden. Für leichte
                Fahrlässigkeit sowie für Schäden an Gegenständen, deren besondere Empfindlichkeit
                oder Wert vor Auftragsbeginn nicht ausdrücklich mitgeteilt wurde, wird die Haftung
                im gesetzlich zulässigen Umfang ausgeschlossen. Allfällige Schäden sind Mirdita
                Reinigung unmittelbar nach Feststellung zu melden.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">9. Datenschutz</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Die im Rahmen der Auftragsabwicklung erhobenen Daten werden gemäss unserer{" "}
                <Link href="/datenschutz" className="text-brand-bright hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                behandelt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">10. Schlussbestimmungen und Gerichtsstand</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand für allfällige
                Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz von Mirdita Reinigung im
                Kanton Wallis. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
                bleibt die Gültigkeit der übrigen Bestimmungen davon unberührt.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
