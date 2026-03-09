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
    clientRole: "Propri\u00e9taire \u00e0 {VILLE}",
    quote: "Ravalement de fa\u00e7ade impeccable. L'\u00e9quipe a \u00e9t\u00e9 tr\u00e8s professionnelle, les d\u00e9lais respect\u00e9s et le r\u00e9sultat est magnifique. Notre maison a retrouv\u00e9 une seconde jeunesse !",
    rating: 5,
    projectType: "Ravalement",
    date: "2024-06",
  },
  {
    id: "2",
    clientName: "Pierre Martin",
    clientRole: "Propri\u00e9taire \u00e0 {COMMUNE_1}",
    quote: "Extension de 25m\u00b2 r\u00e9alis\u00e9e dans les r\u00e8gles de l'art. Du terrassement aux finitions, tout a \u00e9t\u00e9 parfait. Je recommande vivement pour les gros travaux.",
    rating: 5,
    projectType: "Extension",
    date: "2024-03",
  },
  {
    id: "3",
    clientName: "Sophie Laurent",
    clientRole: "Propri\u00e9taire \u00e0 {COMMUNE_2}",
    quote: "R\u00e9novation compl\u00e8te de notre appartement. Ils ont g\u00e9r\u00e9 la d\u00e9molition, la ma\u00e7onnerie, le carrelage et la peinture. Travail soign\u00e9 et \u00e9quipe tr\u00e8s s\u00e9rieuse.",
    rating: 5,
    projectType: "R\u00e9novation",
    date: "2024-08",
  },
  {
    id: "4",
    clientName: "Jean-Paul Moreau",
    clientRole: "Propri\u00e9taire \u00e0 {VILLE}",
    quote: "Construction d'un mur de cl\u00f4ture et d'une terrasse. Le travail de ma\u00e7onnerie est solide et les finitions sont propres. Bon rapport qualit\u00e9-prix.",
    rating: 4,
    projectType: "Am\u00e9nagement ext\u00e9rieur",
    date: "2024-01",
  },
  {
    id: "5",
    clientName: "Isabelle Petit",
    clientRole: "Propri\u00e9taire \u00e0 {VILLE}",
    quote: "Ouverture d'un mur porteur avec pose d'IPN. Intervention rapide, propre et conforme aux plans du bureau d'\u00e9tudes. Tr\u00e8s satisfaite du r\u00e9sultat.",
    rating: 5,
    projectType: "Ma\u00e7onnerie",
    date: "2023-11",
  },
];
