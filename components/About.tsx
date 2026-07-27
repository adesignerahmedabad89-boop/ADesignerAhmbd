import Image from "next/image";
import { CosmicSection, SectionHeading, IconOrb } from "@/components/cosmic/CosmicUI";
import { IconSun, IconMoon, IconSacredGeometry } from "@/components/cosmic/CosmicIcons";

const values = [
  {
    Icon: IconSun,
    title: "Our Vision",
    body: "To be a global leader in the branding industry, recognized for our creativity, strategic thinking, and commitment to excellence.",
  },
  {
    Icon: IconMoon,
    title: "Our Mission",
    body: "To deliver result-driven branding solutions that resonate with audiences, elevate market presence, and make every customer feel “WoW.”",
  },
  {
    Icon: IconSacredGeometry,
    title: "Our Values",
    body: "Craft over shortcuts, clarity over noise, and partnership over transaction — the constants every project is measured against.",
  },
];

/**
 * Studio introduction, in the Scientific Astrology theme.
 *
 * Now a **Server Component**. The previous version was `"use client"` only to
 * drive a `useInView` fade, and carried two full copies of the same markup —
 * one for desktop, one hidden behind `lg:hidden` for mobile. Both are replaced
 * by a single responsive grid plus AOS, which removes roughly half the JSX and
 * all of the client JS.
 */
export default function About({ showValues = true }: { showValues?: boolean }) {
  return (
    <CosmicSection id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-aos="fade-right">
          <SectionHeading
            eyebrow="Who we are"
            title="Crafting Your Vision,"
            titleAccent="Building Your Success"
            align="left"
          />
          <p className="mt-6 text-base text-slate-300">
            Established in 2016, A Designer Ahmedabad was built on a foundation of over a
            decade of expertise in Designing, Printing, and Brand Development. Founded by
            the Patel &amp; Sharma brothers, we bring a unique blend of global vision and
            local expertise to help transform emerging businesses into unforgettable brands.
          </p>
          <p className="mt-4 text-[15px] text-slate-400">
            Our objective is simple yet powerful: to make every customer feel
            &quot;WoW.&quot; By blending strategic thinking with flawless creative
            execution, we deliver result-driven branding solutions that truly resonate with
            your audience and elevate your market presence.
          </p>
        </div>

        <figure
          data-aos="fade-left"
          className="relative m-0 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#dfb15b]/25 shadow-[0_0_50px_rgba(0,0,0,0.7)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
            alt="The A Designer Ahmedabad team collaborating"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
          {/* Grades the photo into the deep-space page so the crop has no hard edge. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-transparent mix-blend-screen"
          />
        </figure>
      </div>

      {showValues && (
        <div className="mt-20 grid gap-7 md:grid-cols-3">
          {values.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="cosmic-card cosmic-shimmer flex flex-col items-center p-9 text-center"
            >
              <IconOrb>
                <Icon className="h-7 w-7" />
              </IconOrb>
              <h3 className="mt-6 font-display text-xl font-extrabold text-white">
                {title}
              </h3>
              <p className="mt-3 text-[15px] text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      )}
    </CosmicSection>
  );
}
