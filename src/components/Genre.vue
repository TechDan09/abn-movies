<template>
  <div class="genre__container">
    <GenreCard />
  </div>
</template>

<script>
import GenreCard from './GenreCard';

export default {
  name: 'Genre',
  components: {
    GenreCard
  }
};
</script>

<style scoped>
.genre__container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -2;
}
</style>
