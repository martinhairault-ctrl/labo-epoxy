// Contenu réel extrait de lelabodepoxy.fr (accueil, Ateliers, Contact, fiches produits
// via l’API WooCommerce), relevé le 14/10/2026. Les liens pointent vers le site existant.

export const SITE = "https://lelabodepoxy.fr";

export const contact = {
  email: "laclairementbonneidee@gmail.com",
  phone: "06 77 68 18 14",
  // Le lien du site actuel (wa.me/677681814) est invalide : indicatif 33 ajouté.
  whatsapp: "https://wa.me/33677681814",
  instagram: "https://www.instagram.com/lelabodepoxy/",
  tiktok: "https://www.tiktok.com/@lelabodepoxy/",
  etsy: "https://www.etsy.com/shop/LeLabodEpoxy",
  atelier: "Atelier La Bobine, 114 boulevard Ernest Dalby, 44000 Nantes",
  maps: "https://www.google.com/maps/search/?api=1&query=114+boulevard+Ernest+Dalby+44000+Nantes",
};

export const links = {
  shop: `${SITE}/stock-boutique/`,
  ateliers: `${SITE}/atelier-initiation-resine-epoxy-creez-votre-jeu-de-societe-ou-objet-deco-personnalise/`,
  reserver: `${SITE}/shop/atelier/atelier-initiation-resine-epoxy-creez-votre-jeu-de-societe-ou-objet-deco-personnalise/`,
  carteCadeau: `${SITE}/shop/atelier/carte-cadeau-les-ateliers-initiation-resine-epoxy-a-nantes/`,
  creoles: `${SITE}/shop/bijoux/pampilles-fleurs-gold/`,
  pampillePerso: `${SITE}/shop/bijoux/pampille-fleurie-personnalisee-modele-unique-pour-vous/`,
  mentions: `${SITE}/mentions-legales/`,
  cgv: `${SITE}/conditions-generales-vente/`,
  confidentialite: `${SITE}/politique-de-confidentialite/`,
};

export const heroCards = [
  { src: "/img/carrousel.webp", alt: "Carrousel en résine aux fleurs séchées", r: -20, z: 1, d: 0.55 },
  { src: "/img/pampille-mauve.webp", alt: "Créoles à pampilles fleuries posées sur un rondin", r: -10, z: 2, d: 0.4 },
  { src: "/img/echiquier-or.webp", alt: "Échiquier en résine, fleurs séchées et feuille d’or", r: 0, z: 3, d: 0.25 },
  { src: "/img/dominos-holo.webp", alt: "Dominos transparents aux inclusions florales", r: 10, z: 2, d: 0.4 },
  { src: "/img/table-dolcevita.webp", alt: "Plateau de table échiquier Dolce Vita sur pied doré", r: 20, z: 1, d: 0.55 },
];

export const ticker = [
  "Pièces uniques",
  "Fait main à Nantes",
  "Vraies fleurs séchées",
  "Feuilles d’or, d’argent et de cuivre",
  "Avis clients 5/5",
  "Ateliers dès 50 €",
];

export const universes = [
  {
    key: "jeux",
    title: "Jeux & déco",
    text: "Échiquiers, dominos, Scrabble, plateau de table : des objets d’art qui se jouent.",
    price: "de 39 à 340 €",
    img: "/img/echiquier-turquoise.webp",
    alt: "Échiquier turquoise et or aux fleurs séchées",
    href: "#shop",
  },
  {
    key: "bijoux",
    title: "Bijoux",
    text: "Créoles et pampilles fleuries interchangeables.",
    price: "dès 10 €",
    img: "/img/pampille-rose.webp",
    alt: "Pampilles roses en résine tenues entre les doigts",
    href: "#bijoux",
  },
  {
    key: "ateliers",
    title: "Ateliers à Nantes",
    text: "Créez votre pièce en petit groupe.",
    price: "dès 50 €",
    img: "/img/piece-main.webp",
    alt: "Pièce d’échecs en résine fleurie tenue à la main",
    href: "#ateliers",
  },
  {
    key: "mariage",
    title: "Sur-mesure mariage",
    text: "Jeux du vin d’honneur, table des enfants, bijoux faits avec votre bouquet : aux couleurs de votre jour J.",
    price: "sur devis",
    img: "/img/echiquier-cuivre.webp",
    alt: "Échiquier aux fleurs séchées et feuille de cuivre",
    href: "#sur-mesure",
  },
];

// Stock relevé le 14/10/2026 (Store API). Pièces uniques : à resynchroniser avec WooCommerce.
export const products = [
  {
    name: "Jeu d’échecs Romantique",
    detail: "Plateau 30 × 30 cm, 32 pièces",
    price: "119 €",
    stock: "1 disponible",
    img: "/img/echiquier-romantique.webp",
    href: `${SITE}/shop/creations-au-shop/jeu-dechecs-unique-en-resine-epoxy-modele-romantique/`,
  },
  {
    name: "Plateau de table Dolce Vita",
    detail: "Échiquier Ø 50 cm, piètement non fourni",
    price: "340 €",
    stock: "1 disponible",
    img: "/img/table-dolcevita.webp",
    href: `${SITE}/shop/creations-au-shop/plateau-de-table-echiquier-en-resine-dolce-vita-50-cm/`,
  },
  {
    name: "Scrabble botanique",
    detail: "Plateau, 100 jetons, 2 chevalets, dorure",
    price: "79 €",
    stock: "Disponible",
    img: "/img/scrabble.webp",
    href: `${SITE}/shop/creations-au-shop/jeu-de-scrabble-artisanal-transparence-fleurs-sechees-dorure/`,
  },
  {
    name: "Dominos Transparence Automne",
    detail: "Jeu complet et son pochon",
    price: "49 €",
    stock: "1 disponible",
    img: "/img/dominos-automne.webp",
    href: `${SITE}/shop/creations-au-shop/jeu-de-dominos-unique-modele-transparence-automne/`,
  },
  {
    name: "Porte-bijoux Cerf",
    detail: "2 couleurs au choix parmi 7",
    price: "39 €",
    stock: "Personnalisable",
    img: "/img/cerf.webp",
    href: `${SITE}/shop/creations-au-shop/porte-bijoux-cerf-en-resine-couleurs-personnalisables/`,
  },
  {
    name: "Coffret Capsule",
    detail: "Créoles + 3 paires de pampilles",
    price: "35 €",
    stock: "5 ambiances",
    img: "/img/coffret.webp",
    href: `${SITE}/shop/creations-au-shop/coffret-capsule-pampilles-creoles-3-paires-de-pampilles-interchangeables/`,
  },
];

export const adopted = [
  { name: "Échiquier Gothique", img: "/img/gothique.webp" },
  { name: "Échiquier Océan", img: "/img/ocean.webp" },
  { name: "Morpion Terracotta", img: "/img/morpion-terracotta.webp" },
];

export const workshops = [
  {
    name: "L’Échiquier d’exception",
    text: "Personnalisé de A à Z, réalisé en 3 temps dans vos teintes.",
    time: "3 h",
    price: "150 €",
    img: "/img/echiquier-bois.webp",
  },
  {
    name: "Le Grand Casse-tête mystique",
    text: "Un jeu géométrique qui devient objet déco sur son socle.",
    time: "2 h 30",
    price: "80 €",
    img: "/img/casse-tete.webp",
  },
  {
    name: "Les Dominos élégants",
    text: "Des inclusions botaniques dans la résine transparente.",
    time: "2 h 30",
    price: "70 €",
    img: "/img/dominos-terracotta.webp",
  },
  {
    name: "Le Carrousel poétique",
    text: "Un plateau tournant aux reflets enchantés.",
    time: "2 h",
    price: "50 €",
    img: "/img/carrousel.webp",
  },
];

// Dates en vente sur la fiche de réservation au 14/10/2026.
export const sessions = ["Dimanche 18 octobre", "Samedi 28 novembre"];

export const steps = [
  { title: "Contactez-moi", text: "Vos couleurs, votre thème, la date de l’événement : racontez-moi votre projet." },
  { title: "Je vous recontacte", text: "On affine ensemble les teintes, les fleurs et les pièces, puis je vous envoie un devis." },
  { title: "Je fabrique", text: "Chaque pièce est coulée à la main à Nantes. Comptez environ 2 mois, séchage parfait compris." },
  { title: "Le colis arrive", text: "Votre création est soigneusement emballée et livrée chez vous, prête pour le jour J." },
];

// Verbatims réels (page Contact et avis WooCommerce). Seules les fautes d’orthographe
// ont été corrigées (« a adoré », « a su », « a marqué », « ont pu jouer », « ont duré »).
export const testimonials = [
  {
    text: "Mon mariage était sur le thème « Terracotta » et Claire m’a fait un échiquier, un jeu de morpion et des casse-têtes pour la table enfants dans mes couleurs. Tout le monde a adoré l’idée ! Les invités ont pu jouer pendant les photos et le vin d’honneur et les enfants sont repartis avec les cadeaux !",
    name: "Pauline",
    role: "Mariage, Toulouse",
  },
  {
    text: "Une véritable merveille ! Je suis sous le charme des créations de Claire ! La minutie et chaque détail pensé est un vrai plaisir pour les yeux ! Je suis très fière d’avoir cette pièce unique chez moi.",
    name: "Jessica",
    role: "Échiquier Romantique Cuivré",
  },
  {
    text: "J’ai opté pour des pampilles bleu nuit pailletées. Effet garanti pour toutes les occasions, à la plage, en soirée… matériel de qualité et finitions très soignées.",
    name: "Hélène",
    role: "Créoles interchangeables",
  },
  {
    text: "Merci, merci, merci. Claire a su nous créer des jeux magnifiques sur le thème « Dolce Vita ». Les invités ont pu jouer dans la journée. L’échiquier, qui décorait la table du vin d’honneur, a marqué tout le monde. Maintenant, le mariage est terminé mais nous avons un magnifique souvenir sur notre table à manger !",
    name: "Sophie",
    role: "Mariage, Paris",
  },
  {
    text: "Je suis ravie de mon achat, la qualité est là et elles sont vraiment canon ! Je recommande vivement.",
    name: "Stéphanie B.",
    role: "Créoles interchangeables",
  },
  {
    text: "J’avais fait la surprise à ma femme en envoyant nos couleurs au labo. Elle a pu découvrir le jour J un sublime échiquier fleuri et plein de sortes de casse-têtes. C’était très beau et pratique : les photos ont duré un peu et les invités ont pu jouer avant l’apéritif.",
    name: "Johann",
    role: "Mariage, Lille",
  },
  {
    text: "Les couleurs sont magnifiques : originales et brillantes.",
    name: "Karine",
    role: "Créoles interchangeables",
  },
  {
    text: "Trop trop belles boucles d’oreilles. Tout est parfait.",
    name: "Sarah",
    role: "Créoles interchangeables",
  },
];

export const faq = [
  {
    q: "La pièce que je reçois est-elle celle de la photo ?",
    a: "Oui. Les créations du shop sont des pièces uniques : l’échiquier que vous voyez en photo est exactement celui que vous recevrez. Elles sont expédiées sous 3 à 7 jours ouvrés.",
  },
  {
    q: "Faut-il de l’expérience pour participer à un atelier ?",
    a: "Non, aucune. L’atelier est pensé pour les débutants : chaque étape, du dosage au démoulage, est expliquée et accompagnée. Prévoyez simplement une tenue que vous n’avez pas peur de tacher.",
  },
  {
    q: "Je repars avec ma création le jour même ?",
    a: "Pas tout à fait : la résine a besoin de plusieurs jours pour sécher et révéler son éclat. Vous la récupérez gratuitement à l’atelier, ou vous la faites livrer (+12 €, +17 € pour l’échiquier).",
  },
  {
    q: "Peut-on réserver un atelier entre amis ou l’offrir ?",
    a: "Oui : anniversaire, EVJF, EVG, sortie entre collègues… Réservez la session entière jusqu’à 5 personnes, ou offrez une carte cadeau de 50 à 150 €, valable 1 an et envoyée par e-mail.",
  },
  {
    q: "Combien de temps pour une commande sur-mesure ?",
    a: "Comptez environ 2 mois entre la commande, la création et le temps de séchage parfait. Pour un mariage, le plus tôt est le mieux : écrivez-moi dès que vous avez vos couleurs.",
  },
  {
    q: "Comment créer un bijou avec les fleurs de mon bouquet ?",
    a: "Faites sécher vos fleurs, envoyez-les-moi par courrier, et je les fige dans une paire de pampilles unique, sur créoles dorées ou argentées (30 €).",
  },
];
