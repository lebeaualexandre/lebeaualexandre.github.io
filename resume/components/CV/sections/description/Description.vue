<template>
  <div>
    <p v-for="value in $t('presentation.simple')" v-bind:key="value">{{value}}</p>
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: require("./description.en.json"),
      fr: require("./description.fr.json")
    }
  }
};
</script>

<style lang="sass">
@import "~/assets/css_var/Colors"
$colors: darkTheme(true)

p
  color: map-get($colors, "primary")
</style>