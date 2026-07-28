import {
  IconNumerology,
  IconMobileWave,
  IconSignature,
  IconWristwatch,
  IconWallClock,
  IconSacredGeometry,
  IconGemstone,
  IconCompass,
  IconMetatron,
  IconLeaf,
  type CosmicIcon,
} from "@/components/cosmic/CosmicIcons";

/**
 * Data for the "Scientific Astrology & Energy" service line — Name Numerology
 * through Plant Vastu. Kept separate from `lib/services-data.ts` (the design/
 * marketing services) because this line carries a richer content shape
 * (benefits, process, why-choose, FAQ, SEO) that those pages don't need.
 *
 * `app/services/[slug]/page.tsx` reads both this file and `services-data.ts`
 * and renders whichever one matches the requested slug.
 */

export type AstrologyServiceSlug =
  | "name-numerology"
  | "mobile-numerology"
  | "signature-analysis"
  | "wristwatch-analysis"
  | "wall-clock-analysis"
  | "scientific-logo"
  | "astro-jewellery"
  | "astro-cartography"
  | "astro-vastu"
  | "plant-vastu";

export interface ContentBlock {
  title: string;
  desc: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface FaqBlock {
  q: string;
  a: string;
}

export interface AstrologyService {
  slug: AstrologyServiceSlug;
  title: string;
  eyebrow: string;
  /** Hero gradient sub-line. */
  tagline: string;
  /** Card copy / meta description base. */
  shortDescription: string;
  icon: CosmicIcon;
  overview: string[];
  benefits: ContentBlock[];
  process: ProcessStep[];
  whyChoose: ContentBlock[];
  faq: FaqBlock[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
  };
}

export const astrologyServices: AstrologyService[] = [
  {
    slug: "name-numerology",
    title: "Name Numerology",
    eyebrow: "Numerology",
    tagline: "Every name carries a number. Every number carries a frequency.",
    shortDescription:
      "Analyze the vibrations and numerical energy of your name to unlock success, relationships, career growth, and lasting life balance.",
    icon: IconNumerology,
    overview: [
      "Your name is spoken, written and remembered thousands of times over a lifetime — each repetition reinforcing the numerical vibration behind it. Name Numerology decodes that vibration against your date of birth to reveal where your name supports you, and where it quietly works against you.",
      "Using classical Chaldean and Pythagorean numerology systems, we map every letter of your name to its ruling number, cross-reference it with your birth and life-path numbers, and recommend precise, minimal corrections — a spelling tweak, an added middle name, a signature adjustment — that realign the energy without changing who you are.",
    ],
    benefits: [
      { title: "Personal Name Correction", desc: "Identify whether your current name amplifies or drains your birth-number energy, with a corrected spelling if needed." },
      { title: "Career & Wealth Alignment", desc: "Numbers tuned to attract the right opportunities, decision-making clarity and steady financial growth." },
      { title: "Relationship Compatibility", desc: "Understand the numeric compatibility between your name and the names of your partner, family or business." },
      { title: "Child Naming Guidance", desc: "Choose a name for a newborn that is numerologically aligned with their birth chart from day one." },
    ],
    process: [
      { n: "01", title: "Birth Chart Mapping", desc: "We calculate your life-path, destiny and soul-urge numbers from your date of birth." },
      { n: "02", title: "Name Vibration Audit", desc: "Every letter of your current name is converted to its numeric value and totalled." },
      { n: "03", title: "Compatibility Check", desc: "We compare your name number against your birth numbers to flag conflicts or gaps." },
      { n: "04", title: "Correction & Report", desc: "A detailed report with your ideal name spelling and the reasoning behind it." },
    ],
    whyChoose: [
      { title: "Dual-System Accuracy", desc: "Cross-verified using both Chaldean and Pythagorean numerology for a reliable, balanced reading." },
      { title: "Minimal, Practical Corrections", desc: "We suggest the smallest possible change that restores balance — never a full identity overhaul." },
      { title: "One-on-One Consultation", desc: "A dedicated session to walk through your report and answer every question." },
    ],
    faq: [
      { q: "Will I need to legally change my name?", a: "Rarely. Most corrections are small — an added letter, a spelling variant, or how you sign — used consistently in daily life, business cards and social profiles." },
      { q: "How is my life-path number calculated?", a: "We reduce your full date of birth to a single core digit (or master number), which anchors every other calculation in your report." },
      { q: "Can numerology really affect career or luck?", a: "Numerology doesn't replace effort — it's a tool for self-awareness and alignment, used alongside strategy and hard work, not instead of it." },
      { q: "How long does a Name Numerology report take?", a: "Typically 2–4 days after we receive your birth details, followed by a consultation call to walk through the findings." },
    ],
    seo: {
      metaTitle: "Name Numerology Consultation & Correction | A Designer Ahmedabad",
      metaDescription: "Analyze the vibrations and numerical energy of your name to improve success, relationships, career growth and life balance. Book a Name Numerology consultation.",
      h1: "Name Numerology Consultation & Correction",
    },
  },
  {
    slug: "mobile-numerology",
    title: "Mobile Numerology",
    eyebrow: "Mobile Numerology",
    tagline: "The number you dial the most is the number that reaches you the most.",
    shortDescription:
      "Evaluate and optimize your mobile number according to numerology principles to attract positive opportunities, smoother communication, and prosperity.",
    icon: IconMobileWave,
    overview: [
      "Your mobile number is dialled, texted and remembered more than almost any other number in your life — a constant, repeated vibration linked directly to your communication and opportunities. Mobile Numerology examines the digit sum of your number against your birth number to see whether it channels supportive energy or creates static.",
      "Where a full number change isn't practical, we recommend a compatible replacement or, more often, a companion number or SIM pairing that restores balance without the disruption of switching your primary line.",
    ],
    benefits: [
      { title: "Communication Flow", desc: "Reduce missed calls, dropped deals and communication friction linked to a conflicting number total." },
      { title: "Business Lead Quality", desc: "A number aligned to your birth chart is associated with warmer inbound enquiries and better follow-through." },
      { title: "Financial Number Matching", desc: "Pairing your mobile number's digit sum with numbers that support wealth and stability." },
      { title: "Family Number Harmony", desc: "Check every family or team member's number against the household's core numerology." },
    ],
    process: [
      { n: "01", title: "Number Reduction", desc: "Your full mobile number is reduced to its root digit using classical numerology math." },
      { n: "02", title: "Birth Number Cross-Check", desc: "We compare that root digit with your life-path and name numbers for friction or support." },
      { n: "03", title: "Impact Reading", desc: "A plain-language breakdown of what the current number is doing for — or against — you." },
      { n: "04", title: "Recommendation", desc: "A ranked shortlist of compatible replacement or companion numbers to choose from." },
    ],
    whyChoose: [
      { title: "No Forced Number Change", desc: "We work around keeping your existing number wherever a real fix is possible." },
      { title: "Business + Personal Coverage", desc: "Readings available for personal lines, business helplines and WhatsApp business numbers." },
      { title: "Shortlisted Options", desc: "You get a ranked list of new numbers to pick from, not a single rigid instruction." },
    ],
    faq: [
      { q: "Do I have to change my number to see any benefit?", a: "No. Many corrections come from a companion number, consistent digit pairing, or minor behavioural changes rather than a full switch." },
      { q: "Can you check a number before I buy a new SIM?", a: "Yes — send us the number in advance and we'll grade its compatibility before you commit to it." },
      { q: "Does this work for landline or toll-free business numbers too?", a: "Yes, the same digit-reduction method applies to any numeric sequence, including landlines and toll-free numbers." },
      { q: "How fast will I get my report?", a: "Most mobile numerology readings are delivered within 24–48 hours." },
    ],
    seo: {
      metaTitle: "Mobile Numerology & Number Compatibility | A Designer Ahmedabad",
      metaDescription: "Optimize your mobile number with numerology to attract positive opportunities, smoother communication and prosperity. Get your mobile number analysed.",
      h1: "Mobile Numerology & Number Compatibility",
    },
  },
  {
    slug: "signature-analysis",
    title: "Signature Analysis",
    eyebrow: "Signature Analysis",
    tagline: "Your signature is the one mark you leave on everything that matters.",
    shortDescription:
      "Study the energy pattern of your signature to identify strengths, weaknesses, and opportunities for personal and professional growth.",
    icon: IconSignature,
    overview: [
      "A signature is a small, repeated ritual — the one piece of handwriting you produce with total consistency, thousands of times over a career. Graphology and energetic signature analysis read the slant, pressure, underline, loops and legibility of that mark to reveal confidence patterns, decision-making style, and where your name's energy is or isn't flowing through your own hand.",
      "We compare your current signature against your numerology and astrological profile, then guide you through a deliberate, practised evolution of it — not a random redesign — so the new version still feels authentically yours the first time you sign it.",
    ],
    benefits: [
      { title: "Confidence & Authority", desc: "Adjustments to slant and pressure that project more decisiveness in contracts, deals and public documents." },
      { title: "Energy Alignment", desc: "A signature tuned to support your name and birth-number energy rather than working against it." },
      { title: "Professional Consistency", desc: "One clean, legible, repeatable signature for banking, legal and business use." },
      { title: "Personality Insight", desc: "An honest read of the traits your current signature reveals — and how to reshape them." },
    ],
    process: [
      { n: "01", title: "Sample Collection", desc: "You provide 3–5 natural signature samples along with your birth and name details." },
      { n: "02", title: "Graphological Reading", desc: "We analyse slant, size, pressure, spacing, loops and the underline for behavioural patterns." },
      { n: "03", title: "Energetic Cross-Check", desc: "Your signature is compared against your numerology and astrological chart for alignment." },
      { n: "04", title: "Guided Practice", desc: "A refined signature plus a short practice sheet so it becomes natural within days." },
    ],
    whyChoose: [
      { title: "Authentic, Not Artificial", desc: "Refinements build on your natural hand — never a foreign style that looks forced under scrutiny." },
      { title: "Legally Practical", desc: "Recommendations stay within a form your bank and official documents will still recognise as consistent." },
      { title: "Practice Support", desc: "Follow-up guidance until your new signature is fully second nature." },
    ],
    faq: [
      { q: "Will my bank still accept my new signature?", a: "Yes — we design refinements that stay close enough to your existing signature to remain recognisably consistent, and guide you on updating specimen signatures where needed." },
      { q: "How long until the new signature feels natural?", a: "Most clients are comfortable within one to two weeks of focused daily practice." },
      { q: "Can you analyse a signature without meeting in person?", a: "Yes — clear scanned or photographed samples sent digitally are sufficient for a full reading." },
      { q: "Is this the same as full handwriting analysis?", a: "It's related but focused specifically on the signature — the one mark repeated with the most consistency and highest stakes." },
    ],
    seo: {
      metaTitle: "Signature Analysis & Energy Alignment | A Designer Ahmedabad",
      metaDescription: "Study the energy pattern of your signature to identify strengths, weaknesses and opportunities for personal and professional growth.",
      h1: "Signature Analysis & Energetic Alignment",
    },
  },
  {
    slug: "wristwatch-analysis",
    title: "Wristwatch Analysis",
    eyebrow: "Wristwatch Analysis",
    tagline: "Worn against your pulse, all day, every day — your watch is never neutral.",
    shortDescription:
      "Analyze the energetic influence of your wristwatch — its placement, colour, design, and timing alignment — to support productivity and positive vibrations.",
    icon: IconWristwatch,
    overview: [
      "A wristwatch sits directly against your pulse point for most of your waking day — closer to your body, longer, than almost any other accessory. Its dial colour, wrist, metal, and even a stopped or wrong-set time all carry a subtle, constant energetic signal, according to Vastu and elemental colour theory.",
      "We assess your current watch against your zodiac ruling planet and element, and recommend the wrist, dial colour, strap material and case metal that best support your focus, discipline and decision-making — plus simple corrections, like keeping the time exact, that cost nothing to apply.",
    ],
    benefits: [
      { title: "Focus & Discipline", desc: "A dial colour and wrist placement matched to your ruling planet to support consistency and time-awareness." },
      { title: "Reduced Energetic Drain", desc: "Flag design choices — cracked glass, stopped movement, clashing colour — that quietly work against you." },
      { title: "Element-Matched Materials", desc: "Metal and strap recommendations aligned with your dominant elemental balance." },
      { title: "Everyday, No-Cost Fixes", desc: "Several corrections are simply habits — keeping time accurate, wearing on the correct wrist." },
    ],
    process: [
      { n: "01", title: "Current Watch Audit", desc: "We review your watch's dial colour, metal, strap and which wrist you wear it on." },
      { n: "02", title: "Elemental Matching", desc: "Your birth chart's ruling planet and element are matched against the watch's attributes." },
      { n: "03", title: "Correction List", desc: "A prioritised list of adjustments — from free habits to a new dial colour or wrist swap." },
      { n: "04", title: "Upgrade Guidance", desc: "If a new watch is warranted, we outline exactly what to look for." },
    ],
    whyChoose: [
      { title: "Practical, Low-Cost First", desc: "We lead with free behavioural corrections before ever recommending a purchase." },
      { title: "Element-Specific Guidance", desc: "Recommendations are tied to your individual chart, not generic colour rules." },
      { title: "Works With What You Own", desc: "We start from your current watch collection wherever possible." },
    ],
    faq: [
      { q: "Does the wrist I wear my watch on really matter?", a: "In Vastu and energy theory, yes — left and right carry different receiving/giving associations tied to your dominant hand and chart." },
      { q: "What if my favourite watch isn't the 'right' colour?", a: "We'll suggest a compatible strap swap or a second watch for high-stakes days rather than asking you to give it up." },
      { q: "Do smartwatches follow the same principles?", a: "The same colour, metal and wrist guidance applies; screen-based dials are read the same way as an analogue face." },
      { q: "How often should I redo this analysis?", a: "Once per birth chart is usually sufficient — revisit only if you experience a major life or career shift." },
    ],
    seo: {
      metaTitle: "Wristwatch Analysis for Energy & Productivity | A Designer Ahmedabad",
      metaDescription: "Analyze your wristwatch's placement, colour, design and timing alignment to support productivity and positive vibrations. Book a consultation.",
      h1: "Wristwatch Analysis for Energy & Productivity",
    },
  },
  {
    slug: "wall-clock-analysis",
    title: "Wall Clock Analysis",
    eyebrow: "Wall Clock Analysis",
    tagline: "The clock on your wall sets the rhythm of every room it hangs in.",
    shortDescription:
      "Evaluate the placement, direction, colour, and energy impact of your wall clocks based on Vastu and energy-alignment principles.",
    icon: IconWallClock,
    overview: [
      "In Vastu Shastra, a clock is more than a timekeeper — its direction, position and condition are believed to influence the flow of time-related energy through a home or office: momentum, punctuality, and the pace at which opportunities arrive. A clock on the wrong wall, or one left stopped, is considered to quietly stall that flow.",
      "We map every clock in your home or workplace against the Vastu direction chart, checking wall, height, dial colour and mechanical condition, and hand you a room-by-room correction plan that's simple to action in an afternoon.",
    ],
    benefits: [
      { title: "Directional Correction", desc: "Identify which walls support a ticking clock and which quietly work against its energy." },
      { title: "Workplace Momentum", desc: "Office and reception clocks positioned to support decision speed and workflow." },
      { title: "Colour & Shape Guidance", desc: "Dial colour and clock shape matched to the room's function and ruling element." },
      { title: "Simple Maintenance Rules", desc: "A short checklist — battery, glass, accuracy — that keeps the correction effective long-term." },
    ],
    process: [
      { n: "01", title: "Space Walkthrough", desc: "A floor plan or set of photos showing every clock's wall and room." },
      { n: "02", title: "Directional Mapping", desc: "Each wall is checked against the Vastu compass for supportive or conflicting placement." },
      { n: "03", title: "Condition Review", desc: "Dial colour, shape, glass condition and accuracy are assessed for each clock." },
      { n: "04", title: "Room-by-Room Plan", desc: "A clear relocation and replacement plan you can complete in a single day." },
    ],
    whyChoose: [
      { title: "Works With Existing Clocks", desc: "Relocation is always the first recommendation, ahead of buying anything new." },
      { title: "Home & Office Coverage", desc: "Guidance for living rooms, offices, reception areas and factory floors alike." },
      { title: "Actionable in a Day", desc: "Every recommendation is something you can complete yourself, the same day." },
    ],
    faq: [
      { q: "Which direction is best for a wall clock?", a: "North and east walls are generally favoured in Vastu, though the ideal wall depends on the specific room and its function — we confirm this room by room." },
      { q: "Is it true a stopped clock is bad luck?", a: "In Vastu, a stalled or broken clock is associated with stagnating energy in that space — we always recommend repairing or replacing one that has stopped." },
      { q: "Do digital wall clocks follow the same rules?", a: "Yes, direction and placement principles apply regardless of analogue or digital display." },
      { q: "Can this be done remotely?", a: "Yes — a floor plan with photos of each wall and clock is enough for a full remote assessment." },
    ],
    seo: {
      metaTitle: "Wall Clock Vastu & Placement Analysis | A Designer Ahmedabad",
      metaDescription: "Evaluate the placement, direction, colour and energy impact of your wall clocks based on Vastu and energy-alignment principles.",
      h1: "Wall Clock Vastu & Placement Analysis",
    },
  },
  {
    slug: "scientific-logo",
    title: "Scientific Logo",
    eyebrow: "Scientific Logo",
    tagline: "Logos tuned to planetary frequency, not just pixels.",
    shortDescription:
      "Design or optimize your business logo using astrology, numerology, sacred geometry, and frequency alignment principles to strengthen brand energy.",
    icon: IconSacredGeometry,
    overview: [
      "Every design element carries an energetic wavelength — colour, angle, curve and negative space all read as vibration, not just aesthetics. Scientific Logo design aligns your mark's geometry, colour palette and typography with your zodiac ruler, planetary elements and Vastu direction, so your brand looks sharp and carries supportive energy at the same time.",
      "This is the flagship of our Scientific Astrology practice, with its own full diagnostic experience — including a live Zodiac Brand Alignment Calculator, tiered pricing plans and client stories — on a dedicated page.",
    ],
    benefits: [
      { title: "Solar Brand Authority", desc: "Geometry tuned to command market trust and long-term prestige." },
      { title: "Lunar Customer Magnetism", desc: "Colour frequencies that support recall, empathy and repeat engagement." },
      { title: "Vastu-Balanced Shapes", desc: "Directional and shape balance intended to support cash flow and stability." },
      { title: "Zodiac-Matched Palette", desc: "A palette and geometry set derived from your specific zodiac and element." },
    ],
    process: [
      { n: "01", title: "Discovery", desc: "Business objectives, sector and audience mapped in detail." },
      { n: "02", title: "Geometric Audit", desc: "Existing assets deconstructed for shape, weight and angle alignment." },
      { n: "03", title: "Colour & Type Mapping", desc: "Palette and typography tuned to your chart." },
      { n: "04", title: "Hand-off", desc: "Aligned logo files, fonts and execution guidelines delivered." },
    ],
    whyChoose: [
      { title: "Dedicated Diagnostic Tool", desc: "An interactive Zodiac Brand Alignment Calculator you can use yourself." },
      { title: "10+ Years of Design Craft", desc: "Backed by the same senior design team behind our full branding practice." },
      { title: "Tiered Packages", desc: "Silver through Platinum plans to match any project size." },
    ],
    faq: [
      { q: "Where can I see full pricing and the calculator?", a: "The complete Scientific Logo experience — pricing plans, the Zodiac Calculator and full FAQ — lives on its dedicated page." },
      { q: "Can an existing logo be corrected instead of redesigned?", a: "Yes, we frequently do a lighter 'correction pass' on an existing mark rather than a full rebuild." },
      { q: "Is this only for new businesses?", a: "No — we support brand-new launches as well as established businesses auditing and correcting an existing identity." },
      { q: "How is this different from standard Logo Design?", a: "Standard logo design focuses purely on visual identity; Scientific Logo adds astrology, numerology and Vastu alignment on top of that same design craft." },
    ],
    seo: {
      metaTitle: "Scientific Logo Design — Astrology-Aligned Branding | A Designer Ahmedabad",
      metaDescription: "Design or optimize your logo using astrology, numerology, sacred geometry and frequency alignment to strengthen your brand's energy.",
      h1: "Scientific Logo Design — Astrology-Aligned Brand Identity",
    },
  },
  {
    slug: "astro-jewellery",
    title: "Astro Jewellery",
    eyebrow: "Astro Jewellery",
    tagline: "Worn close to the skin, gemstones carry planetary energy all day long.",
    shortDescription:
      "Recommendations for gemstones, metals, and customized jewellery based on planetary positions, birth details, and astrological requirements.",
    icon: IconGemstone,
    overview: [
      "Gemstones have been used for centuries to strengthen a favourable planet or soften a challenging one in a birth chart — but the wrong stone, cut, metal or wearing finger can do more harm than good. Astro Jewellery consultation starts with a proper reading of your birth chart before any recommendation is made.",
      "We identify which planets in your chart need strengthening or pacifying, then recommend the exact gemstone, carat range, metal setting and wearing finger or hand — with alternatives at different budgets, and a clear caution list of stone combinations to avoid.",
    ],
    benefits: [
      { title: "Chart-Verified Recommendations", desc: "Stones suggested only after a full planetary reading — never a generic 'lucky stone' guess." },
      { title: "Correct Metal & Setting", desc: "Guidance on the metal, setting style and finger or hand that activates the stone correctly." },
      { title: "Combination Safety Check", desc: "A clear list of gemstone pairings to avoid, so remedies don't conflict with one another." },
      { title: "Budget-Tiered Options", desc: "Genuine stone alternatives across a range of budgets, always disclosed transparently." },
    ],
    process: [
      { n: "01", title: "Birth Chart Reading", desc: "Your planetary positions are calculated from accurate birth date, time and place." },
      { n: "02", title: "Planetary Strength Analysis", desc: "We identify which planets are weak, afflicted or need to be pacified." },
      { n: "03", title: "Gemstone Shortlist", desc: "Primary and alternative stone recommendations, with carat and clarity guidance." },
      { n: "04", title: "Wearing Protocol", desc: "The correct metal, finger, day and time to begin wearing the stone." },
    ],
    whyChoose: [
      { title: "No Blind Recommendations", desc: "Every suggestion is tied directly back to your own chart reading." },
      { title: "Transparent Sourcing Guidance", desc: "Advice on certification and authenticity checks before you purchase." },
      { title: "Ongoing Review", desc: "A follow-up check-in after wearing the stone to confirm it's having the intended effect." },
    ],
    faq: [
      { q: "Do I need my exact birth time for this?", a: "Yes — accurate birth time significantly improves the precision of planetary strength calculations, so we ask for it wherever available." },
      { q: "Can you recommend budget-friendly alternatives to precious stones?", a: "Yes, many planets can be supported with sub-stones or alternative gems at a fraction of the cost of a premium stone." },
      { q: "Where should I buy the recommended gemstone?", a: "We advise on certification standards to check for, and can point you to trusted, lab-certified sources." },
      { q: "How soon will I notice an effect?", a: "Gemstone remedies are gradual and cumulative — most clients are advised to give a stone at least 3–6 months before reassessing." },
    ],
    seo: {
      metaTitle: "Astro Jewellery & Gemstone Consultation | A Designer Ahmedabad",
      metaDescription: "Gemstone, metal and jewellery recommendations based on your planetary positions, birth details and astrological requirements.",
      h1: "Astro Jewellery & Gemstone Consultation",
    },
  },
  {
    slug: "astro-cartography",
    title: "Astro Cartography",
    eyebrow: "Astro Cartography",
    tagline: "Some places on the map amplify you. Others quietly drain you.",
    shortDescription:
      "Identify favourable geographical locations for business, career, education, relationships, travel, and settlement using astrological mapping techniques.",
    icon: IconCompass,
    overview: [
      "Astro-cartography plots your birth chart's planetary lines across a world map, showing where each planet's influence is strongest at a given location. A city sitting on your Jupiter line, for instance, is traditionally read as favourable for growth and opportunity, while a Saturn line might suggest a location demanding more discipline and patience.",
      "We use this mapping to guide real decisions — relocation, opening a new office, choosing a study destination, or timing a long trip — pairing the astrological read with practical, on-the-ground considerations so the recommendation is genuinely usable, not just symbolic.",
    ],
    benefits: [
      { title: "Relocation Guidance", desc: "Compare candidate cities or countries against your personal planetary lines before you commit." },
      { title: "Business Expansion Mapping", desc: "Identify locations more likely to support growth, partnerships and visibility for a new office or branch." },
      { title: "Study & Career Destinations", desc: "Weigh study-abroad or job-relocation options against your chart's supportive zones." },
      { title: "Travel Timing", desc: "Understand which locations suit major life decisions versus which are better for short visits only." },
    ],
    process: [
      { n: "01", title: "Chart Calculation", desc: "Your natal chart is calculated precisely from birth date, time and place." },
      { n: "02", title: "Planetary Line Mapping", desc: "Your chart's planetary lines are plotted across a world map." },
      { n: "03", title: "Location Shortlist Review", desc: "We assess your candidate cities or regions against those lines." },
      { n: "04", title: "Practical Report", desc: "A location-by-location breakdown with the astrological reasoning explained in plain language." },
    ],
    whyChoose: [
      { title: "Decision-Focused Reports", desc: "Built around the specific choice you're facing, not a generic world scan." },
      { title: "Multiple Location Comparison", desc: "Compare as many candidate cities as you need side by side." },
      { title: "Grounded Interpretation", desc: "Astrological findings are paired with practical context, not read in isolation." },
    ],
    faq: [
      { q: "Can this tell me the single 'best' place to live?", a: "It narrows the field considerably, but we always frame results as a shortlist for your own judgement rather than a single verdict." },
      { q: "Does this work for short trips, or only relocation?", a: "Both — we can assess a two-week trip and a permanent relocation, though the depth of guidance differs." },
      { q: "What if I don't know my exact birth time?", a: "An approximate time can still produce useful line placements; we'll flag any lines that are time-sensitive and may shift with a more precise birth time." },
      { q: "Can you assess a location for a business branch, not just personal relocation?", a: "Yes — we map company founding details or the founder's chart, depending on which is more relevant to the decision." },
    ],
    seo: {
      metaTitle: "Astro Cartography — Astrological Location Mapping | A Designer Ahmedabad",
      metaDescription: "Identify favourable locations for business, career, education, relationships and settlement using astrological mapping techniques.",
      h1: "Astro Cartography — Astrological Location Mapping",
    },
  },
  {
    slug: "astro-vastu",
    title: "Astro Vastu",
    eyebrow: "Astro Vastu",
    tagline: "Where astrology meets architecture — space and sky, aligned together.",
    shortDescription:
      "Scientific Vastu consultation combining astrology, directional energies, planetary influences, and space optimization.",
    icon: IconMetatron,
    overview: [
      "Traditional Vastu Shastra reads a building's directions and proportions; Astro Vastu goes a layer deeper, cross-referencing those directions against the birth charts of the people who actually live or work in the space. A bedroom direction that's neutral for one person can be genuinely disruptive for another, depending on their planetary chart.",
      "We combine a full directional Vastu audit with individual chart mapping for key occupants, so recommendations are personalised rather than generic — and every fix is prioritised by what's structurally possible versus what can be corrected with layout, colour or remedy alone.",
    ],
    benefits: [
      { title: "Personalised Room Assignment", desc: "Match bedrooms, home offices and workstations to the right occupant's chart, not just generic direction rules." },
      { title: "Non-Structural Corrections First", desc: "Colour, furniture placement and remedies prioritised before any structural change is suggested." },
      { title: "Business & Residential Coverage", desc: "Full audits for homes, offices, retail spaces and factory floors." },
      { title: "Planetary Zone Mapping", desc: "Identify which zones of your space are ruled by which planet, and what that means for its use." },
    ],
    process: [
      { n: "01", title: "Space & Chart Intake", desc: "Floor plan or site-visit details, plus birth details for key occupants." },
      { n: "02", title: "Directional Audit", desc: "Every room and entry point is checked against classical Vastu direction principles." },
      { n: "03", title: "Astrological Cross-Check", desc: "Occupant charts are layered over the directional findings for personalised guidance." },
      { n: "04", title: "Prioritised Correction Plan", desc: "A ranked list — from free rearrangements to structural recommendations." },
    ],
    whyChoose: [
      { title: "Personalised, Not Generic", desc: "Every recommendation is checked against the actual people using the space." },
      { title: "Site Visits or Remote Review", desc: "Available both in person and via floor plan and photo review." },
      { title: "Budget-Aware Prioritisation", desc: "Low-cost corrections are always suggested ahead of structural work." },
    ],
    faq: [
      { q: "Do you need to visit my property in person?", a: "A site visit gives the most accurate reading, but a clear floor plan with directional markings and photos allows for a thorough remote consultation." },
      { q: "What if a structural Vastu defect can't be fixed?", a: "Most defects have a non-structural remedy — colour, placement, or a symbolic correction — that meaningfully offsets the issue where rebuilding isn't practical." },
      { q: "Is this only for homes, or does it cover offices too?", a: "Both — and also retail spaces, clinics and factory or warehouse floors." },
      { q: "How is this different from standard Vastu consultation?", a: "Standard Vastu reads the building alone; Astro Vastu adds the occupants' individual birth charts for a personalised layer of guidance." },
    ],
    seo: {
      metaTitle: "Astro Vastu Consultation for Homes & Offices | A Designer Ahmedabad",
      metaDescription: "Scientific Vastu consultation combining astrology, directional energies, planetary influences and space optimization.",
      h1: "Astro Vastu Consultation for Homes & Offices",
    },
  },
  {
    slug: "plant-vastu",
    title: "Plant Vastu",
    eyebrow: "Plant Vastu",
    tagline: "The right plant, in the right corner, does more than decorate.",
    shortDescription:
      "Recommendations for suitable plants and their ideal placement to improve positivity, health, prosperity, and energy flow within homes and workplaces.",
    icon: IconLeaf,
    overview: [
      "Plants are living Vastu correctors — their placement, species and even leaf shape are read as carrying specific elemental and planetary associations. A money plant in the wrong corner, or a thorny cactus facing the wrong direction, can work against the very intention behind placing it.",
      "We assess your home or workplace room by room and recommend species, pot material, colour and exact placement suited to each zone's ruling element — building a living correction plan that improves air quality and mood alongside its energetic intent.",
    ],
    benefits: [
      { title: "Room-by-Room Plant Plan", desc: "Species and placement matched to each room's Vastu direction and function." },
      { title: "Health & Air Quality", desc: "Plant choices that support wellbeing as well as energetic balance — no purely decorative filler." },
      { title: "Prosperity Corners", desc: "Correct placement of classic prosperity plants like money plant, jade and bamboo." },
      { title: "Office & Retail Guidance", desc: "Reception, workstation and cash-counter plant placement for business spaces." },
    ],
    process: [
      { n: "01", title: "Space Review", desc: "Floor plan or walkthrough to identify each room's Vastu direction and function." },
      { n: "02", title: "Elemental Matching", desc: "Plant species matched to each zone's ruling element and the occupants' charts." },
      { n: "03", title: "Placement Plan", desc: "Exact position, pot material and colour specified for every recommended plant." },
      { n: "04", title: "Care & Maintenance Notes", desc: "Simple care guidance so the plant — and its intended effect — stays healthy long-term." },
    ],
    whyChoose: [
      { title: "Living, Practical Corrections", desc: "Recommendations that improve your space's air and mood, not just its symbolism." },
      { title: "Safe Species Guidance", desc: "Pet- and child-safe alternatives flagged wherever a traditional choice isn't suitable." },
      { title: "Home & Business Coverage", desc: "Guidance for residences, offices, retail counters and clinics alike." },
    ],
    faq: [
      { q: "Which plant is best for the money corner?", a: "Money plant, jade and bamboo are the most commonly recommended, but the ideal choice depends on that corner's specific direction and your chart — we confirm this individually." },
      { q: "Are any recommended plants toxic to pets?", a: "We always flag pet- and child-safe alternatives where a traditional recommendation carries any risk." },
      { q: "Can artificial plants work as a substitute?", a: "Living plants are preferred for their active energy, but select artificial alternatives can be used in low-light zones where nothing survives." },
      { q: "How often should the plant plan be reviewed?", a: "A light review once a year, or after any major renovation or room change, keeps the placement effective." },
    ],
    seo: {
      metaTitle: "Plant Vastu — Plant Placement for Positive Energy | A Designer Ahmedabad",
      metaDescription: "Recommendations for suitable plants and their ideal placement to improve positivity, health, prosperity and energy flow.",
      h1: "Plant Vastu — Plant Placement for Positive Energy",
    },
  },
];

/** Full-detail pages exclude Scientific Logo — it already owns a dedicated,
 *  richer page at `/scientific-logo`, and `/services/scientific-logo` simply
 *  redirects there (see `next.config.ts`). Everything else reads this list. */
export const astrologyServicesWithOwnPage = astrologyServices.filter(
  (s) => s.slug !== "scientific-logo"
);

export function getAstrologyService(slug: string): AstrologyService | undefined {
  return astrologyServices.find((s) => s.slug === slug);
}

/** The canonical URL for a service card/nav link — Scientific Logo points at
 *  its dedicated page, every other service points at `/services/{slug}`. */
export function astrologyServiceHref(slug: AstrologyServiceSlug): string {
  return slug === "scientific-logo" ? "/scientific-logo" : `/services/${slug}`;
}
