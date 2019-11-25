<template>
  <ol
    v-bind:value="value"
  ><li :class="{ 'isLvl' : rtg <= lvl}" :key="rtg"  v-for="rtg in maxRate"/></ol>
</template>

<script>
export default {
  data: function() {
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
@import "~/assets/css_var/Colors"
$colors: darkTheme(true)

ol
  display: flex
  align-items: center
  justify-content: space-around
  li 
    min-height: 1rem
    min-width: 1rem
    border-radius: 50%
    margin: 0.2rem
    border: 1px solid map-get($colors, "tertiary")
    &.isLvl 
      background-color: map-get($colors, "tertiary")
    
  
</style>