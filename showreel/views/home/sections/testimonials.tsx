import { Star } from "lucide-react";
import type { HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

export interface TestimonialsProps {
  content: HomeSectionsContent["testimonials"];
}

/**
 * Client quotes on a horizontal rail.
 *
 * The source drove this with Swiper (autoplay, bullets, arrows) — dropped here
 * for three reasons: it ships its own CSS transitions, which this project
 * forbids; its autoplay fights the Lenis-driven page scroll; and a self-moving
 * carousel is at odds with a page whose every other motion is scroll-authored.
 * A native scroll-snap rail keeps the horizontal-pan gesture the stage's
 * Portfolio section establishes, costs no JavaScript, and gives touch users a
 * real swipe instead of a hijacked one.
 *
 * `data-lenis-prevent` hands the wheel back to the rail while the pointer is
 * over it, so Lenis does not swallow the horizontal gesture.
 */
export const Testimonials = ({ content }: TestimonialsProps) => (
  <Section id="testimonials">
    <SectionHeading
      eyebrow={content.eyebrow}
      heading={content.heading}
      headingFaded={content.headingFaded}
      sub={content.sub}
    />

    <Reveal delay={120}>
      <ul
        data-lenis-prevent
        className="scrollbar-none m-0 mt-[8vmin] flex snap-x snap-mandatory list-none gap-[3vmin] overflow-x-auto p-0 max-sm:mt-[9vmin] max-sm:gap-[4vmin]"
      >
        {content.items.map((item) => (
          <li
            key={item.name}
            className="w-[34vmin] shrink-0 snap-start max-lg:w-[46vmin] max-sm:w-[76vmin]"
          >
            {/* `figure` so the quote and its attribution are one unit and the
                `figcaption` has the parent the spec requires. */}
            <figure className="m-0 flex h-full flex-col rounded-pf border border-glass-border bg-pf-card p-[3.4vmin] max-sm:p-[5vmin]">
              <div
                className="flex gap-[0.6vmin]"
                aria-label={`${item.rating} out of 5`}
              >
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className="size-[1.7vmin] fill-paper text-paper max-sm:size-[3.2vmin]"
                  />
                ))}
              </div>

              <blockquote className="m-0 mt-[2.6vmin] flex-1 text-[1.6vmin] leading-relaxed text-paper/65 max-sm:mt-[3.5vmin] max-sm:text-[3.1vmin]">
                {item.text}
              </blockquote>

              <figcaption className="mt-[3vmin] flex items-center gap-[1.6vmin] border-t border-hairline/30 pt-[2.4vmin] max-sm:mt-[4vmin] max-sm:gap-[2.6vmin] max-sm:pt-[3.4vmin]">
                <span
                  aria-hidden="true"
                  className="flex size-[4vmin] shrink-0 items-center justify-center rounded-full bg-paper/10 text-[1.5vmin] text-paper/80 max-sm:size-[7.5vmin] max-sm:text-[2.9vmin]"
                >
                  {item.name
                    .split(" ")
                    .map((w) => w.charAt(0))
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </span>
                <span className="flex flex-col">
                  <span className="text-[1.6vmin] text-paper max-sm:text-[3.1vmin]">
                    {item.name}
                  </span>
                  <span className="text-[1.3vmin] uppercase tracking-[0.18em] text-paper/40 max-sm:text-[2.5vmin]">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);
