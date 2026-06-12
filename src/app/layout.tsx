import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/toaster";
import { LOCAL_BUSINESS_JSON_LD } from "@/components/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirdita.ch"),
  title: "Mirdita Reinigungen — Glanz & Sauberkeit im Wallis",
  description:
    "Mirdita Reinigungen: Umzugs-, Wohnungs- und Büroreinigungen im Wallis. Schnell, gründlich und mit Abnahmegarantie.",
  authors: [{ name: "Mirdita Reinigungen" }],
  icons: {
    icon: "/mirdita-mark.svg",
  },
  openGraph: {
    title: "Mirdita Reinigungen — Sauberkeit im Wallis",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
      </body>
    </html>
  );
}
