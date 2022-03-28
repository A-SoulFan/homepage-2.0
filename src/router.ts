import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Member from '@/views/Member.vue';
import Popular from '@/views/Popular.vue';
import Tool from '@/views/Tool.vue';

// import Home from '@/views/home/index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/homePage',
    },
    {
      path: '/homePage',
      name: 'HomePage',
      meta: {
        pageIndex: 0,
      },
      component: HomePage,
    },
    {
      path: '/member',
      name: 'Member',
      meta: {
        pageIndex: 1,
      },
      component: Member,
    },
    {
      path: '/popular',
      name: 'Popular',
      meta: {
        pageIndex: 2,
      },
      component: Popular,
    },
    {
      path: '/tool',
      name: 'Tool',
      meta: {
        pageIndex: 3,
      },
      component: Tool,
    },
  ],
});
