import type { Metadata } from "next";
import Link from "next/link";
import { Building2, TreePine, ArrowUpFromLine, Sun, ClipboardList, FileCheck, HardHat, PartyPopper, Search } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqExtension } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { extension, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Extension & surélévation ${siteConfig.address.city} | Agrandissement maison`,
  description: `Extension et surélévation de maison à ${siteConfig.address.city}. Parpaing, ossature bois, surélévation de toiture, véranda. Permis inclus. Devis gratuit.`,
  path: "/extension-surelevation",
});

const solutionIcons = [Building2, TreePine, ArrowUpFromLine, Sun];

const solutionImages: Record<string, { prompt: string; imageKey: string }> = {
  "Extension en parpaing": { prompt: "Extension maison en parpaing enduit blanc, grande baie vitree, toiture plate, raccord harmonieux avec maison existante, photo realiste, ratio 3:2", imageKey: "extension-maison" },
  "Extension ossature bois": { prompt: "Extension maison ossature bois bardage bois naturel, grandes fenetres, design contemporain, jardin autour, photo realiste, ratio 3:2", imageKey: "extension-ossature-bois" },
  "Surélévation de toiture": { prompt: "Maison en cours de surelevation, charpente bois neuve visible, echafaudage, toiture en construction, photo realiste, ratio 3:2", imageKey: "extension-surelevation-toiture" },
  "Véranda & pergola": { prompt: "Veranda aluminium moderne accolee a maison, toiture vitree, salon amenage a l'interieur, lumiere naturelle, jardin visible, photo realiste, ratio 3:2", imageKey: "extension-veranda" },
};

const etapeIcons = [Search, FileCheck, ClipboardList, HardHat, PartyPopper];

const serviceLiesLinks: Record<string, string> = {
  "Maçonnerie": "/maconnerie",
  "Rénovation intérieure": "/renovation-interieure",
};

export default function ExtensionPage() {
  return (
    <ServicePageLayout
      hero={{
        title: extension.hero.title,
        subtitle: extension.hero.subtitle,
        imagePlaceholder: {
          prompt: "Extension moderne de maison individuelle, parpaing enduit blanc, grande baie vitree coulissante, toiture plate, jardin amenage, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["extension-surelevation"] || undefined,
        },
        badges: extension.hero.badges,
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Extension & surélévation" },
      ]}
      faqs={faqExtension}
    >
      {/* Types de projets */}
      <SectionContainer>
        <SectionHeading
          title={extension.solutions.title}
          subtitle={extension.solutions.subtitle}
        />
        <div className="space-y-12">
          {extension.solutions.items.map((s, i) => {
            const Icon = solutionIcons[i];
            const imgData = solutionImages[s.title];
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="3/2" alt={s.title} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Etapes */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={extension.etapes.title}
          subtitle={extension.etapes.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {extension.etapes.items.map((e, i) => {
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
          {extension.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
