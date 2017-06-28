import Vue from 'vue'
import Router from 'vue-router'
// common
import notFoundComponent from '../components/notFoundComponent.vue'

import home from '../pages/home/components/home.vue'
import hello from '../pages/hello/components/hello.vue'

// 安利项目
import amway from '../pages/amway/index.vue'
import goodsList from '../pages/amway/goodsList.vue'
import incomeDetail from '../pages/amway/incomeDetail.vue'
import withdrawLog from '../pages/amway/withdrawLog.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    history: false,
    hashbang: true,
    routes: [
        { path: '*', component: notFoundComponent },
        { path: '/', component: home },
        { path: '/hello', component: hello },
        { path: '/amway', component: amway,
            children: [
                { path: '', component: goodsList },
                { path: '/amway/incomeDetail', component: incomeDetail },
                { path: '/amway/withdrawLog', component: withdrawLog }
            ]
        },
        
    ]
})
