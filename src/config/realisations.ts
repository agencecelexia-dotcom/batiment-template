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
    id: "terrasse-bois",
    title: "Création terrasse bois composite",
    category: "Aménagement extérieur",
    city: "{COMMUNE_1}",
    description:
      "Création d'une terrasse en bois composite de 25m² avec éclairage LED intégré, garde-corps inox et escalier d'accès.",
    beforePrompt:
      "Jardin avec terre battue et herbe clairsemée derrière une maison, sol irrégulier, pas d'aménagement, photo réaliste, ratio 4:3",
    afterPrompt:
      "Belle terrasse en bois composite gris clair, lames régulières, garde-corps inox et câble, éclairage LED encastré, salon de jardin, photo réaliste, ratio 4:3",
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
    id: "mur-cloture",
    title: "Mur de clôture en pierre",
    category: "Maçonnerie",
    city: "{COMMUNE_2}",
    description:
      "Construction d'un mur de clôture en pierre reconstituée avec piliers, chapeau de mur et portillon assorti.",
    beforePrompt:
      "Terrain en limite de propriété, grillage rouillé et piquets bois pourris, haie irrégulière, photo réaliste, ratio 4:3",
    afterPrompt:
      "Beau mur de clôture en pierre reconstituée beige, piliers réguliers avec chapeaux, portillon en aluminium gris, finition soignée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "carrelage-salon",
    title: "Pose carrelage grand format salon",
    category: "Rénovation intérieure",
    city: "{COMMUNE_3}",
    description:
      "Dépose de l'ancien revêtement et pose de carrelage grand format 60x120 effet béton ciré dans un salon de 40m².",
    beforePrompt:
      "Salon avec vieux carrelage beige fissuré, joints noircis, plinthes décollées, aspect vieillot, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salon moderne avec carrelage grand format gris clair effet béton ciré, joints fins, plinthes assorties, pièce lumineuse, photo réaliste, ratio 4:3",
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
  {
    id: "fissure-facade",
    title: "Réparation fissures façade",
    category: "Ravalement",
    city: "{VILLE}",
    description:
      "Traitement de fissures structurelles sur façade : agrafage, injection de résine, reprise d'enduit et mise en peinture.",
    beforePrompt:
      "Façade de maison avec fissures importantes en escalier, enduit décollé par endroits, traces d'humidité, photo réaliste, ratio 4:3",
    afterPrompt:
      "Façade réparée, enduit neuf uniforme, aucune fissure visible, peinture fraîche couleur sable, finition impeccable, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "allee-beton",
    title: "Allée en béton désactivé",
    category: "Aménagement extérieur",
    city: "{COMMUNE_2}",
    description:
      "Création d'une allée carrossable en béton désactivé avec bordures en pavés et caniveau d'évacuation des eaux pluviales.",
    beforePrompt:
      "Allée de maison en terre et gravier inégal, flaques d'eau, mauvaises herbes, accès véhicule difficile, photo réaliste, ratio 4:3",
    afterPrompt:
      "Belle allée carrossable en béton désactivé ton beige, bordures pavés, caniveau discret, accès garage propre et net, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
