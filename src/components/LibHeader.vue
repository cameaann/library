<template>
  <div class="header">
    <div class="header-container">
      <div class="header-brand">
        <img src="../assets/images/logo.svg" alt="" class="logo" />
        <div class="title-box">
          <span class="header-title header-title-normal"
            >Областная детская</span
          >
          <span class="header-title header-title-big">Библиотека</span>
          <span class="header-title header-title-normal">им. И.А. Крылова</span>
        </div>
      </div>
      <div class="menu_button" @click="toggleMenu()">
        <i class="icon-menu"></i>
      </div>

        <ul class="nav"  @mouseleave="toggleMenu()"
        :class="{ responsive: isResponsive }">
          <li v-for="item in menu" v-bind:key="item.name" >
            <a @click="navigate(item.route)" :class="{ active: isActive(item.route) }"
            class="nav__item" >
              {{ item.name }}
            </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js';

export default {
  data() {
    return {
      currentRoute: router.currentRoute,
      isResponsive: false,
      menu: [
        { name: "Главная", route: "/", active: "/" == router.currentRoute.path },
        {
          name: "Контакты",
          route: "/contacts",
          active: "/contacts" == router.currentRoute.path,
        },
        {
          name: "О библиотеке",
          route: "/about",
          active: "/about" == router.currentRoute.path,
        },
        {
          name: "События",
          route: "/events",
          active: "/events" == router.currentRoute.path,
        },
      ],
    };
  },
  methods: {
    navigate(route) {
      router.push(route);
    },
    isActive(route) {
      const bool = (route === this.currentRoute.path);
      return bool;
    },
    toggleMenu() {
      this.isResponsive = !this.isResponsive;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
