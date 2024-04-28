import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],

  content: {
    documentDriven: true,
  },

  colorMode: {
    preference: "dark",
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: [
      join(currentDir, "./assets/css/tailwind.css"),
      { injectPosition: "first" },
    ],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
});
