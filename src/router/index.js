import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
  const auth = getAuth();
  console.log(to)
  // badanie czy jest auth user
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch('auth/FetchAuthUser', {userId: user.uid})
    } else {
      router.push('/zarejestruj')
    }
  });
})

export default router
