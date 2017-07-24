/*
 * 注册全局组件
 * swiper swiperBanner
 * mint-u组件，
 * 自定义公共组件，
 */
import Vue from 'vue'
// 自定义公共组件
import Footer from './footer.vue'
import SwiperBanner from './swiper.vue'
// mint-u组件
import { CellSwipe,
		 DatetimePicker,
		 Popup,
		 Picker
		} from 'mint-ui'


Vue.component('swiper', SwiperBanner);
// mint-u组件
Vue.component('mt-cell-swipe', CellSwipe);
Vue.component('mt-datetime-picker', DatetimePicker);
Vue.component('mt-popup', Popup);
Vue.component('mt-picker', Picker);
// 自定义公共组件
Vue.component('v-footer', Footer);
