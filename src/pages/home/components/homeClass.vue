<template>
    <div>
        <div class="home-class" v-for="item in classDate" :key="item.id">
            <img :src="item.img" alt="">
            <swiper :options="swiperOption" class="item">
                <swiper-slide class="goods" v-for="list in item.goods" :key="list.id">
                    <a href="">
                        <img :src="list.img" alt="">
                        <span>{{list.name}}</span>
                        <em>{{list.price}}</em>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {
                slidesPerView : 3.4,
            }
        }
    },
    props: {
        classDate: {
            type: Array,
            default: () => classDate
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
    .home-class{
        margin-top: .1rem;
        background: #fff;
    }
    .item{
        padding: .08rem 0;
    }
    .goods{
        
        text-align: center;
        line-height: .2rem;
        font-size: .12rem;
    }
    a{
        display: block;
        margin: 0 .06rem;
    }
    span {
        display: block;
        color: $gray;
        margin-top: .06rem;
        @include ellipsis;
    }
    em {
        color: $primary;
    }
</style>