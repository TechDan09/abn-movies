<template>
  <div class="single__movie-stats">
    <p class="rating" v-if="movie.rating">
      <i class="fa-regular fa-star icon"></i> Rating: {{ movie.rating.average }}
    </p>
    <p class="duration">
      <i class="fa-regular fa-clock icon"></i> Duration: {{ movie.runtime }}
    </p>
    <p class="year">
      <i class="fa-regular fa-calendar icon"></i> Release Date:
      {{ extractYear(movie.premiered) }}
    </p>
  </div>
</template>

<script>
import { extractYear } from '@/services/extract-year';

export default {
  name: 'MovieStats',
  props: {
    movie: Object
  },
  methods: {
    extractYear
  }
};
</script>

<style scoped>
@import './style.css';
</style>
