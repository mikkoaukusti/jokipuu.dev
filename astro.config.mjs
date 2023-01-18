import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://jokipuu.dev",
  integrations: [
    tailwind(),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    prefetch({ selector: "a[href^='/projects']" }),
  ],
});
