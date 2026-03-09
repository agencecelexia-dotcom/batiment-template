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
    title: "Ravalement de fa\u00e7ade complet",
    category: "Ravalement",
    shortDescription: "Ravalement complet d'une fa\u00e7ade d'immeuble avec isolation thermique par l'ext\u00e9rieur.",
    fullDescription: "Ravalement complet d'une fa\u00e7ade d'immeuble R+3 avec isolation thermique par l'ext\u00e9rieur, enduit gratt\u00e9 et peinture de finition.",
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
    title: "Extension maison 30m\u00b2",
    category: "Extension",
    shortDescription: "Cr\u00e9ation d'une extension en parpaing de 30m\u00b2 pour une suite parentale.",
    fullDescription: "Cr\u00e9ation d'une extension en parpaing de 30m\u00b2 avec fondations, dalle, murs, charpente et couverture pour une suite parentale avec salle d'eau.",
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
    title: "Terrasse b\u00e9ton d\u00e9sactiv\u00e9 40m\u00b2",
    category: "Am\u00e9nagement",
    shortDescription: "R\u00e9alisation d'une terrasse en b\u00e9ton d\u00e9sactiv\u00e9 avec bordures et \u00e9vacuation des eaux.",
    fullDescription: "R\u00e9alisation d'une terrasse en b\u00e9ton d\u00e9sactiv\u00e9 de 40m\u00b2 avec terrassement, coffrage, coulage, bordures p\u00e9riph\u00e9riques et \u00e9vacuation des eaux pluviales.",
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
    title: "R\u00e9novation appartement 80m\u00b2",
    category: "R\u00e9novation",
    shortDescription: "R\u00e9novation compl\u00e8te d'un appartement : d\u00e9molition, cloisons, sols et finitions.",
    fullDescription: "R\u00e9novation compl\u00e8te d'un appartement de 80m\u00b2 : d\u00e9molition des cloisons existantes, cr\u00e9ation de nouvelles pi\u00e8ces, chape, carrelage, peinture et finitions.",
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
    title: "Mur de cl\u00f4ture en parpaing",
    category: "Ma\u00e7onnerie",
    shortDescription: "Construction d'un mur de cl\u00f4ture en parpaing avec enduit et couronnement.",
    fullDescription: "Construction d'un mur de cl\u00f4ture de 30m lin\u00e9aires en parpaing de 20, avec fondations, enduit monocouche et couronnement en b\u00e9ton.",
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
    title: "Sur\u00e9l\u00e9vation de maison",
    category: "Extension",
    shortDescription: "Sur\u00e9l\u00e9vation d'une maison pour cr\u00e9er un \u00e9tage suppl\u00e9mentaire de 45m\u00b2.",
    fullDescription: "Sur\u00e9l\u00e9vation compl\u00e8te d'une maison de plain-pied : renforcement structure, \u00e9l\u00e9vation murs, charpente, couverture et am\u00e9nagement int\u00e9rieur de 45m\u00b2.",
    location: "{COMMUNE_1}",
    year: 2023,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
