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
      <PageHero />
      <FAQ />
      <Footer />
    </main>
  );
}
