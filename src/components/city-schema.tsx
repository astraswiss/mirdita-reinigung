const BASE_URL = "https://mirdita.ch";

/**
 * Local Service schema for a city landing page. Uses the real Mirdita NAP and
 * scopes `areaServed` to the specific city — no invented branch locations.
 * Rendered alongside the global LocalBusiness schema from the root layout.
 */
export function CitySchema({
  city,
  name,
  description,
  path,
  inLanguage = "de-CH",
}: {
  city: string;
  name: string;
  description: string;
  path: string;
  inLanguage?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Reinigung",
    inLanguage,
    url: `${BASE_URL}${path}`,
    areaServed: { "@type": "City", name: city },
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
        addressRegion: "Wallis",
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
