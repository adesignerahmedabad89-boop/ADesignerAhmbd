import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { SectionDivider } from "@/components/cosmic/CosmicUI";
import { IconSacredGeometry } from "@/components/cosmic/CosmicIcons";
import AllServices from "@/components/AllServices";
import AstrologyServices from "@/components/AstrologyServices";

export const metadata: Metadata = {
  title: "Our Services | A Designer Ahmedabad",
  description:
    "Explore our comprehensive branding, printing, website development, and digital marketing services tailored to elevate your business.",
  alternates: {
    canonical: "https://jkbrandingindia.com/services",
  },
};

export default function ServicesPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Full-spectrum brand craft"
        badgeIcon={<IconSacredGeometry className="h-4 w-4" />}
        title="Solutions Aligned With"
        titleAccent="Universal Energy"
        sub="From the first mark to the final print run — every discipline calibrated to move your brand into its right orbit."
      />
      <AllServices />
      <SectionDivider variant="constellation" />
      <AstrologyServices />
    </CosmicLayout>
  );
}
