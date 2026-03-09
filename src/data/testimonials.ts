export interface AdminTestimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export const testimonials: AdminTestimonial[] = [
  {
    id: "1",
    clientName: "Marie Dupont",
    clientRole: "Propriétaire à {VILLE}",
    quote: "Ravalement de façade impeccable. L'équipe a été très professionnelle, les délais respectés et le résultat est magnifique. Notre maison a retrouvé une seconde jeunesse !",
    rating: 5,
    projectType: "Ravalement",
    date: "2024-06",
  },
  {
    id: "2",
    clientName: "Pierre Martin",
    clientRole: "Propriétaire à {COMMUNE_1}",
    quote: "Extension de 25m² réalisée dans les règles de l'art. Du terrassement aux finitions, tout a été parfait. Je recommande vivement pour les gros travaux.",
    rating: 5,
    projectType: "Extension",
    date: "2024-03",
  },
  {
    id: "3",
    clientName: "Sophie Laurent",
    clientRole: "Propriétaire à {COMMUNE_2}",
    quote: "Rénovation complète de notre appartement. Ils ont géré la démolition, la maçonnerie, le carrelage et la peinture. Travail soigné et équipe très sérieuse.",
    rating: 5,
    projectType: "Rénovation",
    date: "2024-08",
  },
  {
    id: "4",
    clientName: "Jean-Paul Moreau",
    clientRole: "Propriétaire à {VILLE}",
    quote: "Construction d'un mur de clôture et d'une terrasse. Le travail de maçonnerie est solide et les finitions sont propres. Bon rapport qualité-prix.",
    rating: 4,
    projectType: "Aménagement extérieur",
    date: "2024-01",
  },
  {
    id: "5",
    clientName: "Isabelle Petit",
    clientRole: "Propriétaire à {VILLE}",
    quote: "Ouverture d'un mur porteur avec pose d'IPN. Intervention rapide, propre et conforme aux plans du bureau d'études. Très satisfaite du résultat.",
    rating: 5,
    projectType: "Maçonnerie",
    date: "2023-11",
  },
];
