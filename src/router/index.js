import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/groceries',
      name: 'groceries',
      component: () => import('@/views/GroceriesView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    // {
    //   path: '/groceries',
    //   name: 'groceries',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: GroceriesView,
    // },
    // {
    //   path: '/groceries',
    //   name: 'groceries',
    //   component: () => import('../views/GroceriesView.vue'),
    // },
  ],
});

export default router;
