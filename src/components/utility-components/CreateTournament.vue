<template>
  <div class="text-light container py-5">
    <form class="my-5" @submit.prevent="CreateTournament">
      <div class="form-group my-2">
        <label>Nazwa: </label>
        <input class="form-control border border-success p-2 bg-primary text-light"
               placeholder="Nazwij turniej" v-model="tournament.name">
        <small class="form-text text-muted">Nazwij turniej</small>
      </div>
      <div class="form-group">
        <label>Wybierz grę</label>
        <select class="form-control border border-success bg-primary text-light" v-model="tournament.game">
          <option class="select">Counter Strike</option>
          <option class="bg-primary text-light">League of Legends</option>
          <option class="bg-primary text-light">Mario Bros</option>
        </select>
      </div>
      <div class="form-group my-4">
        <span class="form-control btn btn-success btn-lg"
                @click="isShowingDrawer=!isShowingDrawer">Dodaj graczy</span>
        <MultiSelectDrawer ref="multi-select-drawer" v-show="isShowingDrawer"/>
      </div>
      <div class="form-group my-2">
        <label>Max użytkowników </label>
        <input class="form-control border border-success p-2 bg-primary text-light"
               placeholder="Max użytkowników" v-model="tournament.max_users">
        <small class="form-text text-muted">Max użytkowników</small>
      </div>
      <div class="form-group my-2">
        <label>Data rozpoczęcia: </label>
        <Datepicker class="border rounded-2 border-success" dark v-model="tournament.date"/>
        <small class="form-text text-muted">Wybierz datę</small>
      </div>
      <button type="submit" class="btn btn-primary">Stwórz turniej</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MultiSelectDrawer from "@/components/utility-components/MultiSelectDrawer";

export default {
  name: "CreateTournament",
  components: {MultiSelectDrawer},
  data() {
    return {
      tournament: {
        name: '',
        game: '',
        max_users: '',
        date: '',
      },
      isShowingDrawer: false
    }
  },
  methods: {
    async CreateTournament() {
      console.log('submitting')
      // obiekt turnieju
      const tournamentObject = {...this.tournament, authorId: this.authId,  invited: this.GetInvitedUsers}
      // akcja z dodaniem do bazy danych
      await this.$store.dispatch('tournaments/CreateTournament', { tournamentObject })
      // wyczyszczenie obiektu
      for (let key in this.tournament) {
        delete this.tournament[key]
      }
    }
  },
  async created() {
    await this.$store.dispatch('users/ReadAllUsers')
  },
  computed: {
    ...mapState('auth', ['authId']),
    GetInvitedUsers() {
      return this.$refs["multi-select-drawer"].invited
    }
  }
}
</script>

<style scoped>

</style>