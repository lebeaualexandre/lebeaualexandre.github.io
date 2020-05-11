<template>
  <section>
    <div>
      <h3 v-if="header">{{header}}</h3>
      <p v-if="description">{{description}}</p>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="sass" scoped>
section
  padding: 4rem 0rem
  width: 100vw
  min-height: 24vh
  display: flex
  flex-wrap: wrap
  align-items: center
  position: relative
  justify-content: center
  transition: height 0.24s ease-int-out
  @media(min-width: $tablet)
    min-height: 42vh
  &.left, &.right, &.center
    div
      width: 100%
      @media(min-width: $tablet)
        width: calc(50% + 240px)
  &.left, &.right
    &::before
      // content: ""
      position: absolute
      top: calc((100% - 50%)/2)
      width: 8%
      height: 50%
      z-index: -1
      background-color: $octonary
  &.left
    justify-content: flex-start
    div
      justify-content: flex-start
    &::before
      left: 0
  &.right
    justify-content: flex-end
    div
      justify-content: flex-end
    &::before
      right: 0
  &.center
    margin: auto
  // &:first-child
  //   padding-top: 2rem
  &:last-child
    margin-bottom: 48px

div
  display: flex
  flex-wrap: wrap
  align-items: flex-start
  position: relative
  max-width: 100vw
</style>
