<template>
  <section-component>
    <article>
      <p v-for="paragraph in $t('description')" v-html="paragraph" :key="paragraph">{{paragraph}}</p>
    </article>
  </section-component>
</template>

<script>
import Section_Component from "../Section_Component";

export default {
  components: {
    "section-component": Section_Component
  }
};
</script>

<i18n src="~/assets/data/description/i18n.yml"></i18n>


<style lang="sass" scoped>
article
  padding: 0 2rem
  position: relative
  @media(min-width: $mobile)
    padding: 0 4rem

p
  color: $primary
</style>
