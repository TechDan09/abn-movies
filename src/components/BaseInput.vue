<template>
  <input
    type="text"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'BaseIx`nput',
  props: {
    label: {
      type: String,
      default: 'Enter text'
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
input {
  padding: 1.2rem;
  color: var(--black);
  border: none;
  border-radius: 0.3rem;
  font-size: 1.3rem;
}

input:focus {
  border: none;
  outline: none;
}
</style>
