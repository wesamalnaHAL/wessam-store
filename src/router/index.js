import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Basket from '../components/Basket.vue'
import ProductView from "../views/ProductView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductView
    }
  ]
})

export default router
