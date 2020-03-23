<template>
  <ol>
    <li v-for="tag in tags" :key="tag">
      <i class="material-icons" :label="$t(tag)">{{icons[tag]}}</i>
      <span>{{$t(tag)}}</span>
    </li>
  </ol>
</template>

<script>
import icons from "~/assets/data/tags/material_icon";

export default {
  data() {
    return { icons };
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<i18n src="~/assets/data/tags/i18n.yml"></i18n>

<style lang="sass" scoped>
ol
  display: flex
  padding: 1rem 0 0 0

li
  position: relative
  height: max-content

i
  padding: 0 1rem
  cursor: default
  &:first-child
    padding-left: 0.5rem

span
  opacity: 0
  position: absolute
  top: -1.75rem
  left: 50%
  transform: translateX(-50%)
  padding: 0 1rem
  width: max-content

li:first-child > span
  left: -0.5rem
  transform: translateX(0)

i:hover + span
  opacity: 1
  transition: opacity 0.24s ease-in-out
</style>
