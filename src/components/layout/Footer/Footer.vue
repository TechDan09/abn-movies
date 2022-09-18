<template>
  <div class="footer">
    <IconButton @click="getRandomSuggestion"
      ><fa icon="shuffle"
    /></IconButton>
    <IconButton @click="viewFavorites"
      ><fa icon="bookmark"
    /></IconButton>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton';

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
.footer {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 50px;
  padding: 3rem;
  width: 100%;
  height: 2.5rem;
  z-index: 2;
}
</style>
