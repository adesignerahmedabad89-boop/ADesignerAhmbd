"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicSection, SectionHeading, SectionDivider, CosmicButton } from "@/components/cosmic/CosmicUI";
import type { Project } from "@/lib/projects-data";

/**
 * Project case study in the Scientific Astrology theme.
 *
 * Justified body text was dropped — on a narrow column it opens rivers of
 * whitespace, which works against the readability the theme calls for.
 *
 * The "Back to Projects" button now points at `/portfolio`. `/projects` is
 * currently a deliberate `notFound()` stub (the index was disabled), so the old
 * link sent readers from a live case study straight into a 404.
 */
export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <CosmicLayout>
      {/* ── Hero ── */}
      <section className="cosmic-rule relative flex min-h-[420px] items-end overflow-hidden pb-14 pt-24">
        <Image
          src={project.image}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          className="object-cover object-[center_30%] opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/25 via-transparent to-[#dfb15b]/15"
        />

        <div className="site-wrap relative z-10">
          <span data-aos="fade-down" className="cosmic-chip mb-5 uppercase tracking-wider">
            {project.category}
          </span>
          <h1
            data-aos="fade-up"
            className="font-display text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {project.title}
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 text-[13px] text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-[#dfb15b]">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link href="/portfolio" className="transition-colors hover:text-[#dfb15b]">
              Portfolio
            </Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="text-slate-300">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* ── Metadata bar ── */}
      <section className="cosmic-rule w-full bg-slate-950/30 px-5 py-8 sm:px-6">
        <div className="site-wrap">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["Client", project.client],
              ["Category", project.category],
              ["Year Completed", project.year],
              ["Service Focus", project.tags.join(" • ")],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="cosmic-eyebrow mb-1.5">{label}</dt>
                <dd className="m-0 text-[15px] font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Case study ── */}
      <CosmicSection rule={false}>
        <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr]">
          <div data-aos="fade-up">
            <div className="mb-12">
              <span className="cosmic-eyebrow mb-4">The Challenge</span>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                What the Client Needed
              </h2>
              <p className="mt-4 text-[15.5px] text-slate-300">{project.challenge}</p>
            </div>

            <div>
              <span className="cosmic-eyebrow mb-4">Our Solution</span>
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                How We Crafted Success
              </h2>
              <p className="mt-4 text-[15.5px] text-slate-300">{project.solution}</p>
            </div>
          </div>

          <aside data-aos="fade-left">
            <div className="cosmic-panel p-8">
              <h2 className="cosmic-eyebrow mb-5 border-b border-[#dfb15b]/20 pb-4">
                Scope of Work
              </h2>
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#dfb15b]"
                    />
                    <span className="text-[14.5px] font-semibold leading-snug text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </CosmicSection>

      <SectionDivider variant="constellation" />

      {/* ── Showcase gallery ── */}
      <CosmicSection tint="soft">
        <SectionHeading eyebrow="Showcase" title="Visual" titleAccent="Deliverables" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((img, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 110}
              className="group relative h-64 overflow-hidden rounded-xl border border-[#dfb15b]/15 bg-black/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#dfb15b]/50 hover:shadow-[0_0_30px_rgba(223,177,91,0.2)]"
            >
              <Image
                src={img}
                alt={`${project.title} gallery image ${idx + 1}`}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CosmicSection>

      {/* ── CTA ── */}
      <CosmicSection rule={false} className="text-center">
        <h2
          data-aos="fade-up"
          className="font-display text-3xl font-black text-white md:text-4xl"
        >
          Inspired by this <span className="cosmic-gradient-text">Case Study</span>?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-5 max-w-xl text-base text-slate-400"
        >
          Let us design a unified strategy and striking branding system that positions your
          company for market dominance.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <CosmicButton href="/contact" size="lg">
            Get a Free Consultation <ArrowRight size={16} />
          </CosmicButton>
          <CosmicButton href="/portfolio" variant="ghost" size="lg">
            Back to Portfolio
          </CosmicButton>
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
