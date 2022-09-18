<template>
  <div class="movies d-flex justify-center" v-if="movies">
    <MovieCard :movie="movie" v-for="movie in movies" :key="movie.id" />
  </div>
</template>

<script>
import MovieCard from './MovieCard';

export default {
  name: 'MoviesList',
  props: {
    movies: Array,
    test: false
  },
  components: {
    MovieCard
  }
};
</script>

<style scoped>
.movies {
  padding: 1rem 0;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
