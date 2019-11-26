<template>
  <div id="btn-container">
    <button @click="moreLess">{{ $t(`${seeMore ? "less" : "more"}`) }}</button>
  </div>
</template>

<script>
export default {
  props: {
    moreLess: { type: Function },
    seeMore: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<i18n src="./i18n.yml"></i18n>

<style lang="sass" scoped>
@import "~/assets/css_var/Colors"
$colors: darkTheme(true)

div#btn-container
  padding: 12px
  position: sticky
  bottom: -1px
  background-color: map-get($colors, "bg")
  color: map-get($colors, "primary")
  box-shadow: 0px -6px 12px 4px map-get($colors, "bg")
  margin-top: 12px
</style>
