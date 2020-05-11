<template>
  <address>
    <a
      v-for="contact in email"
      :key="contact.value"
      :href="`mailto:${contact.value}`"
      target="_blank"
      :name="contact.value"
    >
      <i class="material-icons">{{ contact.icon }}</i>
      <!-- {{ contact.value }} -->
      <!-- <help :content="contact.value" :icon="contact.icon" position="left" /> -->
    </a>
    <phone
      v-for="contact in phone"
      :key="contact.value"
      :value="contact.value"
      :actions="contact.actions"
    />
  </address>
</template>

<script>
import phone from "~/assets/data/contact/phone.json";
import email from "~/assets/data/contact/email.json";
import Phone from "./Phone";
import Help from "~/components/inputs/help.vue";

export default {
  data() {
    return { phone, email };
  },
  components: {
    Phone,
    Help
  }
};
</script>

<style lang="sass">
address
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
  position: relative

a, span
  padding: 0rem 1rem
  flex-direction: row
  user-select: none
  width: 4.5rem
</style>
