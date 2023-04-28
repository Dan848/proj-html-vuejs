<template>
    <!-- NAVBAR -->
    <div class="container">
        <div class="d-flex justify-content-between align-items-center py-3">
            <!-- Logo -->
            <div>
                <img :src="'./imgs/' + logo + '.png'" alt="Logo">
            </div>
            <!-- Nav Links -->
            <ul class="list-unstyled d-flex gap-3 text-capitalize mb-0">
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.href"
                    :class="[isHeader ? 'color-light' : 'color-dark', {'cta-btn btn-template': index === links.length - 1 && isHeader}]">
                    {{ link.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- /NAVBAR -->
</template>

<script>
    export default {
        name: "NavLogo",
        props: {
            isHeader: Boolean,
            logo: String,
            links: Array
        }
    }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

    a {
        font-weight: 600;
        &:hover {
                color: $dc-secondary-two;
            }
    }

    .color-light {
        color: $dc-white;
    }
    .color-dark {
        color: $dc-black;
    }
</style>