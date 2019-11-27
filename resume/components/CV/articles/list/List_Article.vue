<template>
  <div>
    <article>
      <h2>{{header}}</h2>
      <p>{{description}}</p>
      <list-items :list="list"/>
    </article>
  </div>
</template>

<script>
import List_Items from './List_Items.vue'

export default {
  components: {
    "list-items": List_Items
  }
  props: {
    header: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    list: {
      type: [],
      default: () => []
    }
  }
}
</script>

<i18n src="~/assets/data/ide/i18n.yml"></i18n>
<i18n src="~/assets/data/languages/i18n.yml"></i18n>

<style lang="sass">
  
</style>