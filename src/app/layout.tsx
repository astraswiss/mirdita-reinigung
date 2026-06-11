import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
