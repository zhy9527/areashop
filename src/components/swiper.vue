<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperSlides" :key="item.id">I'm Slide {{ item }}</swiper-slide>
    </swiper>
</template>

<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data: function() {
    return {
        swiperOption: {
          // autoplay: 3500,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
  },
  mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   let swiperSlides = this.swiperSlides
      //   if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      // }, 3000)
    },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
@import '../../node_modules/swiper/dist/css/swiper.min.css';
</style>