// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    isEnabled: true,
    origin: "http://localhost:3000",
    basePath: "/api/auth",
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: false,
  },
  build: {
    analyze: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image-edge", "@sidebase/nuxt-auth"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
