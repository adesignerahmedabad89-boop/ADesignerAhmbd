import Image from "next/image";
import type { AboutContent } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

export interface AboutProps {
  content: AboutContent;
}

/**
 * Studio introduction — a two-column split (copy left, image right) that stacks
 * on portrait.
 *
 * A Server Component: nothing here is interactive, so only the `Reveal` leaves
 * ship JS. The image keeps `next/image`'s default lazy loading and a `sizes`
 * hint matching the column it occupies, so the browser never fetches the
 * desktop crop for a phone.
 */
export const About = ({ content }: AboutProps) => (
  <Section id="about">
    <div className="grid grid-cols-2 items-center gap-[8vmin] max-lg:grid-cols-1 max-lg:gap-[7vmin]">
      <div>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          headingFaded={content.headingFaded}
          align="start"
        />

        <div className="mt-[3.5vmin] flex flex-col gap-[2.4vmin] max-sm:mt-[4.5vmin]">
          {content.body.map((paragraph, i) => (
            <Reveal key={i} delay={200 + i * 90}>
              <p className="m-0 max-w-[46vw] text-[1.9vmin] leading-relaxed text-paper/60 max-lg:max-w-none max-sm:text-[3.4vmin]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={120}>
        <figure className="relative m-0 aspect-[4/3] w-full overflow-hidden rounded-card">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 1024px) 88vw, 42vw"
            className="object-cover"
          />
          {/* Grades the photo into the black page so the crop has no hard edge —
              the same handoff the stage uses between its scenes. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/55 to-transparent"
          />
        </figure>
      </Reveal>
    </div>
  </Section>
);
