<template>
    <!-- ABOUT SECTION -->
    <section class="about-section">
        <!-- About Container -->
        <div class="container mt-5">
            <!-- Content -->
            <div class="row justify-content-center mb-4">
                <div class="col-lg-7 col">
                <BaseSection 
                class="text-center"
                :sub-title="store.aboutSection.subTitle"
                :title="store.aboutSection.title"
                :paragraph="store.aboutSection.paragraph"
                :theme-color="true"
                />
                </div>
            </div>
            <!-- Cards -->
            <div class="row justify-content-center align-items-stretch to-right">
                <AboutCard
                v-for="(card, index) in store.aboutSection.cards" :key="index"
                :indx="index"
                :img="card.img"
                :title="card.title"
                :paragraph="card.paragraph"
                />
            </div>                    
        </div>
        <!-- About Background -->
        <div class="smart-man">
            <img src="/imgs/smart.png" alt="smart-man">
        </div>
        <div class="rocket">
            <img class="img-fluid" src="/imgs/smart4.png" alt="rocket">
        </div>
    </section>
    <!-- /ABOUT SECTION -->
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "./BaseSection.vue";
  import AboutCard from "./AboutCard.vue";
  export default {
    name: "AboutSection",
    components: {
        BaseSection,
        AboutCard
    },
    data() {
        return {
            store
        }
    }, 
  }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

    .about-section {
        padding-top: 220px;
        padding-bottom: 100px;
        position: relative;
        .smart-man {
            position: absolute;
            z-index: 10;
            top: 10%;
            left: 0;
            right: 60%;
            max-width: 500px;

            img{
                width: 100%;
                height: 100%;
            }
        }
        .rocket {
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: 100px;
        }
        .container{
            position: relative;
            z-index: 100;
            .to-right{
                margin-left: 20%;
            }
        }
    }
    @media screen and (max-width: 992px) {
        .to-right {
            margin-left: 0!important;
        }
        .smart-man{
            top: 12%!important;
            max-width: 150px!important;
        }
    }
    @media screen and (max-width: 768px) {
        .smart-man{
            top: 10%!important;
            max-width: 100px!important;
        }
    }
</style>