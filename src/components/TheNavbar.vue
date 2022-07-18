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
          <router-link class="nav-link" v-show="authUser" to="/twojekonto">Twoje Konto</router-link>
          <router-link v-show="!authUser" class="btn btn-outline-success me-2" to="/zarejestruj" type="button">Zarejestruj się</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "TheNavbar",
  computed: {
    ...mapState('auth', ["authUser"])
  }
}
</script>

<style scoped>

</style>