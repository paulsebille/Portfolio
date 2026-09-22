export type Project = {
  slug: string;
  brand: string;
  title: string;
  year: string;
  intro: string;
  role: string;
  categories: string[];
  description: string;
  approach: { title: string; text: string }[];
  results: { value: string; label: string; note?: string }[];
  heroImage?: string;
  gallery?: string[];
  visualLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "canneseries-audi",
    brand: "AUDI × CANNESERIES",
    title: "Transformer un partenariat en expérience de marque",
    year: "2026",
    intro:
      "À l’occasion de la 9ᵉ édition de CANNESERIES, j’ai construit et piloté une activation pour Audi Mougins mêlant expérience VIP, contenu, visibilité et business.",
    role: "Responsable Marketing",
    categories: ["Partenariats", "Événementiel", "Influence", "Business"],
    description:
      "Du transport des invités au Pink Carpet, des avant-premières aux soirées privées, Audi s’est intégrée à l’expérience CANNESERIES à travers un dispositif pensé pour toucher une audience premium, B2B et B2C. L’enjeu était double : créer de la préférence de marque auprès d’une audience qualifiée et transformer la visibilité du partenariat en expérience, en contenu et en business.",
    approach: [
      { title: "Construire le partenariat", text: "Une flotte de 19 Audi et un dispositif déployé pendant les 6 jours du festival pour inscrire la marque au cœur de l’expérience." },
      { title: "Expérience VIP", text: "Transferts Hôtel Majestic ↔ Palais des Festivals, escorte Police Nationale, Pink Carpet, avant-premières, cocktails, soirées privées, nuit au Majestic Barrière et sessions de doublage." },
      { title: "Contenu & visibilité", text: "Un dispositif éditorial et social prolongé par les publications, stories et contenus produits autour du festival." },
      { title: "Business", text: "Une activation pensée pour aller jusqu’au contact commercial : essais, leads et ventes suivis dans le temps." }
    ],
    results: [
      { value: "+110K", label: "vues Meta" },
      { value: "48,4M", label: "impressions CANNESERIES" },
      { value: "59", label: "leads générés" },
      { value: "36", label: "essais" },
      { value: "8", label: "ventes au 01/06/2026" },
      { value: "13,6%", label: "taux de conversion" }
    ],
    heroImage: "/images/canneseries-hero.jpg",
    gallery: ["/images/canneseries-stage.jpg", "/images/canneseries-premiere.jpg"],
    visualLabel: "CANNESERIES"
  },
  {
    slug: "disney-plus",
    brand: "DISNEY+",
    title: "Lancer une nouvelle plateforme dans un contexte inédit",
    year: "2020",
    intro:
      "Le 7 avril 2020, Disney+ arrive en France au cœur du premier confinement. J’ai participé au déploiement d’un écosystème de contenus mêlant lancement, social media, influence, événementiel et analyse des performances.",
    role: "Marketing & Communication",
    categories: ["Lancement", "Digital", "Contenu", "Influence"],
    description:
      "Après un lancement initialement prévu le 24 mars, la plateforme est finalement déployée le 7 avril dans un contexte exceptionnel. De son lancement aux campagnes consacrées aux sorties de Toy Story 4, Le Roi Lion, La Reine des Neiges 2, Star Wars : L’Ascension de Skywalker ou encore Mulan, j’ai participé à la mise en œuvre de prises de parole mêlant contenus digitaux, réseaux sociaux, influence, événementiel et analyse des retombées.",
    approach: [
      { title: "Lancement", text: "Accompagner l’arrivée de Disney+ en France avec une communication adaptée à un contexte inédit et une plateforme riche de centaines de contenus." },
      { title: "Contenus", text: "Gestion de bandes-annonces, affiches, contenus éditoriaux et publications destinées aux réseaux sociaux." },
      { title: "Franchises", text: "Accompagnement des grandes sorties et temps forts autour de Toy Story 4, Le Roi Lion, La Reine des Neiges 2, Star Wars IX et Mulan." },
      { title: "Mesure", text: "Analyse des retombées digitales et de l’e-réputation : reach, engagement, PR Value et reporting." },
      { title: "Expérience", text: "Organisation d’événements VIP et influenceurs ainsi que d’activations liées aux sorties de films." }
    ],
    results: [
      { value: "1,8M", label: "téléchargements de l’app en France en 24h", note: "Contexte lancement" },
      { value: "50M", label: "abonnés payants Disney+ dans le monde", note: "5 mois après le lancement US" },
      { value: "73,7M", label: "abonnés mondiaux", note: "Au 3 octobre 2020" },
      { value: "500+", label: "films disponibles au lancement", note: "Contexte plateforme" },
      { value: "300+", label: "séries disponibles au lancement", note: "Contexte plateforme" }
    ],
    visualLabel: "DISNEY+"
  },
  {
    slug: "audi-f1-experience",
    brand: "AUDI F1 EXPERIENCE",
    title: "Faire vivre l’arrivée d’Audi en Formule 1",
    year: "2026",
    intro:
      "De la révélation de l’Audi R26 Showcar en concession à une expérience VIP au cœur du Grand Prix de Monaco, un fil rouge construit autour de la F1.",
    role: "Responsable Marketing",
    categories: ["Événementiel", "Expérience client", "Partenariats", "Contenu"],
    description:
      "À l’occasion de l’arrivée d’Audi en Formule 1, j’ai imaginé une activation en deux temps pour faire émerger ce nouveau territoire de marque auprès de nos clients et de notre communauté locale. Une première expérience à Audi Mougins, puis son prolongement au Grand Prix de Monaco pour faire découvrir, faire vivre et faire prolonger l’univers F1.",
    approach: [
      { title: "01 · Night Edition", text: "Le 28 mai 2026, révélation de l’Audi R26 Showcar à Audi Mougins dans une scénographie immersive : lumière, musique, cocktail, animations et collaborations locales." },
      { title: "02 · Grand Prix de Monaco", text: "Une journée exclusive pour 20 clients ultra-VIP avec brunch festif et expérience privilégiée au cœur du Grand Prix." },
      { title: "Hospitality", text: "Créer une expérience client premium autour d’un territoire de marque inédit pour Audi et prolonger la relation au-delà de la concession." },
      { title: "Contenu", text: "Produire des contenus photo et vidéo et relayer les temps forts sur les réseaux sociaux pour prolonger l’expérience." }
    ],
    results: [
      { value: "89", label: "invités présents à la Night Edition" },
      { value: "8", label: "essais réalisés" },
      { value: "5/5", label: "satisfaction clients" },
      { value: "×3", label: "fréquentation en concession" },
      { value: "20", label: "clients ultra-VIP au Grand Prix" }
    ],
    heroImage: "/images/audi-f1-hero.jpg",
    gallery: ["/images/audi-f1-red.jpg", "/images/audi-f1-vip.jpg", "/images/audi-f1-car.jpg"],
    visualLabel: "AUDI F1"
  },
  {
    slug: "kenzo-volkswagen-id-buzz",
    brand: "KENZO × VOLKSWAGEN",
    title: "Une expérience sensorielle entre parfum, design et mobilité",
    year: "2024",
    intro:
      "Une collaboration tripartite entre KENZO Parfums, Win-Win et Volkswagen pour accompagner une activation influence au Palais Bulles sur la Côte d’Azur.",
    role: "Marketing & Partenariats",
    categories: ["Influence", "Partenariats", "Expérience", "Mobilité"],
    description:
      "Dans le cadre d’une activation influence imaginée par KENZO Parfums avec l’agence Win-Win, nous avons accompagné les invités lors d’une expérience immersive au Palais Bulles. L’objectif : créer une rencontre naturelle entre l’univers créatif de KENZO et celui de Volkswagen, en profitant de cette expérience pour mettre en scène l’ID. Buzz.",
    approach: [
      { title: "Mobilité", text: "5 ID. Buzz mobilisés pour accompagner les invités jusqu’au Palais Bulles et inscrire Volkswagen au cœur du parcours." },
      { title: "Influence", text: "Une expérience pensée pour plus de 100 influenceurs, dans un environnement premium et fortement orienté contenu." },
      { title: "Expérience", text: "Un parcours autour du mimosa et des différentes étapes de fabrication d’un parfum KENZO, avec l’ID. Buzz comme écrin mobile." },
      { title: "Amplification", text: "Créer les conditions d’une visibilité sociale autour du véhicule, de l’expérience et de la collaboration entre les trois partenaires." }
    ],
    results: [
      { value: "+100", label: "influenceurs accompagnés" },
      { value: "5", label: "ID. Buzz mobilisés" },
      { value: "+100K", label: "impressions sociales" },
      { value: "≈4,5%", label: "taux d’engagement", note: "Estimation" }
    ],
    heroImage: "/images/kenzo-hero.jpg",
    gallery: ["/images/kenzo-palais.jpg", "/images/kenzo-cars.jpg"],
    visualLabel: "KENZO × ID. BUZZ"
  },
  {
    slug: "roi-lion-disney",
    brand: "DISNEY × LE ROI LION",
    title: "Faire d’un film un événement planétaire",
    year: "2019",
    intro:
      "Pour accompagner la sortie française du Roi Lion, un dispositif mêlant relations presse, voyages presse, influence, événementiel, création de contenus et animation digitale.",
    role: "Marketing & Relations Presse",
    categories: ["Relations presse", "Influence", "Événementiel", "Digital"],
    description:
      "À l’été 2019, Disney prépare le retour au cinéma de l’un de ses films les plus iconiques. De l’organisation de voyages presse au press junket du Bristol, à la rencontre avec les voix françaises du film, jusqu’à l’avant-première au Grand Rex, chaque temps fort était pensé pour créer de la visibilité et alimenter les prises de parole de Disney avant la sortie.",
    approach: [
      { title: "Press junket · Le Bristol", text: "Organisation et coordination d’un press junket permettant aux journalistes et médias de rencontrer les voix françaises du film et de produire leurs contenus éditoriaux." },
      { title: "Avant-première · Grand Rex", text: "Le 11 juillet 2019, une projection spéciale réunissant 2 500 spectateurs, les voix françaises et de nombreux invités, créateurs et influenceurs." },
      { title: "Relations presse", text: "Rédaction de communiqués et coordination des prises de parole autour du casting, des temps forts et de la sortie du film." },
      { title: "Contenus & social", text: "Publication et relais de contenus, affiches, bandes-annonces, actualités casting et contenus événementiels sur les réseaux sociaux." }
    ],
    results: [
      { value: "630K", label: "spectateurs en France au 1er jour" },
      { value: "2,56M", label: "spectateurs en 5 jours" },
      { value: "9,5M", label: "spectateurs en France", note: "Septembre 2019" },
      { value: "6M+", label: "vues sur la bande-annonce VF officielle" },
      { value: "$1,6B+", label: "box-office mondial", note: "Contexte film" }
    ],
    heroImage: "/images/roi-lion-hero.jpg",
    gallery: ["/images/roi-lion-hero.jpg"],
    visualLabel: "LE ROI LION"
  },
  {
    slug: "cupra-nice-jazz-festival",
    brand: "CUPRA × NICE JAZZ FESTIVAL",
    title: "Quand la CUPRA Raval entre en scène",
    year: "2026",
    intro:
      "Du 23 au 25 juillet 2026, CUPRA s’est invitée au cœur du Nice Jazz Festival à travers une collaboration réunissant CUPRA, Sixt France, le Nice Jazz Festival et la Ville de Nice.",
    role: "Responsable Marketing",
    categories: ["Partenariats", "Événementiel", "Activation commerciale", "Contenu"],
    description:
      "L’objectif : profiter de la puissance d’un événement culturel majeur de la Côte d’Azur pour faire émerger la nouvelle CUPRA RAVAL, créer du contact avec le public et transformer cette visibilité en opportunités commerciales. L’enjeu était double : donner une forte visibilité à la nouveauté tout en créant un dispositif capable de générer du business.",
    approach: [
      { title: "Présence", text: "Création d’un corner CUPRA × Sixt avec la RAVAL au centre du dispositif, un néon signature et un jeu de lumière inspiré de l’identité du festival." },
      { title: "Découverte produit", text: "Roue de la fortune digitale, lots et présence de l’équipe commerciale et d’hôtes pour engager les visiteurs et créer des conversations autour de la RAVAL." },
      { title: "VIP", text: "Invitation de clients et prospects CUPRA pour renforcer la fidélisation et créer une découverte privilégiée du nouveau modèle." },
      { title: "Amplification", text: "Production de contenus photo et vidéo et relais social pour prolonger l’expérience au-delà du site du festival." }
    ],
    results: [
      { value: "+50K", label: "participants" },
      { value: "+650", label: "lots distribués" },
      { value: "412", label: "leads générés" },
      { value: "12", label: "clients & prospects invités" },
      { value: "4", label: "ventes à J+7" }
    ],
    heroImage: "/images/cupra-hero.jpg",
    gallery: ["/images/cupra-concert.jpg", "/images/cupra-public.jpg", "/images/cupra-detail.jpg"],
    visualLabel: "CUPRA RAVAL"
  },
  {
    slug: "e-kardashian",
    brand: "E! ENTERTAINMENT",
    title: "Faire d’une série culte un événement influence",
    year: "2019",
    intro:
      "Une activation dédiée à L’Incroyable Famille Kardashian, mêlant relations presse, influence, événementiel et contenus digitaux pour prolonger l’univers de la série au-delà de l’écran.",
    role: "Relations Presse & Publiques",
    categories: ["Relations presse", "Influence", "Événementiel", "Social media"],
    description:
      "Dans le cadre de mes missions pour E! Entertainment, j’ai participé à la promotion de L’Incroyable Famille Kardashian à travers une activation dédiée à la série. L’objectif : créer un temps fort autour de la franchise et faire vivre l’univers Kardashian au-delà de l’écran, en réunissant des influenceurs autour d’une expérience pensée pour générer de la visibilité et du contenu sur les réseaux sociaux.",
    approach: [
      { title: "Influence", text: "Sélection et invitation d’influenceurs, gestion des invitations et coordination des participants autour d’une expérience dédiée à l’univers E!." },
      { title: "Événement", text: "Créer un temps fort physique autour de L’Incroyable Famille Kardashian et offrir aux invités un contexte propice au partage social." },
      { title: "Relations presse", text: "Rédaction de communiqués, relations avec les médias et coordination des prises de parole pour 13ème RUE, SYFY et E! Entertainment." },
      { title: "Contenu & réseaux sociaux", text: "Création de visuels et supports graphiques, rédaction de contenus, publication et relais de l’événement sur les réseaux sociaux." }
    ],
    results: [],
    heroImage: "/images/kardashian-hero.jpg",
    gallery: ["/images/kardashian-hero.jpg"],
    visualLabel: "E!"
  }
];
