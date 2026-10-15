import type { Metadata } from "next";

import Link from "next/link";

import { BUSINESS } from "@/config/site";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { alternatesFor } from "@/components/site-config";

export const metadata: Metadata = {
  title: "CGV | Mirdita Reinigung Berisha",
  description:
    "Conditions générales de vente de Mirdita Reinigung Berisha pour les prestations de nettoyage en Valais.",
  alternates: alternatesFor("/fr/cgv"),
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
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Conditions générales de vente
          </h1>
          <p className="mt-3 text-sm text-brand-deep/55">
            Traduction de la version allemande. En cas de divergence, la version allemande fait foi.
          </p>

          <div className="mt-8 rounded-[28px] bg-white border border-brand-deep/5 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-lg font-bold">1. Champ d’application</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les présentes conditions générales de vente (CGV) s’appliquent à tous les mandats et
                contrats conclus entre {BUSINESS.legalName}, {BUSINESS.streetAddress},{" "}
                {BUSINESS.postalCode} {BUSINESS.locality} (« Mirdita Reinigung ») et ses clientes et
                clients pour des prestations de nettoyage et d’entretien, sauf convention écrite
                expresse contraire.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">2. Offre et conclusion du contrat</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Sauf mention contraire, nos offres sont sans engagement. Le contrat est conclu dès
                que l’offre est confirmée par le client oralement, par écrit ou par e-mail. L’offre
                se fonde sur les indications fournies par le client (p. ex. taille du bien, étendue
                souhaitée). S’il s’avère sur place que le travail effectif s’écarte sensiblement de
                l’étendue convenue, nous informons le client au préalable des éventuels coûts
                supplémentaires.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">3. Exécution des prestations</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Mirdita Reinigung exécute les travaux convenus avec soin, par du personnel formé et
                conformément au contenu convenu. L’infrastructure nécessaire au nettoyage (p. ex.
                raccordements électriques et à l’eau) doit être mise gratuitement à disposition par
                le client, sauf convention contraire. Le matériel et l’équipement de nettoyage
                apportés restent la propriété de Mirdita Reinigung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">4. Prix et conditions de paiement</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les prix indiqués dans l’offre concernée s’appliquent (en francs suisses). Sauf
                convention contraire, les factures sont payables sans déduction dans les 30 jours
                suivant la date de facturation. En cas de retard de paiement, Mirdita Reinigung peut
                facturer des frais de rappel ainsi que des intérêts moratoires au taux légal.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">
                5. Garantie de remise pour les nettoyages de fin de bail
              </h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Pour les nettoyages de fin de bail commandés, Mirdita Reinigung accorde une garantie
                de remise : si le nettoyage fait l’objet d’une réclamation fondée du bailleur ou de
                la régie lors de la remise du logement, Mirdita Reinigung corrige gratuitement les
                points concernés dans les meilleurs délais, en règle générale dans les 24 à 48
                heures. La garantie de remise est subordonnée à la condition que la réclamation soit
                communiquée par écrit à Mirdita Reinigung (par e-mail ou WhatsApp) dans les 48
                heures suivant la remise, avec l’indication des défauts concrets. La garantie de
                remise ne couvre pas les dommages ou défauts qui ne faisaient pas partie de la
                prestation de nettoyage convenue (p. ex. défauts de construction, traces d’usure,
                dommages préexistants).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">6. Modification de rendez-vous et annulation</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les reports de rendez-vous sont gratuits dans la mesure du possible, à condition de
                nous être communiqués au moins 48 heures avant la date convenue. En cas d’annulation
                plus tardive ou d’impossibilité d’accéder au bien sur place (p. ex. pas d’accès au
                bien), Mirdita Reinigung peut facturer tout ou partie du travail déjà planifié.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">7. Accès et clés</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Si des clés ou des codes d’accès sont remis à Mirdita Reinigung pour l’exécution du
                mandat, ils sont conservés avec soin et utilisés exclusivement aux fins convenues. À
                la fin du mandat, les clés sont restituées ou déposées selon ce qui a été convenu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">8. Responsabilité</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Mirdita Reinigung répond des dommages dont il est prouvé qu’ils ont été causés
                intentionnellement ou par négligence grave de ses collaborateurs. La responsabilité
                pour négligence légère ainsi que pour les dommages causés à des objets dont la
                fragilité particulière ou la valeur n’a pas été expressément signalée avant le début
                du mandat est exclue dans la mesure permise par la loi. Les éventuels dommages
                doivent être signalés à Mirdita Reinigung immédiatement après leur constatation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">9. Protection des données</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Les données collectées dans le cadre de l’exécution du mandat sont traitées
                conformément à notre{" "}
                <Link
                  href="/fr/protection-des-donnees"
                  className="text-brand-bright hover:underline"
                >
                  déclaration de protection des données
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold">10. Dispositions finales et for juridique</h2>
              <p className="mt-2 text-brand-deep/70 leading-relaxed">
                Le droit suisse est exclusivement applicable. Dans la mesure où la loi le permet, le
                for juridique pour tout litige est au siège de Mirdita Reinigung, dans le canton du
                Valais. Si certaines dispositions des présentes CGV sont ou deviennent invalides, la
                validité des autres dispositions n’en est pas affectée.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter lang="fr" />
    </div>
  );
}
