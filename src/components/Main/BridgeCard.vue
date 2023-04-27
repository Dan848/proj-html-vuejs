<template>
    <div class="col-md-3 col-sm-6 mb-md-0 mb-4">
        <div class="bridge-card rounded-5 text-nowrap">
            <h2 class="">{{item}}</h2>
            <p class="m-0">{{ text }}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "BridgeCard",
    props: {
        item: String,
        text: String
    },
    data() {
    },
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
    .bridge-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid $dc-misc-two;
        padding: 3rem 5rem;
        h2 {
            color: $dc-white;
            font-weight: 600;
            font-size: 3rem;
        }
        p {
            color: $dc-secondary-two;
        }
    }
</style>