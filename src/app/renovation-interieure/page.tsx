import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, Grid3X3, Paintbrush, Home, ClipboardList, HardHat, PartyPopper, Search } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqRenovation } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { renovation, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Rénovation intérieure ${siteConfig.address.city} | Cloisons, carrelage, peinture`,
  description: `Rénovation intérieure à ${siteConfig.address.city}. Cloisons, plâtrerie, carrelage, peinture, rénovation complète. Un seul interlocuteur. Devis gratuit.`,
  path: "/renovation-interieure",
});

const projetIcons = [LayoutGrid, Grid3X3, Paintbrush, Home];

const projetImages: Record<string, { prompt: string; imageKey: string }> = {
  "Cloisons & plâtrerie": { prompt: "Artisan posant des plaques de platre sur ossature metallique, chantier interieur propre, visseuse en main, photo realiste, ratio 4:3", imageKey: "renovation-cloisons" },
  "Carrelage & faïence": { prompt: "Carreleur posant du carrelage grand format au sol, croisillons visibles, niveau a bulle, chantier interieur, photo realiste, ratio 4:3", imageKey: "renovation-carrelage" },
  "Peinture & finitions": { prompt: "Peintre en batiment appliquant de la peinture blanche au rouleau sur mur interieur, bache de protection au sol, finition soignee, photo realiste, ratio 4:3", imageKey: "renovation-complete" },
  "Rénovation complète": { prompt: "Appartement en cours de renovation complete, murs neufs, sol en chape, electricien et plombier au travail, chantier organise, photo realiste, ratio 4:3", imageKey: "renovation-complete" },
};

const etapeIcons = [Search, ClipboardList, HardHat, PartyPopper];

const serviceLiesLinks: Record<string, string> = {
  "Maçonnerie": "/maconnerie",
  "Aménagement extérieur": "/amenagement-exterieur",
};

export default function RenovationInterieurePage() {
  return (
    <ServicePageLayout
      hero={{
        title: renovation.hero.title,
        subtitle: renovation.hero.subtitle,
        imagePlaceholder: {
          prompt: "Interieur d'appartement en cours de renovation, murs neufs lisses, parquet en cours de pose, eclairage naturel par grandes fenetres, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["renovation-interieure"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Rénovation intérieure" },
      ]}
      faqs={faqRenovation}
    >
      {/* Types de travaux */}
      <SectionContainer>
        <SectionHeading
          title={renovation.projets.title}
          subtitle={renovation.projets.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-8">
          {renovation.projets.items.map((p, i) => {
            const Icon = projetIcons[i];
            const imgData = projetImages[p.title];
            return (
              <div key={p.title} className="space-y-4">
                <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="4/3" alt={p.title} />
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Travaux divers */}
      <SectionContainer variant="white" id="divers">
        <SectionHeading
          title={renovation.travauxDivers.title}
          subtitle={renovation.travauxDivers.subtitle}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {renovation.travauxDivers.items.map((t) => (
            <Card key={t.title}>
              <CardContent className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Etapes */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={renovation.etapes.title}
          subtitle={renovation.etapes.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {renovation.etapes.items.map((e, i) => {
            const Icon = etapeIcons[i];
            return (
              <div key={e.title} className="text-center relative">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Services lies */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {renovation.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
