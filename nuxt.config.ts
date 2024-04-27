import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

console.log(currentDir);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxtjs/seo"],

  content: {
    documentDriven: true,

    sources: {
      docs: {
        driver: "fs",
        prefix: "/docs",
        base: join(currentDir, ".playground", "docs"),
      },
    },
  },
});
