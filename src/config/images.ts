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

/** Hero maconnerie + page maconnerie-fondations */
const IMG_MACONNERIE_HERO = "/images/heroes/maconnerie.jpeg";

/** Hero ravalement + page ravalement-enduit + realisation facade-after */
const IMG_RAVALEMENT = "/images/heroes/ravalement-facades.jpeg";

/** Hero extension + hero amenagement + page extension-maison + page amenagement-terrasse + realisation surelevation-after */
const IMG_EXTENSION = "/images/heroes/extension-surelevation.jpeg";

/** Hero renovation interieure + page renovation-complete */
const IMG_RENOVATION_INT = "/images/heroes/renovation-interieure.jpeg";

/** Facade degradee — urgence-card + realisation facade-ravalement-before */
const IMG_FACADE_DEGRADEE = "/images/realisations/facade-ravalement-before.jpeg";

/** Ouverture mur apres — page renovation-cloisons + realisation ouverture-mur-after */
const IMG_OUVERTURE_APRES = "/images/realisations/ouverture-mur-after.jpeg";

/** Ouverture mur avant — page maconnerie-murs-porteurs + realisation ouverture-mur-before */
const IMG_OUVERTURE_AVANT = "/images/realisations/ouverture-mur-before.png";

// ============================================================
// Hero pages (11 emplacements → 6 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":                "/images/heroes/accueil.jpeg",
  "maconnerie":             IMG_MACONNERIE_HERO,
  "ravalement-facades":     IMG_RAVALEMENT,
  "extension-surelevation": IMG_EXTENSION,
  "renovation-interieure":  IMG_RENOVATION_INT,
  "amenagement-exterieur":  IMG_EXTENSION,
  "blog":                   HERO_GENERIQUE,
  "avis-clients":           HERO_GENERIQUE,
  "contact":                HERO_GENERIQUE,
  "a-propos":               HERO_GENERIQUE,
  "realisations":           HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 3 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":            HERO_GENERIQUE,
  "urgence-card":           IMG_FACADE_DEGRADEE,
  "projet-card":            "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 8 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":             "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":                "/images/pages/a-propos-equipe.jpeg",
  // Maconnerie
  "maconnerie-murs-porteurs":       IMG_OUVERTURE_AVANT,
  "maconnerie-fondations":          IMG_MACONNERIE_HERO,
  "maconnerie-ouvertures":          "/images/pages/maconnerie-ouvertures.jpeg",
  // Ravalement
  "ravalement-enduit":              IMG_RAVALEMENT,
  "ravalement-ite":                 "/images/pages/ravalement-ite.jpeg",
  // Extension
  "extension-maison":               IMG_EXTENSION,
  "extension-surelevation-toiture": "/images/pages/extension-surelevation-toiture.jpeg",
  // Renovation interieure
  "renovation-cloisons":            IMG_OUVERTURE_APRES,
  "renovation-carrelage":           "/images/pages/renovation-carrelage.jpeg",
  "renovation-complete":            IMG_RENOVATION_INT,
  // Amenagement exterieur
  "amenagement-terrasse":           IMG_EXTENSION,
  "amenagement-cloture":            "/images/pages/ravalement-ite.jpeg",
};

// ============================================================
// Realisations avant/apres (12 emplacements → 10 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "facade-ravalement-before":         IMG_FACADE_DEGRADEE,
  "facade-ravalement-after":          "/images/realisations/facade-ravalement-after.png",
  "extension-maison-before":          "/images/realisations/extension-maison-before.png",
  "extension-maison-after":           "/images/realisations/extension-maison-after.jpeg",
  "renovation-appart-before":         "/images/realisations/renovation-appart-before.jpeg",
  "renovation-appart-after":          "/images/realisations/renovation-appart-after.png",
  "carrelage-salon-before":           "/images/realisations/carrelage-salon-before.png",
  "carrelage-salon-after":            "/images/pages/renovation-carrelage.jpeg",
  "ouverture-mur-before":             IMG_OUVERTURE_AVANT,
  "ouverture-mur-after":              IMG_OUVERTURE_APRES,
  "surelevation-toiture-before":      "/images/realisations/surelevation-toiture-before.png",
  "surelevation-toiture-after":       IMG_EXTENSION,
};
