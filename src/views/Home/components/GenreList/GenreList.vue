<template>
  <div class="genre__container">
    <GenreCard :genre="genre" v-for="genre in genres" :key="genre" />
  </div>
</template>

<script>
import GenreCard from '../GenreCard/GenreCard.vue';

export default {
  name: 'GenreList',
  components: {
    GenreCard
  },
  data() {
    return {
      genres: [
        {
          title: 'Action',
          coverImage:
            'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg'
        },
        {
          title: 'Romance',
          coverImage:
            'https://pbblogassets.s3.amazonaws.com/uploads/2020/03/30161345/Gone-with-the-Wind-1.jpg'
        },
        {
          title: 'Comedy',
          coverImage:
            'https://fandomwire.com/wp-content/uploads/2020/05/2_V1.png'
        },
        {
          title: 'Drama',
          coverImage:
            'https://goodmovieslist.com/best-movies/movie-posters/tt0111161.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import './style.css';
</style>
