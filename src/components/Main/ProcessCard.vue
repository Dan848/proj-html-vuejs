<template>
    <div class="col-sm-6 col-12 mb-3 mb-md-0">
        <div class="rounded-5 px-3 py-4 about-card">
            <div class="num-card">
                {{ indx + 1 }}
            </div>
            <div class="rounded-circle overflow-hidden">
            <img :src="'./imgs/' + img + '.png'" alt="">
            </div>
            <h4 class="mt-3">
                {{ title }}
            </h4>
            <div class="para">
                {{ paragraph }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProcessCard",
    props: {
        img: String,
        title: String,
        paragraph: String,
        indx: Number
    },

    data() {
    }, 
  }
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

        .about-card{
            border: 1px solid $dc-misc-two;
            height: 100%;
            background-color: $dc-white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            position: relative;

            .num-card {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 25px;
                background-color: $dc-misc-one;
                padding: 35px 15px 5px 15px;
                border-radius: 0 0 100px 100px;
                font-weight: 500;
            }
            .rounded-circle{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: $dc-card-one;
                width: 120px;
                height: 120px;

                img{
                    width: 70px;
                    height: 70px;
                }
            }
            
            h4 {
            font-weight: 600;
            font-size: 1.7rem;
            }
        }
</style>