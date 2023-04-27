<template>
  <AppHeader
  :logo="store.logoImg.primary"
  :links="store.headerLinks"
  />
  <AppMain />
</template>



<script>
  import { store } from "./data/store";
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      AppMain
    },

    data() {
      return {
        store,
        scrolled: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const isScrolled = scrollTop > 0
        this.scrolled = isScrolled
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
