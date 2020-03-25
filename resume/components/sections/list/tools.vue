<template>
  <section-component :header="$t('header')">
    <article>
      <list-item
        v-for="item in $t('list')"
        :key="item.sku"
        :item="construct(item)"
        :class="`pastille ${item.description.length < 150 &&'half-tablet'}`"
      ></list-item>
    </article>
  </section-component>
</template>

<script>
import List_Item from "~/components/sections/list/List_Item.vue";
import { construct } from "~/assets/utils/fetch_common_data.js";
import tool_data from "~/assets/data/tools/ide/ide.json";
import Section_Component from "../Section_Component";

export default {
  components: {
    "list-item": List_Item,
    "section-component": Section_Component
  },
  methods: {
    construct(item) {
      return construct(item, tool_data);
    }
  },
  data() {
    return { tool_data };
  }
};
</script>

<i18n src="~/assets/data/tools/ide/i18n.yml"></i18n>

<style lang="sass" scoped>
article
  display: flex
  flex-wrap: wrap
</style>
