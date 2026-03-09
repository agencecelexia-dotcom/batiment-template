export interface AdminService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  order: number;
}

export const services: AdminService[] = [
  {
    id: "maconnerie",
    slug: "maconnerie",
    title: "Ma\u00e7onnerie",
    shortDescription: "Construction, r\u00e9paration et renforcement de murs, fondations et structures.",
    fullDescription: "Tous travaux de ma\u00e7onnerie : construction de murs porteurs et cloisons, fondations, reprise en sous-\u0153uvre, ouverture de murs porteurs avec pose d'IPN, r\u00e9paration de fissures et renforcement structurel.",
    features: ["Murs porteurs et cloisons", "Fondations et dalles", "Ouverture mur porteur / IPN", "Reprise en sous-\u0153uvre", "R\u00e9paration fissures"],
    icon: "Brick",
    order: 1,
  },
  {
    id: "ravalement",
    slug: "ravalement-facades",
    title: "Ravalement de fa\u00e7ades",
    shortDescription: "Ravalement, enduit, cr\u00e9pi et isolation thermique par l'ext\u00e9rieur.",
    fullDescription: "Ravalement de fa\u00e7ades pour particuliers et copropri\u00e9t\u00e9s : nettoyage, r\u00e9paration des fissures, enduit monocouche ou traditionnel, cr\u00e9pi, peinture et isolation thermique par l'ext\u00e9rieur (ITE).",
    features: ["Enduit monocouche", "Cr\u00e9pi et peinture", "Isolation thermique ext\u00e9rieure", "Traitement fissures", "Nettoyage fa\u00e7ade"],
    icon: "Building2",
    order: 2,
  },
  {
    id: "extension",
    slug: "extension-surelevation",
    title: "Extension & Sur\u00e9l\u00e9vation",
    shortDescription: "Agrandissement de maison, extension et sur\u00e9l\u00e9vation.",
    fullDescription: "Agrandissez votre espace de vie : extension en parpaing, b\u00e9ton ou ossature bois, sur\u00e9l\u00e9vation de maison, v\u00e9randa ma\u00e7onn\u00e9e. De la conception \u00e0 la livraison cl\u00e9s en main.",
    features: ["Extension parpaing/b\u00e9ton", "Sur\u00e9l\u00e9vation", "Ossature bois", "V\u00e9randa ma\u00e7onn\u00e9e", "Livraison cl\u00e9s en main"],
    icon: "Home",
    order: 3,
  },
  {
    id: "renovation",
    slug: "renovation-interieure",
    title: "R\u00e9novation int\u00e9rieure",
    shortDescription: "R\u00e9novation compl\u00e8te d'appartements et maisons, du gros \u0153uvre aux finitions.",
    fullDescription: "R\u00e9novation int\u00e9rieure compl\u00e8te : d\u00e9molition, cr\u00e9ation de cloisons, chapes et dalles, carrelage, peinture, plomberie et \u00e9lectricit\u00e9. Un interlocuteur unique pour votre projet.",
    features: ["D\u00e9molition et gros \u0153uvre", "Cloisons et plafonds", "Chapes et carrelage", "Peinture et finitions", "Coordination tous corps d'\u00e9tat"],
    icon: "Hammer",
    order: 4,
  },
  {
    id: "amenagement",
    slug: "amenagement-exterieur",
    title: "Am\u00e9nagement ext\u00e9rieur",
    shortDescription: "Terrasses, cl\u00f4tures, all\u00e9es et am\u00e9nagements paysagers en dur.",
    fullDescription: "Am\u00e9nagement de vos ext\u00e9rieurs : terrasse b\u00e9ton, b\u00e9ton d\u00e9sactiv\u00e9 ou carrel\u00e9e, cl\u00f4ture et mur de sout\u00e8nement, all\u00e9e carrossable, muret d\u00e9coratif et bordures.",
    features: ["Terrasse b\u00e9ton/carrel\u00e9e", "Cl\u00f4ture et mur de sout\u00e8nement", "All\u00e9e carrossable", "B\u00e9ton d\u00e9sactiv\u00e9", "Muret d\u00e9coratif"],
    icon: "Trees",
    order: 5,
  },
];
