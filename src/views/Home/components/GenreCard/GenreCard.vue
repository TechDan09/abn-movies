<template>
  <Card class="genre__card" @click="viewGenre(genre.title)">
    <h2>{{ genre.title }} Shows</h2>
    <Button variant="secondary">View Top Shows</Button>
    <img className="genre__card--img" :src="genre.coverImage" />
  </Card>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import Card from '@/components/Card/Card.vue';
export default {
  name: 'GenreCard',
  components: { Button, Card },
  props: {
    genre: Object
  },
  methods: {
    viewGenre(genreName) {
      this.$router.push(`/movies/?q=${genreName}`);
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
