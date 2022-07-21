<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Gracze: </th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
      <tr  class="text-center" v-for="(user,index) in GetUsers" :key="index">
        <td>
          <img class="photo" :src="user.photo">
        </td>
        <td>{{ user.username }}</td>
        <td>
          <button class="btn px-4 btn-success" v-if="!IsInInvited(user.userId)" @click="AddToInvited(user.userId)">Zaproś</button>
          <button class="btn btn-danger" v-else @click="CancelInvite(user.userId)">Odwołaj</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MultiSelectDrawer",
  data() {
    return {
      invited: []
    }
  },
  methods: {
    AddToInvited(id) {
      this.invited.push(id)
      this.$emit('addInvite', id)
    },
    IsInInvited(id) {
      return this.invited.includes(id)
    },
    CancelInvite(id) {
      this.$emit('cancelInvite')
      return this.invited.splice(this.invited.indexOf(id), 1)
    }
  },
  computed: {
    GetUsers() {
      return this.$store.state.users.items
    }
  }
}
</script>

<style scoped lang="scss">
.photo {
  border-radius: 50%;
}
</style>