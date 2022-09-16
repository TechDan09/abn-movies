<template>
  <div class="movie_info">
    <p class="title">{{ movie.show.name }}</p>
    <div class="movie-details d-flex gap-1">
      <p class="year" v-if="movie.show.premiered">{{ extractYear(movie.show.premiered) }}</p>
      <p class="runtime" v-if="movie.show.runtime">{{ movie.show.runtime }} Minutes</p>
    </div>
    <ul class="genre d-flex gap-1">
      <GenreChip :genres="movie.show.genres" />
    </ul>
    <p class="director">Language: {{ movie.show.language }}</p>
    <p class="actors">Type: {{ movie.show.type }}</p>
  </div>
</template>

<script>
import GenreChip from './GenreChip';

export default {
  name: 'MovieInfo',
  props: {
    movie: Object
  },
  components: {
    GenreChip
  },
  methods: {
    extractYear(year) {
      return new Date(year).getFullYear();
    }
  }
};
</script>

<style scoped>
.movie_info {
  padding: 10px;
}

.movie_info .title {
  font-size: 1.5rem;
  font-weight: 700;
}

.movie_info .movie_details {
  font-size: 0.8rem;
  color: var(--light-grayish-blue);
  padding-bottom: 0.3rem;
}

.movie_info .plot,
.movie_info .director,
.movie_info .actors {
  font-size: 0.8rem;
  line-height: 1.2rem;
}
</style>
