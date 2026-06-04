import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our Projects | Brandingo India Pvt. Ltd.",
  description: "Discover our successful portfolio of branding, web design, and digital marketing projects across various industries.",
  alternates: {
    canonical: "https://jkbrandingindia.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
