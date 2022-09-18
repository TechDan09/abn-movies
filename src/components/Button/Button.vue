<template>
  <button :class="[extractClass(), 'btn']">
    <slot>View More</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: String
  },
  methods: {
    extractClass() {
      if (this.variant === 'secondary') {
        return 'btn__secondary';
      }

      return 'btn__primary';
    }
  }
};
</script>

<style>
@import './style.css';
</style>
