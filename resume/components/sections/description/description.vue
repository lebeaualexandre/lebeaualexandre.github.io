<template>
  <section>
    <p v-for="paragraph in $t('description')" v-html="paragraph" :key="paragraph">{{paragraph}}</p>
  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<i18n src="~/assets/data/description/i18n.yml"></i18n>


<style lang="sass">
em
  position: relative
  font-weight: 700

p
  color: $primary
</style>
