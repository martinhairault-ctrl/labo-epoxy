import Image from "next/image";
import { adopted, links, products } from "@/lib/data";
import { Arrow } from "./Icons";

export default function Shop() {
  return (
    <section className="section shop" id="shop">
      <div className="wrap">
        <div className="head head--split reveal">
          <div>
            <p className="eyebrow">Pièces uniques</p>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Disponibles <em>maintenant</em>, en un seul exemplaire
            </h2>
          </div>
          <div>
            <p className="lead">
              L’échiquier que vous voyez en photo est exactement celui que vous recevrez. Quand une pièce part,
              elle ne revient pas.
            </p>
            <ul className="reassure">
              <li>Paiement sécurisé</li>
              <li>Expédié sous 3 à 7 jours ouvrés</li>
            </ul>
          </div>
        </div>
        <div className="products">
          {products.map((p) => (
            <a key={p.name} href={p.href} className="product reveal">
              <div className="product__img">
                <Image src={p.img} alt={p.name} fill sizes="(max-width: 900px) 50vw, 400px" className="object-cover" />
                <span className="badge">{p.stock}</span>
              </div>
              <div className="product__meta">
                <h3 className="product__name">{p.name}</h3>
                <span className="product__price">{p.price}</span>
              </div>
              <p className="product__detail">{p.detail}</p>
            </a>
          ))}
        </div>
        <div className="adopted">
          <a href={links.shop} className="btn btn--dark">
            Tout le shop <Arrow />
          </a>
          <div className="adopted__list">
            {adopted.map((a) => (
              <div key={a.name} className="adopted__item">
                <Image src={a.img} alt="" width={56} height={56} />
                <div>
                  <small>Déjà adopté</small>
                  {a.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
