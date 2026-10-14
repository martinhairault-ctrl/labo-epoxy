import Image from "next/image";
import { links } from "@/lib/data";
import { Arrow, Menu } from "./Icons";

const nav = [
  { href: "#shop", label: "Pièces uniques" },
  { href: "#bijoux", label: "Bijoux" },
  { href: "#ateliers", label: "Ateliers" },
  { href: "#sur-mesure", label: "Sur-mesure" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__in">
        <a href="#top" className="header__logo" aria-label="Le Labo d’Époxy, accueil">
          <Image src="/img/logo.png" alt="Le Labo d’Époxy" width={1600} height={430} preload />
        </a>
        <nav className="nav" aria-label="Navigation principale">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href={links.shop} className="btn btn--dark header__cta">
          Le shop <Arrow size={16} />
        </a>
        <details className="burger">
          <summary aria-label="Ouvrir le menu">
            <Menu />
          </summary>
          <div className="burger__panel">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href={links.shop} className="btn btn--dark">
              Le shop <Arrow size={16} />
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
