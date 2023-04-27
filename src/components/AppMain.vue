<template>
    <HeroSection :obj="store.heroSection" />
    <AboutSection />
</template>

<script>
  import { store } from "../data/store";
  import HeroSection from './HeroSection.vue';
  import AboutSection from "./AboutSection.vue";
  export default {
    name: "AppMain",
    components: {
        HeroSection,
        AboutSection
    },

    data() {
      return {
        store,
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>