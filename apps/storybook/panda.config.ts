import { defineConfig } from "@pandacss/dev";
import { join } from "path";

const cwd = process.cwd();

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    "./stories/**/*.{js,jsx,ts,tsx}",
    join(cwd, "./node_modules/styled-ui/src/**/*.{js,jsx,ts,tsx}"),
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  emitPackage: true,
  jsxFramework: "react",
});
