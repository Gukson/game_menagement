import '../sass/main.scss'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"