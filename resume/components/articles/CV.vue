<template>
  <article id="resume" :class="{ fullHeight: seeMore }">
    <header>
      <name :class="{ small: seeMore }" />
      <contact />
    </header>
    <article class="flex" id="resume-content">
      <description />
      <tools />
      <lang class="half pastille" />
      <lang class="half pastille" />
      <!-- <see-more :moreLess="moreLess" :seeMore="seeMore" /> -->
    </article>
    <footer>
      <language-selection />
    </footer>
  </article>
</template>

<script>
import Contact from "~/components/sections/contact/Contact.vue";
import Description from "~/components/sections/description/description";
import Lang from "~/components/sections/lang/lang";
import Tools from "~/components/sections/list/tools.vue";
import Name from "~/components/name";
import SeeMore from "~/components/inputs/see_more";
import Language_Selection from "~/components/nav/language/Language_Selection.vue";
import { yeet } from "~/assets/data/lists/index.js";

export default {
  components: {
    Contact,
    Description,
    Lang,
    Tools,
    "language-selection": Language_Selection,
    Name,
    "see-more": SeeMore
  },

  data() {
    yeet();
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
article > section, article
  flex: 1 1 100%
  width: 100%
  &.half
    @media(min-width: $tablet)
      display: flex
      flex: 1 1 50%
      width: 50%

article
  width: 100%
  overflow-y: auto
  // height: 100vh
  transition: height 0.6s ease-in-out
  display: flex
  flex-direction: column
  @media (max-width: $tablet)
    & > div
      padding: 24px

  @media (min-width: $tablet)
    & > div
      padding: 2rem 3rem

  &.fullHeight
    height: 100vh
    justify-content: center
  &#resume-content
    width: 100%
    flex-direction: row
    flex-wrap: wrap

footer
  display: flex
  position: fixed
  bottom: 0
  background-color: $bg
  width: 100vw

header
  position: sticky
  background-color: $bg
  box-shadow: 0px 12px 12px 0px $bg
</style>
