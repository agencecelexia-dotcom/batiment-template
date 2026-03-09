/**
 * Mapping des images du site — images uniques pour tous les emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** Hero generique — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-batiment.jpeg";

/** Hero maconnerie + page maconnerie-murs */
const IMG_MACONNERIE_HERO = "/images/heroes/maconnerie.jpeg";

/** Hero ravalement + page ravalement-enduit + realisation facade-after */
const IMG_RAVALEMENT = "/images/heroes/ravalement-facades.jpeg";

/** Hero extension + page extension-maison + realisation extension-after */
const IMG_EXTENSION = "/images/heroes/extension-surelevation.jpeg";

/** Hero renovation interieure + page renovation-complete + realisation renovation-after */
const IMG_RENOVATION_INT = "/images/heroes/renovation-interieure.jpeg";

/** Page carrelage + realisation carrelage-after */
const IMG_CARRELAGE = "/images/pages/renovation-carrelage.jpeg";

/** Page terrasse + realisation terrasse-after */
const IMG_TERRASSE = "/images/pages/amenagement-terrasse.jpeg";

/** Section urgence-card + realisation fissure-before */
const IMG_FISSURE_MUR = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":                "/images/heroes/accueil.jpeg",
  "maconnerie":             IMG_MACONNERIE_HERO,
  "ravalement-facades":     IMG_RAVALEMENT,
  "extension-surelevation": IMG_EXTENSION,
  "renovation-interieure":  IMG_RENOVATION_INT,
  "amenagement-exterieur":  "/images/heroes/amenagement-exterieur.jpeg",
  "blog":                   HERO_GENERIQUE,
  "avis-clients":           HERO_GENERIQUE,
  "contact":                HERO_GENERIQUE,
  "a-propos":               HERO_GENERIQUE,
  "realisations":           HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":            HERO_GENERIQUE,
  "urgence-card":           IMG_FISSURE_MUR,
  "projet-card":            "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 10 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":             "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":                "/images/pages/a-propos-equipe.jpeg",
  // Maconnerie
  "maconnerie-murs-porteurs":       "/images/pages/maconnerie-murs-porteurs.jpeg",
  "maconnerie-fondations":          IMG_MACONNERIE_HERO,
  "maconnerie-ouvertures":          "/images/pages/maconnerie-ouvertures.jpeg",
  // Ravalement
  "ravalement-enduit":              IMG_RAVALEMENT,
  "ravalement-ite":                 "/images/pages/ravalement-ite.jpeg",
  // Extension
  "extension-maison":               IMG_EXTENSION,
  "extension-surelevation-toiture": "/images/pages/extension-surelevation-toiture.jpeg",
  // Renovation interieure
  "renovation-cloisons":            "/images/pages/renovation-cloisons.jpeg",
  "renovation-carrelage":           IMG_CARRELAGE,
  "renovation-complete":            IMG_RENOVATION_INT,
  // Amenagement exterieur
  "amenagement-terrasse":           IMG_TERRASSE,
  "amenagement-cloture":            "/images/pages/amenagement-cloture.jpeg",
};

// ============================================================
// Realisations avant/apres (20 emplacements → 14 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "facade-ravalement-before":         "/images/realisations/facade-ravalement-before.jpeg",
  "facade-ravalement-after":          "/images/realisations/facade-ravalement-after.png",
  "extension-maison-before":          "/images/realisations/extension-maison-before.png",
  "extension-maison-after":           "/images/realisations/extension-maison-after.jpeg",
  "terrasse-bois-before":             "/images/realisations/terrasse-bois-before.png",
  "terrasse-bois-after":              IMG_TERRASSE,
  "renovation-appart-before":         "/images/realisations/renovation-appart-before.jpeg",
  "renovation-appart-after":          "/images/realisations/renovation-appart-after.png",
  "mur-cloture-before":              "/images/realisations/mur-cloture-before.png",
  "mur-cloture-after":               "/images/realisations/mur-cloture-after.jpeg",
  "carrelage-salon-before":          "/images/realisations/carrelage-salon-before.png",
  "carrelage-salon-after":           IMG_CARRELAGE,
  "ouverture-mur-before":            "/images/realisations/ouverture-mur-before.png",
  "ouverture-mur-after":             "/images/realisations/ouverture-mur-after.jpeg",
  "surelevation-toiture-before":     "/images/realisations/surelevation-toiture-before.png",
  "surelevation-toiture-after":      IMG_EXTENSION,
  "fissure-facade-before":           IMG_FISSURE_MUR,
  "fissure-facade-after":            "/images/realisations/fissure-facade-after.png",
  "allee-beton-before":              "/images/realisations/allee-beton-before.png",
  "allee-beton-after":               "/images/realisations/allee-beton-after.jpeg",
};
