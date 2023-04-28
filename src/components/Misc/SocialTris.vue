<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="circle-ico">
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div class="circle-ico mx-2">
            <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="circle-ico">
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SocialTris"
    }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
    .circle-ico {
        color: $dc-primary-two;
        width: 40px;
        height: 40px;
    }
</style>