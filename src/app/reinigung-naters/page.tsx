import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { regionOgImages } from "@/config/region-media";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-naters";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Naters — Mirdita Reinigung",
  description:
    "Mirdita Reinigung hat ihren Sitz in Naters: lokaler Reinigungspartner für Umzugs-, Wohnungs- und Büroreinigung. Kurze Wege, schnelle Termine, Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Naters — Mirdita Reinigung",
    description: "Ihr lokaler Reinigungspartner direkt in Naters — mit Abnahmegarantie.",
    url: PATH,
    images: regionOgImages(PATH, "de"),
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Naters"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Naters: Umzugs-, Wohnungs- und Büroreinigung mit Abnahmegarantie."
      badge="Unser Sitz in Naters"
      intro="Mirdita Reinigung ist in Naters zu Hause — unser Sitz liegt an der Belalpstrasse 2. Als lokaler Partner sind wir schnell bei Ihnen: für Umzugs- und Wohnungsreinigungen, Büro- und Gewerbereinigung oder die regelmässige Unterhaltsreinigung. Kurze Wege, persönlicher Kontakt und bei Wohnungsübergaben unsere Abnahmegarantie."
      proseEyebrow="Lokal verankert"
      proseTitle="Ihre Reinigungsfirma direkt in Naters"
      paragraphs={[
        "Wir sind in Naters zu Hause. Vom Sitz an der Belalpstrasse sind wir in wenigen Minuten im Dorfkern, in den Wohnquartieren am Hang oder unten Richtung Rhonebrücke. Für Sie heisst das: kurze Reaktionszeiten und Termine, die sich auch kurzfristig einrichten lassen.",
        "Seit 2013 gehören auch Birgisch und Mund zur Gemeinde, dazu Weiler wie Hegdorn, Geimen oder Rischinen und oben Blatten und die Belalp. Dort reinigen wir Einfamilienhäuser, Chalets und Ferienwohnungen — inklusive Endreinigung zwischen zwei Vermietungen und Grundreinigung nach der Wintersaison.",
        "Im Dorf selbst übernehmen wir vor allem Umzugsreinigungen. Wir kennen die Ansprüche der Verwaltungen und Vermieter in Naters bei der Wohnungsübergabe und reinigen so, dass die Abnahme reibungslos verläuft — und falls doch etwas beanstandet wird, bessern wir dank Abnahmegarantie kostenlos nach.",
      ]}
      servicesTitle="Unsere Reinigungen in Naters, Birgisch und Mund"
      processTitle="So läuft Ihre Reinigung in Naters ab"
      ctaTitle="Reinigungsfirma aus Naters gesucht?"
      ctaBody="Wir sind im Dorf zu Hause und schnell bei Ihnen — vom Dorfkern bis Blatten und Belalp. Fordern Sie jetzt Ihre kostenlose Offerte an."
    />
  );
}
