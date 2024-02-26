export default defineAppConfig({
  nuxtra: {
    name: "Nuxtra",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    nuxtra?: {
      /** Project name */
      name?: string;
    };
  }
}
