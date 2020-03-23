<template>
  <address>
    <a
      v-for="contact in email"
      :key="contact.value"
      :href="`mailto:${contact.value}`"
      target="_blank"
    >
      <i class="material-icons isbefore">{{ contact.icon }}</i>
      {{ contact.value }}
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

export default {
  data() {
    return { phone, email };
  },
  components: {
    Phone
  }
};
</script>

<style lang="sass">
address
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap


a, span
  font-size: 1rem
  color: $tertiary
  display: flex
  justify-content: center
  align-items: center
  padding: 0.5rem 1rem
  transition: color 0.12s
  line-height: 1.75rem
  &:visited
    color: $quaternary
  &:focus, &:hover
    color: $primary
    outline: none
  &::active
    font-weight: 800
  &.invalid
    display: none


</style>
