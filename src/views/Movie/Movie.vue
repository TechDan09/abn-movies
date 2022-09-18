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
import Button from '@/components/Button.vue';
import { getMovie } from './data/get-movie';
import MovieStats from './components/MovieStats.vue';
import MovieActions from './components/MovieActions.vue';

export default {
  name: 'Movie',
  components: { Button, MovieStats, MovieActions },
  data() {
    return {
      movie: []
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
.single__movie {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 1fr;
  padding: 2rem;
  max-width: 100rem;
  margin: 0 auto;
  font-size: 1.3rem;
}

.single__movie-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.single__movie-image img {
  border-radius: 0.5rem;
  max-height: 40rem;
}

@media only screen and (max-width: 600px) {
  .single__movie {
    display: flex;
    flex-direction: column;
  }
}
</style>
