import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/twojekonto',
    name: 'AuthAccount',
    meta: { requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountView.vue')
  },
  {
    path: '/zarejestruj',
    name: 'SignUp',
    component: () => import('../views/SignUpPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  await store.dispatch('auth/InitAuthentication')
  if (to.meta.requiresAuth && !store.state.auth.authId) {
    router.push('/zarejestruj')
  }
})

export default router
