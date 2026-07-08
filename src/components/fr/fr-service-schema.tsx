import { AREA_SERVED } from "@/components/site-config";

const BASE_URL = "https://mirdita.ch";

/**
 * Service schema for a French service page. Reuses the real Mirdita NAP and
 * service area — no invented data. Rendered alongside the global LocalBusiness
 * schema that the root layout already injects on every route.
 */
export function FrServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    inLanguage: "fr-CH",
    url: `${BASE_URL}${path}`,
    areaServed: AREA_SERVED,
    provider: {
      "@type": "LocalBusiness",
      name: "Mirdita Reinigung Berisha",
      telephone: "+41762027984",
      email: "info@mirdita.ch",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Belalpstrasse 2",
        postalCode: "3904",
        addressLocality: "Naters",
        addressRegion: "Valais",
        addressCountry: "CH",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
