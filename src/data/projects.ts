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
    shortDescription: "Ravalement complet d'une façade d'immeuble avec isolation thermique par l'extérieur.",
    fullDescription: "Ravalement complet d'une façade d'immeuble R+3 avec isolation thermique par l'extérieur, enduit gratté et peinture de finition.",
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
    id: "terrasse-beton",
    slug: "terrasse-beton-desactive",
    title: "Terrasse béton désactivé 40m²",
    category: "Aménagement",
    shortDescription: "Réalisation d'une terrasse en béton désactivé avec bordures et évacuation des eaux.",
    fullDescription: "Réalisation d'une terrasse en béton désactivé de 40m² avec terrassement, coffrage, coulage, bordures périphériques et évacuation des eaux pluviales.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "renovation-appt",
    slug: "renovation-appartement",
    title: "Rénovation appartement 80m²",
    category: "Rénovation",
    shortDescription: "Rénovation complète d'un appartement : démolition, cloisons, sols et finitions.",
    fullDescription: "Rénovation complète d'un appartement de 80m² : démolition des cloisons existantes, création de nouvelles pièces, chape, carrelage, peinture et finitions.",
    location: "{COMMUNE_2}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "mur-cloture",
    slug: "mur-cloture-parpaing",
    title: "Mur de clôture en parpaing",
    category: "Maçonnerie",
    shortDescription: "Construction d'un mur de clôture en parpaing avec enduit et couronnement.",
    fullDescription: "Construction d'un mur de clôture de 30m linéaires en parpaing de 20, avec fondations, enduit monocouche et couronnement en béton.",
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
    shortDescription: "Surélévation d'une maison pour créer un étage supplémentaire de 45m².",
    fullDescription: "Surélévation complète d'une maison de plain-pied : renforcement structure, élévation murs, charpente, couverture et aménagement intérieur de 45m².",
    location: "{COMMUNE_1}",
    year: 2023,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
