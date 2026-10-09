import type { Metadata } from "next";

import { DeCityPage } from "@/components/de/de-city-page";
import { PHOTO_PRIVAT } from "@/components/site-config";
import { getGoogleReviews } from "@/lib/google-reviews";

const PATH = "/reinigung-baltschieder";

export const metadata: Metadata = {
  title: "Reinigungsfirma in Baltschieder — Mirdita Reinigung",
  description:
    "Reinigung in Baltschieder bei Visp: Wohnungs-, Teppich-, Fenster- und Umzugsreinigung mit Abnahmegarantie für Familien und Eigentümer. Kostenlose Offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Reinigungsfirma in Baltschieder — Mirdita Reinigung",
    description: "Wohnungs-, Teppich- und Umzugsreinigung in Baltschieder bei Visp.",
    url: PATH,
    images: [{ url: PHOTO_PRIVAT, width: 1200, height: 1600 }],
  },
};

export default async function Page() {
  const googleReviews = await getGoogleReviews();

  return (
    <DeCityPage
      googleReviews={googleReviews}
      city="Baltschieder"
      path={PATH}
      schemaDescription="Professionelle Reinigung in Baltschieder: Wohnungs-, Teppich-, Fenster- und Umzugsreinigung mit Abnahmegarantie."
      badge="Bei Visp"
      intro="Baltschieder ist in den letzten Jahrzehnten zu einem gefragten Wohnort für Familien gewachsen. Wir unterstützen Sie mit regelmässiger Wohnungsreinigung, Teppich- und Polsterpflege, Fensterreinigung und der Umzugsreinigung mit Abnahmegarantie."
      image={PHOTO_PRIVAT}
      imagePosition="object-[center_70%]"
      imageAlt="Mirdita Mitarbeiterin bei der Reinigung einer Küche in Baltschieder"
      proseEyebrow="Wohnen am Taleingang"
      proseTitle="Reinigung in Baltschieder"
      paragraphs={[
        "Baltschieder liegt auf der rechten Rhoneseite, rund zwei Kilometer von Visp entfernt, dort wo das Baltschiedertal in die Ebene mündet. Das Tal selbst ist nur zu Fuss erreichbar und gehört zum UNESCO-Welterbe Swiss Alps Jungfrau-Aletsch.",
        "Das Dorf ist stark gewachsen; viele Familien wohnen hier in Einfamilienhäusern und neueren Mehrfamilienhäusern. Im Familienalltag bleibt der Putz oft liegen — mit unserer Unterhaltsreinigung kommen wir regelmässig in Ihrem Rhythmus. Teppiche und Polster reinigen wir in der Tiefe, damit Allergene und Flecken verschwinden.",
        "Ziehen Sie innerhalb von Baltschieder oder weg aus dem Dorf, übernehmen wir die Umzugsreinigung mit Abnahmegarantie. Von Naters aus sind wir in kurzer Zeit vor Ort.",
      ]}
      servicesTitle="Was wir in Baltschieder für Sie reinigen"
      processTitle="So kommen Sie in Baltschieder zur Reinigung"
      ctaTitle="Reinigung in Baltschieder gesucht?"
      ctaBody="Für Ihr Zuhause, Ihre Teppiche oder den Auszug: Fordern Sie jetzt Ihre kostenlose Offerte an — wir melden uns innert 24 Stunden."
    />
  );
}
