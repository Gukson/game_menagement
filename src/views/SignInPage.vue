<template>
  <div class="jumbotron d-flex align-items-center min-vh-100">
    <form class="container my-auto text-center text-light" @submit.prevent="SignIn">
      <div class="row mb-3">
        <span class="col-md-4 m-auto">
          <label for="exampleInputEmail1" class="form-label float-start">Twój mail</label>
          <input type="email" class="form-control text-light" v-model="form.email" style="background-color: #282828" id="exampleInputEmail1" aria-describedby="emailHelp">
        </span>
      </div>
      <div class="row mb-3">
      <span class="col-md-4 m-auto">
        <label for="exampleInputPassword1" class="form-label float-start">Password</label>
        <input type="password" class="form-control text-light" v-model="form.password" style="background-color: #282828" id="exampleInputPassword1">
      </span>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-outline-success col-4 m-auto">Zaloguj się</button>
      </div>
      <div class="row my-4 text-light">
        <span class="col-md-4 m-auto border-top border-secondary">
          <p class="my-1">Nie masz jeszcze konta?</p>
          <router-link type="submit" to="/zarejestruj" class="btn btn-outline-success w-100 col-4 m-auto">Zarejestruj się</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "SignInPage",
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async SignIn() {
      try {
        await this.$store.dispatch('auth/signInWithEmailAndPassword', { ...this.form })
        this.SuccessRedirect()
      }catch (error) {
        console.log(error)
      }
    },
    SuccessRedirect() {
      const redirectTo = this.$route.query.redirectTo || { name: 'Home' }
      this.$router.push(redirectTo)
    },
  }
}
</script>

<style scoped>

</style>