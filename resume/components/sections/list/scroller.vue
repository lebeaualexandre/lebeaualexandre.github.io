<template>
  <div :class="{opened: this.isOpen}">
    <button @click="toggle()">
      <help :text="$t('try_me')" :position="'left'" class="nowrap" />
      <i />
    </button>
    <ul v-if="items">
      <li v-for="item in items" @click="toggle()" :key="`scroll-${item.sku}`">
        <a :href="`\#${format_id(item.name)}`">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Help from "~/components/inputs/help.vue";
import { format } from "~/assets/utils/format_id.js";

export default {
  components: {
    Help
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    format_id(id) {
      return format(id);
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<i18n src="~/assets/data/controls/i18n.yml"></i18n>

<style lang="sass" scoped>
div
  padding-left: 12rem
  position: absolute
  right: 0rem
  width: auto
  overflow: hidden
  height: 100%
  margin-top: -0.5rem
  @media (max-width: $tablet)
    display: none
  &.opened
    button i
      &::before, &::after
        left: calc(100% - 1.215rem)
      &::before
        transform: rotate(45deg)
      &::after
        transform: rotate(-45deg)
    ul
      transform: none

ul
  background-color: $bg
  margin-top: 4rem
  box-shadow: -1rem 0px 1rem 0px $bg
  z-index: 20
  width: auto
  height: calc(100% - 4rem)
  overflow: auto
  transition: transform 0.48s ease-in-out
  transform-origin: 0% 0%
  transform: translate(calc(100% + 1rem), 0)
  border-top-left-radius: 1rem
  border-bottom-left-radius: 1rem
button
  height: fit-content
  position: absolute
  margin-top: 0.5rem
  z-index: 30
  display: flex
  flex-direction: row
  transition: padding 0.24s ease-in-out
  right: 0
  padding-left: 2.75rem
  top: 0rem
  &:hover
    padding-left: 0.75rem
    i
      width: 5rem

i
  width: 3rem
  transition: width 0.24s ease-in-out
  position: relative
  height: 2px
  padding: 0
  margin-right: 0.5rem
  display: flex
  background-color: $secondary
  align-items: center
  border-radius: 0.1rem
  &::before, &::after
    content: ""
    left: -0.2rem
    background-color: $secondary
    height: 4px
    position: absolute
    width: 1.4rem
    border-radius: 0.1rem
    transition: 0.24s ease-in-out
  &::after
    transform: rotate(-135deg)
    bottom: calc(50% - 0.55rem)
    // display: none
  &::before
    transform: rotate(135deg)
    top: calc(50% - 0.52rem)

a
  justify-content: flex-end
  text-decoration: underline
  line-height: 3rem
  width: fit-content
  text-align: right
  width: 100%
</style>
