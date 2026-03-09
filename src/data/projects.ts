export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "facade-renovation",
    slug: "ravalement-facade",
    title: "Ravalement de façade complet",
    category: "Ravalement",
    shortDescription: "Ravalement complet d'une façade avec traitement et enduit décoratif.",
    fullDescription: "Ravalement complet d'une façade de maison de ville avec nettoyage haute pression, traitement anti-mousse, application d'enduit décoratif ton pierre et peinture des menuiseries.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "extension-maison",
    slug: "extension-maison",
    title: "Extension maison 30m²",
    category: "Extension",
    shortDescription: "Création d'une extension en parpaing de 30m² pour une suite parentale.",
    fullDescription: "Création d'une extension en parpaing de 30m² avec fondations, dalle, murs, charpente et couverture pour une suite parentale avec salle d'eau.",
    location: "{COMMUNE_1}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "construction-maison",
    slug: "construction-maison-plain-pied",
    title: "Construction de maison plain-pied",
    category: "Maçonnerie",
    shortDescription: "Construction d'une maison individuelle de plain-pied sur terrain viabilisé.",
    fullDescription: "Construction d'une maison individuelle de plain-pied sur terrain viabilisé : terrassement, fondations, élévation des murs, toiture, enduit de façade et allée d'accès.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "carrelage-sdb",
    slug: "renovation-salle-de-bain",
    title: "Rénovation salle de bain complète",
    category: "Rénovation",
    shortDescription: "Rénovation complète d'une salle de bain avec carrelage grand format.",
    fullDescription: "Rénovation complète d'une salle de bain : dépose de l'ancien revêtement, étanchéité, pose de carrelage grand format et installation sanitaire.",
    location: "{COMMUNE_3}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "ouverture-mur",
    slug: "ouverture-mur-porteur",
    title: "Ouverture de mur porteur",
    category: "Maçonnerie",
    shortDescription: "Ouverture d'un mur porteur avec pose d'IPN pour espace ouvert.",
    fullDescription: "Ouverture d'un mur porteur avec pose d'un IPN pour créer un espace cuisine-salon ouvert. Étude structure et suivi par bureau d'études.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "surelevation",
    slug: "surelevation-maison",
    title: "Surélévation de maison",
    category: "Extension",
    shortDescription: "Surélévation d'une maison pour créer un étage supplémentaire de 50m².",
    fullDescription: "Surélévation complète d'une maison de plain-pied : renforcement structure, élévation murs, charpente, couverture et aménagement intérieur de 50m².",
    location: "{COMMUNE_1}",
    year: 2023,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
