<template>
  <section-component :header="$t('header')">
    <ul>
      <li v-for="lang in $t('list')" v-bind:key="lang.name">
        <h4>{{ lang.name }}</h4>
        <rate v-bind:lvl="levels[lang.sku] || 0" />
      </li>
    </ul>
  </section-component>
</template>

<script>
import levels from "~/assets/data/idioms/levels";
import rate from "./components/Rate";
import Section_Component from "../Section_Component";

export default {
  components: {
    "section-component": Section_Component,
    rate
  },
  data() {
    return { levels };
  }
};
</script>

<i18n src="~/assets/data/idioms/i18n.yml"></i18n>

<style lang="sass" scoped>


ul
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap
  padding: 0 1.5rem
  > li
    display: flex
    padding: 0 1rem
    min-width: 10rem
    list-style: none
    justify-content: space-between;
    > h4
      padding-right: 12px

div
  @media (min-width: $tablet)
    max-width: 50vw
</style>
