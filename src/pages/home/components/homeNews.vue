<template>
    <div class="news">
        <h3>小区快报: </h3>
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in newsDate" :key="item.id">
                <router-link :to="item.url">
                    {{ item.content }}
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {
                autoplay : 4000,
                direction : 'vertical',
            }
        }
    },
    props: {
        newsDate: {
            type: Array,
            default: () => newsDate
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped lang="scss">
    @import '../../../assets/scss/mixin/mixins';
    .swiper-container{
        @include flex;
        height: .4rem;
        overflow: hidden;
    }
    .news{
        @include display;
        padding: 0 .1rem;
        line-height: .4rem;
        background: #fff;
        border-bottom: .01rem solid $line;
    }
    a{
        display: block;
        color: $gray-light;
        font-size: .14rem;
        @include ellipsis;
        height: .4rem;
    }
    h3{
        font-weight: normal;
        margin: 0;
        color: $tertiary;
        width: .7rem;
        font-size: .14rem;
    }

</style>