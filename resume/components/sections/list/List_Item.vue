<template>
  <article v-if="item" :id="format_id(item.name)">
    <div>
      <img v-if="item.img" :src="item.img" />
      <dl>
        <dt>
          <h4 v-if="item.name">{{item.name}}</h4>
          <tags :tags="item.tags" />
        </dt>
        <dd>
          <sub-list :items="item.sub_list" />
          <p v-if="item.description">{{item.description}}</p>
        </dd>
      </dl>
    </div>
  </article>
</template>

<script>
import Tags from "~/components/lists/Tags.vue";
import Sub_List from "~/components/lists/Sub_List";
import { format } from "~/assets/utils/format_id.js";

export default {
  components: {
    Tags,
    "sub-list": Sub_List
  },
  methods: {
    format_id(id) {
      return format(id);
    }
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
article
  display: flex
  flex: 1 1 100%
  width: 100%
  // &:not(:first-child)
  //   border-top: solid 2px $secondary
  &.half-mobile
    @media(min-width: $mobile)
      display: flex
      flex: 1 1 50%
      width: 50%

  &.half-tablet
    @media(min-width: $tablet)
      display: flex
      flex: 1 1 50%
      width: 50%

  &.half-desktop
    @media(min-width: $desktop)
      display: flex
      flex: 1 1 50%
      width: 50%

dl
  display: flex
  justify-content: space-between
  flex-direction: column
  width: 100%
  @media(min-width: $tablet)
    flex-direction: row

dt
  font-size: 1.6rem
  display: flex
  flex-direction: column-reverse
  justify-content: space-between
  @media(min-width: $tablet)
    flex-direction: column

dd
  margin-left: auto
  width: auto
  display: flex
  align-items: flex-end
  flex-direction: column-reverse
  @media(min-width: $tablet)
    padding: 0 0 0 2rem
    max-width: 75%

p
  padding-top: 1rem
</style>
