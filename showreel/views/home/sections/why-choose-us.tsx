import type { HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { SkillBar } from "./skill-bar";

export interface WhyChooseUsProps {
  content: HomeSectionsContent["why"];
}

/**
 * Reasons-to-choose grid paired with the competency meters.
 *
 * The source numbered its reasons with orange icon chips; without that accent
 * colour the ordinal itself carries the rhythm, set in the stage's display face
 * at reduced opacity — the same "faded second line" device `CtaBlock` and
 * `SectionHeading` use.
 */
export const WhyChooseUs = ({ content }: WhyChooseUsProps) => (
  <Section id="why">
    <SectionHeading
      eyebrow={content.eyebrow}
      heading={content.heading}
      headingFaded={content.headingFaded}
      sub={content.sub}
    />

    <div className="mt-[8vmin] grid grid-cols-2 gap-[7vmin] max-lg:grid-cols-1 max-sm:mt-[9vmin]">
      <ul className="m-0 grid list-none grid-cols-2 gap-[3vmin] p-0 max-sm:grid-cols-1 max-sm:gap-[4vmin]">
        {content.items.map((reason, i) => (
          <Reveal key={reason.title} tag="li" delay={i * 90}>
            <div className="flex h-full flex-col rounded-pf border border-glass-border bg-pf-card p-[3vmin] max-sm:p-[4.5vmin]">
              <span
                aria-hidden="true"
                className="text-[2.6vmin] leading-none tracking-[-0.03em] text-paper/25 max-sm:text-[4.6vmin]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 mt-[2vmin] text-[2vmin] font-medium leading-tight tracking-[-0.01em] text-paper max-sm:mt-[3vmin] max-sm:text-[3.8vmin]">
                {reason.title}
              </h3>
              <p className="m-0 mt-[1.4vmin] text-[1.6vmin] leading-relaxed text-paper/55 max-sm:mt-[2.2vmin] max-sm:text-[3.1vmin]">
                {reason.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={140}>
        <h3 className="m-0 text-[2.4vmin] font-medium tracking-[-0.01em] text-paper max-sm:text-[4.4vmin]">
          {content.skillsTitle}
        </h3>
        <div className="mt-[4vmin] flex flex-col gap-[3vmin] max-sm:mt-[5vmin] max-sm:gap-[4vmin]">
          {content.skills.map((skill, i) => (
            <SkillBar
              key={skill.label}
              label={skill.label}
              value={skill.value}
              delay={i * 110}
            />
          ))}
        </div>
      </Reveal>
    </div>
  </Section>
);
