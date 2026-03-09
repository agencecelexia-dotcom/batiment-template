import type { Metadata } from "next";
import Link from "next/link";
import { TreePine, Fence, Landmark, Route, Shovel, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqAmenagement } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { amenagement, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Aménagement extérieur ${siteConfig.address.city} | Terrasse, clôture, allée`,
  description: `Aménagement extérieur à ${siteConfig.address.city}. Terrasse bois et composite, clôture, muret, allée béton désactivé. Devis gratuit.`,
  path: "/amenagement-exterieur",
});

const serviceIcons = [TreePine, Fence, Landmark, Route, Shovel];

const serviceImages: Record<string, { prompt: string; imageKey: string }> = {
  "Terrasse": { prompt: "Belle terrasse en bois composite gris clair, lames regulieres, salon de jardin, eclairage LED, maison moderne en arriere-plan, photo realiste, ratio 3:2", imageKey: "amenagement-terrasse" },
  "Clôture & portail": { prompt: "Cloture aluminium gris anthracite avec piliers enduits, portail coulissant motorise, jardin soigne, photo realiste, ratio 3:2", imageKey: "amenagement-cloture" },
  "Murets & soutènement": { prompt: "Mur de soutenement en gabion pierre sur terrain en pente, jardin amenage en terrasses, photo realiste, ratio 3:2", imageKey: "amenagement-cloture" },
  "Allées & cours": { prompt: "Allee carrossable en beton desactive ton beige, bordures en paves, garage en arriere-plan, finition soignee, photo realiste, ratio 3:2", imageKey: "amenagement-terrasse" },
  "VRD & assainissement": { prompt: "Tranchee ouverte avec tuyaux PVC pour raccordement reseau, pelle mecanique en arriere-plan, chantier organise, photo realiste, ratio 3:2", imageKey: "amenagement-terrasse" },
};

const serviceLiesLinks: Record<string, string> = {
  "Maçonnerie": "/maconnerie",
  "Extension & surélévation": "/extension-surelevation",
};

export default function AmenagementExterieurPage() {
  return (
    <ServicePageLayout
      hero={{
        title: amenagement.hero.title,
        subtitle: amenagement.hero.subtitle,
        imagePlaceholder: {
          prompt: "Bel amenagement exterieur maison francaise, terrasse bois composite, cloture aluminium, allee pavee, jardin soigne, lumiere naturelle doree, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["amenagement-exterieur"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Aménagement extérieur" },
      ]}
      faqs={faqAmenagement}
    >
      {/* Prestations */}
      <SectionContainer>
        <SectionHeading
          title={amenagement.services.title}
          subtitle={amenagement.services.subtitle}
        />
        <div className="space-y-12">
          {amenagement.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            const imgData = serviceImages[s.title];
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

      {/* Pourquoi nous choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title={amenagement.avantages.title} />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {amenagement.avantages.items.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services lies */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {amenagement.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
