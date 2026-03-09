import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";
import { blog, shared } from "@/config/content";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: `Blog bâtiment ${siteConfig.address.city} | Conseils et astuces`,
    description: `Conseils construction, rénovation, matériaux, aides financières. Le blog de ${siteConfig.name}, entreprise de bâtiment à ${siteConfig.address.city}.`,
    path: "/blog",
  }),
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={blog.hero.title}
        subtitle={blog.hero.subtitle}
        imagePlaceholder={{
          prompt: "Plans de construction deployes sur table, equerre, crayon, casque de chantier, ambiance bureau d'etudes batiment, lumiere naturelle, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["blog"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-lg mx-auto text-center py-12">
          <BookOpen className="w-16 h-16 text-primary/20 mx-auto mb-6" />
          <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
            {blog.empty.title}
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {blog.empty.text}
          </p>
          <Link
            href="/"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {shared.cta.retourAccueil}
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
