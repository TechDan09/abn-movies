<template>
  <div class="single__movie-actions">
    <a
      :href="movie.officialSite"
      class="btn btn__primary"
      target="_blank"
    >
      Watch Trailer
      <fa icon="arrow-up-right-from-square" />
    </a>
    <Button to="/" variant="secondary" @click="toggleList(movie.id)">
      {{ isFavorite ? 'Remove From List' : 'Add To List' }}
    </Button>
  </div>
</template>

<script>
import { toggleFavorites } from '../services/toggle-favorites';
import { isInLocalStorage } from '../services/is-in-local-storage';
import Button from '@/components/Button.vue';

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
  },
  components: { Button }
};
</script>

<style scoped>
.single__movie-actions {
  display: flex;
  gap: 1.4rem;
}
</style>
