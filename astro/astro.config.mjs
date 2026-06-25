import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aiartifacts.art",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto"
  },
  compressHTML: true
});
