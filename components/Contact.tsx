import Image from "next/image";
import { contact, links } from "@/lib/data";
import { Arrow } from "./Icons";

export default function Contact() {
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent("Mon projet avec Le Labo d’Époxy")}`;
  return (
    <>
      <section className="section contact" id="contact">
        <div className="wrap">
          <p className="eyebrow reveal">Contact</p>
          <h2 className="h2 reveal" style={{ marginTop: "1rem" }}>
            Imaginons, ensemble, <em>votre souvenir de demain</em>
          </h2>
          <p className="lead reveal">
            Une couleur de mariage, un bouquet à conserver, une idée de cadeau : racontez-moi, je vous réponds
            personnellement.
          </p>
          <div className="contact__actions reveal">
            <a href={mail} className="btn btn--gold">
              Écrire à Claire <Arrow />
            </a>
            <a href={contact.whatsapp} className="btn btn--ghost">
              WhatsApp
            </a>
          </div>
          <div className="channels reveal">
            <a href={mail}>
              <small>E-mail</small>
              {contact.email}
            </a>
            <a href={`tel:+33${contact.phone.replace(/\s/g, "").slice(1)}`}>
              <small>Téléphone / WhatsApp</small>
              {contact.phone}
            </a>
            <div>
              <small>Réseaux</small>
              <a href={contact.instagram}>Instagram</a> · <a href={contact.tiktok}>TikTok</a> ·{" "}
              <a href={contact.etsy}>Etsy</a>
            </div>
            <a href={contact.maps}>
              <small>Ateliers</small>
              {contact.atelier}
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer__in">
          <Image src="/img/logo.png" alt="Le Labo d’Époxy" width={1600} height={430} />
          <nav aria-label="Liens légaux">
            <a href={links.shop}>Le shop</a>
            <a href={links.ateliers}>Les ateliers</a>
            <a href={links.mentions}>Mentions légales</a>
            <a href={links.cgv}>CGV</a>
            <a href={links.confidentialite}>Confidentialité</a>
          </nav>
          <p>La Clairement Bonne Idée · fait main à Nantes</p>
        </div>
      </footer>
    </>
  );
}
