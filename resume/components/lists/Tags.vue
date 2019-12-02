<template>
  <ol>
    <li v-for="tag in tags" :key="tag">
      <i class="material-icons">{{icons[tag]}}</i>
      <span>{{$t(tag)}}</span>
    </li>
  </ol>
</template>

<script>
import icons from "~/assets/data/tags/material_icon";

export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<i18n src="~/assets/data/tags/i18n.yml"></i18n>
