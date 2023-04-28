<template>
    <button v-show="isScrolled" @click="scrollTop">
        <i class="fa-solid fa-arrow-up"></i>
    </button>
</template>

<script>
    export default {
        name: "PageUp",
        props: {
            isScrolled: Boolean
        },
        methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
    button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $dc-primary-one;
        color: $dc-white;
        border: 1px solid $dc-misc-two;
        z-index: 999;
    }
</style>