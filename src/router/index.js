import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Rota2 from '../views/Rota2.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/rota2',
    name: 'rota2',
    component: Rota2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
