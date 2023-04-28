<template>
    <!-- BRIDGE SECTION -->
    <section class="contact-section">
        <!-- Contact Background -->
        <div class="shape-top">
            <img src="/imgs/shape-top.png" alt="shape-top">
        </div>
        <div class="shape-bot">
            <img src="/imgs/shape-bottom.png" alt="shape-bot">
        </div>      
        <!-- Contact Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 col-xxl-7 my-4">
                    <BaseSection
                    class="text-center mb-5"
                    :sub-title="store.contactSection.subTitle"
                    :title="store.contactSection.title"
                    :paragraph="store.contactSection.paragraph"
                    :theme-color="false"
                    />
                    <form action="#">
                        <input class="py-4 px-3 rounded-pill" type="email" name="userMail" id="userMail" placeholder="Enter you email">
                        <button class="btn-template cta-btn" type="button">Submit</button>
                    </form>
                </div>
            </div>
            <div class="row">
            </div>
        </div>
    </section>
</template>

<script>
  import { store } from "../../data/store";
  import BaseSection from "../Misc/BaseSection.vue";
  export default {
    name: "ContactSection",
    components: {
        BaseSection,
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
    .contact-section {
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
            form{
                position: relative;
                #userMail {
                    width: 100%;
                    border: none
                };
                button {
                    position: absolute;
                    z-index: 110;
                    top: 10px;
                    right: 15px;
                    border: 2px solid transparent;
                    &:hover {
                        color: $dc-primary-one!important;
                        border: 2px solid $dc-secondary-one!important;
                    }
                }
            }

        }
    }
</style>