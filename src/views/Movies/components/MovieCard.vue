<template>
  <div v-if="movie.show.image">
    <Card class="movie__card" @click="viewMovieDetails(movie.show.id)">
      <img :src="movie.show.image.medium" :alt="movie.show.name" class="movie_card--img" />
      <MovieInfo :movie="movie" />
    </Card>
  </div>
</template>

<script>
import Card from '../../../components/Card';
import MovieInfo from './MovieInfo.vue';
import Image from '../../../components/Image.vue';

export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  components: {
    MovieInfo,
    Image,
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
.movie__card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
}

.movie_card--img {
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
