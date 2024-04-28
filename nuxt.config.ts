import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [resolve("./assets/css/tailwind.css")],

  modules: [
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],

  content: {},

  googleFonts: {
    families: {
      Roboto: true,
    },
  },

  tailwindcss: {
    cssPath: false,
  },

  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
});
