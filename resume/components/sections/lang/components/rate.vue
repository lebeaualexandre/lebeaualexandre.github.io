<template>
  <ol>
    <li :class="{ isLvl: rtg <= lvl }" :key="rtg" v-for="rtg in maxRate" />
  </ol>
</template>

<script>
export default {
  data() {
    return {
      maxRate: 5
    };
  },
  props: {
    lvl: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style lang="sass" scoped>



ol
  display: flex
  align-items: center
  justify-content: space-around
  li
    min-height: 1rem
    min-width: 1rem
    border-radius: 50%
    margin: 0.2rem
    border: 1px solid $tertiary
    &.isLvl
      background-color: $tertiary
</style>
