import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_BUERO } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-zermatt";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Zermatt — Mirdita Reinigung",
  description:
    "Reinigung in Zermatt: Endreinigung von Ferienwohnungen und Chalets, Saison-Grundreinigung, Büro- und Umzugsreinigung mit Abnahmegarantie. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Zermatt — Mirdita Reinigung",
    description: "Ferienwohnungs-, Chalet- und Büroreinigung in Zermatt.",
    url: PATH,
    images: [{ url: PHOTO_BUERO, width: 1280, height: 854 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Zermatt"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Zermatt: Endreinigung von Ferienwohnungen und Chalets, Saison-Grundreinigung, Büro- und Umzugsreinigung."
      badge="Am Fuss des Matterhorns"
      intro="Zermatt ist eine der bekanntesten Feriendestinationen der Welt — und Ferienwohnungen, Chalets und Geschäftsräume müssen hier besonders hohen Ansprüchen genügen. Wir übernehmen Endreinigungen zwischen Gästen, die Grundreinigung zum Saisonwechsel, Büroreinigung und Umzugsreinigungen mit Abnahmegarantie."
      image={PHOTO_BUERO}
      imagePosition="object-left"
      imageAlt="Gepflegte Räumlichkeiten nach der Reinigung durch Mirdita in Zermatt"
      proseEyebrow="Autofrei seit 1961"
      proseTitle="Reinigung in Zermatt"
      paragraphs={[
        "Zermatt ist offiziell seit 1961 autofrei. Wer anreist, lässt das Auto in Täsch und fährt mit dem Shuttlezug ins Dorf; im Ort selbst verkehren Elektrotaxis und -busse. Wir planen unsere Einsätze so, dass Team und Material pünktlich bei Ihnen sind.",
        "Für Vermieter von Ferienwohnungen und Chalets reinigen wir zwischen den Aufenthalten nach Ihrem Standard — vom Wäschewechsel nach Absprache bis zur Kontrolle von Küche und Inventar. Vor Saisonbeginn und nach Saisonende übernehmen wir die Grundreinigung inklusive Fenster, Teppiche und Polster.",
        "Für Geschäfte, Büros und Praxen im Dorf bieten wir die regelmässige Unterhaltsreinigung ausserhalb der Öffnungszeiten an. Und wer in Zermatt eine Wohnung abgibt — Einheimische wie Saisonangestellte —, erhält bei der Umzugsreinigung unsere Abnahmegarantie.",
      ]}
      servicesTitle="Was wir in Zermatt für Sie reinigen"
      processTitle="In vier Schritten zur Reinigung in Zermatt"
      ctaTitle="Reinigung in Zermatt geplant?"
      ctaBody="Für Ferienwohnung, Chalet, Geschäft oder Auszug: Fordern Sie jetzt Ihre kostenlose Offerte an — wir melden uns innert 24 Stunden."
    />
  );
}
