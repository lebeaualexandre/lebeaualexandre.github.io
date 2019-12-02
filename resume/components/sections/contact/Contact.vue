<template>
  <address>
    <a v-for="contact in email" :key="contact.value" :href="`mailto:${contact.value}`">
      <i class="material-icons">{{ contact.icon }}</i>
      {{ contact.value }}
    </a>
    <a
      v-for="contact in phone"
      :key="contact.value"
      :href="`tel:${contact.value}`"
      :class="{'invalid' : !phone_is_valid(contact.value)}"
    >
      <i class="material-icons">{{ contact.icon }}</i>
      {{ format_phone(contact.value)}}
    </a>
  </address>
</template>

<script>
import phone from "~/assets/data/contact/phone.json";
import email from "~/assets/data/contact/email.json";
import { format_phone, phone_is_valid } from "~/assets/utils/format_contact.js";

export default {
  data() {
    return { phone, email };
  },
  methods: {
    phone_is_valid: contact => phone_is_valid(contact),
    format_phone: contact => format_phone(contact)
  }
};
</script>

<style lang="sass">
address
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap


a
  font-size: 1rem
  color: $tertiary
  display: flex
  justify-content: center
  align-items: center
  padding: 0.5rem 1rem
  transition: color 0.12s
  &:visited
    color: $quaternary
  &:focus, &:hover
    color: $primary
    outline: none
  &::active
    font-weight: 800
  &.invalid
    display: none


i
  padding: 0
  padding-right: 0.5rem
  line-height: inherit !important
  user-select: none
</style>
