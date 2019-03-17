/*
 * 注册全局组件
 * swiper swiperBanner
 * mint-u组件，
 * 自定义公共组件，
 */
import Vue from 'vue'
// 自定义公共组件
// mint-u组件
// import {
// 		 CellSwipe,
// 		 DatetimePicker,
// 		 Popup,
// 		 Picker,
		 // MessageBox
		// } from 'mint-ui'


// mint-u组件
// Vue.component('mt-cell-swipe', CellSwipe);
// Vue.component('mt-datetime-picker', DatetimePicker);
// Vue.component('mt-popup', Popup);
// Vue.component('mt-picker', Picker);
// Vue.component('mt-MessageBox', MessageBox);

// 自定义公共组件
// Vue.component('v-footer', ()=>import('./footer.vue'));
Vue.component('v-header', ()=>import('./header.vue'));
// Vue.component('v-bottom', ()=>import('./bottom.vue'));
