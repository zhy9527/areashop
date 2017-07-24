<template>
    <div class="order">
        <div class="item">
            <dl class="l_r">
                <dt>2017-05-06  13:26:30</dt>
                <dd><em>待付款</em></dd>
            </dl>
            <div class="goods" to="order">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>(清甜原味清甜原味清甜原味清甜原味清甜原味清甜原味)</dt>
                    <dd>180克</dd>
                </dl>
                <div class="qty">x2</div>
            </div>
            <div class="price">
                <dl class="l_r">
                    <dt>订单编号</dt>
                    <dd>160414184415</dd>
                </dl>
                <dl class="l_r">
                    <dt>商品总价</dt>
                    <dd>￥166.00</dd>
                </dl>
                <dl class="l_r">
                    <dt>运费</dt>
                    <dd>￥12</dd>
                </dl>
                <dl class="l_r">
                    <dt>实付金额</dt>
                    <dd>￥12</dd>
                </dl>
            </div>
            <dl class="total l_r">
                <dt>实付金额</dt>
                <dd><em>￥200</em></dd>
            </dl>
        </div>
        <div class="btn">
            <span>取消订单</span>
            <em>立即支付</em>
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
    components: {
    }

}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.item{
    margin-bottom: .1rem;
    color: $gray;
    font-size: .13rem;
    em{
        color: $primary;
    }
    &>.l_r{
        border-bottom: .01rem solid #eee;
        padding: 0 .08rem;
        line-height: .36rem;

    }
    .l_r{
        background: #fff;
        dd{
            text-align: right;
        }
    }
    .price{
        padding: .08rem;
        background: #fff;
        margin-top: .08rem;
        .l_r{
            line-height: .24rem;
            dt{
                color: $gray-light;
            }
            dd{
            }
        }
    }
    .total{
        border-top: .01rem solid #eee;
        line-height: .44rem;
        em{
            font-size: .18rem;
        }
    }
}
.goods{
    @include display;
    @include align-items;
    background: #fff;
    color: $gray;
    padding: .1rem .08rem;
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
    &:last-of-type{
        border-bottom: none;
    }
}
.btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    @include display;
    text-align: center;
    line-height: .44rem;  
    font-size: .18rem;  
    box-shadow:0px -2px 2px 0px rgba(0,0,0,0.05);
    em,span{
        @include flex;
    }
    em{
        background: $primary;
        color: #fff;
    }
    span{
        background: #fff;
        color: $gray-light;
    }
}
</style>
