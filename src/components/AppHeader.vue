<template>
    <!-- HEADER -->
    <header :class="{'make-absolute' : true, 'make-fixed' : isScrolled}">
        <NavLogo 
        :isHeader="true"
        :logo="store.logoImg.primary"
        :links="store.headerLinks"
        />
    </header>
    <!-- /HEADER -->
</template>

<script>
    import { store } from "../data/store";
    import NavLogo from './Misc/NavLogo.vue';
    export default {
        name: "AppHeader",
        components: {
            NavLogo
        },
        props: {
            isScrolled: Boolean
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
    .make-absolute {
        top: 0px;
        left: 0px;
        right: 0px;
        position: absolute;
        background: transparent;
        transition: background-color 0.5s ease, position 0.5s ease;
        z-index: 888;
    }

    .make-fixed {
        z-index: 888;
        position: fixed !important;
        width: 100%;
        background-color: $dc-primary-one !important; //COLOR AFTER SCROLL
        transition: background-color 0.5s ease, position 0.5s ease;
    }

    a {
        color: $dc-white;
        font-weight: 600;
    }
</style>