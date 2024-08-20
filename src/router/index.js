import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; 
import ContactPage from '@/views/ContactPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import BlogPage from '@/views/BlogPage.vue';
import SignupPage from '@/views/SignupPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
    {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
    {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  },
      {
    path: '/signup',
    name: 'Signup',
    component: SignupPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;