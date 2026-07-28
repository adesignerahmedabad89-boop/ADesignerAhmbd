/**
 * Content for the Showreel home page hero ("Align Your / Cosmic Energy").
 * Structure mirrors the original vanilla showreel; copy is ADesignerAhmedabad's.
 * Fed to the view via props so no string is hardcoded in a component.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface CatalistContent {
  url: string;
  /** Headline / subhead split into plain + emphasised (bold) runs. */
  lead: string;
  leadStrong: string;
  /** Dark card: pill label + title. Light card: search query text. */
  pillLabel?: string;
  pillTitle?: string;
  searchText?: string;
}

export interface PortfolioItem {
  year: string;
  client: string;
  title: string;
  discipline: string;
  video: string;
}

export interface ShowreelContent {
  brand: string;
  logo: string;
  nav: NavLink[];
  /** Black CTA pinned to the right of the header bar. */
  headerCta: { label: string; href: string };
  marquee: string[];
  hero: { 
    lines: string[]; 
    templatesTitle: string;
    bottomBlock?: {
      leftText: string;
      rightText: string;
      avatars: string[];
    };
  };
  catalistDark: CatalistContent;
  catalistLight: CatalistContent;
  /** CTA pinned under the 4-card carousel (the second block). */
  carouselCta: {
    button: string;
    href: string;
  };
  sphere: {
    headingTop: string;
    headingBottom: string[];
    /** Supporting paragraphs shown in the open sphere scene. */
    body: string[];
    /** Carousel-face chrome (slot-4 card preview). */
    cardLabel: string;
    cardUrl: string;
    cardHeading: string;
  };
  portfolio: {
    items: PortfolioItem[];
  };
  cta: {
    heading: string;
    /** Second heading line, rendered semi-transparent (like the hero subtitle). */
    headingFaded: string;
    sub: string;
    button: string;
    href: string;
  };
}

const A = "/assets/showreel";

export const homeContent: ShowreelContent = {
  brand: "Superconscious",
  logo: `${A}/star.svg`,
  nav: [
    { label: "Wearable", href: "#wearable" },
    { label: "Neural", href: "#neural" },
    { label: "Programs", href: "#programs" },
    { label: "Updates", href: "#updates" },
    { label: "Search", href: "#search" },
  ],
  headerCta: { label: "Get Started", href: "#get-started" },
  marquee: [
    "Numerology that guides",
    "Branding that resonates",
    "Precision without compromise",
    "Astrology for modern brands",
  ],
  hero: {
    lines: ["Align Your", "Cosmic Energy"],
    templatesTitle: "Browse our\nservices",
    bottomBlock: {
      leftText: "ADesignerAhmedabad blends scientific astrology with premium business branding — aligning your name, logo, and signature with the cosmic energy that shapes real success.",
      rightText: "From Scientific Logo design and Name Numerology to Signature Analysis and Astro Vastu, every consultation aligns your identity and space with cosmic precision.",
      avatars: [
        "https://i.pravatar.cc/100?img=1",
        "https://i.pravatar.cc/100?img=2",
        "https://i.pravatar.cc/100?img=3",
        "https://i.pravatar.cc/100?img=4",
        "https://i.pravatar.cc/100?img=5",
      ]
    }
  },
  catalistDark: {
    url: "adesignerahmedabad.com",
    pillLabel: "Scientific Branding",
    pillTitle: "Design Cosmic Logo",
    lead: "Align your brand logo with ",
    leadStrong: "planetary energies",
  },
  catalistLight: {
    url: "adesignerahmedabad.com",
    searchText: "Analyze name and workspace energy...",
    lead: "Harmonize your name and space for ",
    leadStrong: "infinite growth.",
  },
  carouselCta: {
    button: "Explore the collection",
    href: "#templates",
  },
  sphere: {
    headingTop: "Beyond",
    headingBottom: ["all", "limits"],
    body: [
      "ADesignerAhmedabad is a scientific astrology practice that turns cosmic insight into everyday clarity — aligning your name, brand, and space with the energy that shapes your journey, long before you take the next step.",
      "One philosophy, every dimension: logo, numerology, signature, and space. No guesswork, no limits — just guidance that keeps pace with the way you grow.",
    ],
    cardLabel: "Scientific Astrology",
    cardUrl: "adesignerahmedabad.com",
    cardHeading: "Cosmic guidance, beyond limits",
  },
  portfolio: {
    items: [
      {
        year: "2023",
        client: "aarav mehta",
        title: "Aarambh",
        discipline: "Scientific Logo · Brand Identity",
        video: `${A}/portfolio-1.mp4`,
      },
      {
        year: "2024",
        client: "nakshatra",
        title: "Nakshatra",
        discipline: "Name Numerology · Rebranding",
        video: `${A}/portfolio-2.mp4`,
      },
      {
        year: "2024",
        client: "chaitanya",
        title: "Chaitanya",
        discipline: "Astro Vastu · Signature Analysis",
        video: `${A}/portfolio-3.mp4`,
      },
    ],
  },
  cta: {
    heading: "Begin Your",
    headingFaded: "Cosmic Journey",
    sub: "Personalised astrology consultations and scientific branding — start aligning your name, brand, and space today.",
    button: "Book Consultation",
    href: "/contact",
  },
};
