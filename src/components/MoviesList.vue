<template>
  <div class="movies d-grid justify-center gap-1">
    <MovieCard :movie="movie" v-for="movie in movies" :key="movie.id" />
  </div>
</template>

<script>
import MovieCard from './MovieCard';

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
.movies {
  padding: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
}
</style>
