// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      addThemeCSS: true,
    },
  },

  css: ["primeicons/primeicons.css"],

  modules: [
    "nuxt-icon",

    // https://content.nuxtjs.org/
    "@nuxt/content",

    // https://primevue.org/
    "nuxt-primevue",

    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // https://google-fonts.nuxtjs.org/
    "@nuxtjs/google-fonts",

    // https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",

    // doc https://nuxtseo.com/
    "@nuxtjs/seo",
  ],

  devtools: { enabled: true },

  content: {
    contentHead: true,
    documentDriven: true,
    highlight: {
      // Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: "github-dark",
        default: "github-dark",
      },
    },
  },

  colorMode: {
    classSuffix: "",
  },

  googleFonts: {
    // display: "optional",
    families: {
      Roboto: [300, 400, 500, 600, 700, 800, 900],
    },
  },

  primevue: {
    options: {
      unstyled: false,
      ripple: true,
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "Prime",
      include: "*",
    },
  },

  linkChecker: {
    enabled: false,
  },
});
