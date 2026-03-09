import type { Metadata } from "next";
import { Clock, Hammer, Users, Award, ShieldCheck, Heart, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { heroImages, pageImages } from "@/config/images";
import { aPropos } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `À propos — ${siteConfig.name}`,
  description: `Découvrez ${siteConfig.name}, entreprise de bâtiment à ${siteConfig.address.city} depuis ${siteConfig.yearsExperience} ans. Maçonnerie, ravalement, extension, rénovation. Assurance décennale.`,
  path: "/a-propos",
});

const chiffresIcons = [Clock, Hammer, Users, Award];

const valeursIcons = [Hammer, Heart, ShieldCheck];

export default function AProposPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={aPropos.hero.title}
        subtitle={aPropos.hero.subtitle}
        imagePlaceholder={{
          prompt: "Equipe d'artisans du batiment devant un chantier de construction, casques de chantier, tenues de travail, sourire professionnel, lumiere naturelle, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["a-propos"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />
      </div>

      {/* Notre histoire */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title={aPropos.histoire.title} centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {aPropos.histoire.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            prompt="Portrait professionnel artisan macon francais, tenue de travail propre, bras croises, sourire confiant, chantier range arriere-plan flou, photo realiste, ratio 2:3"
            src={pageImages["a-propos-fondateur"] || undefined}
            aspectRatio="2/3"
            alt={`${siteConfig.founder}, fondateur de ${siteConfig.name}`}
            className="max-w-sm mx-auto"
          />
        </div>
      </SectionContainer>

      {/* Equipe */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={aPropos.equipe.title}
          subtitle={aPropos.equipe.subtitle}
        />
        <ImagePlaceholder
          prompt="Equipe de 3-4 artisans du batiment en tenue de travail devant camionnette utilitaire blanche avec logo, casques de chantier, souriant, parking exterieur, lumiere naturelle, photo realiste, ratio 3:2"
          src={pageImages["a-propos-equipe"] || undefined}
          aspectRatio="3/2"
          alt={`L'équipe ${siteConfig.name}`}
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      {/* Chiffres cles */}
      <SectionContainer variant="warm">
        <SectionHeading title={aPropos.chiffres.title} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aPropos.chiffres.items.map((c, i) => {
            const Icon = chiffresIcons[i];
            return (
              <div key={c.label} className="text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                  {c.value}
                </div>
                <p className="text-sm text-muted-foreground">{c.label}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Valeurs */}
      <SectionContainer variant="white">
        <SectionHeading title={aPropos.valeurs.title} />
        <div className="grid md:grid-cols-3 gap-8">
          {aPropos.valeurs.items.map((v, i) => {
            const Icon = valeursIcons[i];
            return (
              <Card key={v.title}>
                <CardContent className="p-6 text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={aPropos.certifications.title}
          subtitle={aPropos.certifications.subtitle}
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {aPropos.certifications.items.map((cert) => (
            <div key={cert.label} className="flex items-center gap-3 p-4 rounded-lg bg-white">
              <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
              <div>
                <span className="font-medium text-sm">{cert.label}</span>
                <span className="text-sm text-muted-foreground ml-2">{cert.value}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
