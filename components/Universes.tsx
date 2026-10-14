import Image from "next/image";
import { universes } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Universes() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="head head--split reveal">
          <div>
            <p className="eyebrow">Le Labo</p>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Quatre façons d’entrer <em>au Labo</em>
            </h2>
          </div>
          <p className="lead">
            Offrir un bijou, jouer sur une pièce d’art, figer les fleurs d’un grand jour ou mettre soi-même les
            mains dans la résine : choisissez votre porte.
          </p>
        </div>
        <div className="bento">
          {universes.map((u) => (
            <a key={u.key} href={u.href} className={`tile tile--${u.key} reveal`}>
              <Image src={u.img} alt={u.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 40vw" className="object-cover" />
              <span className="tile__go" aria-hidden="true">
                <ArrowUpRight />
              </span>
              <div className="tile__body">
                <span className="tile__price">{u.price}</span>
                <h3 className="h3">{u.title}</h3>
                <p>{u.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
