import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_HERO } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-ried-brig";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Ried-Brig — Mirdita Reinigung",
  description:
    "Reinigung in Ried-Brig an der Simplonstrasse: Haus-, Fenster- und Grundreinigung, Hauswartung und Umzugsreinigung mit Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Ried-Brig — Mirdita Reinigung",
    description: "Haus-, Fenster- und Grundreinigung in Ried-Brig oberhalb von Brig.",
    url: PATH,
    images: [{ url: PHOTO_HERO, width: 1200, height: 1600 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Ried-Brig"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Ried-Brig: Haus-, Fenster- und Grundreinigung sowie Umzugsreinigung mit Abnahmegarantie."
      badge="Oberhalb von Brig"
      intro="An der Simplonstrasse oberhalb von Brig wohnt man mit Weitblick — in Einfamilienhäusern, Chalets und Ferienwohnungen am Hang. Wir kümmern uns um Fenster und Glasfronten, die Grundreinigung nach dem Winter, die Pflege von Ferienobjekten und die Umzugsreinigung mit Abnahmegarantie."
      image={PHOTO_HERO}
      imagePosition="object-top"
      imageAlt="Mirdita Mitarbeiter reinigt eine Glasfront mit Bergsicht oberhalb von Brig"
      proseEyebrow="Am Hang über dem Rhonetal"
      proseTitle="Reinigung in Ried-Brig"
      paragraphs={[
        "Ried-Brig liegt am Hang südlich von Brig, entlang der Strasse zum Simplonpass. Die Gemeinde besteht aus mehreren Weilern; geprägt wird sie von Einfamilienhäusern, Chalets und Zweitwohnungen mit Blick über das Rhonetal.",
        "Häuser in Hanglage haben oft grosse Fensterflächen, Terrassen und Holzverkleidungen — und nach dem Winter einiges an Schmutz von Streusplitt und Schneeschmelze. Wir übernehmen die gründliche Frühlings- und Grundreinigung, reinigen Fenster und Storen streifenfrei und pflegen Holz- und Steinböden materialgerecht.",
        "Für Eigentümer von Ferienwohnungen bieten wir eine regelmässige Hauswartung und Reinigung zwischen den Aufenthalten an. Und wer in Ried-Brig auszieht, erhält bei der Umzugsreinigung unsere Abnahmegarantie.",
      ]}
      servicesTitle="Was wir in Ried-Brig für Sie reinigen"
      processTitle="So läuft Ihre Reinigung in Ried-Brig ab"
      ctaTitle="Haus oder Ferienwohnung in Ried-Brig?"
      ctaBody="Von der Fensterreinigung bis zur Grundreinigung nach dem Winter: Fordern Sie jetzt Ihre kostenlose Offerte an."
    />
  );
}
