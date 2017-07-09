import Vue from 'vue'
import store from './store'
import App from './App.vue'
import fastClick from 'fastclick'
import './components/index'  //注册全局组件
import utils from './utils'
import router from './router'
import Common from './plugins/common.js'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

Vue.use(Common);

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})

