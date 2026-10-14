import type { CSSProperties } from "react";
import { testimonials } from "@/lib/data";

type T = (typeof testimonials)[number];

// Adapté du composant 21st.dev « Testimonials Columns » (efferd) : colonnes en
// défilement vertical continu, réécrites en CSS (pause au survol, figées en reduced-motion).
function Column({ items, duration }: { items: T[]; duration: number }) {
  return (
    <div className="column">
      <div className="column__track" style={{ "--dur": `${duration}s` } as CSSProperties}>
        {[0, 1].map((copy) =>
          items.map((t) => (
            <figure key={`${copy}-${t.name}`} className="review" aria-hidden={copy === 1 || undefined}>
              <p>« {t.text} »</p>
              <footer>
                <span className="monogram" aria-hidden="true">
                  {t.name[0]}
                </span>
                <figcaption>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </figcaption>
              </footer>
            </figure>
          )),
        )}
      </div>
    </div>
  );
}

export default function Avis() {
  const cols = [testimonials.slice(0, 3), testimonials.slice(3, 6), testimonials.slice(6).concat(testimonials[1])];
  return (
    <section className="section avis" id="avis">
      <div className="wrap avis__grid">
        <div className="reveal">
          <p className="eyebrow">Ils en parlent</p>
          <h2 className="h2" style={{ marginTop: "1rem" }}>
            « L’échiquier <em>a marqué tout le monde</em> »
          </h2>
          <div className="score">
            <strong>5/5</strong>
            <span>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <br />
              sur tous les avis clients du shop
            </span>
          </div>
        </div>
        <div className="columns">
          <Column items={cols[0]} duration={38} />
          <Column items={cols[1]} duration={48} />
          <Column items={cols[2]} duration={34} />
        </div>
      </div>
    </section>
  );
}
