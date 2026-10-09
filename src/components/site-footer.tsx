import Image from "next/image";
import Link from "next/link";

import { BUSINESS, FULL_ADDRESS } from "@/config/site";
import { LOGO, SERVICE_LINKS_DE, SERVICE_LINKS_FR } from "@/components/site-config";

const FOOTER_DE = {
  home: "/",
  homeAria: "Mirdita — Startseite",
  about: { label: "Über uns", href: "/ueber-uns" },
  tagline: "Ihr Partner für Sauberkeit im ganzen Kanton Wallis.",
  servicesTitle: "Leistungen",
  contactTitle: "Kontakt",
  legalTitle: "Rechtliches",
  regionsTitle: "Regionen",
  regions: [
    { label: "Reinigung Naters", href: "/reinigung-naters" },
    { label: "Reinigung Brig-Glis", href: "/reinigung-brig-glis" },
    { label: "Reinigung Visp", href: "/reinigung-visp" },
    { label: "Alle Regionen →", href: "/#einsatzgebiet" },
  ],
  services: SERVICE_LINKS_DE,
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

const FOOTER_FR = {
  home: "/fr",
  homeAria: "Mirdita — Accueil",
  about: { label: "À propos", href: "/fr/a-propos" },
  tagline: "Votre partenaire pour la propreté dans tout le Canton du Valais.",
  servicesTitle: "Services",
  contactTitle: "Contact",
  legalTitle: "Informations légales",
  regionsTitle: "Régions",
  regions: [
    { label: "Nettoyage à Sion", href: "/fr/nettoyage-sion" },
    { label: "Nettoyage à Sierre", href: "/fr/nettoyage-sierre" },
    { label: "Nettoyage à Martigny", href: "/fr/nettoyage-martigny" },
    { label: "Nettoyage à Monthey", href: "/fr/nettoyage-monthey" },
  ],
  services: SERVICE_LINKS_FR,
  // Legal pages exist only in German; link to them as-is.
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Protection des données", href: "/datenschutz" },
    { label: "CGV", href: "/agb" },
  ],
};

export function SiteFooter({ lang = "de" }: { lang?: "de" | "fr" }) {
  const t = lang === "fr" ? FOOTER_FR : FOOTER_DE;

  return (
    <footer className="border-t border-brand-deep/5 px-5 md:px-10 py-12 mt-8">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-6">
        <div>
          <Link href={t.home} className="flex items-center" aria-label={t.homeAria}>
            <Image
              src={LOGO}
              alt="Mirdita Reinigung"
              width={459}
              height={91}
              unoptimized
              className="h-7 w-auto"
            />
          </Link>
          <p className="mt-3 text-sm text-brand-deep/55 max-w-xs">{t.tagline}</p>
          <Link
            href={t.about.href}
            className="mt-3 inline-block text-sm font-semibold text-brand-deep/70 hover:text-brand-bright transition-colors"
          >
            {t.about.label} →
          </Link>
        </div>
        <FooterCol
          title={t.servicesTitle}
          className="md:col-span-2"
          columns={2}
          links={t.services}
        />
        <FooterCol title={t.regionsTitle} links={t.regions} />
        <FooterCol
          title={t.contactTitle}
          links={[
            { label: BUSINESS.phone, href: BUSINESS.phoneHref },
            { label: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
            { label: FULL_ADDRESS, href: BUSINESS.mapsUrl },
          ]}
        />
        <FooterCol title={t.legalTitle} links={t.legal} />
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-brand-deep/5 text-xs text-brand-deep/50">
        <span>
          © {new Date().getFullYear()} Mirdita Reinigung Berisha.{" "}
          {lang === "fr" ? "Tous droits réservés." : "Alle Rechte vorbehalten."}
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className,
  columns = 1,
}: {
  title: string;
  links: { label: string; href?: string }[];
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <div className={className}>
      <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-deep mb-4">
        {title}
      </h4>
      <ul
        className={
          columns === 2
            ? "grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-brand-deep/60"
            : "space-y-2.5 text-sm text-brand-deep/60"
        }
      >
        {links.map((l) => (
          <li key={l.label}>
            {l.href?.startsWith("/") ? (
              <Link href={l.href} className="hover:text-brand-bright transition-colors">
                {l.label}
              </Link>
            ) : l.href ? (
              <a href={l.href} className="hover:text-brand-bright transition-colors">
                {l.label}
              </a>
            ) : (
              <span>{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
