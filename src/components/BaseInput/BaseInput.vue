<template>
  <input
    :type="type"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: 'Enter text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style>
@import './style.css';
</style>
