<template>
  <name-title v-bind:class="{ 'small' : small}">lebeau</name-title>
</template>

<script>
import { NameTitle } from "./Name.styles";

export default {
  components: {
    "name-title": NameTitle
  },
  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>
