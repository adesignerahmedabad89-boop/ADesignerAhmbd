import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { IconOrbit } from "@/components/cosmic/CosmicIcons";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | A Designer Ahmedabad",
  description:
    "Explore A Designer Ahmedabad's logo design and branding packages with clear deliverables, smooth revisions, and premium creative support.",
  alternates: {
    canonical: "https://jkbrandingindia.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Transparent packages"
        badgeIcon={<IconOrbit className="h-4 w-4" />}
        title="Plans Crafted For"
        titleAccent="Every Growth Orbit"
        sub="Clear deliverables, unhurried revisions and premium creative support — whichever trajectory your brand is on."
      />
      <Pricing />
    </CosmicLayout>
  );
}
