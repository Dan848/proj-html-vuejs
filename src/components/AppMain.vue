<template>
    <HeroSection :obj="store.heroSection" />
    <AboutSection />
    <BridgeSection />
</template>

<script>
  import { store } from "../data/store";
  import HeroSection from './HeroSection.vue';
  import AboutSection from "./AboutSection.vue";
  import BridgeSection from "./BridgeSection.vue";
  export default {
    name: "AppMain",
    components: {
        HeroSection,
        AboutSection,
        BridgeSection
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