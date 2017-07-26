<template>
    <div class="orders">
        <div class="item">
            <dl class="l_r">
                <dt>160414184415</dt>
                <dd><em>待付款</em></dd>
            </dl>
            <router-link class="goods" to="order">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>(清甜原味清甜原味清甜原味清甜原味清甜原味清甜原味)</dt>
                    <dd>180克</dd>
                </dl>
                <div class="qty">x2</div>
            </router-link>
            <dl class="l_r">
                <dd>共1个商品 合计:<em>￥108.00</em></dd>
            </dl>
            <div class="btn">
                <span to="order">
                    取消订单
                </span>
                <span to="order">
                    <em>立即支付</em>
                </span>
            </div>
        </div>
        <div class="item">
            <dl class="l_r">
                <dt>160414184415</dt>
                <dd><em>待付款</em></dd>
            </dl>
            <router-link class="goods" to="order">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>(清甜原味清甜原味清甜原味清甜原味清甜原味清甜原味)</dt>
                    <dd>180克</dd>
                </dl>
                <div class="qty">x2</div>
            </router-link>
            <dl class="l_r">
                <dd>共1个商品 合计:<em>￥108.00</em></dd>
            </dl>
            <div class="btn">
                <span to="order">
                    取消订单
                </span>
                <span to="order">
                    <em>立即支付</em>
                </span>
            </div>
        </div>
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
    title () {
        return '订单列表'
    },
    components: {
    }

}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.item{
    background: #fff;
    margin-bottom: .1rem;
    color: $gray;
    font-size: .13rem;
    em{
        color: $primary;
    }
}
.l_r{
    padding: 0 .08rem;
    line-height: .36rem;
    dt{

    }
    dd{
        text-align: right;
    }
}
.goods{
    @include display;
    @include align-items;
    color: $gray;
    padding: .1rem .08rem;
    border-top: .01rem solid #eee;
    border-bottom: .01rem solid #eee;
    img{
        width: .65rem;
        height: .65rem;
        border-radius: .04rem;
    }
    dl{
        @include flex;
        margin-left: .1rem;
        div{
            line-height: 1;
        }
    }
    dt{
        @include ellipsis(2);
        font-size: .13rem;
        height: .36rem;
        line-height: .18rem;
    }
    dd{
        @include ellipsis;
        color: $gray-light;
        margin-top: .14rem;
        height: .13rem;
        line-height: 1;
        font-size: .11rem;
    }
    .qty{
        margin-left: .1rem;
        color: $gray-light;
    }
}
.btn{
    border-top: .01rem solid #eee;
    line-height: .42rem;
    text-align: right;
    span{
        display: inline-block;
        color: $gray-light;
        border: .01rem solid $line;
        line-height: .25rem;
        padding: 0 .15rem;
        border-radius: .26rem;
        margin-right: .1rem;
    }
}
</style>
