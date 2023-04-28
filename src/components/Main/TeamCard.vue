<template>
    <div class="col-sm-4 col-12 mb-3 mb-md-0">
        <div class="rounded-5 py-4 team-card">
            <div class="avatar">
                <img class="img-fluid" :src="'./imgs/' + img + '.png'" alt="">
            </div>
            <h5 class="mt-3">
                {{ title }}
            </h5>
            <div class="mb-4">
                {{ paragraph }}
            </div>
            <SocialTris />
        </div>
    </div>
</template>

<script>
  import SocialTris from '../Misc/SocialTris.vue';
  export default {
    name: "TeamCard",
    components: {
        SocialTris
    },
    props: {
        img: String,
        title: String,
        paragraph: String,
    },

    data() {
    }, 
  }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

        .team-card{
            border: 1px solid $dc-misc-one;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            position: relative;
            background-color: $dc-card-one;
            color: $dc-primary-one;
            padding: 0px 70px;
            .avatar {
                width: 200px;
                height: 200px;
                text-align: center;
                margin-bottom: -80px;
                transform: translateY(-80px);
                transition: all 0.3s;
            }

            h5 {
            font-weight: 600;
            font-size: 1.5rem;
            }
        }
</style>