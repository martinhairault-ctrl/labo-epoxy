import Image from "next/image";
import { steps } from "@/lib/data";
import { Arrow } from "./Icons";

export default function SurMesure() {
  return (
    <section className="section" id="sur-mesure">
      <div className="wrap">
        <div className="claire">
          <div className="claire__media reveal">
            <div className="arch">
              <Image src="/img/claire.webp" alt="Claire, fondatrice du Labo d’Époxy, une fleur séchée à la main" fill sizes="(max-width: 900px) 90vw, 440px" className="object-cover" />
            </div>
            <p className="arch__tag">
              <strong>10 ans</strong>
              dans l’univers du mariage
            </p>
          </div>
          <div className="reveal">
            <p className="eyebrow">Bonjour, je suis Claire</p>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Donner corps, en résine, <em>aux émotions et aux souvenirs</em>
            </h2>
            <p className="lead" style={{ marginTop: "1.5rem" }}>
              Après 10 années passionnantes passées dans l’univers du mariage, j’ai décidé de mettre mon
              expertise au service de vos émotions à travers Le Labo d’Époxy.
            </p>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Confier vos souvenirs à une experte du secteur nuptial, c’est l’assurance d’une création
              réalisée avec une minutie absolue.
            </p>
            <p className="signature">Claire</p>
          </div>
        </div>

        <div className="made">
          <div className="made__photos reveal">
            <div>
              <Image src="/img/vin-honneur.webp" alt="Invités d’un mariage jouant aux échecs en résine sur un tonneau, au vin d’honneur" fill sizes="(max-width: 960px) 90vw, 560px" className="object-cover" />
            </div>
            <div>
              <Image src="/img/morpion-terracotta.webp" alt="Morpion terracotta en résine" fill sizes="(max-width: 960px) 45vw, 280px" className="object-cover" />
            </div>
            <div>
              <Image src="/img/echiquier-rouge.webp" alt="Échiquier rouge et fleurs séchées" fill sizes="(max-width: 960px) 45vw, 280px" className="object-cover" />
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Sur-mesure · mariages & événements</p>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Vos couleurs, <em>vos fleurs</em>, votre souvenir
            </h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              Échiquier pour le vin d’honneur, morpions et casse-têtes pour la table des enfants, cadeaux
              d’invités, bijoux faits avec votre bouquet : tout est créé dans vos teintes, puis rejoint votre
              intérieur une fois la fête finie.
            </p>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <a href="#contact" className="btn btn--dark" style={{ marginTop: "2.25rem" }}>
              Parler de mon projet <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
