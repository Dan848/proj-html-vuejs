<template>
  <div>
    Data Created
  </div>
</template>



<script>
  import { store } from "./data/store";
  export default {
    name: "App",
    components: {     
    },

    data() {
      return {
        store,
        scrolled: false
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>
