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
  results: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "canneseries-audi",
    brand: "AUDI",
    title: "CANNESERIES — une expérience VIP au cœur du festival",
    year: "2026",
    intro: "Une activation événementielle pensée pour faire vivre l’univers Audi pendant l’un des rendez-vous culturels majeurs de la Côte d’Azur.",
    role: "Responsable Marketing",
    categories: ["Événementiel", "Digital", "Partenariats"],
    description: "Conception et pilotage d’un dispositif mêlant flotte de véhicules, expériences VIP, contenu social et génération de leads autour de CANNESERIES.",
    approach: [
      { title: "Expérience", text: "Créer un parcours cohérent avant, pendant et après le festival." },
      { title: "Contenu", text: "Amplifier l’événement grâce aux réseaux sociaux et aux créateurs de contenu." },
      { title: "Business", text: "Transformer la visibilité en essais, leads et opportunités commerciales." },
      { title: "Pilotage", text: "Coordonner équipes, partenaires, agences, véhicules et dispositifs terrain." }
    ],
    results: [
      { value: "+110K", label: "vues Meta" },
      { value: "59", label: "leads générés" },
      { value: "36", label: "essais" },
      { value: "48,4M", label: "impressions" }
    ]
  },
  {
    slug: "skoda-triathlon-cannes",
    brand: "ŠKODA",
    title: "Triathlon de Cannes — transformer un partenariat en activation",
    year: "2026",
    intro: "Un dispositif local construit autour du sport, de la visibilité et de l’engagement pour ŠKODA Nice-Mougins.",
    role: "Responsable Marketing",
    categories: ["Partenariats", "Événementiel", "Digital"],
    description: "Activation du partenariat avec un dispositif de jeu-concours, visibilité événementielle, QR codes et relais en concession.",
    approach: [
      { title: "Activation", text: "Donner une dimension concrète au partenariat au-delà de la simple visibilité." },
      { title: "Acquisition", text: "Créer des points de contact mesurables avec les prospects." },
      { title: "Retail", text: "Prolonger l’événement en concession avec des offres dédiées." },
      { title: "Mesure", text: "Suivre les scans, visites, essais et résultats commerciaux." }
    ],
    results: [
      { value: "230", label: "participants" },
      { value: "+46K", label: "vues Day J" },
      { value: "1 013", label: "scans QR" },
      { value: "+177%", label: "offres en concession" }
    ]
  },
  {
    slug: "audi-f1-experience",
    brand: "AUDI",
    title: "F1 Experience Night Edition — une soirée pour les clients",
    year: "2026",
    intro: "Une soirée premium imaginée autour de l’univers de la Formule 1 et de l’arrivée d’Audi en compétition.",
    role: "Responsable Marketing",
    categories: ["Événementiel", "Influence"],
    description: "Conception et coordination d’une expérience client immersive réunissant équipes, invités VIP, contenus et animation.",
    approach: [
      { title: "Concept", text: "Construire une soirée avec un fil rouge clair et une identité forte." },
      { title: "Hospitality", text: "Créer une expérience adaptée aux clients et invités VIP." },
      { title: "Contenu", text: "Capitaliser sur les temps forts pour prolonger l’expérience sur les réseaux." },
      { title: "Production", text: "Coordonner prestataires, équipes et déroulé opérationnel." }
    ],
    results: [
      { value: "89", label: "clients présents" },
      { value: "61", label: "clients Mougins" },
      { value: "75", label: "VIP invités" }
    ]
  },
  {
    slug: "printemps-occasion",
    brand: "VGRF",
    title: "Printemps de l’Occasion — accélérer le retail",
    year: "2026",
    intro: "Une opération commerciale pensée pour générer du trafic, des leads et des commandes sur un temps fort court.",
    role: "Responsable Marketing",
    categories: ["Stratégie", "Digital"],
    description: "Pilotage d’une campagne locale multicanale autour d’une offre VO, avec communication digitale et activation commerciale.",
    approach: [
      { title: "Offre", text: "Structurer un message simple autour d’une mécanique commerciale lisible." },
      { title: "Média", text: "Combiner activation digitale, social media et relais terrain." },
      { title: "Conversion", text: "Orienter les prospects vers un parcours commercial court." },
      { title: "Pilotage", text: "Suivre les leads et commandes pour mesurer l’efficacité de l’opération." }
    ],
    results: [
      { value: "56", label: "leads" },
      { value: "19", label: "commandes" },
      { value: "60", label: "véhicules concernés" }
    ]
  },
  {
    slug: "vgrf-padel-day",
    brand: "CUPRA",
    title: "VGRF Padel Day — sport, communauté et révélation produit",
    year: "2026",
    intro: "Une journée clients mêlant compétition, convivialité et révélation du nouveau CUPRA Raval.",
    role: "Responsable Marketing",
    categories: ["Événementiel", "Partenariats"],
    description: "Création d’un événement communautaire réunissant clients, équipes et partenaires autour du padel.",
    approach: [
      { title: "Communauté", text: "Créer un format qui favorise les échanges et l’appartenance." },
      { title: "Partenaire", text: "S’appuyer sur l’écosystème All In pour renforcer l’expérience." },
      { title: "Produit", text: "Intégrer la révélation du CUPRA Raval dans le parcours." },
      { title: "Ambiance", text: "Construire une expérience complète avec tournoi, DJ et hospitalité." }
    ],
    results: [
      { value: "40", label: "clients" },
      { value: "1", label: "révélation produit" },
      { value: "1", label: "journée d’expérience" }
    ]
  },
  {
    slug: "disney-launches",
    brand: "DISNEY",
    title: "Lancements & activations — créer l’événement",
    year: "Expérience",
    intro: "Une sélection de projets menés dans l’univers du divertissement, entre lancement, contenu et expérience de marque.",
    role: "Marketing",
    categories: ["Stratégie", "Digital", "Influence"],
    description: "À compléter avec tes projets Disney : lancements, campagnes, influence, partenariats et contenus que tu souhaites mettre en avant.",
    approach: [
      { title: "Lancement", text: "Mettre en scène les nouveautés pour créer de l’attention." },
      { title: "Audience", text: "Adapter les prises de parole aux communautés et aux usages." },
      { title: "Influence", text: "Développer des dispositifs avec créateurs et partenaires." },
      { title: "Contenu", text: "Décliner les campagnes sur plusieurs formats et canaux." }
    ],
    results: [
      { value: "À définir", label: "KPI principal" },
      { value: "À définir", label: "portée" },
      { value: "À définir", label: "engagement" }
    ]
  }
];