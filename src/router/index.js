import Vue from 'vue'
import Router from 'vue-router'
// common
const notFoundComponent = ()=> import('../components/notFoundComponent.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    history: false,
    hashbang: true,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition ? savedPosition : { x: 0, y: 0 };
    },
    routes: [
        { path: '*', component: notFoundComponent },
        { path: '/active', component: ()=> import('../pages/active/index.vue'),
            children: [
                { path: 'getCoupon', component:  ()=> import('../pages/active/getCoupon.vue') }
            ]
        }
    ]
})
