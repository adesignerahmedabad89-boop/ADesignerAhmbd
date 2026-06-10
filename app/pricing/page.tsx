import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pricing | Brandigo",
  description:
    "Explore Brandingo's logo design and branding packages with clear deliverables, smooth revisions, and premium creative support.",
  alternates: {
    canonical: "https://jkbrandingindia.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <Pricing />
      <Footer />
    </main>
  );
}
