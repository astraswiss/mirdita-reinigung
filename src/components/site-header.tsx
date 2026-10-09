"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { LOGO, NAV, NAV_FR, ROUTE_ALTERNATES, type NavItem } from "@/components/site-config";
import { BUSINESS } from "@/config/site";
import { cta } from "@/lib/analytics";

// The "Kontakt"/"Contact" menu entry is the one nav link tracked as a CTA.
const navCta = (href: string) => (href.endsWith("#kontakt") ? cta("kontakt_header", "header") : {});

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");

  // Language switcher targets: map the current route to its counterpart.
  const pair =
    ROUTE_ALTERNATES.find((p) => p.de === pathname || p.fr === pathname) ?? ROUTE_ALTERNATES[0];

  // "Offerte"/"Kontakt" links point at the homepage form (/#kontakt). Pages that
  // carry their own form scroll to it instead of leaving the page. Capture
  // phase, so it runs before Next's <Link> navigation.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href$="#kontakt"]');
      const form = document.getElementById("kontakt");
      if (!link || !form) return;
      e.preventDefault();
      setMobileOpen(false);
      form.scrollIntoView({ behavior: "smooth" });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

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
            alt="Mirdita Reinigung"
            width={459}
            height={91}
            unoptimized
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-brand-deep/70">
          {nav.map((n) =>
            n.children ? (
              <NavDropdown key={n.href} item={n} />
            ) : (
              <a
                key={n.href}
                href={n.href}
                {...navCta(n.href)}
                className="hover:text-brand-deep transition-colors"
              >
                {n.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch deHref={pair.de} frHref={pair.fr} isFr={isFr} />
          <a
            href={BUSINESS.phoneHref}
            {...cta("phone_header", "header")}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-brand-deep/80 hover:text-brand-deep border border-brand-deep/10 rounded-full px-3 py-2"
          >
            <Phone className="size-3.5" />
            <span className="hidden lg:inline">{BUSINESS.phone}</span>
          </a>
          <Link
            href={ctaHref}
            {...cta("offerte_header", "header")}
            className="inline-flex items-center gap-2 bg-brand-bright text-white text-sm font-semibold rounded-full px-4 py-2.5 hover:brightness-110 transition-all"
          >
            {ctaLabel}
            <ArrowRight className="size-3.5" />
          </Link>
          <button
            className="lg:hidden p-2 -mr-2 text-brand-deep"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={isFr ? "Menu" : "Menü"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden -mx-5 md:-mx-10 border-t border-brand-deep/5 px-5 md:px-10 py-4 space-y-1 bg-brand-light max-h-[calc(100vh-4rem)] overflow-y-auto">
          {nav.map((n) =>
            n.children ? (
              <details key={n.href} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-sm font-medium text-brand-deep/80 [&::-webkit-details-marker]:hidden">
                  {n.label}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 mb-2 ml-3 grid grid-cols-2 gap-x-4 border-l border-brand-deep/10 pl-3">
                  {n.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-brand-deep/70"
                    >
                      {c.label}
                    </Link>
                  ))}
                  <a
                    href={n.href}
                    onClick={() => setMobileOpen(false)}
                    className="col-span-2 block py-1.5 text-sm font-semibold text-brand-bright"
                  >
                    {n.allLabel}
                  </a>
                </div>
              </details>
            ) : (
              <a
                key={n.href}
                href={n.href}
                {...navCta(n.href)}
                onClick={() => setMobileOpen(false)}
                className="block py-1.5 text-sm font-medium text-brand-deep/80"
              >
                {n.label}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  );
}

/**
 * Desktop dropdown: opens on hover and on keyboard focus (focus-within), so the
 * child links are plain, crawlable anchors that are always in the HTML.
 */
function NavDropdown({ item }: { item: NavItem }) {
  const children = item.children ?? [];
  return (
    <div className="group relative">
      <a
        href={item.href}
        className="inline-flex items-center gap-1 py-5 hover:text-brand-deep transition-colors"
      >
        {item.label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </a>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div
          className={`rounded-2xl border border-brand-deep/5 bg-white p-3 shadow-[0_20px_50px_-20px_rgba(0,21,63,0.25)] ${
            children.length > 5 ? "grid w-[420px] grid-cols-2" : "w-56"
          }`}
        >
          {children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block rounded-lg px-3 py-2 text-sm text-brand-deep/75 hover:bg-brand-light hover:text-brand-deep"
            >
              {c.label}
            </Link>
          ))}
          <a
            href={item.href}
            className={`mt-1 flex items-center gap-1.5 rounded-lg border-t border-brand-deep/5 px-3 pt-3 pb-1 text-sm font-semibold text-brand-bright ${
              children.length > 5 ? "col-span-2" : ""
            }`}
          >
            {item.allLabel}
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Persist an explicit language choice so the homepage auto-redirect never
// overrides it (and never bounces the user back after they switch).
function rememberLang(lang: "de" | "fr") {
  document.cookie = `mirdita_lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
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
        onClick={() => rememberLang("de")}
        className={`${base} ${!isFr ? "bg-brand-deep text-white" : "text-brand-deep/60 hover:text-brand-deep"}`}
      >
        DE
      </Link>
      <Link
        href={frHref}
        hrefLang="fr"
        aria-label="Version française"
        aria-current={isFr ? "true" : undefined}
        onClick={() => rememberLang("fr")}
        className={`${base} ${isFr ? "bg-brand-deep text-white" : "text-brand-deep/60 hover:text-brand-deep"}`}
      >
        FR
      </Link>
    </div>
  );
}
