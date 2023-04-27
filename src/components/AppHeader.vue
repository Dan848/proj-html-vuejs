<template>
    <!-- HEADER -->
    <header :class="{'make-absolute' : true, 'make-fixed' : isScrolled}">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-3">
                <!-- Logo -->
                <div>
                    <img :src="'./imgs/' + logo + '.png'" alt="Logo">
                </div>
                <!-- Nav Links -->
                <ul class="list-unstyled d-flex gap-3 text-capitalize mb-0">
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.href" :class="{ 'cta-btn': index === links.length - 1 }"> {{ link.text }} </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- /HEADER -->
</template>

<script>
    export default {
        name: "AppHeader",
        props: {
            isScrolled: Boolean,
            logo: String,
            links: Array
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