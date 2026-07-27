import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { SectionDivider } from "@/components/cosmic/CosmicUI";
import { IconConstellation } from "@/components/cosmic/CosmicIcons";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Brandingo",
  description:
    "Learn more about Brandingo, a leading branding, printing, and digital marketing agency with over 10 years of experience.",
  alternates: {
    canonical: "https://jkbrandingindia.com/about",
  },
};

export default function AboutPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Est. 2016 · Ahmedabad"
        badgeIcon={<IconConstellation className="h-4 w-4" />}
        title="Our Journey Across"
        titleAccent="Creative Constellations"
        sub="A decade of designing, printing and brand development — charting emerging businesses onto trajectories they could not have plotted alone."
      />
      <About />
      <SectionDivider variant="wave" />
      <Testimonials />
      <ClientLogos />
    </CosmicLayout>
  );
}
