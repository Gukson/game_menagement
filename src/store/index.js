import { createStore } from 'vuex'

// modules
import auth from "./modules/auth";
import users from "@/store/modules/users";
import tournaments from "@/store/modules/tournaments";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    users,
    tournaments
  }
})
