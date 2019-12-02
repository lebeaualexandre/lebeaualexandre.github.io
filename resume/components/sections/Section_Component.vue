<template>
  <section>
    <h2 v-if="header">{{header}}</h2>
    <p v-if="description">{{description}}</p>
    <slot></slot>
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

<style lang="sass">
section
  padding: 1rem 2rem
</style>
