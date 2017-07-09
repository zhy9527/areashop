<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperDate.slide" :key="item.id" :style="imgHeight">
            <a :href="item.url">
                <img :src="item.content" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: this.swiperDate.options
        }
    },
    props: {
        swiperDate: {
            type: Object,
            default: () => swiperDate
        }
    },
    computed: {
        imgHeight: function () {
            return {
                'height': this.swiperDate.options.height
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped lang="scss">
    @import '../../node_modules/swiper/dist/css/swiper.min.css';
    @import '../assets/scss/mixin/mixins';
    .swiper-pagination-bullet-active{
        background: $primary;
    }
</style>