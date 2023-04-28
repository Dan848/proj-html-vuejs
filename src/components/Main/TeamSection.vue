<template>
    <!-- TEAM SECTION -->
    <section class="team-section">
        <!-- Team Background -->
        <div class="shape-left">
            <img src="/imgs/shape.png" alt="shape">
        </div>
        <div class="shape-right">
            <img src="/imgs/shape2.png" alt="shape2">
        </div>
        <!-- Team Container -->
        <div class="container mb-5">
            <div class="row justify-content-center mb-4">
                <div class="col-12 col-lg-8 col-xxl-6">
                    <BaseSection
                    class="text-center"
                    :sub-title="store.teamSection.subTitle"
                    :title="store.teamSection.title"
                    :paragraph="store.teamSection.paragraph"
                    :theme-color="true"
                    />
                </div>
            </div>
            <div class="row mt-5 pt-5 mb-4 g-4">
                <TeamCard 
                v-for:="(card, index) in store.teamSection.cards"
                :class="{ 'd-block': isActive(index), 'd-none' : !isActive(index)}"
                :key="index"
                :title="card.name"
                :paragraph="card.role"
                :img="card.img"
                />
            </div>
                <!-- Button Carosel -->
                <div class="d-flex justify-content-center">
                    <!-- Prev -->
                    <button @click="prevActive(store.teamSection.cards)" class="circle-ico me-1 fs-5">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div class="d-flex justify-content-center align-items-center mx-2" >
                        <i v-for="(dot, index) in store.teamSection.cards.length - 2"
                        :class="{ 'color-secondary-one' : (index === activeIndex) }"
                        class="fa-solid fa-circle mx-1">
                        </i>
                    </div>
                    <!-- Next -->
                    <button @click="nextActive(store.teamSection.cards)" class="circle-ico ms-1 fs-5">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
        </div>
    </section>
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "../Misc/BaseSection.vue";
  import TeamCard from "./TeamCard.vue";
  export default {
    name: "teamSection",
    components: {
        BaseSection,
        TeamCard
    },
    data() {
        return {
            store,
            activeIndex: 0
        };
    },
    methods: {
        isActive(index) {
            return index === this.activeIndex || index === this.activeIndex + 1 || index === this.activeIndex + 2
        },
        nextActive(arr) {
            if (this.activeIndex < arr.length - 3) {
            this.activeIndex++
            } else {
                this.activeIndex = 0
            }
        },
        prevActive(arr) {
            if (this.activeIndex === 0) {
            this.activeIndex = arr.length - 3
            } else {
            this.activeIndex--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
    .team-section {
        padding-top: 20px;
        position: relative;
        .shape-left {
            z-index: 10;
            position: absolute;
            top: 50px;
            left: 0;
        }
        .shape-right {
            z-index: 10;
            position: absolute;
            top: 0;
            right: 0;
        }
        .container{
            position: relative;
            z-index: 100;
            .circle-ico{
                color: $dc-misc-two;
            }
            .color-secondary-one {
                color: $dc-secondary-two!important;
            }
            .fa-solid.fa-circle {
                font-size: 0.65rem;
                color: $dc-misc-two;
            }
        }
    }
</style>