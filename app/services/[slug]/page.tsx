import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/lib/services-data";
import { astrologyServicesWithOwnPage, getAstrologyService } from "@/lib/astrology-services-data";
import { AstrologyServiceTemplate } from "@/components/cosmic/AstrologyServiceTemplate";
import ServicePageClient from "./ServicePageClient";

/**
 * Serves two independent service catalogues under one route:
 *  - the design/marketing services in `lib/services-data.ts` (`ServicePageClient`)
 *  - the Scientific Astrology services in `lib/astrology-services-data.ts`
 *    (`AstrologyServiceTemplate`)
 *
 * Scientific Logo is deliberately excluded here — `/services/scientific-logo`
 * redirects to its own dedicated page (see `next.config.ts`), so this route
 * never needs to render it.
 */
export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...astrologyServicesWithOwnPage.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const astrologyService = getAstrologyService(slug);
  if (astrologyService && astrologyService.slug !== "scientific-logo") {
    const canonical = `https://jkbrandingindia.com/services/${astrologyService.slug}`;
    return {
      title: astrologyService.seo.metaTitle,
      description: astrologyService.seo.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: astrologyService.seo.metaTitle,
        description: astrologyService.seo.metaDescription,
        url: canonical,
      },
    };
  }

  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | A Designer Ahmedabad`,
    description: service.description,
    alternates: { canonical: `https://jkbrandingindia.com/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const astrologyService = getAstrologyService(slug);
  if (astrologyService && astrologyService.slug !== "scientific-logo") {
    return <AstrologyServiceTemplate service={astrologyService} />;
  }

  const service = getService(slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
