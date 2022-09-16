<template>
  <div class="movie_card">
    <Image :src="movie.show.image.medium" :alt="movie.show.name" className="movie_card--img" />
    <MovieInfo :movie="movie" />
  </div>
</template>

<script>
import MovieInfo from './MovieInfo.vue';
import Image from './Image.vue';

export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  components: {
    MovieInfo,
    Image
  }
};
</script>

<style scoped>
.movie_card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  min-width: 20rem;
  min-height: 30rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  color: var(--white);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
}

.movie_card:hover {
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
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
