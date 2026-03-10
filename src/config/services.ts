import type { Service } from "@/types";

/**
 * Services fixes du template batiment.
 * NE PAS rendre dynamique — les routes /maconnerie, /ravalement-facades, etc.
 * sont des pages statiques du template.
 */
export const services: readonly Service[] = [
  {
    title: "Maçonnerie",
    shortDescription: "Gros œuvre, murs porteurs, fondations et travaux structurels.",
    description: "Construction et réparation de murs porteurs, fondations, dalles béton, ouvertures de murs. Intervention sur parpaing, brique et pierre.",
    icon: "BrickWall",
    slug: "/maconnerie",
  },
  {
    title: "Ravalement de façades",
    shortDescription: "Nettoyage, enduit, crépi et peinture de façades.",
    description: "Ravalement complet : nettoyage haute pression, traitement anti-mousse, enduit décoratif, crépi, peinture. ITE éligible MaPrimeRénov'.",
    icon: "PaintBucket",
    slug: "/ravalement-facades",
  },
  {
    title: "Extension & surélévation",
    shortDescription: "Agrandissement de maison, surélévation de toiture, véranda.",
    description: "Extension en parpaing, ossature bois ou acier. Surélévation de toiture pour créer un étage. Véranda et pergola. Permis de construire inclus.",
    icon: "ArrowUpFromLine",
    slug: "/extension-surelevation",
  },
  {
    title: "Rénovation intérieure",
    shortDescription: "Démolition, cloisons, plâtrerie, carrelage et finitions.",
    description: "Rénovation complète : démolition, cloisons, plâtrerie, carrelage, faïence, peinture, menuiseries intérieures. Un interlocuteur unique.",
    icon: "Hammer",
    slug: "/renovation-interieure",
  },
  {
    title: "Aménagement extérieur",
    shortDescription: "Terrasses, clôtures, allées et aménagement de jardin.",
    description: "Terrasses béton ou carrelées, clôtures, portails, allées, murets, escaliers extérieurs. Aménagement complet de vos espaces extérieurs.",
    icon: "TreePine",
    slug: "/amenagement-exterieur",
  },
  {
    title: "Travaux divers",
    shortDescription: "Petits travaux de maçonnerie, réparations et dépannages.",
    description: "Réparation de fissures, rejointoiement, remplacement de seuils, réfection de chapes, petits travaux courants. Devis gratuit et intervention rapide.",
    icon: "Wrench",
    slug: "/contact",
  },
] as const;
