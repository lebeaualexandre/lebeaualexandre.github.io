<template>
  <article id="resume" :class="{ fullHeight: seeMore }">
    <header>
      <name />
    </header>
    <article class="flex" id="resume-content">
      <description class="left" />
      <tools />
      <lang class="right" />
      <!-- <see-more :moreLess="moreLess" :seeMore="seeMore" /> -->
    </article>
    <footer>
      <language-selection />
      <contact />
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
  justify-content: space-between
  padding: 0rem 1rem
  position: fixed
  bottom: 0
  background-color: $bg
  width: 100vw

section#presentation
  display: flex
  justify-content: space-around
  align-items: center
  @media (max-width: $mobile)
    flex-direction: column

header
  display: flex
  justify-content: center
  padding: 1rem 0.5rem
  top: 0
  background-color: $bg
  box-shadow: 0px 12px 12px 0px $bg
</style>
