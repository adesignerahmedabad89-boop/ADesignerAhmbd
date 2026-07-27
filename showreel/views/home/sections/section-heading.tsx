import type { SectionIntro } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";

export interface SectionHeadingProps extends Omit<SectionIntro, "sub"> {
  sub?: string;
  /** `center` for the standalone section headers, `start` for split layouts. */
  align?: "center" | "start";
  className?: string;
}

/**
 * The shared header for every merged section: eyebrow, two-line `<h2>`, sub.
 *
 * All nine sections in the source site repeated the same header markup with
 * different colours; here it exists once. The typography is the stage's own —
 * the heading is the hero/CTA scale stepped down one level (`5.4vw` against
 * their `7vw`) with the same `leading-[0.95]`/`tracking-[-0.03em]`, and the
 * second line carries the `opacity-40` treatment `CtaBlock` gives its faded
 * line, so section headers read as siblings of the stage's headlines.
 *
 * The eyebrow's dot-plus-label form is the Showreel's own `Eyebrow` motif,
 * re-expressed with the tokens this project actually ships.
 */
export const SectionHeading = ({
  eyebrow,
  heading,
  headingFaded,
  sub,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className ?? ""}`}
    >
      <Reveal tag="p" y={16} blur={10}>
        <span className="flex items-center gap-[1.2vmin] text-[1.4vmin] uppercase leading-none tracking-[0.28em] text-paper/50 max-sm:text-[2.6vmin] max-sm:tracking-[0.2em]">
          <span
            aria-hidden="true"
            className="size-[0.8vmin] shrink-0 rounded-full bg-paper/50 max-sm:size-[1.4vmin]"
          />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2
          className={`m-0 mt-[2.4vmin] flex flex-col text-[5.4vw] font-normal leading-[0.95] tracking-[-0.03em] text-paper max-sm:mt-[3.5vmin] max-sm:text-[9vw] ${
            centered ? "items-center" : "items-start"
          }`}
        >
          <span>{heading}</span>
          <span className="opacity-40">{headingFaded}</span>
        </h2>
      </Reveal>

      {sub ? (
        <Reveal delay={160}>
          <p
            className={`m-0 mt-[2.6vmin] max-w-[42vw] text-[1.9vmin] leading-relaxed text-paper/60 max-sm:mt-[4vmin] max-sm:max-w-[80vw] max-sm:text-[3.4vmin] ${
              centered ? "mx-auto" : ""
            }`}
          >
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
};
