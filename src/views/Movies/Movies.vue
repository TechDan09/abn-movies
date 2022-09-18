<template>
  <MoviesList :movies="movies" />
</template>

<script>
import MoviesList from './components/MoviesList/MoviesList.vue';
import { searchMovie } from './data/get-movies';

export default {
  name: 'Movies',

  components: {
    MoviesList
  },

  data() {
    return {
      movies: [],
      searchText: ''
    };
  },

  async created() {
    this.movies = await searchMovie(this.$route.query.q);
  },

  watch: {
    async $route() {
      this.movies = await searchMovie(this.$route.query.q);
    }
  }
};
</script>
