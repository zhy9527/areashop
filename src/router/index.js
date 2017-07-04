import Vue from 'vue'
import Router from 'vue-router'
// common
import notFoundComponent from '../components/notFoundComponent.vue'

/*
 * 首页组件
 * 包含首页，商品分类，商品分类列表，商品详情，购物车
 */
import homeIndex from '../pages/home/index.vue'
import home from '../pages/home/home.vue'
import goodsClass from '../pages/home/class.vue'
import goods from '../pages/home/goods.vue'
import cart from '../pages/home/cart.vue'


// import hello from '../pages/hello/components/hello.vue'

// 安利项目
// import amway from '../pages/amway/index.vue'
// import goodsList from '../pages/amway/goodsList.vue'
// import incomeDetail from '../pages/amway/incomeDetail.vue'
// import withdrawLog from '../pages/amway/withdrawLog.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    history: false,
    hashbang: true,
    routes: [
        { path: '*', component: notFoundComponent },
        { path: '/', component: home },
        // { path: '/hello', component: hello },
        { path: '/home', component: homeIndex,
            children: [
                { path: '', component: home },
                // { path: '/home/category', component: category },
                // { path: '/home/goodsDetail', component: goodsDetail }
            ]
        },
        { path: '/class', component: goodsClass },
        { path: '/goods', component: goods },
        { path: '/cart', component: cart },
        
    ]
})
