import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Datenschutz | Mirdita Reinigung Berisha",
  description:
    "Datenschutzerklärung der Mirdita Reinigung Berisha: welche Daten wir über das Kontaktformular erheben und wie wir sie verwenden.",
  alternates: {
    canonical: "/datenschutz",
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
            Datenschutzerklärung
          </h1>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">1. Verantwortliche Stelle</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                Mirdita Reinigung Berisha, Belalpstrasse 2, 3904 Naters, Schweiz
                <br />
                E-Mail:{" "}
                <a href="mailto:info@mirdita.ch" className="text-brand-bright hover:underline">
                  info@mirdita.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">2. Welche Daten wir erheben</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Beim Besuch unserer Website werden grundsätzlich keine personenbezogenen Daten
                gespeichert. Diese Website verzichtet bewusst auf Tracking- und Analyse-Cookies.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Wenn Sie unser Kontaktformular nutzen, erheben wir die von Ihnen freiwillig
                angegebenen Daten: Name, E-Mail-Adresse, Telefonnummer (optional), Art der
                gewünschten Reinigung und Ihre Nachricht.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">3. Zweck der Verarbeitung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Wir verwenden die über das Kontaktformular übermittelten Daten ausschliesslich, um
                Ihre Anfrage zu bearbeiten, mit Ihnen Kontakt aufzunehmen und Ihnen eine Offerte für
                unsere Reinigungsdienstleistungen zu erstellen. Eine Weiterverwendung für
                Werbezwecke findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">4. Weitergabe an Dritte</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Zur Zustellung Ihrer Anfrage per E-Mail nutzen wir den Dienstleister Resend (Resend,
                Inc.) als technischen E-Mail-Versanddienst. Die Inhalte Ihres Kontaktformulars
                werden dabei zur Übermittlung an unsere Geschäfts-E-Mail-Adresse verarbeitet.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Diese Website wird über Vercel Inc. gehostet. Beim Aufruf der Website können beim
                Hosting-Anbieter technische Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs)
                in Server-Logs anfallen, die für den Betrieb und die Sicherheit der Website
                erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">5. Aufbewahrungsdauer</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Über das Kontaktformular übermittelte Daten werden nur so lange aufbewahrt, wie dies
                zur Bearbeitung Ihrer Anfrage und zur Erfüllung eines daraus entstehenden Auftrags
                erforderlich ist, bzw. solange gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">6. Cookies</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Diese Website verwendet derzeit keine Tracking- oder Analyse-Cookies und keine
                Cookies von Drittanbietern.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">7. Ihre Rechte</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Sie haben das Recht, Auskunft über die von uns zu Ihrer Person gespeicherten Daten
                zu erhalten sowie deren Berichtigung, Löschung oder Einschränkung der Verarbeitung
                zu verlangen. Wenden Sie sich dazu jederzeit an die unter Ziffer 1 genannte Adresse.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">8. Änderungen dieser Erklärung</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Wir können diese Datenschutzerklärung anpassen, um sie an geänderte Rechtslagen oder
                an Änderungen unseres Angebots anzupassen. Es gilt jeweils die aktuelle, auf dieser
                Seite veröffentlichte Fassung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">9. Kontakt für Datenschutzfragen</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Bei Fragen zum Datenschutz erreichen Sie uns unter{" "}
                <a href="mailto:info@mirdita.ch" className="text-brand-bright hover:underline">
                  info@mirdita.ch
                </a>{" "}
                oder telefonisch unter{" "}
                <a href="tel:+41762027984" className="text-brand-bright hover:underline">
                  +41 76 202 79 84
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
