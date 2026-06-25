import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aiartifacts.art",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto"
  },
  compressHTML: true
});
