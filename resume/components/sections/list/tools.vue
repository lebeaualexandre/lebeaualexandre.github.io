<template>
  <section-component :header="$t('header')">
    <scroller :items="$t('list')" />
    <article class="item_scroll">
      <list-item
        v-for="item in $t('list')"
        :key="item.sku"
        :item="construct(item)"
        :class="`${item.description.length < 150 &&'half-tablet'}`"
      ></list-item>
    </article>
  </section-component>
</template>

<script>
import List_Item from "~/components/sections/list/List_Item.vue";
import { construct } from "~/assets/utils/fetch_common_data.js";
import tool_data from "~/assets/data/tools/ide/ide.json";
import Scroller from "~/components/sections/list/scroller.vue";
import Section_Component from "../Section_Component";

export default {
  components: {
    "list-item": List_Item,
    "section-component": Section_Component,
    Scroller
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

<style lang="sass">
$change_width : $desktop

.item_scroll
  display: flex
  overflow-x: auto
  scroll-padding: 0 4rem
  scroll-snap-type: x mandatory
  scroll-behavior: smooth
  -webkit-overflow-scrolling: touch
  @media (max-width: $change_width)
    scroll-padding: 0 2rem
  &::-webkit-scrollbar-track
    background-color: transparent
  &::-webkit-scrollbar
    background-color: transparent
    border: none
  &::-webkit-scrollbar-thumb
    background-color: transparent
    border-radius: 0.5rem

  &> .item
    min-width: calc(50vw - 4rem)
    scroll-snap-align: end
    @media (max-width: $change_width)
      min-width: calc(100vw - 4rem)
</style>
