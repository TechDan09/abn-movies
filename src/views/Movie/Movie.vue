<template>
  <div class="single__movie">
    <div class="single__movie-details">
      <h1>{{ movie.name }}</h1>
      <div class="single__movie-stats">
        <p class="rating" v-if="movie.rating">
          <i class="fa-regular fa-user icon"></i> Rating: {{ movie.rating.average }}
        </p>
        <p class="duration">
          <i class="fa-regular fa-star icon"></i> Duration: {{ movie.runtime }}
        </p>
        <p class="year">
          <i class="fa-regular fa-calendar icon"></i> Release Date:
          {{ extractYear(movie.premiered) }}
        </p>
      </div>
      <div class="single__movie-summary" v-html="movie.summary"></div>
      <div class="single__movie-actions">
        <a :href="movie.officialSite" class="btn btn__primary" target="_blank">Watch Trailer</a>
        <router-link to="/" class="btn btn__secondary">Add To List</router-link>
      </div>
    </div>
    <div class="single__movie-image" v-if="movie.image">
      <img :src="movie.image.original" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import { getMovie } from './data/get-movie';
import { extractYear } from '@/services/extract-year';

export default {
  name: 'Movie',
  components: { Button },
  data() {
    return {
      movie: []
    };
  },
  methods: {
    extractYear
  },
  async created() {
    this.movie = await getMovie(this.$route.params.id);
    console.log(this.movie);
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

.single__movie-stats {
  display: flex;
  gap: 1rem;
}

.single__movie-stats .icon {
  color: var(--orange);
}

.single__movie-actions {
  display: flex;
  gap: 1.4rem;
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
