import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Layers, DoorOpen, Hammer, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqMaconnerie } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { maconnerie, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Maçonnerie ${siteConfig.address.city} | Murs, fondations, ouvertures`,
  description: `Maçon professionnel à ${siteConfig.address.city}. Murs porteurs, fondations, dalles, ouvertures. Garantie décennale. Devis gratuit sous 48h.`,
  path: "/maconnerie",
});

const serviceIcons = [Landmark, Layers, DoorOpen, Hammer];

const serviceImages: Record<string, { prompt: string; imageKey: string }> = {
  "Murs porteurs & cloisons": { prompt: "Artisan macon montant un mur en parpaing, alignement au cordeau, chantier propre, lumiere naturelle, photo realiste, ratio 3:2", imageKey: "maconnerie-murs-porteurs" },
  "Fondations & dalles": { prompt: "Coulage de dalle beton sur chantier de construction, armatures visibles, camion toupie, photo realiste, ratio 3:2", imageKey: "maconnerie-fondations" },
  "Ouvertures & agrandissements": { prompt: "Ouverture dans mur porteur avec IPN metallique, chantier en cours, etais visibles, photo realiste, ratio 3:2", imageKey: "maconnerie-ouvertures" },
  "Réparations & rejointoiement": { prompt: "Artisan rejointoyant un mur en pierre naturelle, travail soigne a la truelle, detail des joints, photo realiste, ratio 3:2", imageKey: "maconnerie-reparations" },
};

const serviceLiesLinks: Record<string, string> = {
  "Extension & surélévation": "/extension-surelevation",
  "Ravalement de façades": "/ravalement-facades",
};

export default function MaconneriePage() {
  return (
    <ServicePageLayout
      hero={{
        title: maconnerie.hero.title,
        subtitle: maconnerie.hero.subtitle,
        imagePlaceholder: {
          prompt: "Artisan macon professionnel francais posant des briques sur un chantier de construction, mur en parpaing, outils de macon, eclairage naturel, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["maconnerie"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Maçonnerie" },
      ]}
      faqs={faqMaconnerie}
    >
      {/* Services detailles */}
      <SectionContainer>
        <SectionHeading
          title={maconnerie.services.title}
          subtitle={maconnerie.services.subtitle}
        />
        <div className="space-y-12">
          {maconnerie.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            const imgData = serviceImages[s.title];
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
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
        <SectionHeading title={maconnerie.avantages.title} />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {maconnerie.avantages.items.map((a) => (
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
          {maconnerie.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
