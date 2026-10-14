import { faq } from "@/lib/data";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <div className="faq__head reveal">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="h2" style={{ marginTop: "1rem" }}>
            Tout ce qu’on <em>me demande</em> souvent
          </h2>
        </div>
        <div className="reveal">
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
