import Image from "next/image";
import { links, sessions, workshops } from "@/lib/data";
import { Arrow } from "./Icons";

const facts = [
  { k: "5 personnes", v: "maximum par session" },
  { k: "Débutants", v: "bienvenus, aucune expérience requise" },
  { k: "Tout compris", v: "matériel et matières inclus" },
  { k: "La Bobine", v: "lieu d’artisans, Nantes" },
];

export default function Ateliers() {
  return (
    <section className="section ateliers" id="ateliers">
      <div className="wrap ateliers__grid">
        <div className="ateliers__media reveal">
          {/* Extrait (12 s, sans son) d’une vidéo réelle publiée sur le site actuel. */}
          <video className="video" src="/img/atelier.mp4" poster="/img/atelier-poster.webp" autoPlay muted loop playsInline preload="metadata" aria-label="Échiquier en résine turquoise filmé à l’atelier" />
        </div>
        <div>
          <div className="reveal">
            <p className="eyebrow">Ateliers d’initiation à Nantes</p>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Un moment suspendu, <em>une création née de vos mains</em>
            </h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              Vous choisissez vos matières (fleurs séchées, pigments, feuilles d’or, d’argent ou de cuivre),
              j’ouvre l’atelier et je vous guide pas à pas, du dosage à la coulée.
            </p>
            <ul className="facts">
              {facts.map((f) => (
                <li key={f.k}>
                  <strong>{f.k}</strong>
                  {f.v}
                </li>
              ))}
            </ul>
          </div>
          <ul className="menu reveal" aria-label="Les 4 créations possibles">
            {workshops.map((w) => (
              <li key={w.name}>
                <div className="menu__img">
                  <Image src={w.img} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <h3 className="menu__name">{w.name}</h3>
                <p className="menu__price">
                  {w.price}
                  <small>{w.time}</small>
                </p>
                <p className="menu__text">{w.text}</p>
              </li>
            ))}
          </ul>
          <div className="dates reveal">
            <span>Prochaines sessions</span>
            {sessions.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <div className="ateliers__cta reveal">
            <a href={links.reserver} className="btn btn--gold">
              Réserver ma place <Arrow />
            </a>
            <p>Places limitées à 5 par session · paiement sécurisé</p>
          </div>
          <div className="gift reveal">
            <div className="gift__img">
              <Image src="/img/carte-cadeau.webp" alt="Carte cadeau Le Labo d’Époxy" fill sizes="92px" className="object-cover" />
            </div>
            <div>
              <h3 className="menu__name">Offrir un atelier</h3>
              <p>Carte cadeau de 50 à 150 €, valable 1 an, envoyée par e-mail. L’idée cadeau qui ne prend pas la poussière.</p>
              <a href={links.carteCadeau} className="link">
                Offrir une carte cadeau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
