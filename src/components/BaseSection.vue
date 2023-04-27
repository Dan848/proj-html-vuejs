<template>
    <div class="text-center">
        <h5 v-if="subTitle" :class="themeColor ? 'color-primary-two' : 'color-secondary-two'" class="mb-3">{{subTitle}}</h5>
        <h2 v-if="title" :class="themeColor ? 'color-primary-one' : 'color-light'" class="mb-2">{{ title }}</h2>
        <p v-if="paragraph">{{ paragraph }}</p>
    </div>
</template>

<script>
  export default {
    name: "BaseSection",
    props: {
        subTitle: String,
        title: String,
        paragraph: String,
        themeColor: Boolean
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
            font-weight: 700;
            font-size: 3.5rem;
        }
        p {
            color: $dc-primary-one;
        }
        .color-primary-one {
            color: $dc-primary-one;
        }
        .color-light {
            color: $dc-white
        }
        .color-primary-two{
            color: $dc-primary-two;
        }
        .color-secondary-two{
            color: $dc-secondary-two;
        }
</style>