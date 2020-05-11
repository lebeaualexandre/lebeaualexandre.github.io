<template>
  <section-component v-if="list">
    <h2>{{header}}</h2>
    <p>{{description}}</p>
    <list-item v-for="item in list" :item="item" :key="item.sku" />
  </section-component>
</template>

<script>
import List_Item from "./List_Item.vue";
import Section_Component from "../Section_Component";

export default {
  components: {
    "section-component": Section_Component,
    "list-item": List_Item
  },
  props: {
    header: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>



<style lang="sass">
</style>
