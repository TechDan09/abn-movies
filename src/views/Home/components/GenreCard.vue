<template>
  <Card class="genre__card">
    <h2>{{ genre.title }} Shows</h2>
    <Button variant="secondary">View Top Shows</Button>
    <Image className="genre__card--img" :src="genre.coverImage" />
  </Card>
</template>

<script>
import Image from '../../../components/Image.vue';
import Button from '../../../components/Button.vue';
import Card from '../../../components/Card.vue';
export default {
  name: 'GenreCard',
  components: { Image, Button, Card },
  props: {
    genre: Object
  }
};
</script>

<style scoped>
.genre__card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
}

.genre__card--img {
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.genre__card h2 {
  margin: 1rem auto;
  font-size: 1.7rem;
}
</style>
