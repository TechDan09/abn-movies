<template>
  <div class="movie__list" v-if="movies.length">
    <MovieCard :movie="movie.show" v-for="movie in movies" :key="movie.id" />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue';

export default {
  name: 'MoviesList',
  props: {
    movies: Array
  },
  components: {
    MovieCard
  }
};
</script>

<style scoped>
@import './style.css';
</style>
