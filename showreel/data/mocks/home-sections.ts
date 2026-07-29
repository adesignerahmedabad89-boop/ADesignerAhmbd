/**
 * Content for the marketing sections that sit BELOW the Showreel stage on the
 * home page (see `showreel/views/home/sections/`).
 *
 * These sections were merged in from the "ADesignerAhmbd" build of the site.
 * Only the copy came across — every visual decision is re-expressed in the
 * Showreel design language (tokens from `showreel/showreel.css`, spring-only
 * motion). The source's Hero and Pricing blocks are intentionally absent (the
 * Showreel stage is the hero, and pricing lives on `/pricing`), and its
 * `HomeCTA` was dropped as a duplicate of the stage's own closing `CtaBlock`.
 *
 * Per the project's no-hardcoded-content rule, components read every string
 * from here via props — nothing below is inlined in JSX.
 */

export interface SectionIntro {
  /** Small label above the heading. */
  eyebrow: string;
  /** Heading, split so the tail can render at reduced opacity (hero motif). */
  heading: string;
  headingFaded: string;
  sub: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface AboutContent extends SectionIntro {
  body: string[];
  image: { src: string; alt: string };
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  img: string;
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface SkillItem {
  label: string;
  value: number;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export interface HomeSectionsContent {
  logos: { label: string };
  stats: { items: StatItem[] };
  about: AboutContent;
  services: SectionIntro & {
    items: ServiceItem[];
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  why: SectionIntro & {
    items: ReasonItem[];
    skillsTitle: string;
    skills: SkillItem[];
  };
  testimonials: SectionIntro & { items: TestimonialItem[] };
  faq: SectionIntro & { items: FaqItem[] };
  contact: SectionIntro & {
    formTitle: string;
    submit: string;
    sending: string;
    sent: string;
    options: ServiceOption[];
  };
}

export const homeSectionsContent: HomeSectionsContent = {
  logos: {
    label: "Trusted by leading brands",
  },

  stats: {
    items: [
      { value: 10, suffix: "+", label: "Years of experience" },
      { value: 5000, suffix: "+", label: "Projects completed" },
      { value: 4200, suffix: "+", label: "Happy clients" },
    ],
  },

  about: {
    eyebrow: "Who we are",
    heading: "Crafting your vision,",
    headingFaded: "building your success",
    sub: "",
    body: [
      "Established in 2016, A Designer Ahmedabad was built on a foundation of over a decade of expertise in Designing, Printing, and Brand Development. Founded by the Patel & Sharma brothers, we bring a unique blend of global vision and local expertise to help transform emerging businesses into unforgettable brands.",
      "Our objective is simple yet powerful: to make every customer feel “WoW.” By blending strategic thinking with flawless creative execution, we deliver result-driven branding solutions that truly resonate with your audience and elevate your market presence.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
      alt: "The A Designer Ahmedabad team collaborating",
    },
  },

  services: {
    eyebrow: "What we do",
    heading: "Our",
    headingFaded: "services",
    sub: "Comprehensive branding and marketing solutions tailored to elevate your business.",
    items: [
      {
        title: "Logo Design",
        href: "/services/logo-design",
        img: "/Stationary Design/Logo/00001.jpeg",
        description:
          "A professional logo is the first step in establishing your brand — a memorable first impression that captures your company's values.",
      },
      {
        title: "Stationery Design",
        href: "/services/stationery-design",
        img: "/Stationary Design/Stationary Design/001.jpeg",
        description:
          "Letterheads, business cards, envelopes and more — cohesive stationery that strengthens your corporate identity.",
      },
      {
        title: "Banner & Standee Design",
        href: "/services/banner-standee-design",
        img: "/Stationary Design/banner design/Banner1.jpeg",
        description:
          "Portable, high-impact stands — fixed, X-style, expandable or retractable — that work at any size for any placement.",
      },
      {
        title: "Packaging & Label Design",
        href: "/services/packaging-label-design",
        img: "/Stationary Design/packaging/10.jpeg",
        description:
          "Standout packaging and labels — your first physical touchpoint — that convey your brand's identity and quality.",
      },
      {
        title: "Menu Design",
        href: "/services/menu-design",
        img: "/Stationary Design/menu/006.jpeg",
        description:
          "Menus that express your eatery's personality, help customers grasp your concept and drive profitability.",
      },
      {
        title: "Brochure Design",
        href: "/services/brochure-design",
        img: "/Stationary Design/Brouchers & File/001.jpg",
        description:
          "Introduce your company and showcase your products, services and key features in a beautifully designed brochure.",
      },
      {
        title: "Scientific Logo",
        href: "/scientific-logo",
        img: "/mystical_moon_eye.png",
        description:
          "Logos aligned with astrology, numerology, sacred geometry and frequency — brand identity tuned to planetary energy.",
      },
      {
        title: "Name Numerology",
        href: "/services/name-numerology",
        img: "/celestial_planet.png",
        description:
          "Analyze the vibrations and numerical energy of your name to unlock success, relationships and career growth.",
      },
      {
        title: "Astro Vastu",
        href: "/services/astro-vastu",
        img: "/hand_holding_universe.png",
        description:
          "Scientific Vastu consultation combining astrology, directional energies, planetary influences and space optimization.",
      },
    ],
    primary: { label: "View all services", href: "/services" },
    secondary: { label: "Get a free consultation", href: "/contact" },
  },

  why: {
    eyebrow: "Why choose us",
    heading: "Commitment, quality,",
    headingFaded: "& results",
    sub: "We don't just build brands — we build legacies. Here's why leading businesses choose A Designer Ahmedabad.",
    items: [
      {
        title: "Seasoned experts in graphic design",
        description:
          "Our team comprises highly experienced professionals who bring decades of collective expertise in visual communications.",
      },
      {
        title: "Result-driven approach",
        description:
          "Every campaign, design, and strategy is crafted with measurable results in mind — your growth is our success metric.",
      },
      {
        title: "Global vision, local expertise",
        description:
          "We think globally and act locally, combining world-class practices with deep understanding of regional markets.",
      },
      {
        title: "End-to-end brand solutions",
        description:
          "From conception to execution, we handle every aspect of your brand journey under one roof.",
      },
    ],
    skillsTitle: "Our core competencies",
    skills: [
      { label: "Strategic thinking", value: 92 },
      { label: "Analytical skills", value: 88 },
      { label: "SEO knowledge", value: 85 },
      { label: "Social media management", value: 90 },
    ],
  },

  testimonials: {
    eyebrow: "Client reviews",
    heading: "What our",
    headingFaded: "clients say",
    sub: "Hear from businesses we've helped transform through powerful branding.",
    items: [
      {
        name: "Firdous Ansari",
        role: "Client",
        rating: 5,
        text: "Was a bit hesitant to pay & get a logo designed online but then this team helped me till I was completely satisfied — very enthusiastic, hardworking and excellent with their work! Thanks once again for delivering it within the time given. Great work!",
      },
      {
        name: "Victor Everystus",
        role: "Client",
        rating: 5,
        text: "I feel so fortunate to have found a team that I thoroughly enjoy working with, and I wanted to let you know that you're a big part of my name logo. Your enthusiasm and support make it a pleasure. You're doing a great job. Thank you!",
      },
      {
        name: "Iti Fatehpuria",
        role: "Client",
        rating: 5,
        text: "Found this page in a random Instagram search without much expectation. But it was a superb experience — amazing service at a very reasonable price. The designer was very patient, understood my requirements and designed the logo perfectly. I strongly recommend.",
      },
      {
        name: "Emine Narxoz",
        role: "Client",
        rating: 5,
        text: "It was a great pleasure to work with this team who are very friendly, efficient and fast in delivering your requirement. Thank you for making the logo and a wonderful video for our cricket team. Hopefully we will have more collaborations in the future!",
      },
      {
        name: "Cheenti Enterprise",
        role: "Client",
        rating: 5,
        text: "Response was too fast. While the logo changed frequently, they prepared a wonderful logo within the day. Thank you for your quick response.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked",
    headingFaded: "questions",
    sub: "Everything you need to know before starting your brand's journey with us.",
    items: [
      {
        q: "When does my project start?",
        a: "Work on your project starts soon after we get your logo request along with the advance payment.",
      },
      {
        q: "How many concepts do you offer?",
        a: "We offer you 3 or 6 initial design concepts depending on the package that you choose.",
      },
      {
        q: "What file formats are supplied by you?",
        a: "For your convenience, we provide the designs in the following file formats: PNG, JPG, PDF, AI or CDR.",
      },
      {
        q: "Do you provide a vector format for the logo?",
        a: "Yes, we do provide EPS / .AI / .CDR files which are all vector files.",
      },
      {
        q: "How do you deliver logo design files to your client?",
        a: "We communicate via mail. We will send you the files via mail, or send you a link to download them if the file size is too big. We also use Dropbox or wetransfer.com in such cases to send heavy files.",
      },
      {
        q: "Do you provide a money back guarantee?",
        a: "No. Our services are not available with a money-back guarantee. However, we always ensure the needs and expectations of our clients are fulfilled. We tirelessly work on your design until you are satisfied with the results.",
      },
      {
        q: "What are the other design services that you offer?",
        a: "We have vast experience in designing different types of stationery which include brochures, business cards, flyers, banners, posters, signage, billboards and more. Our designers first understand the goals and objectives of your business, then produce designs that perfectly meet your requirements.",
      },
      {
        q: "Do you provide printing services?",
        a: "No. We provide print-ready files which can be printed by any local printer.",
      },
      {
        q: "Can I speak directly with the designers?",
        a: "Absolutely. We completely understand that you want to convey your opinions and the vision behind the logo. We follow a transparent process, which makes it easy for you to connect directly with our logo designers and get what you want.",
      },
      {
        q: "Do you provide support once the logo design process is complete?",
        a: "Absolutely. We value your opinions and provide you with service even after the logo design process is complete.",
      },
      {
        q: "I have a question I cannot find here. How do I get an answer?",
        a: "You can ask your question any time using the form below, or the “Your requirement” field on the Contact page. We will get back to you with our answer.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Let's build something",
    headingFaded: "great together",
    sub: "Ready to elevate your brand? Contact us today for a free consultation.",
    formTitle: "Send us a message",
    submit: "Send message",
    sending: "Sending…",
    sent: "Thanks — we'll be in touch shortly.",
    options: [
      // Design & Branding Services
      { value: "graphic-designing", label: "Graphic Designing" },
      { value: "logo-design", label: "Logo Design" },
      { value: "stationery-design", label: "Stationery Design" },
      { value: "banner-standee-design", label: "Banner & Standee Design" },
      { value: "packaging-label-design", label: "Packaging & Label Design" },
      { value: "menu-design", label: "Menu Design" },
      { value: "invitation-card-design", label: "Invitation Card Design" },
      { value: "tag-design", label: "Tag & Label Design" },
      { value: "brochure-design", label: "Brochure Design" },
      { value: "bag-design", label: "Bag Design" },
      { value: "website-development", label: "Website Development" },
      { value: "search-engine-optimization", label: "Search Engine Optimization" },
      { value: "digital-marketing", label: "Digital Marketing" },
      
      // Scientific Astrology & Energy Services
      { value: "name-numerology", label: "Name Numerology" },
      { value: "mobile-numerology", label: "Mobile Numerology" },
      { value: "signature-analysis", label: "Signature Analysis" },
      { value: "wristwatch-analysis", label: "Wristwatch Analysis" },
      { value: "wall-clock-analysis", label: "Wall Clock Analysis" },
      { value: "scientific-logo", label: "Scientific Logo" },
      { value: "astro-jewellery", label: "Astro Jewellery" },
      { value: "astro-cartography", label: "Astro Cartography" },
      { value: "astro-vastu", label: "Astro Vastu" },
      { value: "plant-vastu", label: "Plant Vastu" },
      
      { value: "other", label: "Other" },
    ],
  },
};
