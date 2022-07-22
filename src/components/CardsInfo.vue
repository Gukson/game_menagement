<template>
  <div class="row my-5 p-5" v-for="cards in groupedCards" :key="cards">
    <div class="col-md-3 col-sm-1" v-for="(card, index) in cards" :key="index">
      <div class="card">
        <img class="card-img-top" :src="card.img" alt="Card image cap">
        <div class="card-body" style="color: #d0cece">
          <h5 class="card-title text-center">{{card.title}}</h5>
          <p class="card-text text-center">{{card.info}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsInfo",
  data() {
    return {
      cards: [
        {
          title: 'TFT: Teamfight Tactics',
          info: 'Teamfight Tactics to strategiczna gra bitewna PvP, gdzie na planszach rozstawia się jednostki, zupełnie jak w szachach.',
          img: 'https://play-lh.googleusercontent.com/gN1MLe5Weu-jN1PPPD2wJVVGWQOOpQVvPuMy7CU2JecziGWMqTB5CBuYP8_InXIsWQ_0'
        },
        {
          title: 'League of Legends',
          info: 'League of Legends to drużynowa gra strategiczna, w której dwie drużyny po pięć osób walczą ze sobą, by zniszczyć bazę przeciwnika.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png'
        },
        {
          title: 'Counter Strike Global Offensive',
          info: 'W grze do walki stają dwie drużyny: terroryści i antyterroryści. Ich zadaniem jest eliminacja przeciwników lub wykonanie określonego zadania.',
          img: 'https://www.freeiconspng.com/thumbs/csgo-icon/csgo-icon-1.png'
        },
        {
          title: 'Team Fight Tactics',
          info: 'Some quick example text to build on the card title and make up the bulk of',
          img: 'https://material.io/static/assets/result.png'
        },
        // {
        //   info: 'Some quick example text to build on the card title and make up the bulk of',
        //   img: 'https://material.io/static/assets/result.png'
        // }
      ]
    }
  },
  computed:{
    groupedCards() {
      let chunk = require('chunk')
      return chunk(this.cards, 5)
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background-color:#151414;
  border: none;
  &:hover {
    transform: scale(1.1);
    //border: 3px solid #05b005;
  }
}
</style>