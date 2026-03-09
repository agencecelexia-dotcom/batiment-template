import type { FAQ } from "@/types";
import { siteConfig } from "@/config/site";
import { clientConfig } from "@/config/client.config";

export const faqGeneral: FAQ[] = [
  {
    question: "Vos devis sont-ils gratuits ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins, prendre les mesures et vous remettons un devis détaillé sous 48h.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      `Pour les travaux courants, nous établissons un planning dès la signature du devis. Le démarrage du chantier intervient généralement sous 2 à 4 semaines selon notre carnet de commandes. Pour les urgences (fissures, infiltrations), nous intervenons sous ${clientConfig.chiffres.delaiIntervention}. Contactez-nous au ${siteConfig.phone}.`,
  },
  {
    question: "Êtes-vous assuré pour les travaux ?",
    answer:
      "Oui, nous disposons d'une assurance décennale couvrant l'ensemble de nos travaux de gros oeuvre et second oeuvre, ainsi qu'une responsabilité civile professionnelle. Nous fournissons systématiquement nos attestations sur demande.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons le paiement par chèque, virement bancaire et espèces. Pour les chantiers importants, un échéancier de paiement est prévu : acompte à la signature, paiements intermédiaires selon l'avancement et solde à la réception des travaux.",
  },
  {
    question: "Quelle garantie offrez-vous sur vos travaux ?",
    answer:
      "Nos travaux sont couverts par la garantie décennale (10 ans) pour le gros oeuvre, la garantie biennale (2 ans) pour les équipements et la garantie de parfait achèvement (1 an). Vous bénéficiez d'une protection complète.",
  },
];

export const faqMaconnerie: FAQ[] = [
  {
    question: "Peut-on ouvrir un mur porteur ?",
    answer:
      "Oui, c'est tout à fait possible. L'ouverture d'un mur porteur nécessite une étude de structure par un bureau d'études, la pose d'un IPN ou d'une poutre de renfort, et une exécution dans les règles de l'art. Nous gérons l'intégralité du processus.",
  },
  {
    question: "Combien coûte la construction d'un mur en parpaing ?",
    answer:
      "Le prix d'un mur en parpaing varie entre 40 et 80 euros/m² selon l'épaisseur (10, 15 ou 20 cm), la hauteur et les finitions. Ce tarif comprend les fondations, le montage et les joints. Nous établissons un devis précis après visite.",
  },
  {
    question: "Intervenez-vous sur les fondations ?",
    answer:
      "Oui, nous réalisons tous types de fondations : semelles filantes, plots béton, radier, reprise en sous-oeuvre. Une étude de sol est recommandée avant les travaux pour déterminer le type de fondation adapté.",
  },
];

export const faqRavalement: FAQ[] = [
  {
    question: "Le ravalement de façade est-il obligatoire ?",
    answer:
      "Oui, dans la plupart des communes françaises, le ravalement de façade est obligatoire tous les 10 ans (article L132-1 du Code de la construction). Un arrêté municipal peut imposer cette obligation avec un délai de mise en conformité.",
  },
  {
    question: "Combien coûte un ravalement de façade ?",
    answer:
      "Le prix d'un ravalement varie entre 30 et 100 euros/m² selon l'état de la façade, le type de finition (peinture, enduit, crépi) et l'accessibilité. Un ravalement avec ITE (isolation thermique par l'extérieur) coûte entre 100 et 180 euros/m², mais est éligible aux aides.",
  },
  {
    question: "Quelles sont les aides pour un ravalement avec isolation ?",
    answer:
      "L'isolation thermique par l'extérieur (ITE) est éligible à MaPrimeRénov', aux CEE (certificats d'économie d'énergie), à l'éco-prêt à taux zéro et aux aides locales. Le montant dépend de vos revenus et de la surface isolée. Nous vous accompagnons dans les démarches.",
  },
];

export const faqExtension: FAQ[] = [
  {
    question: "Faut-il un permis de construire pour une extension ?",
    answer:
      "Pour une extension de moins de 20m² (ou 40m² en zone urbaine avec PLU), une simple déclaration préalable suffit. Au-delà, un permis de construire est obligatoire. Si la surface totale dépasse 150m² après travaux, le recours à un architecte est obligatoire.",
  },
  {
    question: "Combien coûte une extension de maison ?",
    answer:
      "Le prix d'une extension varie entre 1 200 et 2 500 euros/m² selon les matériaux (parpaing, ossature bois, acier), les finitions et la complexité du projet. Une surélévation de toiture coûte entre 1 500 et 3 000 euros/m². Devis gratuit sur rendez-vous.",
  },
  {
    question: "Combien de temps durent les travaux d'extension ?",
    answer:
      "La durée dépend de la taille du projet : comptez 2 à 3 mois pour une extension de 20-30m², 3 à 5 mois pour une surélévation complète. Les délais incluent les phases administratives (permis) que nous gérons pour vous.",
  },
];

export const faqRenovation: FAQ[] = [
  {
    question: "Combien coûte une rénovation complète au m² ?",
    answer:
      "Le prix d'une rénovation intérieure complète varie entre 500 et 1 200 euros/m² selon l'ampleur des travaux : rafraîchissement simple (peinture, sols) à partir de 200 euros/m², rénovation moyenne (cloisons, électricité, plomberie) à partir de 500 euros/m², rénovation lourde (structure, tout corps d'état) à partir de 800 euros/m².",
  },
  {
    question: "Pouvez-vous gérer l'ensemble des corps de métier ?",
    answer:
      "Oui, c'est notre force. En tant qu'entreprise générale de bâtiment, nous coordonnons tous les corps de métier : maçonnerie, plâtrerie, électricité, plomberie, carrelage, peinture, menuiserie. Un seul interlocuteur pour tous vos travaux.",
  },
  {
    question: "Faut-il quitter son logement pendant les travaux ?",
    answer:
      "Pour une rénovation légère (peinture, carrelage d'une pièce), vous pouvez rester chez vous. Pour une rénovation lourde (démolition, plomberie complète), il est souvent préférable de quitter le logement. Nous organisons le chantier pour minimiser la gêne.",
  },
];

export const faqAmenagement: FAQ[] = [
  {
    question: "Quel matériau choisir pour une terrasse ?",
    answer:
      "Le bois composite offre un excellent rapport qualité/prix et peu d'entretien. Le bois naturel (pin traité, ipé) est plus chaleureux mais nécessite un entretien annuel. Le carrelage extérieur et le béton décoratif sont très résistants. Nous vous conseillons selon votre budget et vos préférences.",
  },
  {
    question: "Faut-il un permis pour construire une terrasse ?",
    answer:
      "Une terrasse de plain-pied (non surélevée) ne nécessite aucune autorisation. Une terrasse surélevée de plus de 60 cm ou couverte de plus de 20m² nécessite une déclaration préalable ou un permis de construire selon les cas.",
  },
  {
    question: "Combien coûte la pose d'une clôture ?",
    answer:
      "Le prix varie selon le type : clôture en grillage rigide à partir de 50 euros/ml posé, clôture en aluminium à partir de 150 euros/ml, mur en parpaing enduit à partir de 200 euros/ml. Le prix inclut les fondations, les piliers et la pose.",
  },
];
