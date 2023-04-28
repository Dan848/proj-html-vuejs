<template>
    <!-- PORTFOLIO SECTION -->
    <section class="portfolio-section">
        <div class="container mb-5">
            <div class="row justify-content-center mb-4">
                <div class="col-12 col-lg-8 col-xxl-6">
                    <BaseSection
                    class="text-center"
                    :sub-title="store.portfolioSection.subTitle"
                    :title="store.portfolioSection.title"
                    :paragraph="store.portfolioSection.paragraph"
                    :theme-color="true"
                    />
                </div>
            </div>
            <div class="row mb-4 g-4">
                <div v-for:="img in store.portfolioSection.cards" class="col-md-6 col-12">
                    <img class="img-fluid" :src="'./imgs/' + img + '.png'" alt="">
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <a class="btn-template portfolio-btn" href="#">{{ store.portfolioSection.button }}</a>
            </div>
        </div>
    </section>
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "../Misc/BaseSection.vue";
  export default {
    name: "PortfolioSection",
    components: {
        BaseSection
    },
    data() {
        return {
            store
        };
    },
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
    .portfolio-section {
        padding-top: 100px;
        .portfolio-btn{
            color: $dc-primary-one;
            border: 1px solid $dc-secondary-one;
        }
    }
</style>