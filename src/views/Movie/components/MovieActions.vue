<template>
  <div class="single__movie-actions">
    <a :href="movie.officialSite" class="btn btn__primary" target="_blank">Watch Trailer</a>
    <button to="/" class="btn btn__secondary" @click="toggleList(movie.id)">
      {{ isFavorite ? 'Remove From List' : 'Add To List' }}
    </button>
  </div>
</template>

<script>
import { toggleFavorites } from '../services/toggle-favorites';
import { isInLocalStorage } from '../services/is-in-local-storage';

export default {
  name: 'MovieActions',
  props: {
    movie: Object
  },
  data() {
    return {
      isFavorite: false
    };
  },
  methods: {
    toggleList(id) {
      toggleFavorites(id);
      this.isFavorite = !this.isFavorite;
    }
  },
  created() {
    const id = this.$route.params.id;
    const { isFavorite } = isInLocalStorage(id);
    this.isFavorite = isFavorite;
  }
};
</script>

<style scoped>
.single__movie-actions {
  display: flex;
  gap: 1.4rem;
}
</style>
