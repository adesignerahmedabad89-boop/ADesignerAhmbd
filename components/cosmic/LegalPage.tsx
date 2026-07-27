import type { ReactNode } from "react";
import { CosmicLayout } from "./CosmicLayout";
import { CosmicHero } from "./CosmicHero";
import { CosmicSection } from "./CosmicUI";
import { IconCompass } from "./CosmicIcons";

export interface LegalPageProps {
  title: string;
  titleAccent?: string;
  badge?: string;
  updated: string;
  intro?: string;
  children: ReactNode;
}

/**
 * Shared shell for the legal routes (Privacy, Terms).
 *
 * They are the same page with different prose, so the chrome — hero, glass
 * panel, `.cosmic-prose` typography, contact block — lives here once. Body copy
 * is passed as children and styled entirely by `.cosmic-prose`, so those pages
 * contain nothing but their text.
 */
export const LegalPage = ({
  title,
  titleAccent,
  badge = "Legal & compliance",
  updated,
  intro,
  children,
}: LegalPageProps) => (
  <CosmicLayout>
    <CosmicHero
      badge={badge}
      badgeIcon={<IconCompass className="h-4 w-4" />}
      title={title}
      titleAccent={titleAccent}
      sub={intro}
      scrollCue={false}
    />

    <CosmicSection rule={false}>
      <div data-aos="fade-up" className="mx-auto max-w-3xl">
        <p className="mb-8 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="cosmic-panel cosmic-prose p-8 md:p-12">{children}</div>

        <div className="cosmic-panel mt-8 p-8">
          <h3 className="font-display text-xl font-extrabold text-white">
            Contact our compliance officer
          </h3>
          <p className="mt-3 text-sm text-slate-400">
            If you have any questions about this policy, the practices of this site, or your
            dealings with our brand, please reach out to us at:
          </p>
          <address className="mt-5 flex flex-col gap-1 text-sm not-italic text-slate-300">
            <strong className="text-white">A Designer Ahmedabad</strong>
            <span>607, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Shyamal,</span>
            <span>Ahmedabad, Gujarat 380015, India.</span>
            <span>
              Email:{" "}
              <a
                href="mailto:sales@adesignerahmedabad.com"
                className="font-semibold text-[#dfb15b] hover:text-[#fcd34d]"
              >
                sales@adesignerahmedabad.com
              </a>
            </span>
            <span>
              Phone:{" "}
              <a
                href="tel:+916353117403"
                className="font-semibold text-[#dfb15b] hover:text-[#fcd34d]"
              >
                +91 63531 17403
              </a>
            </span>
          </address>
        </div>
      </div>
    </CosmicSection>
  </CosmicLayout>
);
