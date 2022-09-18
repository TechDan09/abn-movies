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
import BaseInput from '../../BaseInput.vue';
import Button from '../../../components/Button.vue';

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
.header {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  justify-content: center;
}

.header h1 {
  align-self: center;
  text-align: center;
}

.search {
  align-self: center;
  display: flex;
  align-items: center;
}

.search__input {
  width: 50rem;
  height: 45px;
  margin: 10px auto;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

.search__button {
  padding: 1.2rem;
  height: 45px;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  font-size: 1.3rem;
}

@media only screen and (max-width: 600px) {
  .search {
    width: 100%;
    flex-direction: column;
    padding: 1rem 0px;
  }

  .search__input {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }

  .search__button {
    width: 100%;
    border-radius: 0;
  }
}
</style>
