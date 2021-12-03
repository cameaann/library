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
      <div class="menu_icon menu_button" @click="toggleMenu()">
        <i class="icon-menu"></i>
      </div>

      <div
        class="nav"
        @mouseleave="toggleMenu()"
        :class="{ responsive: isResponsive }"
      >
        <ul class="nav nav-second-level">
          <li v-for="item in menu" v-bind:key="item.name"
           :class="{ active: $route.name === somewhere }">
            <router-link class="nav__item" :to="{ name: somewhere }">
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <router-link
          class="nav__item"
          :class="{ active: active_el == 1 }"
          @click="activate(1)"
          to="/"
          >Главная</router-link
        >
        <router-link
          class="nav__item"
          :class="{ active: active_el == 2 }"
          @click="activate(2)"
          to="/about"
          >О библиотеке</router-link
        >
        <router-link
          class="nav__item"
          :class="{ active: active_el == 3 }"
          @click="activate(3)"
          to="/contacts"
          >Контакты</router-link
        >
        <router-link
          class="nav__item"
          :class="{ active: active_el == 4 }"
          @click="activate(4)"
          to="/events"
          >События</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/routes';

export default {
  data() {
    return {
      active_el: 1,
      isResponsive: false,
      menu: [
        { name: "Home", route: "/", active: "/" == router.currentRoute.path },
        {
          name: "Contacts",
          route: "/contacts",
          active: "/contacts" == router.currentRoute.path,
        },
        {
          name: "About",
          route: "/about",
          active: "/about" == router.currentRoute.path,
        },
        {
          name: "Events",
          route: "/events",
          active: "/events" == router.currentRoute.path,
        },
      ],
    };
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
    toggleMenu() {
      this.isResponsive = !this.isResponsive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <div class="social-links">
        <a href="" class="icon" >
            <i class="icon-vkontakte"></i>
        </a>
        <a href="" class="icon" >
            <i class="icon-facebook"></i>
        </a>
        <a href="" class="icon" >
            <i class="icon-instagram"></i>
        </a>
        <a href="" class="icon" >
            <i class="icon-phone"></i>
        </a>
        <a href="" class="icon" >
            <i class="icon-enquiry"></i>
        </a> -->
      <!-- </div> -->