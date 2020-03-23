<template>
  <article :class="{'invalid': !phone_is_valid(value)}">
    <span :class="{'hidden': opened, }" v-on:click="openClose()">
      <i class="material-icons isbefore">phone_android</i>
      {{ number }}
    </span>
    <article id="options" :class="{'hidden': !opened}">
      <a :href="`${action}:${value}`" v-for="action in actions" :key="action + number">
        <i class="material-icons" title="CALL" v-if="action === 'tel'">phone</i>
        <i class="material-icons" title="SMS" v-if="action === 'sms'">textsms</i>
      </a>
      <button @click="openClose()">
        <i class="material-icons" title="CLOSE">close</i>
      </button>
    </article>
  </article>
</template>

<script>
import { format_phone, phone_is_valid } from "~/assets/utils/format_contact.js";
export default {
  props: {
    icon: {
      type: String,
      default: "phone"
    },
    value: {
      type: String,
      default: ""
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    number() {
      return format_phone(this.value);
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    phone_is_valid: contact => phone_is_valid(contact),
    format_phone: contact => format_phone(contact),
    openClose() {
      this.opened = !this.opened;
    }
  }
};
</script>


<style lang="sass" scoped>
article
  display: flex
  justify-content: space-evenly
  align-items: center
  &.invalid
    display: none

span
  cursor: pointer
  position: relative

#options,
  position: absolute

#options,
span
  overflow: hidden
  transition: transform 5.24s ease-in-out
  transform: scaleX(1)
  &.hidden
    transform: scaleX(0)

a, button
  padding: 0.75rem 1rem
  background-color: $senary
  transition: filter 0.12s ease-in-out
  line-height: 1rem
  &::after
    content: ""
    position: absolute
    left: 0
    bottom: 20%
    width: 100%
    height: 30%
    background-color: $primary
    opacity: 50%
    border-radius: 0.25rem
    z-index: -1
    transition: height 0.24s
  &:first-child
    border-top-left-radius: 1rem
    border-bottom-left-radius: 1rem
  &:last-child
    border-top-right-radius: 1rem
    border-bottom-right-radius: 1rem
  &:hover
    filter: brightness(1.1)
    &::after
      height: 60%

button
  background: $septenary

i:not(.isbefore)
  padding: 0
  line-height: inherit !important
  user-select: none
</style>
