<template>
    <div class="nav" :class="{ responsive: isResponsive }">
      <router-link class="nav__item" :class="{ active: active_el == 1 }" @click="activate(1)" to="/">Главная</router-link>
      <router-link class="nav__item" :class="{ active: active_el == 2 }" @click="activate(2)" to="/about">О библиотеке</router-link>
      <router-link class="nav__item" :class="{ active: active_el == 3 }" @click="activate(3)" to="/contacts">Контакты</router-link>
      <router-link class="nav__item" :class="{ active: active_el == 4 }" @click="activate(4)" to="/events">События</router-link>
    </div>
</template>

<script>
export default {
  data(){
     return {
        active_el: 1,
        isResponsive: false,
     }
  },
  methods: {
      activate(el){
         this.active_el = el;
      },
      toggleMenu(){
         this.isResponsive = !this.isResponsive;
      }
  }
}
</script>