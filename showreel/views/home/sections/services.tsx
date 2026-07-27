import type { HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { PillButton } from "./pill-button";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

export interface ServicesProps {
  content: HomeSectionsContent["services"];
}

/** Column widths the grid resolves to, so each card requests the right crop. */
const CARD_SIZES = "(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 30vw";

/**
 * Six-service highlight linking into `/services/*` — the full list stays on the
 * services route, so nothing here duplicates it.
 *
 * The stage already runs a services *marquee*, but that is a moving strip of
 * taglines with no destinations; this grid is the substantive, linkable version,
 * so the two are complements rather than duplicates.
 */
export const Services = ({ content }: ServicesProps) => (
  <Section id="services">
    <SectionHeading
      eyebrow={content.eyebrow}
      heading={content.heading}
      headingFaded={content.headingFaded}
      sub={content.sub}
    />

    <div className="mt-[8vmin] grid grid-cols-3 gap-[3vmin] max-lg:grid-cols-2 max-sm:mt-[9vmin] max-sm:grid-cols-1 max-sm:gap-[4vmin]">
      {content.items.map((item, i) => (
        // Stagger caps at the row, so the third row does not wait on the first.
        <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
          <ServiceCard item={item} sizes={CARD_SIZES} />
        </Reveal>
      ))}
    </div>

    <Reveal delay={120}>
      <div className="mt-[7vmin] flex flex-wrap items-center justify-center gap-[2vmin] max-sm:mt-[8vmin] max-sm:gap-[3vmin]">
        <PillButton href={content.primary.href} label={content.primary.label} />
        <PillButton
          href={content.secondary.href}
          label={content.secondary.label}
          variant="ghost"
        />
      </div>
    </Reveal>
  </Section>
);
