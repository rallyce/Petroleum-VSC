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
    },
    {
      path: '/updateUser/:id',
      name: 'updateUser',
      component: ()=> import('../views/UpdateUser.vue')
    },
    {
      path: '/viewEmpleados',
      name: 'viewEmpleados',
      component: ()=> import('../views/ViewEmpleados.vue')
    },
    {
      path: '/listaProductos',
      name: 'listaProductos',
      component: ()=> import('../views/ListaInventario.vue')
    }
  ]
})

export default router
