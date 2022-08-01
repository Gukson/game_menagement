<template>
  <div v-if="asyncDataStatusReady">
    <CreateTournament/>
  </div>
</template>

<script>


import CreateTournament from "@/components/utility-components/CreateTournament";
import asyncDataStatusReady from "@/mixins/asyncDataStatusReady";
export default {
  name: "AccountView",
  components: {CreateTournament},
  mixins: [asyncDataStatusReady],
  mounted() {
    this.asyncDataStatusChange()
    this.$emit('ready')
  }
}
</script>

<style scoped lang="scss">

</style>