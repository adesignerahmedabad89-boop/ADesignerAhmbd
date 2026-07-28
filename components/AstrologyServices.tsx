import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CosmicSection, IconOrb, SectionHeading } from "@/components/cosmic/CosmicUI";
import { astrologyServiceHref, astrologyServices } from "@/lib/astrology-services-data";

const WHATSAPP = "https://wa.me/916353117403";

/**
 * The Scientific Astrology & Energy service grid — Name Numerology through
 * Plant Vastu, plus Scientific Logo (linking to its own dedicated page).
 *
 * Deliberately icon-led rather than photo-led like `AllServices`: these are
 * conceptual, energy-based services with no real product photography, so a
 * premium cosmic glyph in a glass orb reads truer than stock imagery — and
 * sidesteps a grid of ten cards all borrowing the same handful of stock
 * photos. Every card carries both a "Learn More" and a "Book Consultation"
 * action per the service brief.
 */
export default function AstrologyServices() {
  return (
    <CosmicSection id="astrology-services" tint="soft">
      <SectionHeading
        eyebrow="Scientific Astrology"
        title="Astrology &"
        titleAccent="Energy Services"
        sub="Numerology, Vastu, gemstones and energetic design — precision astrology applied to real, everyday decisions."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {astrologyServices.map((s, i) => {
          const Icon = s.icon;
          const href = astrologyServiceHref(s.slug);
          return (
            <div
              key={s.slug}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 110}
              className="cosmic-card cosmic-shimmer group flex flex-col p-7"
            >
              <IconOrb className="mb-6">
                <Icon className="h-6 w-6" />
              </IconOrb>

              <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-[#dfb15b]">
                <Link href={href}>{s.title}</Link>
              </h3>
              <p className="mt-2 flex-1 text-[13.5px] text-slate-400">{s.shortDescription}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#dfb15b] transition-transform duration-300 hover:translate-x-0.5"
                >
                  Learn More
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#dfb15b]/30 bg-[#dfb15b]/[0.07] px-4 py-2 text-xs font-bold text-[#dfb15b] transition-colors hover:bg-[#dfb15b]/15"
                >
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                  Book Consultation
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </CosmicSection>
  );
}
