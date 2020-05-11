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
  flex-direction: column
  flex: 1 1 50%
  @media(min-width: $tablet)
    padding: 0.75rem 0 0 0
    max-width: 50%
    align-items: flex-end

ol
  display: flex
  flex-wrap: wrap
  max-width: 100%
  @media(min-width: $tablet)
    align-items: flex-end
    justify-content: flex-end

li
  position: relative
  height: max-content
  flex: 1 1 25%
  max-width: fit-content

i
  padding: 0 1rem
  font-size: 1.5rem
  &:first-child
    padding-left: 0.5rem

span, i
  cursor: default
  padding: 0 1rem
  line-height: 2rem
  min-height: 2rem
  white-space: nowrap
  text-align: right
  justify-content: flex-start
  @media(min-width: $tablet)
    justify-content: flex-end
</style>
