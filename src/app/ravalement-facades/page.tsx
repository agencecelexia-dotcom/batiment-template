import type { Metadata } from "next";
import Link from "next/link";
import { SprayCan, PaintBucket, Paintbrush, ShieldCheck, ClipboardList, HardHat, PartyPopper, Search } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqRavalement } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { ravalement, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Ravalement de façades ${siteConfig.address.city} | Enduit, ITE, peinture`,
  description: `Ravalement de façades à ${siteConfig.address.city}. Nettoyage, enduit, crépi, peinture, isolation thermique (ITE). Certifié RGE. Devis gratuit.`,
  path: "/ravalement-facades",
});

const prestationIcons = [SprayCan, PaintBucket, Paintbrush, ShieldCheck];

const prestationImages: Record<string, { prompt: string; imageKey: string }> = {
  "Nettoyage & traitement": { prompt: "Nettoyage haute pression facade maison, jet d'eau puissant sur mur enduit, professionnel en tenue de protection, photo realiste, ratio 3:2", imageKey: "ravalement-nettoyage" },
  "Enduit & crépi": { prompt: "Artisan facadier appliquant un enduit monocouche sur facade maison, taloche en main, echafaudage, finition soignee, photo realiste, ratio 3:2", imageKey: "ravalement-enduit" },
  "Peinture de façade": { prompt: "Peintre en batiment sur echafaudage peignant une facade de maison en blanc, rouleau large, protection au sol, photo realiste, ratio 3:2", imageKey: "ravalement-peinture" },
  "Isolation thermique (ITE)": { prompt: "Pose de panneaux isolants polystyrene sur facade exterieure maison, artisan sur echafaudage, chevilles de fixation visibles, photo realiste, ratio 3:2", imageKey: "ravalement-ite" },
};

const etapeIcons = [Search, ClipboardList, HardHat, PartyPopper];

const serviceLiesLinks: Record<string, string> = {
  "Maçonnerie": "/maconnerie",
  "Aménagement extérieur": "/amenagement-exterieur",
};

export default function RavalementPage() {
  return (
    <ServicePageLayout
      hero={{
        title: ravalement.hero.title,
        subtitle: ravalement.hero.subtitle,
        imagePlaceholder: {
          prompt: "Facade de maison francaise en cours de ravalement, echafaudage metallique, enduit frais applique, artisan au travail, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["ravalement-facades"] || undefined,
        },
        badges: ravalement.hero.badges,
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ravalement de façades" },
      ]}
      faqs={faqRavalement}
    >
      {/* Types de ravalement */}
      <SectionContainer>
        <SectionHeading
          title={ravalement.prestations.title}
          subtitle={ravalement.prestations.subtitle}
        />
        <div className="space-y-12">
          {ravalement.prestations.items.map((s, i) => {
            const Icon = prestationIcons[i];
            const imgData = prestationImages[s.title];
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

      {/* Etapes */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={ravalement.etapes.title}
          subtitle={ravalement.etapes.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ravalement.etapes.items.map((e, i) => {
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

      {/* Aides financieres RGE */}
      <SectionContainer variant="white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            Aides financières et certification RGE
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            En tant qu&apos;artisan certifié RGE, nous vous permettons de bénéficier des aides à la rénovation énergétique pour vos travaux d&apos;isolation par l&apos;extérieur : MaPrimeRénov&apos;, CEE, éco-prêt à taux zéro.
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.rge}
          </p>
        </div>
      </SectionContainer>

      {/* Services lies */}
      <SectionContainer variant="gray">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {ravalement.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
