import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Maçonnerie", href: "/maconnerie" },
      { label: "Ravalement de façades", href: "/ravalement-facades" },
      { label: "Extension & surélévation", href: "/extension-surelevation" },
      { label: "Rénovation intérieure", href: "/renovation-interieure" },
      { label: "Aménagement extérieur", href: "/amenagement-exterieur" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export const serviceNavItems: NavItem[] = [
  { label: "Maçonnerie", href: "/maconnerie" },
  { label: "Ravalement de façades", href: "/ravalement-facades" },
  { label: "Extension & surélévation", href: "/extension-surelevation" },
  { label: "Rénovation intérieure", href: "/renovation-interieure" },
  { label: "Aménagement extérieur", href: "/amenagement-exterieur" },
];
