<template>
    <!-- Process SECTION -->
    <section class="process-section">
        <!-- Process Container -->
        <div class="container mb-5">
            <!-- Content -->
            <div class="row justify-content-end mb-4">
                <div class="col-12 col-sm-8 col-md-6 col-xxl-8">
                <BaseSection
                class="text-center text-sm-start" 
                :sub-title="store.processSection.subTitle"
                :title="store.processSection.title"
                :paragraph="store.processSection.paragraph"
                :theme-color="true"
                />
                </div>
            </div>
            <!-- Cards -->
            <div class="row justify-content-end align-items-stretch">
                <div class="col-lg-6 col-xxl-8">
                    <div class="row mb-3">
                        <ProcessCard
                        v-for="(card, index) in store.processSection.cards" :key="index"
                        :class="{ 'card-active': isActive(index), 'd-none' : !isActive(index) }"
                        :indx="index"
                        :img="card.img"
                        :title="card.title"
                        :paragraph="card.paragraph"
                        />
                    </div>
                    <!-- Button Carosel -->
                    <div class="d-flex justify-content-center justify-content-lg-start">
                        <!-- Prev -->
                        <button class="circle-ico me-1 fs-5">
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <!-- Next -->                        
                        <button @click="nextActive(store.processSection.cards)" class="circle-ico ms-1 fs-5">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>                    
        </div>
        <!-- Process Background -->
        <div class="process-thumb">
            <img src="/imgs/process-thumb.png" alt="process-thumb">
        </div>
        <div class="rocket">
            <img class="img-fluid" src="/imgs/smart4.png" alt="rocket">
        </div>
    </section>
    <!-- /PROCESS SECTION -->
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "./BaseSection.vue";
  import ProcessCard from "./ProcessCard.vue";
  export default {
    name: "ProcessSection",
    components: {
        BaseSection,
        ProcessCard
    },
    data() {
        return {
            store,
            activeIndex: 0
        }
    },
    methods: {
        isActive(index) {
            return index === this.activeIndex || index === this.activeIndex + 1
        },
        nextActive(arr) {
            if (this.activeIndex < arr.length - 2) {
            this.activeIndex++
            } else {
                this.activeIndex = 0
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

    .process-section {
        padding-top: 100px;
        padding-bottom: 70px;
        position: relative;
        .process-thumb {
            position: absolute;
            z-index: 10;
            top: 10%;
            left: -260px;
            right: 60%;
            max-width: 800px;
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
            .card-active {
                display: block
            }
            .circle-ico {
                color: $dc-misc-two;
            }
        }
    }
</style>