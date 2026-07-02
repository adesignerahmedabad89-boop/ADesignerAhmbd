import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";

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
    <main>
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80" />
      <FAQ />
      <Footer />
    </main>
  );
}
