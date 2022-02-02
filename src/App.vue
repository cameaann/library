<template>
  <div>
    <DemoInfo />
    <LibHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import DemoInfo from "@/components/DemoInfo.vue";
import LibHeader from "@/components/LibHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    LibHeader,
    Footer,
    DemoInfo
  },
};
</script>
