<template>
    <!-- HERO -->
    <div class="hero">
        <!-- Hero Background -->
        <div class="hero-bg left-man">
            <img src="/imgs/left-man.png" alt="left-man">
        </div>
        <div class="hero-bg right-man">
            <img src="/imgs/right-man.png" alt="right-man">
        </div>
        <div class="hero-bg left-dots">
            <img src="/imgs/dots-left.png" alt="dots-left">
        </div>
        <div class="hero-bg right-dots">
            <img src="/imgs/dots-right.png" alt="dots-right">
        </div>
        <div class="hero-bg globe-1">
            <img src="/imgs/globe1.png" alt="globe1">
        </div>
        <div class="hero-bg globe-2">
            <img src="/imgs/globe2.png" alt="globe2">
        </div>
        <div class="hero-bg globe-3">
            <img src="/imgs/globe3.png" alt="globe3">
        </div>
        <div class="hero-bg light">
            <img src="/imgs/light.png" alt="light">
        </div>
        <div class="hero-bg shape-bot">
            <img src="/imgs/bottom-shape.png" alt="shape-bottom">
        </div>
        <!-- Hero Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <h5 class="mb-3">{{ obj.subTitle }}</h5>
                    <h1>{{ obj.title.lineOne }}</h1>
                    <h1 class="mb-2">{{ obj.title.lineTwo }}</h1>
                    <p>{{ obj.paragraph }}</p>
                    <div class="d-flex justify-content-center align-items-center mb-5">
                        <a class="cta-btn btn-template fw me-2" href="#">{{ obj.buttons.primary }}</a>
                        <a class="cta-btn-two btn-template ms-2" href="#">{{ obj.buttons.secondary }}</a>
                    </div>
                    <div class="jumbotron">
                        <img class="img-fluid" :src="'./imgs/' + obj.img + '.png'" :alt="obj.img">
                        <div class="play-button">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /HERO -->
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
@use "../../assets/styles/partials/variables" as *;
    .hero {

        padding-top: 150px;
        background: url("./imgs/banner-bg.png");
        background-size: cover;
        position: relative;

        //Make background a little bit darker for visibility
        &::before{
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.1);
        }
        .hero-bg {
            position: absolute;
            overflow: hidden;
            &.left-man {
                z-index: 60;
                top: 25%;
                left: 2%;
                max-width: 280px;
                animation: moveUpDown 4s ease-in-out infinite;
            }
            &.right-man {
                z-index: 60;
                top: 25%;
                right: 2%;
                max-width: 280px;
                animation: moveUpDown 5s ease-in-out infinite;
            }
            &.left-dots {
                z-index: 10;
                top: 10%;
                left: 0;
                right: 50%;
            }
            &.right-dots {
                z-index: 10;
                top: 10%;
                right: 0;
                left: 50%;
            }
            &.globe-1 {
                z-index: 40;
                top: 10%;
                left: 10%;
                max-width: 110px;
                animation: rotate 5s linear infinite reverse;

            }
            &.globe-2 {
                z-index: 20;
                right: 30%;
                max-width: 95px;
                animation: rotate 3s linear infinite;
            }
            &.globe-3 {
                z-index: 30;
                top: -20%;
                left: 40%;
                max-width: 250px;
            }
            &.light {
                z-index: 50;
                top: 10%;
                right: 5%;
                max-width: 110px;
            }
            &.shape-bot {
                z-index: 70;
                bottom: 0;
                left: 0;
                width: 100%;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }

        .container{
            position: relative;
            z-index: 100;
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
                position: relative;
                .play-button{
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background-color: #a615ea;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    color: $dc-white;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-30px) translateX(-30px)
                }
            }

            .cta-btn-two {
                background-color: transparent;
                border: 1px solid white;
                color: $dc-white!important;
            }
        }
    }

    @media screen and (max-width: 1400px) {
        .left-man {
        max-width: 200px!important;
        }
        .right-man {
        max-width: 200px!important;
        }
    }
</style>