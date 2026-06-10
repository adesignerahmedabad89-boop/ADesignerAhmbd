/*
 * Brandingo portfolio — every piece of real design work, grouped by type.
 * Images come from the auto-generated manifest (lib/work-images.ts), which
 * lists everything under /public/Stationary Design. To refresh after adding
 * new images, run:  node scripts/gen-work-images.mjs
 */
import { workImages } from "./work-images";

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
}

// Display category (shown in filters) → folder name in the manifest.
const CATEGORY_FOLDER: Record<string, string> = {
  "Created Brands": "Logo",
  "Banner & Standee": "banner design",
  "Brochure": "Brouchers & File",
  "Packaging": "packaging",
  "Stationery": "Stationary Design",
  "Social Media": "Social Media Post",
  "Menu": "menu",
  "Flyer": "Flyer Design",
  "Invitation": "invtations",
  "Label & Tag": "tag design",
  "Bag": "Bag Design",
  "ID Card": "id card",
};

export const portfolioCategories = ["All", ...Object.keys(CATEGORY_FOLDER)];

export const portfolioItems: PortfolioItem[] = Object.entries(CATEGORY_FOLDER).flatMap(
  ([category, folder]) =>
    (workImages[folder] ?? []).map((image, i) => ({ id: `${category}-${i}`, category, image }))
);
