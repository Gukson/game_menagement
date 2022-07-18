<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://picsum.photos/600/300" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://picsum.photos/seed/picsum/600/300" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/600/300" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "GameSlider",
  data() {
    return {
      img_index: 0
    }
  },
  methods: {
    ChangePhoto(direction) {
      let newPhoto = this.img_index + direction
      if (newPhoto < 0) {return this.img_index = 2}
      if (newPhoto > 2) {return this.img_index = 0}
      return this.img_index = newPhoto
    }
  }
}
</script>

<style scoped>
/*https://i.wpimg.pl/O/616x353/d.wpimg.pl/450717953-1482742039/counter-strike.JPG*/
/*https://www.creocommunity.pl/wp-content/uploads/2022/04/Przewodnik-i-wskazowki-jak-zaczac-grac-w-League-of-Legends.jpg*/
/*https://i.ytimg.com/vi/D8jI6NAzC_4/maxresdefault.jpg*/
</style>