import type { Metadata } from "next";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicSection, CosmicButton } from "@/components/cosmic/CosmicUI";
import { IconEclipse } from "@/components/cosmic/CosmicIcons";

export const metadata: Metadata = {
  title: "Page Not Found | A Designer Ahmedabad",
  description: "The page you were looking for has drifted out of orbit.",
};

const destinations = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * 404 — the app-wide not-found boundary.
 *
 * The site had no `not-found.tsx`, so every bad URL (and the `/projects` route,
 * which deliberately calls `notFound()`) fell through to Next's unstyled
 * default: black Helvetica on white, with no navigation. It now lands in the
 * same deep-space theme as the rest of the site, with a way back.
 */
export default function NotFound() {
  return (
    <CosmicLayout>
      <CosmicSection rule={false} rhythm="py-24 md:py-32 lg:py-36">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="cosmic-animate-float mb-8 text-[#dfb15b]"
          >
            <IconEclipse className="h-20 w-20" />
          </span>

          <p
            data-aos="fade-down"
            className="font-display text-7xl font-black leading-none tracking-tight md:text-8xl"
          >
            <span className="cosmic-gradient-text">404</span>
          </p>

          <h1
            data-aos="fade-up"
            className="mt-6 font-display text-3xl font-black text-white md:text-5xl"
          >
            Lost In The Void
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-base text-slate-300 md:text-lg"
          >
            This page has drifted out of orbit — or was never charted. Let&apos;s guide you
            back to a known constellation.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <CosmicButton href="/" size="lg">
              Return Home
            </CosmicButton>
            <CosmicButton href="/contact" variant="ghost" size="lg">
              Contact Us
            </CosmicButton>
          </div>

          <nav
            data-aos="fade-up"
            data-aos-delay="300"
            aria-label="Popular pages"
            className="mt-12 w-full"
          >
            <p className="cosmic-eyebrow mb-4">Or explore</p>
            <ul className="flex list-none flex-wrap justify-center gap-2.5 p-0">
              {destinations.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-[13px] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfb15b]/60 hover:text-[#dfb15b]"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
