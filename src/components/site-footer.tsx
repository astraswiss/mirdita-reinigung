import Image from "next/image";
import Link from "next/link";

import { LOGO } from "@/components/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-deep/5 px-5 md:px-10 py-12 mt-8">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-5">
        <div>
          <Link href="/" className="flex items-center" aria-label="Mirdita — Startseite">
            <Image
              src={LOGO}
              alt="Mirdita Reinigungsdienste"
              width={459}
              height={91}
              unoptimized
              className="h-7 w-auto"
            />
          </Link>
          <p className="mt-3 text-sm text-brand-deep/55 max-w-xs">
            Ihr Partner für Sauberkeit im ganzen Kanton Wallis.
          </p>
        </div>
        <FooterCol
          title="Leistungen"
          links={[
            { label: "Umzugsreinigung", href: "/umzugsreinigung" },
            { label: "Wohnungsreinigung", href: "/wohnungsreinigung" },
            { label: "Unterhaltsreinigung", href: "/unterhaltsreinigung" },
            { label: "Fensterreinigung", href: "/fensterreinigung" },
            { label: "Teppichreinigung", href: "/teppichreinigung" },
          ]}
        />
        <FooterCol
          title="Mehr Leistungen"
          links={[
            { label: "Büroreinigung", href: "/bueroreinigung" },
            { label: "Praxisreinigung", href: "/praxisreinigung" },
            { label: "Baureinigung", href: "/baureinigung" },
            { label: "Hauswartung", href: "/hauswartung" },
            { label: "Grundreinigung", href: "/grundreinigung" },
          ]}
        />
        <FooterCol
          title="Kontakt"
          links={[
            { label: "+41 76 202 79 84", href: "tel:+41762027984" },
            { label: "info@mirdita.ch", href: "mailto:info@mirdita.ch" },
            { label: "Belalpstrasse 2, 3904 Naters" },
          ]}
        />
        <FooterCol
          title="Rechtliches"
          links={[
            { label: "Impressum", href: "/impressum" },
            { label: "Datenschutz", href: "/datenschutz" },
            { label: "AGB", href: "/agb" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-brand-deep/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-deep/50">
        <span>
          © {new Date().getFullYear()} Mirdita Reinigung Berisha. Alle Rechte vorbehalten.
        </span>
        <div className="flex gap-4">
          <span className="font-semibold text-brand-deep/70">DE</span>
          <span>FR</span>
          <span>IT</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href?: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-deep mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-brand-deep/60">
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
