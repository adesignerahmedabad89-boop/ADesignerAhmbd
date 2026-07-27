import type { HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { About } from "./about";
import { Contact } from "./contact";
import { Faq } from "./faq";
import { LogoMarquee } from "./logo-marquee";
import { Services } from "./services";
import { Stats } from "./stats";
import { Testimonials } from "./testimonials";
import { WhyChooseUs } from "./why-choose-us";

export interface HomeSectionsProps {
  content: HomeSectionsContent;
}

/**
 * The marketing sections merged in from the ADesignerAhmbd home page, composed
 * in their original running order and rendered below the Showreel stage.
 *
 * Three of that page's blocks are deliberately absent:
 *  • **Hero** — the Showreel stage is this page's hero.
 *  • **Pricing** — excluded from the merge; it still lives on `/pricing`.
 *  • **HomeCTA** — a duplicate. It was the source page's closing
 *    "ready to start?" panel, which is exactly what the stage's own `CtaBlock`
 *    already does at the end of the scroll track; keeping both would ask for the
 *    same click twice in a row.
 *
 * A Server Component — only the interactive leaves below it are `"use client"`.
 */
export const HomeSections = ({ content }: HomeSectionsProps) => (
  <>
    <LogoMarquee label={content.logos.label} />
    <Stats items={content.stats.items} />
    <About content={content.about} />
    <Services content={content.services} />
    <WhyChooseUs content={content.why} />
    <Testimonials content={content.testimonials} />
    <Faq content={content.faq} />
    <Contact content={content.contact} />
  </>
);
