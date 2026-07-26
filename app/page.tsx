/**
 * Home route — the promptcode Showreel, ported 1:1 (see `showreel/views/home`).
 *
 * The previous marketing stack (Hero / ClientLogos / Stats / About / Services /
 * WhyChooseUs / HomeCTA / Pricing / Testimonials / FAQ / Contact / Footer /
 * EnquiryModal) has been replaced here, per the brief that the home page should
 * look and behave exactly like the promptcode home page. Every one of those
 * components is untouched and still used by the other routes — restoring the
 * old composition is a copy of this file from git (`6243bcf:app/page.tsx`).
 */
import { HomeView } from "@/showreel/views/home";

export default function Home() {
  return <HomeView />;
}
