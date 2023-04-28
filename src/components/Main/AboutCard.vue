<template>
    <div class="col-md-4 col-sm-6 col-12 mb-3 mb-md-0">
        <div class="text-center rounded-5 px-3 py-4 about-card" :class="indx == 0 ? 'card-one' : (indx == 1 ? 'card-two' : 'card-three')">
            <img :src="'./imgs/' + img + '.png'" alt="">
            <h4 class="mt-3">
                {{ title }}
            </h4>
            <div>
                {{ paragraph }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AboutCard",
    props: {
        img: String,
        title: String,
        paragraph: String,
        indx: Number
    },

    data() {
    }, 
  }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

        h4 {
            font-weight: 600;
            font-size: 2rem;
        }
        .about-card{
            border: 1px solid $dc-misc-two;
            height: 100%;
            cursor: pointer;
        }
        .card-one {
            background-image: linear-gradient(to top, $dc-card-one, #FFFFFF);
            &:hover{
                background-image: linear-gradient(to bottom, $dc-card-one, #FFFFFF);
            }
        }
        .card-two {
            background-image: linear-gradient(to top, $dc-card-two, #FFFFFF);
            &:hover{
                background-image: linear-gradient(to bottom, $dc-card-two, #FFFFFF);
            }
        }
        .card-three {
            background-image: linear-gradient(to top, $dc-card-three, #FFFFFF);
            &:hover{
                background-image: linear-gradient(to bottom, $dc-card-three, #FFFFFF);
            }
        }
</style>