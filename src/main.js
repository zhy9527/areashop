import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './components/index'  //注册全局组件
import './utils'
import store from './store'
import title from './utils/title'
import * as filters from './utils/filters'	//过滤器
import * as prototype from './utils/prototype'	//APP交互协议
import router from './router'



if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastClick.attach(document.body);
    }, false);
}

Vue.mixin(title)
Vue.use(prototype)
Vue.use(VueLazyload)

// 过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})