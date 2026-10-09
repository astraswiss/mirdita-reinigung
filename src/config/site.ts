/**
 * Single source of truth for the business NAP (name, address, phone) and other
 * contact data. Everything visible (contact cards, footer, header, legal pages)
 * and every JSON-LD block reads from here — never hardcode these elsewhere.
 */
export const BUSINESS = {
  name: "Mirdita Reinigung",
  legalName: "Mirdita Reinigung Berisha",
  streetAddress: "Belalpstrasse 2",
  postalCode: "3904",
  locality: "Naters",
  region: "VS",
  country: "CH",
  phone: "+41 76 202 79 84",
  phoneHref: "tel:+41762027984",
  /** E.164 format for structured data. */
  phoneE164: "+41762027984",
  whatsappNumber: "41762027984",
  email: "info@mirdita.ch",
  url: "https://mirdita.ch",
  /** Google Maps / Business Profile listing (also used for the reviews link). */
  mapsUrl:
    "https://www.google.com/maps/place/Mirdita+Reinigung,+Belalpstrasse+2,+3904+Naters/@0,0,22z/data=!4m2!3m1!1s0x42c5237190cbda61:0xdc13d84cf19fc3d0",
} as const;

/** "Belalpstrasse 2, 3904 Naters" */
export const ADDRESS_LINE = `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.locality}`;

/** "Mirdita Reinigung, Belalpstrasse 2, 3904 Naters" — the visible NAP line. */
export const FULL_ADDRESS = `${BUSINESS.name}, ${ADDRESS_LINE}`;

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsappNumber}`;

export const POSTAL_ADDRESS_JSON_LD = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  postalCode: BUSINESS.postalCode,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
} as const;
