import Link from "next/link";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { CosmicLayout } from "./CosmicLayout";
import { CosmicHero } from "./CosmicHero";
import { CosmicButton, CosmicSection, IconOrb, SectionHeading } from "./CosmicUI";
import { IconSparkle } from "./CosmicIcons";
import { ServiceFaqAccordion } from "./ServiceFaqAccordion";
import { astrologyServiceHref, type AstrologyService } from "@/lib/astrology-services-data";

const WHATSAPP = "https://wa.me/916353117403";
const SITE_URL = "https://jkbrandingindia.com";

/** Splits "Wall Clock Analysis" into `{ lead: "Wall", rest: "Clock Analysis" }`
 *  so the hero can render the first word plain and the rest in the gradient,
 *  matching every other inner-page hero's two-line treatment. */
function splitTitle(title: string) {
  const [lead, ...tail] = title.split(" ");
  return { lead, rest: tail.join(" ") };
}

function Hero({ service }: { service: AstrologyService }) {
  const { lead, rest } = splitTitle(service.title);
  const Icon = service.icon;
  return (
    <CosmicHero
      badge={service.eyebrow}
      badgeIcon={<Icon className="h-4 w-4" />}
      title={lead}
      titleAccent={rest}
      sub={service.tagline}
      scrollCue={false}
    >
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center justify-center gap-1.5 text-[13px] text-slate-500"
      >
        <Link href="/" className="transition-colors hover:text-[#dfb15b]">Home</Link>
        <ChevronRight size={12} aria-hidden="true" />
        <Link href="/services" className="transition-colors hover:text-[#dfb15b]">Services</Link>
        <ChevronRight size={12} aria-hidden="true" />
        <span className="text-slate-300">{service.title}</span>
      </nav>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CosmicButton href={WHATSAPP} external size="lg">
          Book Consultation <ArrowRight className="ml-1 h-4 w-4" />
        </CosmicButton>
        <CosmicButton href="#overview" variant="ghost" size="lg">
          Explore the Service
        </CosmicButton>
      </div>
    </CosmicHero>
  );
}

function Overview({ service }: { service: AstrologyService }) {
  const Icon = service.icon;
  return (
    <CosmicSection id="overview">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-aos="fade-right">
          <span className="cosmic-eyebrow mb-4">Overview</span>
          <h2 className="font-display text-2xl font-extrabold leading-snug text-white md:text-4xl">
            {service.seo.h1}
          </h2>
          {service.overview.map((p, i) => (
            <p key={i} className="mt-4 text-slate-300">{p}</p>
          ))}
        </div>

        <div data-aos="fade-left" className="cosmic-panel p-8 md:p-10">
          <div className="mb-6 flex items-center gap-4">
            <IconOrb>
              <Icon className="h-6 w-6" />
            </IconOrb>
            <div>
              <div className="font-display text-lg font-bold text-white">{service.title}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#dfb15b]">
                {service.eyebrow}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{service.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {service.benefits.map((b) => (
              <span
                key={b.title}
                className="rounded-full border border-[#dfb15b]/30 bg-[#dfb15b]/[0.07] px-3.5 py-1.5 text-xs font-semibold text-[#dfb15b]"
              >
                {b.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CosmicSection>
  );
}

function Benefits({ service }: { service: AstrologyService }) {
  const Icon = service.icon;
  return (
    <CosmicSection tint="soft">
      <SectionHeading
        eyebrow="Benefits"
        title="Key"
        titleAccent="Benefits"
        sub={`What ${service.title} does for you.`}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {service.benefits.map((b, i) => (
          <div
            key={b.title}
            data-aos="fade-up"
            data-aos-delay={(i % 4) * 90}
            className="cosmic-card cosmic-shimmer p-7"
          >
            <IconOrb className="mb-5">
              <Icon className="h-5 w-5" />
            </IconOrb>
            <h3 className="font-display text-base font-bold text-white">{b.title}</h3>
            <p className="mt-2 text-[13.5px] text-slate-400">{b.desc}</p>
          </div>
        ))}
      </div>
    </CosmicSection>
  );
}

function Process({ service }: { service: AstrologyService }) {
  return (
    <CosmicSection id="process">
      <SectionHeading
        eyebrow="How It Works"
        title="Our"
        titleAccent="Process"
        sub="A clear, guided path from first consultation to final report."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {service.process.map((s, i) => (
          <div
            key={s.n}
            data-aos="fade-up"
            data-aos-delay={i * 110}
            className="cosmic-card relative p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -top-px left-8 h-0.5 w-12 bg-gradient-to-r from-[#dfb15b] to-transparent"
            />
            <div className="font-display text-5xl font-black leading-none text-[#dfb15b]/30">
              {s.n}
            </div>
            <h3 className="mt-3 font-display text-base font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-[13.5px] text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </CosmicSection>
  );
}

function WhyChoose({ service }: { service: AstrologyService }) {
  return (
    <CosmicSection tint="deep">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Choose This"
        titleAccent="Service"
        sub={`What sets our ${service.title} practice apart.`}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {service.whyChoose.map((w, i) => (
          <div
            key={w.title}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="cosmic-card cosmic-shimmer p-8"
          >
            <IconSparkle className="mb-4 h-7 w-7 text-[#dfb15b]" />
            <h3 className="font-display text-base font-bold text-white">{w.title}</h3>
            <p className="mt-2 text-[13.5px] text-slate-400">{w.desc}</p>
          </div>
        ))}
      </div>
    </CosmicSection>
  );
}

function ClosingCta({ service }: { service: AstrologyService }) {
  return (
    <CosmicSection rule={false}>
      <div
        data-aos="zoom-in"
        className="cosmic-panel relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full opacity-50 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(223,177,91,0.18) 0%, rgba(124,58,237,0.12) 45%, transparent 72%)",
          }}
        />
        <span className="cosmic-eyebrow relative mb-4">Get Started</span>
        <h2 className="relative font-display text-2xl font-extrabold text-white md:text-4xl">
          Ready to Align Your <span className="cosmic-gradient-text">{service.title}</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
          Book a one-on-one consultation and receive a personalised report from our
          astro-scientific team.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <CosmicButton href={WHATSAPP} external size="lg">
            <MessageCircle className="mr-1 h-5 w-5" /> Book on WhatsApp
          </CosmicButton>
          <CosmicButton href="/contact" variant="ghost" size="lg">
            Talk to an Expert <ArrowRight className="ml-1 h-4 w-4" />
          </CosmicButton>
        </div>
      </div>
    </CosmicSection>
  );
}

/**
 * The reusable detail-page template for every Scientific Astrology service
 * except Scientific Logo (which keeps its own bespoke, richer page at
 * `/scientific-logo` — see `astrologyServiceHref`).
 *
 * One template, ten pages: every service reads the same section order —
 * hero, overview, benefits, process, why-choose, FAQ, closing CTA — from its
 * own `AstrologyService` record in `lib/astrology-services-data.ts`, so the
 * whole service line stays visually and structurally consistent.
 */
export function AstrologyServiceTemplate({ service }: { service: AstrologyService }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.seo.h1,
    description: service.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "A Designer Ahmedabad",
      url: SITE_URL,
      telephone: "+91-6353117403",
    },
    areaServed: "IN",
    url: `${SITE_URL}${astrologyServiceHref(service.slug)}`,
  };

  return (
    <CosmicLayout>
      <Hero service={service} />
      <Overview service={service} />
      <Benefits service={service} />
      <Process service={service} />
      <WhyChoose service={service} />
      <ServiceFaqAccordion title={service.title} faq={service.faq} />
      <ClosingCta service={service} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </CosmicLayout>
  );
}
