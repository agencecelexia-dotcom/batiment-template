// ⚠️ FICHIER AUTO-GÉNÉRÉ — ne pas modifier manuellement
// Modifie CLIENT.md puis relance : npm run sync-client

export const clientConfig = {
  identity: {
    prenomDirigeant: "{PRENOM_DIRIGEANT}",
    nomDirigeant: "{NOM_DIRIGEANT}",
    nomEntreprise: "{NOM_ENTREPRISE}",
    nomLegal: "{NOM_LEGAL}",
    genreDirigeant: "masculin",
    founder: "{PRENOM_DIRIGEANT} {NOM_DIRIGEANT}",
  },
  contact: {
    telephone: "{TELEPHONE}",
    telephoneHref: "tel:{TELEPHONE}",
    telephoneUrgence: "{TELEPHONE_URGENCE}",
    email: "{EMAIL}",
    adresse: "{ADRESSE}",
    ville: "{VILLE}",
    codePostal: "{CODE_POSTAL}",
    departement: "{DEPARTEMENT}",
    region: "{REGION}",
    zoneIntervention: "{VILLE} et {ZONE_KM}km autour",
    zoneKm: "{ZONE_KM}",
  },
  horaires: {
    semaine: "{HORAIRES_SEMAINE}",
    samedi: "{HORAIRES_SAMEDI}",
    dimanche: "{HORAIRES_DIMANCHE}",
    urgence: "{HORAIRES_URGENCE}",
  },
  branding: {
    couleurPrimaireHue: "30",
    couleurAccentHue: "145",
  },
  social: {
    facebook: "{FACEBOOK_URL}",
    instagram: "{INSTAGRAM_URL}",
    google: "{GOOGLE_URL}",
  },
  domaine: "{DOMAINE}",
  url: "https://www.{DOMAINE}",
  legal: {
    siret: "{SIRET}",
    rge: "{RGE}",
    assuranceDecennale: "{ASSURANCE_DECENNALE}",
  },
  chiffres: {
    anneesExperience: 0,
    nombreInterventions: 0,
    noteGoogle: 0,
    nombreAvis: 0,
    anneeCreation: 0,
    delaiIntervention: "{DELAI_INTERVENTION}",
    disponibilite: "{DISPONIBILITE}",
    tauxSatisfaction: "{TAUX_SATISFACTION}",
  },
  geo: {
    latitude: "0",
    longitude: "0",
  },
  communes: [
    { name: "{COMMUNE_1}", postalCode: "{CODE_POSTAL_1}" },
    { name: "{COMMUNE_2}", postalCode: "{CODE_POSTAL_2}" },
    { name: "{COMMUNE_3}", postalCode: "{CODE_POSTAL_3}" },
  ],
  services: [
    { title: "Maçonnerie", shortDescription: "Gros oeuvre, murs porteurs, fondations et travaux structurels.", description: "Construction et réparation de murs porteurs, fondations, dalles béton, ouvertures de murs. Nous intervenons sur tous types de structures en parpaing, brique ou pierre pour vos projets de construction et rénovation.", icon: "Brick", slug: "/maconnerie" },
    { title: "Ravalement de façades", shortDescription: "Nettoyage, enduit, crépi et isolation thermique par l'extérieur.", description: "Ravalement complet de façades : nettoyage haute pression, traitement anti-mousse, application d'enduit décoratif, crépi, peinture. Isolation thermique par l'extérieur (ITE) éligible aux aides MaPrimeRénov'.", icon: "PaintBucket", slug: "/ravalement-facades" },
    { title: "Extension & surélévation", shortDescription: "Agrandissement de maison, surélévation de toiture, véranda.", description: "Gagnez de l'espace sans déménager. Extension en parpaing, ossature bois ou acier. Surélévation de toiture pour créer un étage. Véranda et pergola. Permis de construire et suivi de chantier inclus.", icon: "ArrowUpFromLine", slug: "/extension-surelevation" },
    { title: "Rénovation intérieure", shortDescription: "Démolition, cloisons, plâtrerie, carrelage et finitions.", description: "Rénovation complète d'intérieur : démolition, création de cloisons, plâtrerie, pose de carrelage et faïence, peinture, menuiseries intérieures. Un interlocuteur unique pour tous vos travaux.", icon: "Hammer", slug: "/renovation-interieure" },
    { title: "Aménagement extérieur", shortDescription: "Terrasse, clôture, muret, allée et aménagement paysager.", description: "Création de terrasses en bois, pierre ou béton décoratif. Pose de clôtures, portails, murets de soutènement. Aménagement d'allées et de cours. Travaux de VRD.", icon: "TreePine", slug: "/amenagement-exterieur" },
    { title: "Travaux divers", shortDescription: "Petits travaux de maçonnerie, réparations et dépannages.", description: "Réparation de fissures, rejointoiement, remplacement de seuils et appuis de fenêtre, réfection de chapes, petits travaux de maçonnerie courante. Devis gratuit et intervention rapide.", icon: "Wrench", slug: "/renovation-interieure#divers" },
  ],
  testimonials: [
    { name: "{TEMOIN_1_NOM}", rating: 5, text: "{TEMOIN_1_TEXTE}", date: "{TEMOIN_1_DATE}", source: "Google" },
    { name: "{TEMOIN_2_NOM}", rating: 5, text: "{TEMOIN_2_TEXTE}", date: "{TEMOIN_2_DATE}", source: "Google" },
    { name: "{TEMOIN_3_NOM}", rating: 5, text: "{TEMOIN_3_TEXTE}", date: "{TEMOIN_3_DATE}", source: "Google" },
    { name: "{TEMOIN_4_NOM}", rating: 4, text: "{TEMOIN_4_TEXTE}", date: "{TEMOIN_4_DATE}", source: "Google" },
    { name: "{TEMOIN_5_NOM}", rating: 5, text: "{TEMOIN_5_TEXTE}", date: "{TEMOIN_5_DATE}", source: "Google" },
    { name: "{TEMOIN_6_NOM}", rating: 5, text: "{TEMOIN_6_TEXTE}", date: "{TEMOIN_6_DATE}", source: "Google" },
    { name: "{TEMOIN_7_NOM}", rating: 5, text: "{TEMOIN_7_TEXTE}", date: "{TEMOIN_7_DATE}", source: "Google" },
    { name: "{TEMOIN_8_NOM}", rating: 4, text: "{TEMOIN_8_TEXTE}", date: "{TEMOIN_8_DATE}", source: "Google" },
    { name: "{TEMOIN_9_NOM}", rating: 5, text: "{TEMOIN_9_TEXTE}", date: "{TEMOIN_9_DATE}", source: "Google" },
    { name: "{TEMOIN_10_NOM}", rating: 5, text: "{TEMOIN_10_TEXTE}", date: "{TEMOIN_10_DATE}", source: "Google" },
  ],
  admin: {
    password: "1234",
  },
  seo: {
    metaTitleAccueil: "Entreprise de bâtiment {VILLE} — {NOM_ENTREPRISE} | Maçonnerie & Rénovation",
    metaDescAccueil: "Entreprise de bâtiment à {VILLE}. Maçonnerie, ravalement, extension, rénovation intérieure et extérieure. Devis gratuit. Assurance décennale.",
    descriptionEntreprise: "Entreprise de bâtiment à {VILLE}. Maçonnerie, ravalement de façades, extension, rénovation intérieure et aménagement extérieur. Devis gratuit.",
    slogan: "Votre entreprise de bâtiment à {VILLE} — Maçonnerie, rénovation & construction",
  },
} as const;

export type ClientConfig = typeof clientConfig;
