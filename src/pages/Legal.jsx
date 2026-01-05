
import { useTitle } from "../hooks/useTitle";

import { useMetaDescription } from "../hooks/useMetaDescription";
// import styles from "../assets/style/scss/Pages.module.scss";

export function Legal() {
  useTitle("Mentions Légales");
  useMetaDescription("Mentions légales de Participabooks. Informations légales et éditeur du site.");

  return (
    <main className="transition-colors duration-300 pt-28 pb-12 px-4
      md:pt-36 md:m-auto md:w-4/5
      lg:pt-44 lg:pb-12 lg:w-3/5">
      <h2 className="text-center text-2xl bg-(--brown-color) text-(--secondary-text-color) p-2 rounded-md shadow-(--card-shadow) mb-4">
        Mentions Légales</h2>

      <section className="flex flex-col gap-6 text-(--brown-color) bg-(--green-color) rounded-md py-4 px-8 shadow-(--card-shadow) mb-2.5
      md:py-8 md:px-12 md:gap-4">
        <article>
          <h3 className="text-(--brown-color) text-lg py-2">Éditeur du site</h3>
          <p>Cyril PEBRE - bakadev</p>
          <a 
            href="https://linktr.ee/bakadev"
            target="_blank"
            rel="lien vers formulaire de contact"
            className="text-(--admin-text-color) font-bold hover:text-(--dark-text-color) hover:border hover:border-(--layout-border-color) hover:px-2 hover:rounded-sm"
          >
            Nous contacter
          </a>
        </article>

        <article>
          <h3 className="text-(--brown-color) text-lg py-2">Hébergement</h3>
          <p>Hébergeur : IONOS</p>
        </article>

        <article>
          <h3 className="text-(--brown-color) text-lg py-2">Responsabilité</h3>
          <p>
            ParticipaBooks décline toute responsabilité quant à l’usage qui
            pourrait être fait des contenus du site. Les utilisateurs restent
            responsables des données qu’ils soumettent.
          </p>
        </article>

        <article>
          <h3 className="text-(--brown-color) text-lg py-2">Propriété intellectuelle</h3>
          <p>
            Tous les éléments du site ParticipaBooks (textes, images, logo, code
            source) sont protégés par le droit d’auteur. Toute reproduction non
            autorisée est interdite.
          </p>
        </article>

        <article>
          <h3 className="text-(--brown-color) text-lg py-2">Données personnelles</h3>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données. Pour toute demande,
            contactez-nous via ce lien :{" "}
            <a
              href="https://linktr.ee/bakadev"
              target="_blank"
              rel="lien vers formulaire de contact"
              className="text-(--admin-text-color) font-bold hover:text-(--dark-text-color) hover:border hover:border-(--layout-border-color) hover:px-2 hover:rounded-sm"
            >
              Nous contacter
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
