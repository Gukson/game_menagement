<template>
  <div class="row g-md-4 py-4">
    <div class="col-md-3 mx-auto col-10" v-for="(card, index) in cards" :key="index">
      <div class="card p-2">
        <img :src="card.img" class="card-img-top" alt="...">
        <div class="card-body" style="color: #d0cece">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">{{card.message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsChoose",
  data() {
    return {
      cards: [
        {
          message: '>This is a longer card with supporting text below as a natural lead-in to additional content.',
          img: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
        },
        {
          message: '>This is a longer card with supporting text below as a natural lead-in to additional content.',
          img: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
        },
        {
          message: '>This is a longer card with supporting text below as a natural lead-in to additional content.',
          img: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background-color:#151414;
  border: none;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border: 3px solid #05b005;
  }
}
</style>