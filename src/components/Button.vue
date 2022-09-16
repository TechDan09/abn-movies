<template>
  <button class="btn">
    <slot>View More</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    variant: String
  }
};
</script>

<style scoped>
.btn {
  background: var(--orange);
  padding: 1rem 1rem;
  border: 0;
  font-size: 1rem;
  border-radius: 0.3rem;
}

.btn:hover {
  transform: scale(0.95);
}
</style>
