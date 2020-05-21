const TITLE = "Jira記法のテキストをMarkdownに変換するツール - Jira2MD";
const DESCRIPTION =
  "Jira記法のテキストをMarkdownに変換するツール。Jira format text to Markdown.";
const DEFAULT_URL = "https://jira2md.web.app/";

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + "Jira2MD",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: DESCRIPTION
      },
      { hid: "og:site_name", property: "og:site_name", content: TITLE },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: DEFAULT_URL
      },
      { hid: "og:title", property: "og:title", content: TITLE },
      {
        hid: "og:description",
        property: "og:description",
        content: DESCRIPTION
      },
      // {
      //   hid: "og:image",
      //   property: "og:image",
      //   content: DEFAULT_URL + "ogp.png"
      // },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:creator",
        property: "twitter:creator",
        content: "@kuronekopunk"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
