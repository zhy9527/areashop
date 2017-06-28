<template>
    <div class="has-footer">
        <footer class="main-nav">
            <div class="footer-item" v-bind:class="{active: $store.state.amway.tab=='home'}" @click="home">
                <i class="iconfont icon-homeclick"></i>
                <span>首页</span>
            </div>
            <div  class="footer-item" v-bind:class="{active: $store.state.amway.tab=='me'}" @click="me">
                <i class="iconfont icon-shouyiweixuanzhong"></i>
                <span>我的收益</span>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../store/mutation-types'
export default {
    name: 'footer',
    methods: {
        ...mapMutations({
            home: types.AMWAY_TAB_HOME,
            me: types.AMWAY_TAB_ME
        })
    }
}
</script>

<style lang='scss' scoped>
    @import '../../../assets/scss/mixin/mixins';
    .has-footer{
        margin-bottom: .42rem;
    }
    .main-nav {
        @include fix-pos(auto, 0);
        @include display;
        box-shadow:0px -2px 2px 0px rgba(0,0,0,0.15);
        background: #fff;
        height: .42rem;
        font-size: .1rem;
        line-height: $line-height-s;
        div {
            width: 100%;
            color: #898989;
            display: block;
            text-align: center;
            @include flex();
            &.active {
                color: $primary;
            }
        }
        img {
            margin: .03rem auto .04rem;
            height: .21rem;
            width: auto;
        }
        i {
            display: block;
            font-size: .24rem;
        }
    }
</style>