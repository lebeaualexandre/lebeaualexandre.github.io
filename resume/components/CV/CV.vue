<template>
  <section :class="{ fullHeight: seeMore }">
    <name :class="{ small: seeMore }" />
    <div class="flex">
      <description v-if="seeMore" />
      <lists />
      <lang v-if="seeMore" class="small" />
      <see-more :moreLess="moreLess" :seeMore="seeMore" />
    </div>
  </section>
</template>

<script>
import Description from "./articles/description/description";
import Lang from "./articles/lang/lang";
import list_articles from "./articles/list/list_article";
import Name from "./components/name";
import SeeMore from "./components/see_more";

export default {
  components: {
    Name,
    Description,
    Lang,
    "see-more": SeeMore,
    lists: list_articles
  },

  data() {
    return {
      seeMore: false
    };
  },
  methods: {
    moreLess() {
      this.seeMore = !this.seeMore;
    }
  }
};
</script>

<style lang="sass" scoped>



section
  width: 100%;
  overflow-y: auto;
  @media (max-width: $tablet)
    & > div
      padding: 24px;

    max-height: 50vh;

  @media (min-width: $tablet)
    & > div
      padding: 2rem 3rem;

  height: 60vh;
  transition: height 0.6s ease-in-out;
  &.fullHeight
    height: 100vh
    justify-content: center

  display: flex;
  flex-direction: column;
</style>
