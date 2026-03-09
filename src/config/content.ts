/**
 * CONTENU TEXTUEL DU SITE — Fichier centralisé
 *
 * Tout le texte visible du site est ici.
 * Les valeurs dynamiques (ville, téléphone, nom...) viennent de siteConfig/clientConfig.
 * Pour personnaliser le contenu, modifiez ce fichier.
 */

import { siteConfig } from "./site";
import { clientConfig } from "./client.config";

// ─── Textes partagés (CTA, boutons, labels) ───

export const shared = {
  cta: {
    appelerMaintenant: `Appelez maintenant — ${siteConfig.phone}`,
    appelezNous: `Appelez-nous — ${siteConfig.phone}`,
    demanderDevis: "Demander un devis gratuit",
    voirRealisations: "Voir toutes nos réalisations",
    voirAvis: "Voir tous les avis",
    retourAccueil: "Retour à l'accueil",
    envoyerDemande: "Envoyer ma demande",
    envoiEnCours: "Envoi en cours...",
  },
  sections: {
    servicesLies: "Services liés",
  },
};

// ─── Composants sections ───

export const heroSection = {
  eyebrow: `Entreprise de bâtiment — ${siteConfig.address.city}`,
};

export const ctaSection = {
  defaultTitle: "Un projet de construction ou rénovation ? Contactez-nous.",
  defaultSubtitle: "",
  ctaPrimary: shared.cta.appelerMaintenant,
  ctaSecondary: shared.cta.demanderDevis,
};

export const reassuranceBand = {
  stats: [
    { value: clientConfig.chiffres.anneesExperience, suffix: "+", label: "Années d'expérience" },
    { value: clientConfig.chiffres.nombreInterventions, suffix: "+", label: "Chantiers réalisés" },
    { value: Number(clientConfig.chiffres.tauxSatisfaction) || 98, suffix: "%", label: "Clients satisfaits" },
    { value: 6, suffix: "j/7", label: "Disponibilité" },
  ],
};

export const urgencyProjectCards = {
  title: "Votre besoin",
  urgency: {
    title: "Devis rapide",
    subtitle: "Fissures, infiltrations, travaux urgents...",
    cta: "Appeler maintenant",
  },
  project: {
    title: "Je planifie des travaux",
    subtitle: "Construction, rénovation, extension, aménagement...",
    cta: shared.cta.demanderDevis,
  },
};

export const contactForm = {
  labels: {
    nom: "Nom *",
    telephone: "Téléphone *",
    email: "Email *",
    service: "Type de besoin",
    message: "Message (optionnel)",
  },
  placeholders: {
    nom: "Votre nom",
    telephone: "06 XX XX XX XX",
    email: "votre@email.fr",
    service: "Sélectionnez un service",
    message: "Décrivez votre projet...",
  },
  serviceOptions: [
    "Maçonnerie",
    "Ravalement de façades",
    "Extension / Surélévation",
    "Rénovation intérieure",
    "Aménagement extérieur",
    "Travaux divers",
    "Autre",
  ],
  rgpd: "J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. Voir notre politique de confidentialité.",
  success: {
    title: "Demande envoyée !",
    text: "Nous vous recontactons sous 48h. Pour une urgence, appelez-nous directement.",
  },
  error: "Une erreur est survenue. Veuillez réessayer.",
};

// ─── Page Accueil ───

export const homepage = {
  hero: {
    title: clientConfig.seo.slogan,
    subtitle: "Maçonnerie, ravalement, extension, rénovation... Devis gratuit sous 48h.",
    ctaSecondaryLabel: shared.cta.demanderDevis,
    badges: ["Assurance décennale", "Devis gratuit", "Artisan qualifié", `${siteConfig.googleRating}/5`],
  },
  services: {
    title: "Des solutions pour tous vos projets",
    subtitle: "De la construction neuve à la rénovation complète, notre équipe qualifiée intervient avec professionnalisme.",
  },
  realisations: {
    title: "Nos réalisations",
    subtitle: "Découvrez nos derniers chantiers en images.",
  },
  testimonials: {
    title: "Ce que disent nos clients",
    ratingLabel: "avis Google",
  },
};

// ─── Page Maçonnerie ───

export const maconnerie = {
  hero: {
    title: `Maçonnerie à ${siteConfig.address.city}`,
    subtitle: "Gros oeuvre, murs porteurs, fondations, ouvertures de murs. Savoir-faire artisanal et matériaux de qualité.",
  },
  services: {
    title: "Nos travaux de maçonnerie",
    subtitle: "De la construction neuve à la réparation, nous intervenons sur tous types de structures.",
    items: [
      { title: "Murs porteurs & cloisons", desc: "Construction et modification de murs porteurs avec pose d'IPN. Création de cloisons en parpaing, brique ou béton cellulaire." },
      { title: "Fondations & dalles", desc: "Réalisation de fondations (semelles, plots, radier), coulage de dalles béton, chapes et planchers. Étude de sol recommandée." },
      { title: "Ouvertures & agrandissements", desc: "Création d'ouvertures dans murs porteurs, agrandissement de baies, pose de linteaux. Étude structure par bureau d'études." },
      { title: "Réparations & rejointoiement", desc: "Reprise de maçonnerie ancienne, rejointoiement de pierre, réparation de fissures, traitement de l'humidité." },
    ],
  },
  avantages: {
    title: "Pourquoi nous choisir ?",
    items: [
      `Plus de ${siteConfig.yearsExperience} ans d'expérience en maçonnerie`,
      "Maîtrise de tous les matériaux (parpaing, brique, pierre, béton)",
      "Étude de structure et suivi technique rigoureux",
      "Garantie décennale sur tous les travaux",
      "Chantier propre et respect des délais",
      "Devis détaillé gratuit sous 48h",
    ],
  },
  servicesLies: ["Extension & surélévation", "Ravalement de façades"],
};

// ─── Page Ravalement ───

export const ravalement = {
  hero: {
    title: `Ravalement de façades à ${siteConfig.address.city}`,
    subtitle: "Nettoyage, enduit, crépi, peinture et isolation thermique par l'extérieur. Redonnez vie à votre façade.",
    badges: ["ITE éligible aides", "Décennale", "Devis gratuit"],
  },
  prestations: {
    title: "Nos prestations ravalement",
    subtitle: "Un ravalement adapté à chaque type de façade et à votre budget.",
    items: [
      { title: "Nettoyage & traitement", desc: "Nettoyage haute pression, gommage, sablage. Traitement anti-mousse, anti-salpêtre, hydrofuge de protection." },
      { title: "Enduit & crépi", desc: "Application d'enduit monocouche, crépi gratté, taloché ou projeté. Large choix de teintes et finitions." },
      { title: "Peinture de façade", desc: "Peinture acrylique, pliolite ou siloxane selon le support. Préparation minutieuse pour un résultat durable." },
      { title: "Isolation thermique (ITE)", desc: "Isolation par l'extérieur en polystyrène ou laine de roche, sous enduit ou bardage. Éligible MaPrimeRénov' et CEE." },
    ],
  },
  etapes: {
    title: "Notre méthode en 4 étapes",
    subtitle: "Un accompagnement professionnel du diagnostic à la réception.",
    items: [
      { title: "Diagnostic façade", desc: "Visite sur place, évaluation de l'état de la façade, identification des pathologies et préconisations." },
      { title: "Devis détaillé", desc: "Devis complet sous 48h avec le détail des prestations, matériaux et planning prévisionnel." },
      { title: "Travaux", desc: "Installation d'échafaudage, protection des abords, exécution des travaux dans les règles de l'art." },
      { title: "Réception", desc: "Vérification finale ensemble, nettoyage du chantier, remise des garanties." },
    ],
  },
  servicesLies: ["Maçonnerie", "Aménagement extérieur"],
};

// ─── Page Extension ───

export const extension = {
  hero: {
    title: `Extension & surélévation à ${siteConfig.address.city}`,
    subtitle: "Agrandissez votre maison sans déménager. Extension, surélévation, véranda. Permis de construire inclus.",
    badges: ["Permis inclus", "Décennale", "Clé en main"],
  },
  solutions: {
    title: "Nos solutions d'agrandissement",
    subtitle: "Chaque projet est unique. Nous concevons la solution la plus adaptée à votre maison et votre budget.",
    items: [
      { title: "Extension en parpaing", desc: "Extension traditionnelle en parpaing enduit, toiture plate ou en pente. Idéal pour créer une pièce de vie, un garage ou une suite parentale." },
      { title: "Extension ossature bois", desc: "Construction rapide et performante. Excellente isolation thermique. Esthétique contemporaine ou traditionnelle." },
      { title: "Surélévation de toiture", desc: "Créez un étage complet en surélevant votre toiture existante. Solution idéale quand le terrain ne permet pas d'extension au sol." },
      { title: "Véranda & pergola", desc: "Véranda en aluminium ou acier pour profiter de la lumière toute l'année. Pergola bioclimatique pour vos espaces extérieurs." },
    ],
  },
  etapes: {
    title: "Notre méthode en 5 étapes",
    subtitle: "Un accompagnement complet, du permis de construire à la remise des clés.",
    items: [
      { title: "Étude de faisabilité", desc: "Visite sur place, analyse du PLU, étude de sol si nécessaire. Nous vérifions la faisabilité technique et réglementaire." },
      { title: "Conception & permis", desc: "Plans techniques, dépôt du permis de construire ou déclaration préalable. Nous gérons toutes les démarches administratives." },
      { title: "Devis détaillé", desc: "Devis complet avec planning, matériaux et prestations détaillés. Pas de mauvaise surprise." },
      { title: "Construction", desc: "Terrassement, fondations, élévation, couverture, isolation, finitions. Suivi de chantier hebdomadaire." },
      { title: "Réception", desc: "Visite de réception, vérification de la conformité, remise des clés et des garanties." },
    ],
  },
  servicesLies: ["Maçonnerie", "Rénovation intérieure"],
};

// ─── Page Rénovation intérieure ───

export const renovation = {
  hero: {
    title: `Rénovation intérieure à ${siteConfig.address.city}`,
    subtitle: "Cloisons, plâtrerie, carrelage, peinture, menuiseries. Un interlocuteur unique pour tous vos travaux d'intérieur.",
  },
  projets: {
    title: "Nos types de travaux",
    subtitle: "De la simple rénovation au projet complet, nous adaptons nos solutions à votre budget.",
    items: [
      { title: "Cloisons & plâtrerie", desc: "Création et démolition de cloisons, doublage, faux plafonds, enduits. Plaques de plâtre, carreaux de plâtre ou béton cellulaire." },
      { title: "Carrelage & faïence", desc: "Pose de carrelage sol et mur, faïence de salle de bain et cuisine. Tous formats, de la mosaïque au grand format." },
      { title: "Peinture & finitions", desc: "Préparation des supports, enduits, peinture murale et plafond, pose de papier peint. Finitions soignées." },
      { title: "Rénovation complète", desc: "Gestion de l'ensemble des corps de métier pour une rénovation clé en main : démolition, structure, second oeuvre, finitions." },
    ],
  },
  travauxDivers: {
    id: "divers",
    title: "Travaux divers & petits chantiers",
    subtitle: "Pas de chantier trop petit. Nous intervenons aussi pour vos travaux ponctuels.",
    items: [
      { title: "Réparation de fissures", desc: "Traitement et rebouchage de fissures sur murs intérieurs et plafonds." },
      { title: "Remplacement de seuils", desc: "Dépose et pose de seuils de porte, appuis de fenêtre en pierre, béton ou aluminium." },
      { title: "Réfection de chapes", desc: "Ragréage, chape fluide ou traditionnelle pour remettre à niveau vos sols avant pose de revêtement." },
      { title: "Petite maçonnerie", desc: "Rejointoiement, rebouchage, scellement, petits travaux de maçonnerie courante." },
    ],
  },
  etapes: {
    title: "Notre méthode en 4 étapes",
    subtitle: "Un accompagnement de A à Z pour un résultat à la hauteur de vos attentes.",
    items: [
      { title: "Visite conseil", desc: "Nous venons chez vous pour écouter vos envies, évaluer les travaux et vous conseiller sur les solutions." },
      { title: "Devis détaillé", desc: "Vous recevez un devis précis sous 48h avec le détail de chaque poste et le planning prévisionnel." },
      { title: "Travaux", desc: "Notre équipe réalise les travaux dans les délais convenus. Protection des espaces non concernés, chantier propre." },
      { title: "Réception", desc: "Vérification finale ensemble, retouches si nécessaire. Vous ne payez le solde qu'à votre entière satisfaction." },
    ],
  },
  servicesLies: ["Maçonnerie", "Aménagement extérieur"],
};

// ─── Page Aménagement extérieur ───

export const amenagement = {
  hero: {
    title: `Aménagement extérieur à ${siteConfig.address.city}`,
    subtitle: "Terrasse, clôture, muret, allée, aménagement paysager. Valorisez votre extérieur avec des travaux de qualité.",
  },
  services: {
    title: "Nos prestations extérieures",
    subtitle: "De la terrasse à la clôture, nous aménageons l'ensemble de vos espaces extérieurs.",
    items: [
      { title: "Terrasse", desc: "Terrasse en bois composite, bois naturel, carrelage extérieur ou béton décoratif (désactivé, ciré, imprimé). Pose sur plots ou sur dalle." },
      { title: "Clôture & portail", desc: "Clôture en grillage rigide, aluminium, bois composite ou mur enduit. Pose de portails battants ou coulissants, motorisation." },
      { title: "Murets & soutènement", desc: "Construction de murets décoratifs, murs de soutènement en béton armé ou gabion. Enrochement pour terrain en pente." },
      { title: "Allées & cours", desc: "Création d'allées piétonnes ou carrossables en béton désactivé, pavés autobloquants, graviers stabilisés ou enrobé." },
      { title: "VRD & assainissement", desc: "Tranchées, raccordements réseaux, regards, caniveaux, puisards. Travaux de voirie et réseaux divers." },
    ],
  },
  avantages: {
    title: "Pourquoi nous confier vos extérieurs ?",
    items: [
      "Maîtrise de tous les matériaux extérieurs",
      "Terrassement et préparation de terrain inclus",
      "Respect des normes et PLU en vigueur",
      "Garantie décennale sur les ouvrages",
      "Chantier propre et évacuation des déchets",
      "Conseil personnalisé et devis gratuit",
    ],
  },
  servicesLies: ["Maçonnerie", "Extension & surélévation"],
};

// ─── Page Contact ───

export const contact = {
  hero: {
    title: "Contactez-nous — Devis gratuit sous 48h",
    subtitle: "Remplissez le formulaire ou appelez-nous directement. Nous répondons à toutes les demandes.",
  },
  formTitle: "Demandez votre devis gratuit",
  coordonnees: {
    title: "Nos coordonnées",
    labels: {
      telephone: "Téléphone",
      email: "Email",
      adresse: "Adresse",
      horaires: "Horaires",
    },
    horairesLabels: {
      semaine: "Lun-Ven :",
      samedi: "Samedi :",
      urgences: "Urgences :",
    },
    mapPlaceholder: "Intégrer ici l'iframe Google Maps avec la zone d'intervention",
  },
};

// ─── Page Avis clients ───

export const avisClients = {
  hero: {
    title: "Avis clients — Ce qu'ils disent de nous",
  },
  ratingIntro: (count: number) => `Basée sur ${count} avis Google`,
  voirGoogle: "Voir tous les avis sur Google",
  cta: {
    title: "Vous aussi, faites-nous confiance",
    subtitle: "Demandez votre devis gratuit ou appelez-nous directement.",
  },
};

// ─── Page À propos ───

export const aPropos = {
  hero: {
    title: `À propos de ${siteConfig.name}`,
    subtitle: "Savoir-faire, rigueur et transparence au service de vos projets de construction et rénovation.",
  },
  histoire: {
    title: "Notre histoire",
    paragraphs: [
      `Fondé en ${siteConfig.foundedYear} par ${siteConfig.founder}, ${siteConfig.name} est né d'une passion pour les métiers du bâtiment et d'une conviction simple : un artisan doit être fiable, compétent et transparent.`,
      `Après ${siteConfig.yearsExperience} ans d'expérience et plus de ${siteConfig.interventionsCount} chantiers réalisés, nous restons fidèles à ces valeurs. Notre équipe de professionnels qualifiés intervient chaque jour dans ${siteConfig.address.city} et ses environs pour des travaux de maçonnerie, ravalement, extension, rénovation et aménagement extérieur.`,
      "Couverts par une assurance décennale et animés par l'exigence du travail bien fait, nous accompagnons nos clients dans tous leurs projets, du petit chantier de réparation à la construction d'une extension complète.",
    ],
  },
  equipe: {
    title: "Notre équipe",
    subtitle: "Des professionnels qualifiés et expérimentés à votre service.",
  },
  chiffres: {
    title: "En quelques chiffres",
    items: [
      { value: siteConfig.yearsExperience, label: "Années d'expérience" },
      { value: siteConfig.interventionsCount.toLocaleString("fr-FR"), label: "Chantiers réalisés" },
      { value: siteConfig.googleReviewCount, label: "Avis Google" },
      { value: `${siteConfig.googleRating}/5`, label: "Note moyenne" },
    ],
  },
  valeurs: {
    title: "Nos valeurs",
    items: [
      { title: "Savoir-faire", desc: "Des artisans qualifiés maîtrisant l'ensemble des techniques de construction et rénovation, du gros oeuvre aux finitions." },
      { title: "Transparence", desc: "Devis détaillés, tarifs clairs, suivi de chantier régulier. Vous savez exactement ce que vous payez et où en sont vos travaux." },
      { title: "Rigueur", desc: "Respect des normes, des délais et du budget. Chaque chantier est suivi avec exigence pour garantir un résultat impeccable." },
    ],
  },
  certifications: {
    title: "Certifications et assurances",
    subtitle: "Votre tranquillité d'esprit est notre priorité.",
    items: [
      { label: "Certification RGE", value: siteConfig.rge },
      { label: "Assurance décennale", value: siteConfig.assuranceDecennale },
      { label: "SIRET", value: siteConfig.siret },
    ],
  },
};

// ─── Page Blog ───

export const blog = {
  hero: {
    title: "Blog — Conseils et astuces bâtiment",
    subtitle: "Retrouvez bientôt nos articles pour vous aider dans vos projets de construction et rénovation.",
  },
  empty: {
    title: "Bientôt disponible",
    text: "Nous préparons des articles sur la rénovation, les aides financières, le choix des matériaux, l'entretien de votre maison... Revenez bientôt !",
  },
};

// ─── Page Réalisations ───

export const realisationsPage = {
  hero: {
    title: "Nos réalisations — Avant / Après",
    subtitle: "Découvrez nos derniers chantiers en images. Chaque projet est réalisé avec soin et professionnalisme.",
  },
  categories: ["Tout", "Maçonnerie", "Ravalement", "Extension", "Rénovation intérieure", "Aménagement extérieur"],
  empty: "Aucune réalisation dans cette catégorie pour le moment.",
  cta: {
    title: "Vous avez un projet similaire ?",
    subtitle: "Contactez-nous pour un devis gratuit et personnalisé.",
  },
};

// ─── Page Mentions légales ───

export const mentionsLegales = {
  title: "Mentions légales",
  editeur: {
    title: "1. Éditeur du site",
    intro: (url: string) => `Le site ${url} est édité par :`,
    labels: {
      raisonSociale: "Raison sociale :",
      siege: "Siège social :",
      siret: "SIRET :",
      telephone: "Téléphone :",
      email: "Email :",
      directeurPublication: "Directeur de la publication :",
    },
  },
  hebergeur: {
    title: "2. Hébergeur",
    text: "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
  },
  propriete: {
    title: "3. Propriété intellectuelle",
    text: (legalName: string) =>
      `L'ensemble des contenus (textes, images, graphismes, logo, icônes) de ce site sont la propriété exclusive de ${legalName}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.`,
  },
  rgpd: {
    title: "4. Protection des données personnelles (RGPD)",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.",
      "Les données collectées via le formulaire de contact (nom, téléphone, email, message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni transmises à des tiers, ni utilisées à des fins commerciales.",
    ],
    labels: {
      responsable: "Responsable du traitement :",
      contact: "Contact :",
      duree: "Durée de conservation :",
    },
    dureeValue: "3 ans à compter du dernier contact.",
    droitsIntro: "Pour exercer vos droits, adressez-vous à :",
  },
  cookies: {
    title: "5. Cookies",
    text: "Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé. Des cookies d'analyse anonyme (Google Analytics) peuvent être mis en place avec votre consentement.",
  },
  credits: {
    title: "6. Crédits",
    text: "Site conçu et développé par",
    agence: "Agence Celexia",
  },
};
