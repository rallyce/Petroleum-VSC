import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/dashBoardAdmin',
      name: 'dashBoardAdmin',
      component: ()=> import('../views/DashboardAdmin.vue')
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: ()=> import('../views/AddUser.vue')
    }
  ]
})

export default router
