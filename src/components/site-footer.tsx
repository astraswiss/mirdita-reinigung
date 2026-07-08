import Image from "next/image";
import Link from "next/link";

import { LOGO } from "@/components/site-config";

const FOOTER_DE = {
  home: "/",
  homeAria: "Mirdita — Startseite",
  tagline: "Ihr Partner für Sauberkeit im ganzen Kanton Wallis.",
  servicesTitle: "Leistungen",
  contactTitle: "Kontakt",
  legalTitle: "Rechtliches",
  services: [
    { label: "Umzugsreinigung", href: "/umzugsreinigung" },
    { label: "Wohnungsreinigung", href: "/wohnungsreinigung" },
    { label: "Unterhaltsreinigung", href: "/unterhaltsreinigung" },
    { label: "Fensterreinigung", href: "/fensterreinigung" },
    { label: "Teppichreinigung", href: "/teppichreinigung" },
    { label: "Büroreinigung", href: "/bueroreinigung" },
    { label: "Praxisreinigung", href: "/praxisreinigung" },
    { label: "Baureinigung", href: "/baureinigung" },
    { label: "Hauswartung", href: "/hauswartung" },
    { label: "Grundreinigung", href: "/grundreinigung" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

const FOOTER_FR = {
  home: "/fr",
  homeAria: "Mirdita — Accueil",
  tagline: "Votre partenaire pour la propreté dans tout le Canton du Valais.",
  servicesTitle: "Services",
  contactTitle: "Contact",
  legalTitle: "Informations légales",
  services: [
    { label: "Nettoyage fin de bail", href: "/fr/nettoyage-fin-de-bail-valais" },
    { label: "Nettoyage d’appartement", href: "/fr/nettoyage-appartement-valais" },
    { label: "Nettoyage régulier", href: "/fr/nettoyage-regulier-valais" },
    { label: "Nettoyage de vitres", href: "/fr/nettoyage-vitres-valais" },
    { label: "Nettoyage de tapis", href: "/fr/nettoyage-tapis-valais" },
    { label: "Nettoyage de bureaux", href: "/fr/nettoyage-bureaux-valais" },
    { label: "Cabinets médicaux", href: "/fr/nettoyage-cabinets-medicaux-valais" },
    { label: "Fin de chantier", href: "/fr/nettoyage-fin-de-chantier-valais" },
    { label: "Conciergerie", href: "/fr/conciergerie-valais" },
    { label: "Nettoyage en profondeur", href: "/fr/nettoyage-en-profondeur-valais" },
  ],
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
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-5">
        <div>
          <Link href={t.home} className="flex items-center" aria-label={t.homeAria}>
            <Image
              src={LOGO}
              alt="Mirdita Reinigungsdienste"
              width={459}
              height={91}
              unoptimized
              className="h-7 w-auto"
            />
          </Link>
          <p className="mt-3 text-sm text-brand-deep/55 max-w-xs">{t.tagline}</p>
        </div>
        <FooterCol
          title={t.servicesTitle}
          className="md:col-span-2"
          columns={2}
          links={t.services}
        />
        <FooterCol
          title={t.contactTitle}
          links={[
            { label: "+41 76 202 79 84", href: "tel:+41762027984" },
            { label: "info@mirdita.ch", href: "mailto:info@mirdita.ch" },
            { label: "Belalpstrasse 2, 3904 Naters" },
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
