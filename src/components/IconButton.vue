<template>
  <Button class="icon">
    <slot />
  </Button>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'IconButton',
  props: {
    tooltip: String
  },
  components: { Button }
};
</script>

<style scoped>
.icon {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.icon svg {
  font-size: 2.5rem;
}
</style>
