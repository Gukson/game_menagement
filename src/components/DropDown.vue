<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <svg viewBox="0 0 1030 638" width="30px" >
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13
      68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFD700FF">
      </path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
         <div v-for="(item,i) in items" :key="i" class="menu-item">
           <a :href="item.link">{{ item.title }}</a>
         </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Drop_Down",
  props: ['title', 'items'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.menu-item svg {
  margin-left: 10px;
}
.sub-menu {
  position: absolute;
  background-color: #222;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all .5s ease-out;
}
</style>