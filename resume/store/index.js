/** https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/i18n?from-embed **/

export const state = () => ({
  locales: [ "en", "fr" ],
  locale: "fr",
  themes: [ "light", "dark" ],
  theme: "light"
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_THEME(state, theme) {
    if (state.locales.includes(theme)) {
      state.theme = theme;
    }
  }
};
