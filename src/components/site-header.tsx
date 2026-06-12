"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

import { LOGO, NAV } from "@/components/site-config";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-light/85 backdrop-blur border-b border-brand-deep/5 px-5 md:px-10">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Mirdita — Startseite">
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
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-brand-deep transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+41762027984"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-brand-deep/80 hover:text-brand-deep border border-brand-deep/10 rounded-full px-3 py-2"
          >
            <Phone className="size-3.5" />
            <span className="hidden lg:inline">+41 76 202 79 84</span>
          </a>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 bg-brand-bright text-white text-sm font-semibold rounded-full px-4 py-2.5 hover:brightness-110 transition-all"
          >
            Offerte
            <ArrowRight className="size-3.5" />
          </Link>
          <button
            className="md:hidden p-2 -mr-2 text-brand-deep"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden -mx-5 md:-mx-10 border-t border-brand-deep/5 px-5 py-4 space-y-3 bg-brand-light">
          {NAV.map((n) => (
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
