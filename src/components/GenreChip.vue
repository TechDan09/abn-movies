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
.genre {
  background-color: var(--orange);
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
}
</style>
