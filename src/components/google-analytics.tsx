import Script from "next/script";

// Public GA4 measurement ID for mirdita.ch. It is not a secret (it ships in the
// page source of every GA4-tracked site), so it is safe as a default. Override
// it per environment with NEXT_PUBLIC_GA_MEASUREMENT_ID when needed.
const DEFAULT_GA_MEASUREMENT_ID = "G-S0ZBD89TFQ";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? DEFAULT_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
