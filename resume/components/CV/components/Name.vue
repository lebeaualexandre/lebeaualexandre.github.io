<template>
  <h1>Lebeau</h1>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="sass">
h1
  color: $primary
  position: sticky
  text-align: center
  top: 0
  background-color: $bg
  box-shadow: 0px 12px 12px 0px $bg
  padding: 2rem 0
  letter-spacing: 5px
  cursor: default
  user-select: none
  transition: font-size 0.24s ease-in-out
  &::after
    content: ''
    transition: height 0.24s ease-in-out
    height: 1.8rem
    position: absolute
    width: 100%
    left: 0
    bottom: 2.8rem
    background-color: $bg
  &:hover
    &::after
      height: 0.95rem

  &.small
    font-size: 4em
    &::after
      height: 1.1rem
      bottom: 2.6rem
    &:hover
      &::after
        height: 0.5rem
</style>
