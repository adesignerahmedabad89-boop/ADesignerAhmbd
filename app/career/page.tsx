import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { CosmicSection, IconOrb } from "@/components/cosmic/CosmicUI";
import { IconConstellation, cosmicIconFor } from "@/components/cosmic/CosmicIcons";

export const metadata: Metadata = {
  title: "Careers | A Designer Ahmedabad",
  description:
    "Join A Designer Ahmedabad and build your career in design, marketing, and web development with a team of creative professionals.",
  alternates: {
    canonical: "https://jkbrandingindia.com/career",
  },
};

const disciplines = [
  { title: "Design", body: "Identity, packaging, print and everything that carries a mark into the world." },
  { title: "Digital Marketing", body: "Search, social and content — the orbit that keeps a brand visible." },
  { title: "Web Development", body: "Fast, accessible builds that turn a brand system into a working product." },
];

export default function CareerPage() {
  return (
    <CosmicLayout>
      <CosmicHero
        badge="Join our team"
        badgeIcon={<IconConstellation className="h-4 w-4" />}
        title="Chart Your Course"
        titleAccent="Among The Stars"
        sub="We're always looking for passionate, creative and driven people. If you live and breathe design, marketing or development, we'd love to hear from you."
      />

      <CosmicSection>
        <div className="grid gap-6 md:grid-cols-3">
          {disciplines.map((d, i) => {
            const Glyph = cosmicIconFor(i + 2);
            return (
              <div
                key={d.title}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="cosmic-card cosmic-shimmer flex flex-col items-center p-9 text-center"
              >
                <IconOrb>
                  <Glyph className="h-7 w-7" />
                </IconOrb>
                <h2 className="mt-6 font-display text-xl font-extrabold text-white">
                  {d.title}
                </h2>
                <p className="mt-3 text-[15px] text-slate-400">{d.body}</p>
              </div>
            );
          })}
        </div>

        <div
          data-aos="zoom-in"
          className="cosmic-panel mx-auto mt-14 max-w-3xl p-10 text-center md:p-12"
        >
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            Currently No Open Positions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            However, we&apos;re always open to meeting talented people. Send us your resume
            and portfolio and we&apos;ll keep you on our radar.
          </p>
          {/* mailto link — opens mail client directly */}
          <a
            href="mailto:sales@adesignerahmedabad.com?subject=Portfolio%20%26%20Resume"
            className="cosmic-btn cosmic-btn-primary mt-8 px-9 py-3.5 text-sm"
          >
            Email Your Resume <ArrowRight size={16} />
          </a>
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
