"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

import { LOGO, NAV, ROUTE_ALTERNATES } from "@/components/site-config";

const NAV_FR = [
  { href: "/fr#leistungen", label: "Services" },
  { href: "/fr#einsatzgebiet", label: "Région" },
  { href: "/fr#kontakt", label: "Devis" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");

  // Language switcher targets: map the current route to its counterpart.
  const pair =
    ROUTE_ALTERNATES.find((p) => p.de === pathname || p.fr === pathname) ?? ROUTE_ALTERNATES[0];

  const nav = isFr ? NAV_FR : NAV;
  const homeHref = isFr ? "/fr" : "/";
  const ctaHref = isFr ? "/fr#kontakt" : "/#kontakt";
  const ctaLabel = isFr ? "Devis" : "Offerte";

  return (
    <header className="sticky top-0 z-50 bg-brand-light/85 backdrop-blur border-b border-brand-deep/5 px-5 md:px-10">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-6">
        <Link
          href={homeHref}
          className="flex items-center"
          aria-label={isFr ? "Mirdita — Accueil" : "Mirdita — Startseite"}
        >
          <Image
            src={LOGO}
            alt="Mirdita Reinigungsdienste"
            width={459}
            height={91}
            unoptimized
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-deep/70">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-brand-deep transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch deHref={pair.de} frHref={pair.fr} isFr={isFr} />
          <a
            href="tel:+41762027984"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-brand-deep/80 hover:text-brand-deep border border-brand-deep/10 rounded-full px-3 py-2"
          >
            <Phone className="size-3.5" />
            <span className="hidden lg:inline">+41 76 202 79 84</span>
          </a>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-brand-bright text-white text-sm font-semibold rounded-full px-4 py-2.5 hover:brightness-110 transition-all"
          >
            {ctaLabel}
            <ArrowRight className="size-3.5" />
          </Link>
          <button
            className="md:hidden p-2 -mr-2 text-brand-deep"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={isFr ? "Menu" : "Menü"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden -mx-5 md:-mx-10 border-t border-brand-deep/5 px-5 py-4 space-y-3 bg-brand-light">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm font-medium text-brand-deep/80"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function LangSwitch({ deHref, frHref, isFr }: { deHref: string; frHref: string; isFr: boolean }) {
  const base = "px-2 py-1 rounded-full text-xs font-semibold transition-colors";
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-brand-deep/10 p-0.5">
      <Link
        href={deHref}
        hrefLang="de"
        aria-label="Deutsche Version"
        aria-current={!isFr ? "true" : undefined}
        className={`${base} ${!isFr ? "bg-brand-deep text-white" : "text-brand-deep/60 hover:text-brand-deep"}`}
      >
        DE
      </Link>
      <Link
        href={frHref}
        hrefLang="fr"
        aria-label="Version française"
        aria-current={isFr ? "true" : undefined}
        className={`${base} ${isFr ? "bg-brand-deep text-white" : "text-brand-deep/60 hover:text-brand-deep"}`}
      >
        FR
      </Link>
    </div>
  );
}
