<template>
  <section :class="{ fullHeight: seeMore }">
    <name :class="{ small: seeMore }" />
    <div class="flex">
      <description v-if="seeMore" />
      <lang v-if="seeMore" class="small" />
      <see-more :moreLess="moreLess" :seeMore="seeMore" />
    </div>
  </section>
</template>

<script>
import Description from "./sections/description/description";
import Lang from "./sections/lang/Lang";
import Name from "./components/Name";
import SeeMore from "./components/SeeMore/SeeMore";

export default {
  components: {
    Name,
    Description,
    Lang,
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

@import "~/assets/css_var/Colors"
@import "~/assets/css_var/device"
$colors: darkTheme(true)

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
