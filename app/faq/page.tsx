import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { IconMoon } from "@/components/cosmic/CosmicIcons";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Brandingo",
  description:
    "Answers to the most common questions about Brandingo's logo design, branding, printing and design services.",
  alternates: {
    canonical: "https://jkbrandingindia.com/faq",
  },
};

export default function FAQPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Before we begin"
        badgeIcon={<IconMoon className="h-4 w-4" />}
        title="Answers Written"
        titleAccent="In The Stars"
        sub="Timelines, formats, revisions and everything else worth knowing before your project enters its first orbit."
      />
      <FAQ />
    </CosmicLayout>
  );
}
