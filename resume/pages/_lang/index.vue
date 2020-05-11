<template>
  <div>
    <cv />
  </div>
</template>



<script>
import CV from "~/components/articles/CV";

export default {
  components: {
    cv: CV
  }
};
</script>

<style lang="sass">
h2
  padding-left: 2rem

.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: $secondary
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px

p
  line-height: 2.4rem
  font-size: 1.4rem

em
  position: relative
  font-weight: 800

a, span
  font-size: 1rem
  color: $tertiary
  display: flex
  transition: color 0.12s
  justify-content: center
  position: relative
  align-items: center
  &:visited
    color: $quaternary
  &:focus, &:hover
    color: $primary
    outline: none
  &::active
    font-weight: 800
  &.invalid
    display: none
</style>
