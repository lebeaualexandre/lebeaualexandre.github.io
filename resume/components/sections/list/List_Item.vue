<template>
  <article v-if="item">
    <img v-if="item.img" :src="item.img" />
    <dl>
      <dt v-if="item.name">{{item.name}}</dt>
      <dd v-if="item.description">{{item.description}}</dd>
    </dl>
    <tags :tags="item.tags" />
    <sub-list :items="item.sub_list" />
  </article>
</template>

<script>
import Tags from "~/components/lists/Tags.vue";
import Sub_List from "~/components/lists/Sub_List";

export default {
  components: {
    Tags,
    "sub-list": Sub_List
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
