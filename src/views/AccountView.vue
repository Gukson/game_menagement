<template>
  <div class="text-light container">
    {{ authUser }}
    <form class="my-5">
      <div class="form-group my-2">
        <label>Nazwa: </label>
        <input class="form-control border border-success p-2 bg-primary text-light" placeholder="Wpisz nazwę">
        <small class="form-text text-muted">Nazwij turniej</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control bg-primary text-light" id="exampleFormControlSelect1">
          <option>Counter Strike</option>
          <option>League of Legends</option>
          <option>Mario Bros</option>
        </select>
      </div>
      <div class="form-group">
        <label>Użytkownicy</label>
        <select multiple class="form-control">
          <option>Zdzisław</option>
          <option>Marek</option>
          <option>Jan Paweł II</option>
        </select>
      </div>
      <div class="form-group my-2">
        <label>Max użytkowników </label>
        <input class="form-control border border-success p-2 bg-primary text-light" placeholder="Max użytkowników">
        <small class="form-text text-muted">Max użytkowników</small>
      </div>
      <div class="form-group my-2">
        <label>Godzina rozpoczęcia: </label>
        <input class="form-control border border-success p-2 bg-primary text-light" placeholder="Godzina">
        <small class="form-text text-muted">Nazwij turniej</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AccountView",
  data() {
    return {
      tournament: {
        name: '',
        game: '',
        users: [],
        max_users: [],
        startingHour: '',
        createdBy: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['authUser'])
  }
}
</script>

<style scoped>

</style>