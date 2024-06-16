import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import PersonalAccountView from "@/views/PersonalAccountView.vue";
import TicketView from "@/views/TicketView.vue";
import SettingView from "@/views/SettingView.vue";
import PayView from "@/views/PayView.vue";

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
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView
    },
    {
      path: '/tickets/pay/:ticketId',
      name: 'pay',
      component: PayView,
      props: true // Позволяет передавать параметры как props
    }
  ]
})

export default router
