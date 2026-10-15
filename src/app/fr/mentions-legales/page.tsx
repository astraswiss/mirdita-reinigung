import type { Metadata } from "next";

import { BUSINESS } from "@/config/site";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { alternatesFor } from "@/components/site-config";
import { cta } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Mentions légales | Mirdita Reinigung Berisha",
  description:
    "Mentions légales et informations juridiques de Mirdita Reinigung Berisha à Naters, Valais.",
  alternates: alternatesFor("/fr/mentions-legales"),
};

export default function Page() {
  return (
    <div lang="fr" className="min-h-screen bg-brand-light text-brand-deep font-sans antialiased">
      <SiteHeader />

      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-bright">
            Informations légales
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Mentions légales</h1>
          <p className="mt-3 text-sm text-brand-deep/55">
            Traduction de la version allemande. En cas de divergence, la version allemande fait foi.
          </p>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">Éditeur</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                {BUSINESS.legalName}
                <br />
                Entreprise individuelle
                <br />
                IDE/UID : {BUSINESS.uid}
                <br />
                {BUSINESS.streetAddress}
                <br />
                {BUSINESS.postalCode} {BUSINESS.locality}
                <br />
                Suisse
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Contact</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Téléphone :{" "}
                <a
                  href={BUSINESS.phoneHref}
                  {...cta("phone_legal", "legal_page")}
                  className="text-brand-bright hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                <br />
                E-mail :{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  {...cta("email_legal", "legal_page")}
                  className="text-brand-bright hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Propriétaire &amp; direction</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">Famille Berisha</p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Exclusion de responsabilité</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Toutes les informations publiées sur ce site ont été soigneusement vérifiées. Aucune
                garantie ne peut toutefois être donnée quant à leur exactitude, leur exhaustivité et
                leur actualité. Toute prétention en responsabilité envers {BUSINESS.legalName}{" "}
                relative à des dommages matériels ou immatériels résultant de l’utilisation ou de la
                non-utilisation des informations publiées est exclue, sauf faute intentionnelle ou
                grave négligence prouvée.
              </p>
              <p className="mt-3 text-brand-deep/70 leading-relaxed">
                Ce site peut contenir des liens vers des sites web externes de tiers, sur le contenu
                desquels nous n’avons aucune influence. Le contenu des pages liées relève toujours
                de la responsabilité de leur fournisseur ou exploitant.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">Droits d’auteur</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les droits d’auteur et tous les autres droits sur les contenus, images, photos ou
                autres fichiers de ce site appartiennent exclusivement à {BUSINESS.legalName} ou aux
                titulaires de droits expressément mentionnés. Toute reproduction d’éléments requiert
                l’accord écrit préalable des titulaires des droits d’auteur.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter lang="fr" />
    </div>
  );
}
