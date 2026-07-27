import type { SVGProps } from "react";

/**
 * Cosmic icon set — moon, sun, planets, stars, zodiac, sacred geometry, energy
 * waves and constellations, replacing the flat lucide glyphs on inner pages.
 *
 * All are single-path-family strokes on a 24×24 grid with `currentColor`, so
 * they inherit size and colour from the parent and can be recoloured with a
 * text utility. They are plain SVG (no runtime dependency) and, being server
 * components, add nothing to the client bundle.
 *
 * The zodiac glyphs are the ones drawn for `app/scientific-logo/page.tsx`,
 * extracted so both that page and the rest of the site draw the same marks.
 */

export type CosmicIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Luminaries ──────────────────────────────────────────────────────────── */

export const IconSun: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
  </svg>
);

export const IconMoon: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    <circle cx="15.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPlanet: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="11" r="6" />
    <ellipse cx="12" cy="11" rx="11" ry="3.6" transform="rotate(-22 12 11)" />
  </svg>
);

export const IconOrbit: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(-30 12 12)" />
    <circle cx="20.2" cy="8.2" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconStar: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2.5l2.6 6.3 6.9.5-5.2 4.4 1.6 6.6L12 16.8 6.1 20.3l1.6-6.6L2.5 9.3l6.9-.5z" />
  </svg>
);

export const IconSparkle: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2.6c.8 4.6 2.8 6.6 7.4 7.4-4.6.8-6.6 2.8-7.4 7.4-.8-4.6-2.8-6.6-7.4-7.4 4.6-.8 6.6-2.8 7.4-7.4Z" />
    <path d="M18.6 15.4c.4 2 1.2 2.8 3.2 3.2-2 .4-2.8 1.2-3.2 3.2-.4-2-1.2-2.8-3.2-3.2 2-.4 2.8-1.2 3.2-3.2Z" />
  </svg>
);

export const IconComet: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="16.5" cy="7.5" r="3.5" />
    <path d="M13.6 9.6L3 20.5M8.5 12.5l-4 2M11.5 15.5l-2 4" />
  </svg>
);

/* ── Sacred geometry ─────────────────────────────────────────────────────── */

export const IconSacredGeometry: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z" />
    <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
  </svg>
);

export const IconMetatron: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3.2" />
    <circle cx="12" cy="4.4" r="1.5" />
    <circle cx="12" cy="19.6" r="1.5" />
    <circle cx="5.4" cy="8.2" r="1.5" />
    <circle cx="18.6" cy="8.2" r="1.5" />
    <circle cx="5.4" cy="15.8" r="1.5" />
    <circle cx="18.6" cy="15.8" r="1.5" />
    <path d="M12 5.9v2.9M12 15.2v2.9M6.7 9v1.5M17.3 9v1.5M6.7 13.5V15M17.3 13.5V15" />
  </svg>
);

export const IconConstellation: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3.5 16.5l4-7 5 3.5 4-8.5 4 6" />
    <circle cx="3.5" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="7.5" cy="9.5" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="4.5" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="20.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconEnergyWave: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M2 12c2.5-5 5-5 7.5 0s5 5 7.5 0 3.5-3.5 5-1.5" />
    <path d="M2 17c2.5-3.5 5-3.5 7.5 0s5 3.5 7.5 0" opacity="0.55" />
  </svg>
);

export const IconCompass: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M15.6 8.4l-2.1 5.2-5.1 2.1 2.1-5.2z" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const IconEclipse: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 3.5a8.5 8.5 0 0 0 0 17z" fill="currentColor" stroke="none" opacity="0.85" />
  </svg>
);

export const IconTelescope: CosmicIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 14l12.5-6.5 2.2 4.3L5.2 18.3z" />
    <path d="M12 16.5V21M9 21h6M18.6 5.4l2.6 5" />
  </svg>
);

/* ── Zodiac ──────────────────────────────────────────────────────────────── */

export const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

export type ZodiacSign = (typeof ZODIAC_SIGNS)[number];

const ZODIAC_PATHS: Record<ZodiacSign, React.JSX.Element> = {
  Aries: <path d="M12 21v-10c0-2.2-1.8-4-4-4S4 8.8 4 11M12 11c0-2.2 1.8-4 4-4s4 1.8 4 4" />,
  Taurus: <><circle cx="12" cy="14" r="5" /><path d="M4 6c0 3 3 5 8 5s8-2 8-5" /></>,
  Gemini: <path d="M8 4h8M8 20h8M9 4v16M15 4v16" />,
  Cancer: <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="16" r="3" /><path d="M8 5h8a4 4 0 0 1 4 4M16 19H8a4 4 0 0 1-4-4" /></>,
  Leo: <><circle cx="7.5" cy="14.5" r="2.5" /><path d="M10 14.5c2.5-3.5 5.5-6.5 8-5.5s2.5 3.5.5 6-6.5 7-6.5 7" /></>,
  Virgo: <><path d="M4 8v10M8 8v10M12 8v6c0 2 1 3 3 3s3-1.5 3-4V8" /><path d="M18 12c1-1 2-1 2.5 0s0 2.5-1.5 4.5l-3 3.5" /></>,
  Libra: <path d="M4 14h5a3 3 0 1 1 6 0h5M4 19h16" />,
  Scorpio: <><path d="M4 8v10M8 8v10M12 8v8c0 1.5.5 2.5 2 2.5s2.5-1 2.5-3v-4" /><path d="M16.5 11.5l3-3 2.5 2.5M19.5 8.5v3h-3" /></>,
  Sagittarius: <path d="M5 19L19 5M13 5h6v6M9 15l4-4" />,
  Capricorn: <path d="M4 12c0-3 3-5 5-2v7c0 2 2 3.5 4 2s2.5-2 2.5-4V11c0-2 1.5-3 3-1.5s1 3.5-1.5 5.5l-3 2" />,
  Aquarius: <path d="M4 9l3.5-3.5L12 10l4.5-4.5L20 9M4 15l3.5-3.5L12 16l4.5-4.5L20 15" />,
  Pisces: <path d="M7 4c-3 4-3 12 0 16M17 4c3 4 3 12 0 16M5 12h14" />,
};

export interface ZodiacGlyphProps extends SVGProps<SVGSVGElement> {
  sign: ZodiacSign;
}

/** A zodiac glyph by name — the same marks the Scientific Logo page uses. */
export const ZodiacGlyph = ({ sign, ...props }: ZodiacGlyphProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    {ZODIAC_PATHS[sign]}
  </svg>
);

/**
 * Deterministic icon picker — gives a list of cards a varied but stable set of
 * cosmic marks without each caller having to choose one by hand.
 */
export const COSMIC_ICON_CYCLE: CosmicIcon[] = [
  IconSun,
  IconMoon,
  IconPlanet,
  IconSacredGeometry,
  IconConstellation,
  IconOrbit,
  IconEnergyWave,
  IconMetatron,
  IconStar,
  IconEclipse,
  IconCompass,
  IconComet,
];

export const cosmicIconFor = (index: number): CosmicIcon =>
  COSMIC_ICON_CYCLE[index % COSMIC_ICON_CYCLE.length];
