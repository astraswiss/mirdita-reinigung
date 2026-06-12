import Image from "next/image";
import Link from "next/link";

import { LOGO } from "@/components/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-deep/5 px-5 md:px-10 py-12 mt-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
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
          links={["Umzugsreinigung", "Wohnungsreinigung", "Büroreinigung", "Spezialreinigung"]}
        />
        <FooterCol title="Kontakt" links={["+41 76 202 79 84", "info@mirdita.ch", "Wallis, CH"]} />
        <FooterCol title="Rechtliches" links={["Impressum", "Datenschutz", "AGB"]} />
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-brand-deep/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-deep/50">
        <span>© {new Date().getFullYear()} Mirdita GmbH. Alle Rechte vorbehalten.</span>
        <div className="flex gap-4">
          <span className="font-semibold text-brand-deep/70">DE</span>
          <span>FR</span>
          <span>IT</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-deep mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-brand-deep/60">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-brand-bright transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
