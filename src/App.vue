<template>
  <TheNavbar/>
  <router-view :key="`${$route.path}${JSON.stringify($route.query)}`"/>
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

export default {
  components: {TheNavbar},
  created() {

  }
}
</script>