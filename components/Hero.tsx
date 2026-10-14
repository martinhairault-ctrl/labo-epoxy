import Image from "next/image";
import type { CSSProperties } from "react";
import { heroCards, ticker } from "@/lib/data";
import { Arrow } from "./Icons";

// Structure reprise du composant 21st.dev « Hero Section with Cards » (scrollxui),
// réécrite en CSS pur : éventail de vraies photos, entrée animée sans JS.
export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <p className="eyebrow">Atelier de résine · Nantes</p>
          <h1 className="h1" style={{ marginTop: "1.25rem" }}>
            Des fleurs, de l’or, de la résine. <em>Et une pièce qui n’existe qu’une fois.</em>
          </h1>
          <p className="lead">
            Échiquiers fleuris, dominos, bijoux à pampilles interchangeables : chaque création est coulée à la main
            par Claire, avec de vraies fleurs séchées. Celle que vous voyez est celle que vous recevez.
          </p>
          <div className="hero__actions">
            <a href="#shop" className="btn btn--dark">
              Voir les pièces disponibles <Arrow />
            </a>
            <a href="#ateliers" className="link">
              ou créer la vôtre en atelier, dès 50 €
            </a>
          </div>
          <ul className="proof">
            <li>
              <span className="stars" aria-hidden="true">★★★★★</span> 5/5 sur tous les avis clients
            </li>
            <li>10 ans dans l’univers du mariage</li>
            <li>Fait main en France</li>
          </ul>
        </div>
        <div className="fan" aria-hidden="true">
          {heroCards.map((c, i) => (
            <div
              key={c.src}
              className="fan__card"
              style={{ "--i": i - 2, "--r": c.r, "--z": c.z, "--d": c.d } as CSSProperties}
            >
              <div className="fan__inner">
                <Image
                  src={c.src}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 140px, 240px"
                  className="object-cover"
                  loading={i === 2 ? "eager" : "lazy"}
                  fetchPriority={i === 2 ? "high" : "auto"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="ticker" aria-label={ticker.join(", ")}>
        <div className="ticker__track" aria-hidden="true">
          {/* 2 moitiés identiques, chacune répétée 3 fois : boucle continue jusqu’au 4K */}
          {[0, 1].map((half) =>
            Array.from({ length: 3 }, () => ticker)
              .flat()
              .map((t, i) => <span key={`${half}-${i}`}>{t}</span>),
          )}
        </div>
      </div>
    </>
  );
}
