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
  &::after
    content: ""
    position: absolute
    left: 0
    bottom: 20%
    width: 100%
    height: 30%
    background-color: $primary
    opacity: 50%
    border-radius: 0.25rem
    z-index: -1
    transition: height 0.24s
  &:hover
    &::after
      height: 60%

p
  color: $primary
</style>
