<template>
  <div class="row my-5 p-5" v-for="cards in groupedCards" :key="cards">
    <div class="col-md-3 col-sm-1" v-for="(card, index) in cards" :key="index">
      <div class="card">
        <img class="card-img-top" :src="card.img" alt="Card image cap">
        <div class="card-body" style="color: #d0cece">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">{{card.info}}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
          info: 'Some quick example text to build on the card title and make up the bulk of',
          img: 'https://material.io/static/assets/result.png'
        },
        {
          info: 'Some quick example text to build on the card title and make up the bulk of',
          img: 'https://material.io/static/assets/result.png'
        },
        {
          info: 'Some quick example text to build on the card title and make up the bulk of',
          img: 'https://material.io/static/assets/result.png'
        },
        {
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
}
</style>