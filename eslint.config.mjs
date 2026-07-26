import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Untouched reference copy of the promptcode project (source of the
    // Showreel home page). The live port lives in `showreel/`.
    "promptcode/**",
  ]),
  {
    // The Showreel is a 1:1 port and is deliberately NOT re-written to satisfy
    // this project's lint profile — so it carries promptcode's own rule set
    // (`promptcode/eslint.config.mjs`), scoped to its directory. Applying these
    // globally would silently loosen the rules for the other 12 routes, so the
    // relaxations stop at the `showreel/` boundary.
    files: ["showreel/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-empty-function": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    // react-three-fiber drives the GPU by mutating uniforms / scene objects
    // every frame inside `useFrame` — the canonical R3F pattern. The
    // immutability rule (which forbids mutating hook-derived values) does not
    // apply here. Retargeted from promptcode's `src/components/3d/**`.
    files: ["showreel/components/3d/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/immutability": "off",
    },
  },
]);

export default eslintConfig;
