import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: swap this for the real custom domain once it's connected (e.g. https://holly-lane-haunt.com)
const SITE_URL = "https://holly-lane-haunt.vercel.app";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [sitemap()],
});
