<template>
  <div class="container w-md-50 pt-3">
    <h1 class="text-white-50 display-3 my-5 title text-center">Twoja platforma do tworzenia meczy online</h1>
    <GameSlider/>
    <CardsInfo/>
    <CardsChoose/>
  </div>
</template>

<script>
// @ is an alias to /src

import CardsChoose from "@/components/CardsChoose";
import CardsInfo from "@/components/CardsInfo";
import GameSlider from "@/components/GameSlider";
export default {
  name: 'HomeView',
  components: {
    GameSlider,
    CardsInfo,
    CardsChoose
  },
  created() {
    this.$emit('ready')
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik&display=swap');
  .title {
    font-family: 'Rubik', sans-serif;
  }
</style>
