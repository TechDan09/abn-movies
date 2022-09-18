<template>
  <li v-for="genre in genres" :key="genre" class="rounded-border-0 genre">
    {{ genre }}
  </li>
</template>

<script>
export default {
  name: 'GenreChip',
  props: {
    genres: Array
  }
};
</script>

<style scoped>
@import './style.css';
</style>
