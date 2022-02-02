<template>
  <div class="header">
    <div class="header-container">
      <div class="header-brand">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="" class="logo" />
        </router-link>
        <div class="title-box">
          <span class="header-title header-title-normal"
            >Областная детская</span
          >
          <span class="header-title header-title-big">Библиотека</span>
          <span class="header-title header-title-normal">им. И.А. Крылова</span>
        </div>
      </div>

      <ul v-show="!mobile" class="nav">
        <li
          v-for="item in menu"
          v-bind:key="item.name"
          class="nav__item"
          :class="{ active: isActive(item.route) }"
        >
          <a @click="navigate(item.route)" class="link">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <div class="menu_button" v-show="mobile">
        <i
          @click="toggleMenu"
          class="icon-menu"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="nav dropdown-nav">
          <li
            v-for="item in menu"
            v-bind:key="item.name"
            class="nav__item"
            :class="{ active: isActive(item.route) }"
          >
            <a
              @click="
                navigate(item.route);
                toggleMenu();
              "
              class="link"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  data() {
    return {
      currentRoute: router.currentRoute,
      isResponsive: null,
      mobileNav: null,
      mobile: null,
      menu: [
        {
          name: "Главная",
          route: "/",
          active: "/" == router.currentRoute.path,
        },
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
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    window.addEventListener("click", this.close);
  },
  methods: {
    navigate(route) {
      router.push(route);
    },
    isActive(route) {
      const bool = route === this.currentRoute.path;
      return bool;
    },
    toggleMenu() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 600) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    close(e) {
      if (!(this.$el == e.target || this.$el.contains(e.target))) {
        this.mobileNav = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
