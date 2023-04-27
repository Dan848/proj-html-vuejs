<template>
    <div class="text-center">
        <h5 class="mb-3">{{subTitle}}</h5>
        <h2 class="mb-2"> {{ title }}</h2>
        <p>{{ paragraph }}</p>
    </div>
</template>

<script>
  export default {
    name: "BaseSection",
    props: {
        subTitle: String,
        title: String,
        paragraph: String
    },

    data() {
    }, 
  }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

        h5 {
            color: $dc-primary-two;
            font-weight: 500;
        }
        h2 {
            color: $dc-primary-one;
            font-weight: 700;
            font-size: 3.5rem;
        }
        p {
            color: $dc-primary-one;
        }
</style>