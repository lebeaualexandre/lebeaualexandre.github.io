<template>
  <article>
    <h3>{{ $t("header") }}</h3>
    <ol>
      <li v-for="lang in $t('list')" v-bind:key="lang.name">
        <h4>{{ lang.name }}</h4>
        <rate v-bind:lvl="levels[lang.sku] || 0" />
      </li>
    </ol>
  </article>
</template>

<script>
import levels from "~/assets/data/idioms/levels.json";
import rate from "./components/Rate";

export default {
  components: {
    rate
  },
  data() {
    return { levels };
  }
};
</script>

<i18n src="~/assets/data/idioms/i18n.yml"></i18n>

<style lang="sass" scoped>


ol
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap
  padding: 0 1.5rem
  > li
    display: flex
    padding: 0 1rem
    min-width: 10rem
    list-style: none
    > h4
      padding-right: 12px

div
  @media (min-width: $tablet)
    max-width: 50vw
</style>
