<template>
  <AppHeader :isScrolled="scrolled" />
  <AppMain />
  <AppFooter />
  <PageUp :isScrolled="scrolled"/>
</template>



<script>
  import { store } from "./data/store";
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  import AppFooter from "./components/AppFooter.vue";
  import PageUp from "./components/Misc/PageUp.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      AppMain,
      AppFooter,
      PageUp
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