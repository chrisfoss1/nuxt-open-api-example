// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { name: "referrer", content: "no-referrer" },
      ],
    },
  },
  srcDir: resolve("./src"),
  modules: ["@pinia/nuxt"],
});
