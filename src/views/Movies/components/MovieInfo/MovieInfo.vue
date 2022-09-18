<template>
  <div class="movie__info">
    <p class="title">{{ movie.name }}</p>
    <div class="movie__info-details d-flex gap-1">
      <p class="movie__info-year" v-if="movie.premiered">
        {{ extractYear(movie.premiered) }}
      </p>
      <p class="movie__info-runtime" v-if="movie.runtime">
        {{ movie.runtime }} Minutes
      </p>
    </div>
    <ul class="d-flex gap-1">
      <GenreChip :genres="movie.genres" />
    </ul>
    <p class="movie__info-language">Language: {{ movie.language }}</p>
    <p class="movie__info-type">Type: {{ movie.type }}</p>
  </div>
</template>

<script>
import GenreChip from '@/components/GenreChip/GenreChip.vue';
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
@import './style.css';
</style>
