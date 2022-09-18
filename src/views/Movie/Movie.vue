<template>
  <div class="single__movie">
    <div class="single__movie-details">
      <h1>{{ movie.name }}</h1>
      <MovieStats :movie="movie" />
      <div class="single__movie-summary" v-html="movie.summary"></div>
      <MovieActions :movie="movie" />
    </div>
    <div class="single__movie-image" v-if="movie.image">
      <img :src="movie.image.original" />
    </div>
  </div>
</template>

<script>
import { getMovie } from './data/get-movie';
import MovieStats from './components/MovieStats/MovieStats.vue';
import MovieActions from './components/MovieActions/MovieActions.vue';

export default {
  name: 'Movie',
  components: { MovieStats, MovieActions },
  data() {
    return {
      movie: {}
    };
  },

  async created() {
    this.movie = await getMovie(this.$route.params.id);
  },

  watch: {
    async $route() {
      this.movie = await getMovie(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
