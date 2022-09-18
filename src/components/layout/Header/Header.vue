<template>
  <div class="header">
    <router-link to="/"><h1>Welcome To ABN Movies</h1></router-link>
    <div class="search">
      <BaseInput
        class="search__input"
        label="Search for a movie"
        v-model="searchText"
        name="searchText"
        @keyup.enter="searchMovie()"
      />
      <Button class="search__button" @click="searchMovie">Search</Button>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../BaseInput/BaseInput.vue';
import Button from '../../Button/Button.vue';

export default {
  name: 'Header',
  components: {
    BaseInput,
    Button
  },
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    searchMovie() {
      if (!this.searchText.length) {
        this.$router.push('/');
        return;
      }

      const url = `/movies/?q=${this.searchText}`;
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
