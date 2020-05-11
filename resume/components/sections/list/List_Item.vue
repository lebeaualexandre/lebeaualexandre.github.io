<template>
  <article v-if="item" class="item" :id="format_id(item.name)">
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
  padding: 1rem 2rem
  position: relative
  min-width: 45vw
  @media(min-width: $tablet)
    padding: 2rem
  &:not(:last-child)::before
    content: ""
    height: 50%
    top: 25%
    width: 4px
    border-radius: 4px
    position: absolute
    right: -2px
    background-color: $secondary

  div
    width: 100%

dl
  display: flex
  justify-content: space-between
  flex-direction: column
  width: 100%
  height: 100%

dt
  font-size: 1.6rem
  display: flex
  flex-direction: column
  justify-content: space-between
  flex-wrap: wrap
  width: 100%
  @media(min-width: $tablet)
    flex-direction: row
    h4, div
      max-width: 50%

dd
  // margin-left: auto
  width: auto
  height: 100%
  display: flex
  align-items: flex-end
  flex-direction: column-reverse
  justify-content: space-between
  flex-wrap: wrap
  @media(min-width: $tablet)
    // padding: 0 0 0 2rem^
    // max-width: 90%

p
  padding: 0rem 1rem 1rem
  max-height: 40vh
  text-align: left
  overflow-y: scroll
  font-size: 1.25rem
  line-height: 2rem
</style>
