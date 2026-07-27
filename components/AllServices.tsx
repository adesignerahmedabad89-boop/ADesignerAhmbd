import Image from "next/image";
import Link from "next/link";
import { CosmicSection, SectionHeading } from "@/components/cosmic/CosmicUI";
import { cosmicIconFor } from "@/components/cosmic/CosmicIcons";

const services = [
  { img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=640&q=70", title: "Website Development", href: "/services/website-development", desc: "Fast, responsive and SEO-ready websites — from business sites and landing pages to full e-commerce stores — built to turn visitors into customers." },
  { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=640&q=70", title: "Search Engine Optimization", href: "/services/search-engine-optimization", desc: "Data-driven SEO that lifts your rankings, drives qualified organic traffic and keeps your brand on the first page where customers are searching." },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=70", title: "Digital Marketing", href: "/services/digital-marketing", desc: "Full-funnel digital marketing across social, search, content and email — building awareness, engagement and measurable, accountable growth." },
  { img: "/Stationary Design/Logo/001.jpeg", title: "Logo Design", href: "/services/logo-design", desc: "A professional, well-designed logo is the crucial first step in establishing your brand — it creates the first impression of your company and expresses its values all in one." },
  { img: "/Stationary Design/Stationary Design/007.jpeg", title: "Stationery Design", href: "/services/stationery-design", desc: "Letterheads, envelopes, folders, business cards, invoices and more — well-executed stationery boosts your corporate identity and sets the tone from the very first touch." },
  { img: "/Stationary Design/banner design/Banner3.jpeg", title: "Banner & Standee Design", href: "/services/banner-standee-design", desc: "One of the most popular ways to market today. Portable stands — fixed, X-style, expandable or retractable — work in any size for any placement and visibility." },
  { img: "/Stationary Design/packaging/16.jpeg", title: "Packaging & Label Design", href: "/services/packaging-label-design", desc: "The exterior wrap of your product and your first physical interaction with the public — packaging and labels that convey your brand's identity, quality and reputation." },
  { img: "/Stationary Design/menu/007.jpeg", title: "Menu Design", href: "/services/menu-design", desc: "Menus that express your eatery's personality, help customers understand your concept and promote profitability — key to any restaurant's marketing plan." },
  { img: "/Stationary Design/invtations/00b00e3b-0acd-4b3b-9af0-8c57be93ebbd.jpg", title: "Invitation Card Design", href: "/services/invitation-card-design", desc: "Beautifully crafted invitation cards for weddings, events and celebrations — designed to set the tone and make a memorable first impression." },
  { img: "/Stationary Design/tag design/a05665c2-b65d-4329-8476-5212f02a5f1b.jpg", title: "Tag Design", href: "/services/tag-design", desc: "Custom tags that carry your brand — from price and care tags to gift and product tags — designed for clarity, character and a premium feel." },
  { img: "/Stationary Design/Brouchers & File/002.jpeg", title: "Brochure Design", href: "/services/brochure-design", desc: "Brochures extend your customers' knowledge of your business — introducing your company and giving a snapshot of your products, services, features and contact information." },
  { img: "/Stationary Design/Bag Design/8b2908ab-45cc-4945-aa89-3eca9f541d5e.jpg", title: "Bag Design", href: "/services/bag-design", desc: "Custom-designed bags that carry your brand wherever your customers go — a walking billboard that keeps your identity visible long after the sale." },
];

/**
 * The full service grid, in the Scientific Astrology theme.
 *
 * Now a **Server Component**: the old version was `"use client"` purely to run
 * `useInView` for a fade-up, which AOS (already initialised site-wide) does
 * declaratively. That drops the whole grid — and its twelve-entry data table —
 * out of the client bundle.
 *
 * Each card carries a cosmic glyph from the shared cycle, so the twelve tiles
 * read as a constellation of disciplines rather than twelve identical boxes.
 */
export default function AllServices() {
  return (
    <CosmicSection>
      <SectionHeading
        eyebrow="What we do"
        title="Our"
        titleAccent="Services"
        sub="Comprehensive branding, web and marketing solutions tailored to bring your brand to life — pick what your business needs."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Glyph = cosmicIconFor(i);
          return (
            <Link
              key={s.title}
              href={s.href}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 110}
              className="cosmic-card cosmic-shimmer group flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Grades the photo into the card so there is no hard seam. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#dfb15b]/30 bg-black/70 text-[#dfb15b] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                >
                  <Glyph className="h-5 w-5" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-[#dfb15b]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] text-slate-400">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-[#dfb15b]">
                  Explore
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </CosmicSection>
  );
}
