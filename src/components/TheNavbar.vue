<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          <a class="nav-link" href="#">Features</a>
          <router-link class="nav-link" to="/turnieje">Turnieje</router-link>
          <router-link class="nav-link" to="/twojekonto">Twoje Konto</router-link>
          <button class="btn btn-outline-danger me-2" v-if="authId" @click="SigningOut">Wyloguj</button>
          <router-link v-else class="btn btn-outline-success me-2" to="/zaloguj" type="button">Zaloguj się</router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "TheNavbar",
  computed: {
    ...mapState('auth', ["authId"]),
  },
  methods: {
    ...mapActions('auth', ['SignOut']),
    async SigningOut() {
      await this.SignOut()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>