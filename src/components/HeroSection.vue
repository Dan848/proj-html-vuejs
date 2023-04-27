<template>
    <div class="hero">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 text-center">
                    <h5 class="mb-3">{{ obj.subTitle }}</h5>
                    <h1>We Animate</h1>
                    <h1 class="mb-2">{{ obj.title }}</h1>
                    <p>{{ obj.paragraph }}</p>
                    <div class="d-flex justify-content-center align-items-center mb-5">
                        <a class="cta-btn fw me-2" href="#">{{ obj.buttons.primary }}</a>
                        <a class="cta-btn-two ms-2" href="#">{{ obj.buttons.secondary }}</a>
                    </div>
                    <div class="jumbotron">
                        <img class="img-fluid" :src="obj.img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HeroSection",
    props: {
        obj: Object
    },

    data() {

    }, 
  }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
    .hero {
        padding-top: 150px;
        background: url("./imgs/banner-bg.png");
        background-size: cover;
        position: relative;
        h5 {
            color: $dc-secondary-two;
            font-weight: 600;
        }
        h1 {
            color: $dc-white;
            font-weight: 700;
            font-size: 4rem;
        }
        p {
            color: $dc-white;
            font-size: 1.2rem;
        }
        .jumbotron {
            transform: translateY(170px);
            margin-top: -170px;
        }
    }
</style>