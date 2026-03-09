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
    title: "Maçonnerie",
    shortDescription: "Construction, réparation et renforcement de murs, fondations et structures.",
    fullDescription: "Tous travaux de maçonnerie : construction de murs porteurs et cloisons, fondations, reprise en sous-œuvre, ouverture de murs porteurs avec pose d'IPN, réparation de fissures et renforcement structurel.",
    features: ["Murs porteurs et cloisons", "Fondations et dalles", "Ouverture mur porteur / IPN", "Reprise en sous-œuvre", "Réparation fissures"],
    icon: "Brick",
    order: 1,
  },
  {
    id: "ravalement",
    slug: "ravalement-facades",
    title: "Ravalement de façades",
    shortDescription: "Ravalement, enduit, crépi et isolation thermique par l'extérieur.",
    fullDescription: "Ravalement de façades pour particuliers et copropriétés : nettoyage, réparation des fissures, enduit monocouche ou traditionnel, crépi, peinture et isolation thermique par l'extérieur (ITE).",
    features: ["Enduit monocouche", "Crépi et peinture", "Isolation thermique extérieure", "Traitement fissures", "Nettoyage façade"],
    icon: "Building2",
    order: 2,
  },
  {
    id: "extension",
    slug: "extension-surelevation",
    title: "Extension & Surélévation",
    shortDescription: "Agrandissement de maison, extension et surélévation.",
    fullDescription: "Agrandissez votre espace de vie : extension en parpaing, béton ou ossature bois, surélévation de maison, véranda maçonnée. De la conception à la livraison clés en main.",
    features: ["Extension parpaing/béton", "Surélévation", "Ossature bois", "Véranda maçonnée", "Livraison clés en main"],
    icon: "Home",
    order: 3,
  },
  {
    id: "renovation",
    slug: "renovation-interieure",
    title: "Rénovation intérieure",
    shortDescription: "Rénovation complète d'appartements et maisons, du gros œuvre aux finitions.",
    fullDescription: "Rénovation intérieure complète : démolition, création de cloisons, chapes et dalles, carrelage, peinture, plomberie et électricité. Un interlocuteur unique pour votre projet.",
    features: ["Démolition et gros œuvre", "Cloisons et plafonds", "Chapes et carrelage", "Peinture et finitions", "Coordination tous corps d'état"],
    icon: "Hammer",
    order: 4,
  },
  {
    id: "amenagement",
    slug: "amenagement-exterieur",
    title: "Aménagement extérieur",
    shortDescription: "Terrasses, clôtures, allées et aménagements paysagers en dur.",
    fullDescription: "Aménagement de vos extérieurs : terrasse béton, béton désactivé ou carrelée, clôture et mur de soutènement, allée carrossable, muret décoratif et bordures.",
    features: ["Terrasse béton/carrelée", "Clôture et mur de soutènement", "Allée carrossable", "Béton désactivé", "Muret décoratif"],
    icon: "Trees",
    order: 5,
  },
];
