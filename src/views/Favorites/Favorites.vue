<template>
  <div class="favorite__movies">
    <div v-if="movies.length" class="favorite__movies-movie-list">
      <MovieCard :movie="movie" v-for="movie in movies" :key="movie.id" />
    </div>
    <h1 v-else class="no-movie">"No Movies in favorites"</h1>
  </div>
</template>

<script>
import MovieCard from '../Movies/components/MovieCard';
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
.favorite__movies-movie-list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  gap: 2rem;
}

.favorite__movies h1 {
  font-size: 1.5rem;
  text-align: center;
}
</style>
