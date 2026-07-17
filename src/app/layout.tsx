import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import { Clarity } from "@/components/clarity";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Toaster } from "@/components/toaster";
import { LOCAL_BUSINESS_JSON_LD, WEBSITE_JSON_LD } from "@/components/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirdita.ch"),
  title: "Mirdita Reinigung — Glanz & Sauberkeit im Wallis",
  description:
    "Mirdita Reinigung: Umzugs-, Wohnungs- und Büroreinigungen im Wallis. Schnell, gründlich und mit Abnahmegarantie.",
  applicationName: "Mirdita Reinigung",
  authors: [{ name: "Mirdita Reinigung" }],
  openGraph: {
    siteName: "Mirdita Reinigung",
    title: "Mirdita Reinigung — Sauberkeit im Wallis",
    description: "Professionelle Reinigungen im Wallis — mit Abnahmegarantie.",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 844 }],
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#00153f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <Clarity />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
      </body>
    </html>
  );
}
