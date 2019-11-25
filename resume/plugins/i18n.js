/** https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/i18n?from-embed **/

import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: "fr",
    locales: [
      { code: "fr", name: "Français" },
      { code: "en", name: "English" }
    ],
    messages: {
      en: require("~/locales/en.json"),
      fr: require("~/locales/fr.yml")
    }
  });

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  };
};
