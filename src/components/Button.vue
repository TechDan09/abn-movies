<template>
  <button :class="[extractClass(), 'btn']">
    <slot>View More</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
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
.btn {
  padding: 1rem 1.6rem;
  border: 0;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn__primary {
  background: var(--orange);
}

.btn__secondary {
  background: transparent;
  border: 1px solid var(--orange);
  color: var(--orange);
}

.btn:hover {
  transform: scale(0.95);
}
</style>
