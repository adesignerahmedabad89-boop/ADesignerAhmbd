import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { IconTelescope } from "@/components/cosmic/CosmicIcons";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Our Portfolio | A Designer Ahmedabad",
  description:
    "Explore A Designer Ahmedabad's portfolio of branding, graphic design, website development and digital marketing projects delivered across industries.",
  alternates: {
    canonical: "https://jkbrandingindia.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Selected work"
        badgeIcon={<IconTelescope className="h-4 w-4" />}
        title="Projects Designed With"
        titleAccent="Cosmic Precision"
        sub="Thousands of marks, packages and identities — each one measured, aligned and set into motion for the brand it belongs to."
      />
      <PortfolioGallery />
    </CosmicLayout>
  );
}
