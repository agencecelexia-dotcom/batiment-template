import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = generatePageMetadata({
  title: `Nos réalisations bâtiment à ${siteConfig.address.city}`,
  description: `Découvrez nos réalisations : maçonnerie, ravalement, extension, rénovation, aménagement extérieur. Photos avant/après de nos chantiers à ${siteConfig.address.city}.`,
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsClient />;
}
