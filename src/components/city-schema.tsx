import { PROVIDER_JSON_LD } from "@/components/site-config";
import { BUSINESS } from "@/config/site";

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
    url: `${BUSINESS.url}${path}`,
    areaServed: { "@type": "City", name: city },
    provider: PROVIDER_JSON_LD,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
