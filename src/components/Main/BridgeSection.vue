<template>
    <!-- BRIDGE SECTION -->
    <section class="bridge-section">
        <!-- Bridge Background -->
        <div class="shape-top">
            <img src="/imgs/shape-top.png" alt="shape-top">
        </div>
        <div class="shape-bot">
            <img src="/imgs/shape-bottom.png" alt="shape-bot">
        </div>
        <div class="globe">
            <img src="/imgs/globe.png" alt="globe">
        </div>        
        <!-- Bridge Container -->
        <div class="container">
            <div class="row">
                <div class="col my-4">
                    <BaseSection                    :title="store.bridgeSection.title"
                    :theme-color="false"
                    />
                </div>
            </div>
            <div class="row">
                <BridgeCard 
                v-for="card in store.bridgeSection.cards"
                :item="card.item"
                :text="card.text"
                />

            </div>
        </div>
    </section>
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "./BaseSection.vue";
  import BridgeCard from "./BridgeCard.vue";
  export default {
    name: "BridgeSection",
    components: {
        BaseSection,
        BridgeCard
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
    .bridge-section {
        background: url("./imgs/counter-bg.png");
        padding: 1px 0 1px 0;
        background-size: cover;
        position: relative;
        .globe,.shape-top,.shape-bot{
            position: absolute;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .globe {
            top: 0;
            bottom: 0;
            right: 30%;
            z-index: 10;
        }
        .shape-bot {
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 20;
            height: 36px;
        }
        .shape-top {
            top: 0px;
            left: 0;
            right: 0;
            z-index: 20;
            height: 36px;
        }
        .container {
            position: relative;
            z-index: 100;
            margin-top: 70px;
            margin-bottom: 100px;
        }
    }
</style>