<template>
  <div class="movie__list" v-if="movies.length">
    <MovieCard :movie="movie.show" v-for="movie in movies" :key="movie.id" />
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
  },
  created() {
    console.log(this.movies);
  }
};
</script>

<style scoped>
.movie__list {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
