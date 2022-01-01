import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
