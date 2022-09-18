<template>
  <div class="favorite__movies">
    <div v-if="movies.length" class="favorite__movies-movie-list">
      <MovieCard :movie="movie" v-for="movie in movies" :key="movie.id" />
    </div>
    <h1 v-else class="no-movie">"No Movies in favorites"</h1>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue';
import { getFavoriteMovies } from './data/get-favorite-movies';

export default {
  name: 'Favorites',

  components: {
    MovieCard
  },

  data() {
    return {
      movies: []
    };
  },

  async created() {
    this.movies = await getFavoriteMovies();
  }
};
</script>

<style scoped>
@import './style.css';
</style>
