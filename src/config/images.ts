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

/** Hero ravalement + page ravalement-enduit */
const IMG_RAVALEMENT = "/images/heroes/ravalement-facades.jpeg";

/** Hero extension + hero amenagement + realisation surelevation-after */
const IMG_EXTENSION = "/images/heroes/extension-surelevation.jpeg";

/** Hero renovation interieure */
const IMG_RENOVATION_INT = "/images/heroes/renovation-interieure.jpeg";

/** Facade degradee — urgence-card + realisation facade-ravalement-before */
const IMG_FACADE_DEGRADEE = "/images/realisations/facade-ravalement-before.jpeg";

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
// Pages specifiques — chaque sous-section a sa propre image
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":             "/images/pages/a-propos-dirigeant.jpeg",
  "a-propos-equipe":                "/images/pages/a-propos-equipe.jpeg",
  // Maconnerie (4 sous-sections distinctes)
  "maconnerie-murs-porteurs":       "/images/pages/maconnerie-mur-pierre.jpg",
  "maconnerie-fondations":          "/images/realisations/renovation-appart-before.jpeg",
  "maconnerie-ouvertures":          "/images/pages/maconnerie-ouvertures.jpeg",
  "maconnerie-reparations":         "/images/realisations/ouverture-mur-before.jpeg",
  // Ravalement (4 sous-sections distinctes)
  "ravalement-enduit":              IMG_RAVALEMENT,
  "ravalement-nettoyage":           IMG_FACADE_DEGRADEE,
  "ravalement-peinture":            "/images/pages/ravalement-ite.jpeg",
  "ravalement-ite":                 "/images/pages/travaux-isolation.jpeg",
  // Extension (4 sous-sections distinctes)
  "extension-maison":               IMG_EXTENSION,
  "extension-ossature-bois":        "/images/realisations/extension-maison-after.jpeg",
  "extension-surelevation-toiture": "/images/pages/extension-surelevation-toiture.jpeg",
  "extension-veranda":              "/images/pages/extension-conception-plans.jpeg",
  // Renovation interieure (4 sous-sections distinctes)
  "renovation-cloisons":            "/images/pages/renovation-cuisine-ouverte.jpeg",
  "renovation-carrelage":           "/images/pages/renovation-douche-carrelage.jpeg",
  "renovation-peinture":            "/images/pages/renovation-salon-finitions.jpeg",
  "renovation-complete":            "/images/pages/renovation-bureau.jpeg",
  // Amenagement exterieur (5 sous-sections distinctes)
  "amenagement-terrasse":           "/images/pages/terrasse-moderne.jpeg",
  "amenagement-cloture":            "/images/realisations/facade-ravalement-after.jpeg",
  "amenagement-murets":             "/images/realisations/surelevation-toiture-before.jpeg",
  "amenagement-allees":             "/images/realisations/renovation-appart-after.jpeg",
  "amenagement-vrd":                "/images/realisations/renovation-appart-before.jpeg",
};

// ============================================================
// Realisations avant/apres (12 emplacements → 10 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "facade-ravalement-before":         IMG_FACADE_DEGRADEE,
  "facade-ravalement-after":          "/images/realisations/facade-ravalement-after.jpeg",
  "extension-maison-before":          "/images/realisations/extension-maison-before.jpeg",
  "extension-maison-after":           "/images/realisations/extension-maison-after.jpeg",
  "renovation-appart-before":         "/images/realisations/renovation-appart-before.jpeg",
  "renovation-appart-after":          "/images/realisations/renovation-appart-after.jpeg",
  "carrelage-salon-before":           "/images/realisations/carrelage-salon-before.jpeg",
  "carrelage-salon-after":            "/images/pages/renovation-carrelage.jpeg",
  "ouverture-mur-before":             "/images/realisations/ouverture-mur-before.jpeg",
  "ouverture-mur-after":              "/images/realisations/ouverture-mur-after.jpeg",
  "surelevation-toiture-before":      "/images/realisations/surelevation-toiture-before.jpeg",
  "surelevation-toiture-after":       IMG_EXTENSION,
};
