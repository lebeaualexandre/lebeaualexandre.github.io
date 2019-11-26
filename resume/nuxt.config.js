/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        base: "/"
      }
    : {};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  server: {
    port: 8080, // default: 3000
    host: "localhost" // default: localhost
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#242424" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/reset.css",
    "~/assets/css_var/Colors.sass",
    "~/assets/css/font.sass",
    "~/assets/css/inputs.sass"
  ],

  /*
   ** Nuxt.js route controller
   */
  router: {
    middleware: "i18n",
    ...routerBase
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/i18n.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          preLoaders: {
            i18n: "yaml-loader"
          },
          loaders: {
            i18n: "@kazupon/vue-i18n-loader"
          }
        }
      }
    ],
    modules: ["@nuxtjs/style-resources"],
    styleResources: {
      sass: ["~assets/css_var/Colors.sass"]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: "javascript/auto",
        loader: ["@kazupon/vue-i18n-loader", "yaml-loader"]
      });
    }
  }
};
