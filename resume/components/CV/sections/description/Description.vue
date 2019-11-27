<template>
  <div>
    <p v-for="value in $t('simple')" v-bind:key="value">{{ value }}</p>
  </div>
</template>

<script>
export default {};
</script>

<i18n scr="~/assets/data/description/i18n.yml"></i18n>
<i18n src="~/assets/data/idioms/i18n.yml"></i18n>


<style lang="sass">
@import "~/assets/css_var/Colors"


p
  color: $primary
</style>
