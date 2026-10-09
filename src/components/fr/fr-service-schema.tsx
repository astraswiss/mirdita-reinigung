import { AREA_SERVED_JSON_LD, PROVIDER_JSON_LD } from "@/components/site-config";
import { BUSINESS } from "@/config/site";

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
    url: `${BUSINESS.url}${path}`,
    areaServed: AREA_SERVED_JSON_LD,
    provider: PROVIDER_JSON_LD,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
