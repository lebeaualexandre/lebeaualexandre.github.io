<template>
  <label v-if="text" :class="[position]">{{ text }}</label>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "bottom"
    }
  }
};
</script>

<style lang="sass" scoped>
$arrow_size: 0.5rem

label
  background-color: $septenary
  position: absolute
  height: fit-content
  z-index: 100
  padding: 0.25rem 0.5rem
  border-radius: 0.5rem
  width: fit-content
  animation: lateral-bounce 1s linear infinite
  &.nowrap
    white-space: nowrap
  &::before
    content: ""
    position: absolute
    border: $arrow_size solid transparent
    border-top-color: $septenary
    border-left-color: $septenary
    height: 0
    width: 0
  &.top
    bottom: 100%
    &::before
      transform: rotate(225deg)
      bottom: -$arrow_size
  &.left
    right: calc(100% + 1rem)
    &::before
      transform: rotate(135deg)
      right: calc(#{$arrow_size}/-2)
  &.bottom
    top: 100%
    &::before
      transform: rotate(45deg)
      top: -$arrow_size
  &.right
    left: 100%
    &::before
      transform: rotate(-45deg)
      left: calc(#{$arrow_size}/-2)
  &.top::before, &.bottom::before
    left: calc(50% - #{$arrow_size})
  &.left::before, &.right::before
    top: calc(50% - #{$arrow_size})
</style>
