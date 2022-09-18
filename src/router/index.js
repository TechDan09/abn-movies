import { createRouter, createWebHistory } from 'vue-router';

import Movies from '../views/Movies/Movies.vue';
import Home from '../views/Home/Home.vue';
import Movie from '../views/Movie/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: Movie
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
