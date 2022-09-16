<template>
  <div class="genre__card">
    <Image
      className="genre__card--img"
      src="https://media.timeout.com/images/102512459/750/422/image.jpg"
    />
    <h2>Action Shows</h2>
    <Button>View Top Shows</Button>
  </div>
</template>

<script>
import Image from './Image.vue';
import Button from './Button.vue';
export default {
  name: 'GenreCard',
  components: { Image, Button }
};
</script>

<style scoped>
.genre__card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40rem;
  min-height: 30rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  color: var(--white);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
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
  font-size: 2rem;
}
</style>
