<template>
    <!-- SPONSOR SECTION -->
    <section class="sponsor-section">
        <div class="container mb-5">
            <div class="row justify-content-center mb-4">
                <div class="col-12 col-lg-8 col-xxl-6">
                    <BaseSection
                    class="text-center"
                    :sub-title="store.sponsorSection.subTitle"
                    :title="store.sponsorSection.title"
                    :paragraph="store.sponsorSection.paragraph"
                    :theme-color="true"
                    />
                </div>
            </div>
            <div class="row justify-content-center row-cols-1 row-cols-xxl-6 row-cols-md-3 row-cols-sm-2  mb-4 g-4">
                <div v-for:="card in store.sponsorSection.cards" class="col text-center">
                    <img class="img-fluid" :src="'./imgs/' + card.src + '.png'" :alt="card.alt">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "../Misc/BaseSection.vue";
  export default {
    name: "SponsorSection",
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
    .sponsor-section {
        padding-top: 100px;
        padding-bottom: 100px;
    }
</style>