<template>
  <Header />
  <Footer />
  <router-view></router-view>
</template>

<script>
import Header from './components/layout/Header/Header.vue';
import Footer from './components/layout/Footer/Footer.vue';
export default {
  name: 'App',
  components: { Header, Footer }
};
</script>

<style lang="css">
@import '@/style/base.css';
</style>
