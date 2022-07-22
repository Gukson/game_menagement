<template>
  <div class="container w-md-50 pt-3">
    <h1 class="text-white-50 display-3 my-5 title text-center">Twoje miejsce do rywalizacji z najlepszymi!</h1>
    <GameSlider/>
    <h1 class="text-white-50 display-4 my-5 title text-center">Rywalizuj z innymi graczami w swoich ulubionych grach!</h1>
    <CardsInfo/>
    <h1 class="text-white-50 display-4 my-5 title text-center">Zapeniamy</h1>
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
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik&display=swap');
  .title {
    font-family: 'Rubik', sans-serif;
  }
</style>
