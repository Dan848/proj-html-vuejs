<template>
    <!-- FOOTER -->
    <footer>
        <NavLogo 
        :isHeader="false"
        :logo="store.logoImg.footer"
        :links="store.footerLinks"
        />
        <div class="container">
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    Copyright © 2022 Softivus. All rights reserved.
                </div>
                <SocialTris />
            </div>
        </div>

        
    </footer>
    <!-- /FOOTER -->
</template>

<script>
    import { store } from "../data/store"
    import NavLogo from './Misc/NavLogo.vue';
    import SocialTris from "./Misc/SocialTris.vue";
    export default {
        name: "AppFooter",
        components: {
            NavLogo,
            SocialTris
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
    footer {
        padding-top: 100px;
    }
</style>