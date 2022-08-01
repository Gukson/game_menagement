<template>
  <div class="jumbotron d-flex align-items-center min-vh-100">
    <form class="container my-auto text-center text-light" @submit.prevent="SignUp">
      <div class="row mb-3">
        <span class="col-md-4 m-auto">
          <label class="form-label float-start">Nazwa użytkownika</label>
          <input class="form-control text-light" style="background-color: #282828" v-model="form.username ">
          <span class="form-text float-start">Wymyśl kreatywną nazwę użytkownika</span>
        </span>
      </div>
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
        <button type="submit" class="btn btn-outline-success col-4 m-auto">Zarejestruj się</button>
      </div>

    </form>
  </div>

</template>

<script>

export default {
  name: "SignUpPage",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  created() {
    this.$emit('ready')
  },
  methods: {
    async SignUp() {
      await this.$store.dispatch('auth/RegisterUserWithEmailAndPassword', this.form)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>