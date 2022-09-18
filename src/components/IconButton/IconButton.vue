<template>
  <Button class="icon">
    <slot />
  </Button>
</template>

<script>
import Button from '../Button/Button.vue';
export default {
  name: 'IconButton',
  components: { Button }
};
</script>

<style scoped>
@import './style.css';
</style>
