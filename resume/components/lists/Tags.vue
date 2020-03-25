<template>
  <div>
    <ol>
      <li v-for="tag in tags" :key="tag" @mouseover="hovered = tag" @mouseleave="hovered = ''">
        <i class="material-icons" :label="$t(tag)">{{icons[tag]}}</i>
      </li>
    </ol>
    <span>{{$t(hovered)}}</span>
  </div>
</template>

<script>
import icons from "~/assets/data/tags/material_icon";

export default {
  data() {
    return { icons, hovered: "" };
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
div
  display: flex
  align-items: center
  padding: 1rem 0 0 0

ol
  display: flex

li
  position: relative
  height: max-content

i
  padding: 0 1rem
  &:first-child
    padding-left: 0.5rem

span, i
  cursor: default
  padding: 0 1rem
  line-height: 2rem
  min-height: 2rem
  text-align: center
</style>
