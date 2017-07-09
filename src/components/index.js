/*
 * 注册全局组件
 * swiper swiperBanner
 * mint-u组件，
 */
import Vue from 'vue'
// 自定义
import Footer from './footer.vue'
import SwiperBanner from './swiper.vue'
// mint-u组件
import { CellSwipe,
		 
		} from 'mint-ui'


Vue.component('swiper', SwiperBanner);
Vue.component('mt-cell-swipe', CellSwipe);
Vue.component('v-footer', Footer);
