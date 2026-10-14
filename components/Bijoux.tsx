import Image from "next/image";
import { links } from "@/lib/data";
import { Arrow } from "./Icons";

const offers = [
  { name: "Créoles + 1 paire de pampilles", text: "Acier inoxydable, argentées ou dorées, 21 coloris", price: "de 10 à 22 €" },
  { name: "Coffret Capsule", text: "Créoles + 3 paires de pampilles : Amore, Sunset, Laguna, Gatsby…", price: "35 €" },
  { name: "Pampille avec vos fleurs", text: "Vous m’envoyez votre bouquet séché, je le fige pour toujours", price: "30 €" },
];

export default function Bijoux() {
  return (
    <section className="section bijoux" id="bijoux">
      <div className="wrap bijoux__grid">
        <div className="collage reveal">
          <div className="collage__a">
            <Image src="/img/creoles-portees.webp" alt="Créole à pampille fleurie portée" fill sizes="(max-width: 960px) 55vw, 330px" className="object-cover" style={{ objectPosition: "66% 60%" }} />
          </div>
          <div className="collage__b">
            <Image src="/img/pampille-lavande.webp" alt="Créoles dorées et pampilles lavande" fill sizes="(max-width: 960px) 40vw, 240px" className="object-cover" />
          </div>
          <div className="collage__c">
            <Image src="/img/pampille-oeillet.webp" alt="Pampilles œillet rouge sur rondin de bois" fill sizes="(max-width: 960px) 40vw, 240px" className="object-cover" />
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow">Bijoux</p>
          <h2 className="h2" style={{ marginTop: "1rem" }}>
            Une paire de créoles, <em>des dizaines de styles</em>
          </h2>
          <p className="equation">
            1 paire de créoles <b>+</b> des pampilles interchangeables <b>=</b> un bijou différent chaque jour
          </p>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Les pampilles se clipsent et se décrochent en un geste. Lavande, hibiscus, rose, œillet : 15 modèles
            fleuris uniques et des éditions phosphorescentes.
          </p>
          <ul className="offers">
            {offers.map((o) => (
              <li key={o.name}>
                <strong>{o.name}</strong>
                <span>{o.text}</span>
                <em>{o.price}</em>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem 1.75rem", alignItems: "center" }}>
            <a href={links.creoles} className="btn btn--dark">
              Choisir mes pampilles <Arrow />
            </a>
            <a href={links.pampillePerso} className="link">
              Un bijou avec mon bouquet
            </a>
          </div>
          <blockquote className="quote-mini">
            « Effet garanti pour toutes les occasions, à la plage, en soirée… »
            <cite>Hélène, pampilles bleu nuit pailletées</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
