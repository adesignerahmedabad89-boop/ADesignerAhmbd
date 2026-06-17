import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Portfolio | Brandingo",
  description:
    "Explore Brandingo's portfolio of branding, graphic design, website development and digital marketing projects delivered across industries.",
  alternates: {
    canonical: "https://jkbrandingindia.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=80" />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}
