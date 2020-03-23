<template>
  <nav>
    <NuxtLink
      v-if="$i18n.locale === 'fr'"
      :to="`/en` + $route.fullPath"
      active-class="none"
      exact
      :title="languages.en.name"
    >
      <i class="material-icons isbefore">language</i>
      <div>{{ languages.en.code }}</div>
    </NuxtLink>
    <NuxtLink
      v-else
      :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
      active-class="none"
      exact
      :title="languages.fr.name"
    >
      <i class="material-icons isbefore">language</i>
      <div>{{ languages.fr.code }}</div>
    </NuxtLink>
  </nav>
</template>

<script>
import languages from "./languages.json";
export default {
  components: {},
  data() {
    return { languages };
  },
  props: {}
};
</script>
