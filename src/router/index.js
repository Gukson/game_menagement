import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/turnieje',
    name: 'Tournaments',
    component: () => import(/* webpackChunkName: "about" */ '../views/TournamentsView.vue')
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
  },
  {
    path: '/zaloguj',
    name: 'SignIn',
    component: () => import('../views/SignInPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  await store.dispatch('auth/InitAuthentication')
  if (to.meta.requiresAuth && !store.state.auth.authId) {
    return { name: 'SignIn', query: { redirectTo: to.path } }
  }
})

export default router
