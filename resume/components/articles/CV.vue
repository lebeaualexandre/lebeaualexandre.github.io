<template>
  <article id="resume" :class="{ fullHeight: seeMore }">
    <header>
      <name :class="{ small: seeMore }" />
      <contact />
    </header>
    <article class="flex" id="resume-content">
      <description v-if="seeMore" />
      <lists />
      <lang v-if="seeMore" class="half" />
      <lang v-if="seeMore" class="half" />
    </article>
    <footer>
      <see-more :moreLess="moreLess" :seeMore="seeMore" />
      <language-selection />
    </footer>
  </article>
</template>

<script>
import Contact from "~/components/sections/contact/Contact.vue";
import Description from "~/components/sections/description/description";
import Lang from "~/components/sections/lang/lang";
import List_Articles from "~/components/sections/list/List_Section";
import Name from "~/components/name";
import SeeMore from "~/components/inputs/see_more";
import Language_Selection from "~/components/nav/language/Language_Selection.vue";

export default {
  components: {
    Contact,
    Description,
    Lang,
    "language-selection": Language_Selection,
    lists: List_Articles,
    Name,
    "see-more": SeeMore
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
article > section
  flex: 1 1 100%
.half
  display: flex
  flex: 1 1 50%
  width: 50%

article
  width: 100%
  overflow-y: auto
  @media (max-width: $tablet)
    & > div
      padding: 24px

  @media (min-width: $tablet)
    & > div
      padding: 2rem 3rem

  height: 60vh
  transition: height 0.6s ease-in-out
  &.fullHeight
    height: 100vh
    justify-content: center

  display: flex
  flex-direction: column


#resume-content
  flex-direction: row
  flex-wrap: wrap

header
  position: sticky
  background-color: $bg
  box-shadow: 0px 12px 12px 0px $bg
</style>
