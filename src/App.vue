<template>
  <div>
    <LibHeader />
    <!-- <router-view v-slot=" { Component, route }">
        <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
          mode="out-in"
        >
          <component :is="Component" />
    </transition> -->
    <router-view />
    <Footer />
    <!-- </router-view> -->
  </div>
</template>

<script>
import LibHeader from "@/components/LibHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    LibHeader,
    Footer
  },
};
</script>
