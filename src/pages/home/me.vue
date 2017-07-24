<template>
    <div class="me">
        <div class="info">
            <img src="../../assets/images/common/logo.png" alt="">
            <div class="name">
                <em>王海港</em>
            </div>
        </div>
        <div class="order-nav">
            <router-link to="orders">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-quanbudingdan"></use>
                </svg>
                <span>全部订单</span>
            </router-link>
            <router-link to="orders">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon_daifukuan"></use>
                </svg>
                <span>待支付</span>
            </router-link>
            <router-link to="orders">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-daifahuo"></use>
                </svg>
                <span>待发货</span>
            </router-link>
        </div>
        <div class="order-nav">
            <router-link to="orders">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youhuiquan"></use>
                </svg>
                <span>优惠券</span>
            </router-link>
            <router-link to="addressList">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouhuodizhi"></use>
                </svg>
                <span>地址管理</span>
            </router-link>
            <a href="tel:15639270772">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-lianxikefu"></use>
                </svg>
                <span>联系客服</span>
            </a>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'addressList',
    beforeCreate: function () {
        // console.log(Config)
        this.$store.dispatch('getHomeAds');
    },
    computed: {
        ...mapState({
            home: state => state.home,
        })
    },
    methods: {
        tab: function(index){
            this.$store.commit('CURRENT_CLASS_TAB', index)
        }
    },
    components: {
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .item{
        background: #fff;
        padding: .08rem;
        @include display;
        @include align-items;
        margin-bottom: .1rem;
    }
    .info{
        padding: .1rem .08rem;
        @include flex;
        line-height: 1.8;
        @include display;
        @include align-items;
        background: rgba(255,255,255,.6);
        border-bottom: .01rem solid #fff;
        img{
            width: .6rem;
            height: .6rem;
            border-radius: 100%;
            margin-right: .08rem;
        }
        em{
            font-size: .16rem;
            color: $gray;
        }
    }
    .order-nav{
        margin: .1rem 0;
        @include display;
        @include align-items;
        a{
            text-align: center;
            @include flex;
            color: $gray;
            background: #fff;
            margin:0 .01rem;
            padding: .1rem;
        }
        .icon{
            display: block;
            width: .3rem; 
            height: .3rem;
            overflow: hidden;
            fill: $gray;
            margin: .06rem auto;
        }
        span{
            display: block;
            font-weight: 200;
        }
    }
    
</style>
