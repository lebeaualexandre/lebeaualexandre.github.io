<template>
  <ul>
    <li v-for="item in elements" :key="item">
      <a :href="`\#${format_id(item)}`">{{item}}</a>
    </li>
  </ul>
</template>

<script>
import { format } from "~/assets/utils/format_id.js";

export default {
  methods: {
    format_id(id) {
      return format(id);
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    elements() {
      return this.items.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
      });
    }
  }
};
</script>


<style lang="sass" scoped>
ul
  display: flex
  justify-content: flex-end
  flex-wrap: wrap

  a
    padding: 0 1rem
</style>
