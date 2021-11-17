<template>
  <div class="header">
    <div class="header-container">
      <img src="../assets/images/logo.svg" alt="" class="logo">
      <div class="title-box">
        <span class="header-title header-title-normal">Областная детская</span>
        <span class="header-title header-title-big">Библиотека</span>
        <span class="header-title header-title-normal">им. И.А. Крылова</span>
      </div>
      <div class="social-links">
        <a href="" class="icon" >
            <i class="icon-vkontakte"></i>
        </a>

        <i class="icon-facebook"></i>
        <i class="icon-instagram"></i>
        <i class="icon-phone"></i>
        <i class="icon-enquiry"></i>
      </div>
    </div>
    <Navigation/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
  components: {
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
