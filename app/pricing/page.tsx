import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PageHero from "@/components/PageHero";

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
    <main>
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000&q=80" />
      <Pricing />
      <Footer />
    </main>
  );
}
