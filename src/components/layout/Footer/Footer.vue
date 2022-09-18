<template>
  <div class="footer">
    <IconButton @click="getRandomSuggestion"><fa icon="shuffle" /></IconButton>
    <IconButton @click="viewFavorites"><fa icon="bookmark" /></IconButton>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton/IconButton.vue';

export default {
  name: 'Footer',

  components: {
    IconButton
  },

  methods: {
    getRandomSuggestion() {
      let randomId = Math.floor(Math.random() * 5000);
      this.$router.push(`/movies/${randomId}`);
    },
    viewFavorites() {
      this.$router.push(`/favorites`);
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
