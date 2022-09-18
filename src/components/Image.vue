<template>
  <img :src="src" :alt="alt" :class="className" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: String,
    alt: String,
    className: String
  }
};
</script>
