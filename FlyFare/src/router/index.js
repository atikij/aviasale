import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import PersonalAccountView from "@/views/PersonalAccountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: PersonalAccountView
    },
  ]
})

export default router
