import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "facade-ravalement",
    title: "Ravalement de façade complet",
    category: "Ravalement",
    city: "{VILLE}",
    description:
      "Ravalement complet d'une maison de ville : nettoyage haute pression, traitement anti-mousse, application d'enduit décoratif ton pierre et peinture des menuiseries.",
    beforePrompt:
      "Façade de maison de ville sale et grisâtre, enduit fissuré, traces de mousse verte, volets écaillés, photo réaliste brute, ratio 4:3",
    afterPrompt:
      "Même façade rénovée, enduit neuf ton pierre clair, volets repeints en gris anthracite, gouttières neuves, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "extension-maison",
    title: "Extension de maison 30m²",
    category: "Extension",
    city: "{VILLE}",
    description:
      "Construction d'une extension en parpaing de 30m² avec baie vitrée coulissante, toiture plate et isolation thermique complète.",
    beforePrompt:
      "Jardin arrière de maison individuelle, pelouse simple, mur de la maison visible, terrain plat, photo réaliste, ratio 4:3",
    afterPrompt:
      "Extension moderne en parpaing enduit blanc, grande baie vitrée coulissante, toiture plate avec acrotère, raccord parfait avec la maison existante, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "renovation-appart",
    title: "Rénovation complète appartement",
    category: "Rénovation intérieure",
    city: "{VILLE}",
    description:
      "Rénovation intégrale d'un appartement de 65m² : démolition de cloisons, création d'un espace ouvert cuisine-salon, plâtrerie, carrelage et peinture.",
    beforePrompt:
      "Intérieur d'appartement ancien, murs jaunis avec papier peint décollé, sol vinyle usé, cloisons étroites, luminosité faible, photo réaliste, ratio 4:3",
    afterPrompt:
      "Appartement rénové, espace ouvert cuisine-salon lumineux, murs blancs lisses, parquet clair, cuisine ouverte avec îlot, spots encastrés, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "carrelage-salon",
    title: "Rénovation salle de bain complète",
    category: "Rénovation intérieure",
    city: "{COMMUNE_3}",
    description:
      "Rénovation complète d'une salle de bain : dépose de l'ancien revêtement, étanchéité, pose de carrelage grand format et installation sanitaire.",
    beforePrompt:
      "Salle de bain ancienne avec vieux carrelage, joints noircis, aspect vieillot, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain moderne avec carrelage grand format, douche à l'italienne, meuble vasque bois, finitions soignées, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "ouverture-mur",
    title: "Ouverture de mur porteur",
    category: "Maçonnerie",
    city: "{VILLE}",
    description:
      "Ouverture d'un mur porteur avec pose d'un IPN pour créer un espace cuisine-salon ouvert. Étude structure et suivi par bureau d'études.",
    beforePrompt:
      "Mur porteur en parpaing entre cuisine et salon, pièces sombres et séparées, passage étroit avec porte, photo réaliste, ratio 4:3",
    afterPrompt:
      "Grande ouverture dans mur porteur avec IPN apparent peint en noir, espace cuisine-salon ouvert et lumineux, finitions plâtre lisses, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "surelevation-toiture",
    title: "Surélévation de toiture",
    category: "Extension",
    city: "{COMMUNE_1}",
    description:
      "Surélévation de toiture pour créer un étage complet de 50m² avec charpente bois, isolation et velux.",
    beforePrompt:
      "Maison de plain-pied avec toiture basse en tuiles, façade simple, pas d'étage, photo réaliste, ratio 4:3",
    afterPrompt:
      "Même maison avec étage supplémentaire, façade enduite assortie, fenêtres à l'étage, toiture neuve en tuiles, intégration harmonieuse, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
