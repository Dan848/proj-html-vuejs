<template>
    <HeroSection :obj="store.heroSection" />
</template>

<script>
import { store } from "../data/store"
  import HeroSection from './HeroSection.vue';
  export default {
    name: "AppMain",
    components: {
        HeroSection
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