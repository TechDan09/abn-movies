<template>
  <div v-if="movie && movie.image">
    <Card class="movie__card" @click="viewMovieDetails(movie.id)">
      <img
        :src="movie.image.medium"
        :alt="movie.name"
        class="movie_card--img"
      />
      <MovieInfo :movie="movie" />
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';
import MovieInfo from '../../views/Movies/components/MovieInfo/MovieInfo.vue';

export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  components: {
    MovieInfo,
    Card
  },
  methods: {
    viewMovieDetails(id) {
      this.$router.push(`/movies/${id}`);
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
