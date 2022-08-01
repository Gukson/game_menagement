<template>
    <TheNavbar/>
  <div>
    <router-view v-show="isPageReady" @ready="OnPageReady" :key="`${$route.path}${JSON.stringify($route.query)}`"/>
    <LoadingScreen v-show="isPageReady === false"/><p class="text-light">{{isPageReady}}</p>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
body {
  background-color: #151414;
}
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
<script>
import TheNavbar from "@/components/TheNavbar";
import { mapActions } from 'vuex'
import LoadingScreen from "@/views/LoadingScreen";

export default {
  components: {LoadingScreen, TheNavbar},
  data() {
    return {
      isPageReady: false
    }
  },
  methods: {
    OnPageReady() {
      // console.log('page ready')
      this.isPageReady = true
    },
    ...mapActions('auth', ['FetchAuthUser'])
  },
  created() {
    this.FetchAuthUser()
    this.$router.beforeEach(() => {
      this.isPageReady = false
    })
  }
}
</script>