<template>
  <div class="container pt-xxl-5 h-100">
    <div class="container my-5 title text-center border bg-light height">
      League of Legends
      <div class="open" > <DropDown  :items="tournaments_list"></DropDown></div>
    </div>
    <div class="container my-5 title text-center border bg-light height">
      TFT:
      <div class="open" > <DropDown  :items="tournaments_list"></DropDown></div>
    </div>
    <div class="container my-5 title text-center border bg-light height">
      CS:GO
      <div class="open" > <DropDown  :items="tournaments_list"></DropDown></div>
    </div>
  </div>
</template>
<script>

import DropDown from './DropDown'
export default {
  name: "TheTournaments",
  components:
      {
        DropDown
      },
  data(){
    return {
      tournaments_list: [
        {
          title: 'Tournament 1'
        },
        {
          title: 'Tournament 2'
        },
        {
          title: 'Tournament 3'
        }
      ]
    }
  }
}
</script>
<style>

.height{
  height: 100px;
}
.open{
  padding-left: 90%;
  padding-top: 10px;
  font-size: 300%;
  color: gold;
  border: 1px;
}
.open:hover{
  font-size: 310%;
  cursor: pointer;
  border-bottom: gold;
}

</style>