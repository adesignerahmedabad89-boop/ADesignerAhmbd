import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. The nested `promptcode/` reference
  // copy ships its own `package.json`/lockfile, which makes Next/Turbopack infer
  // the wrong root (and emit a build warning); this anchors it to the app dir.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },

  async redirects() {
    return [
      // Scientific Logo already owns a dedicated, richer page — keep the
      // catalogue-style /services/scientific-logo URL working (it's the slug
      // used consistently across the rest of the astrology service line)
      // without duplicating that page's content under the [slug] route.
      {
        source: "/services/scientific-logo",
        destination: "/scientific-logo",
        permanent: true,
      },
    ];
  },

  images: {
    // Modern formats — smaller than JPEG/PNG; the browser picks what it supports.
    formats: ["image/avif", "image/webp"],
    // Breakpoints `next/image` uses to build `srcset`. `deviceSizes` covers
    // full-width images (aligned with the Showreel adaptive-grid breakpoints +
    // retina); `imageSizes` covers smaller, fixed-width images and icons.
    // Mirrors the promptcode config so the Showreel art loads identically.
    deviceSizes: [360, 640, 768, 1024, 1280, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jkbrandingindia.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        // Showreel hero "trusted by 4000+ creatives" avatar strip.
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
