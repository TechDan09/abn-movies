<template>
  <div class="movie__info">
    <p class="title">{{ movie.show.name }}</p>
    <div class="movie__info-details d-flex gap-1">
      <p class="movie__info-year" v-if="movie.show.premiered">
        {{ extractYear(movie.show.premiered) }}
      </p>
      <p class="movie__info-runtime" v-if="movie.show.runtime">{{ movie.show.runtime }} Minutes</p>
    </div>
    <ul class="d-flex gap-1">
      <GenreChip :genres="movie.show.genres" />
    </ul>
    <p class="movie__info-language">Language: {{ movie.show.language }}</p>
    <p class="movie__info-type">Type: {{ movie.show.type }}</p>
  </div>
</template>

<script>
import GenreChip from '../../../components/GenreChip';
import { extractYear } from '@/services/extract-year';

export default {
  name: 'MovieInfo',
  props: {
    movie: Object
  },
  components: {
    GenreChip
  },
  methods: {
    extractYear
  }
};
</script>

<style scoped>
.movie__info {
  padding: 10px;
}

.movie__info .title {
  font-size: 2rem;
  font-weight: 700;
}

.movie__info .movie__info-details {
  font-size: 1.3rem;
  color: var(--light-grayish-blue);
  padding-bottom: 0.3rem;
}

.movie__info-year,
.movie__info-year-runtime,
.movie__info-language,
.movie__info-type {
  font-size: 1.3rem;
  line-height: 1.92rem;
}
</style>
