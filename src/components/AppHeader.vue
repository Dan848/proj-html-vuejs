<template>
    <header :class="{'make-absolute' : true, 'make-fixed' : isScrolled}">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <img src="/imgs/logo.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
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
        background-color: $dc-primary-one !important;
        transition: background-color 0.5s ease, position 0.5s ease;

    }
</style>