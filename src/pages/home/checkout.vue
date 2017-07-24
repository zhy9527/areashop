<template>
    <div class="checkout">
        <div class="address">
            <svg class="icon">
                <use xlink:href="#icon-shouhuodizhi"></use>
            </svg>
            <div class="detail">
                <div><em>王海港</em><em>15639270773</em></div>
                <div><small>睿智禧园</small><small>1号楼2单元1802室</small></div>
            </div>
            <svg class="icon-jiantou">
                <use xlink:href="#icon-xiangyoujiantou"></use>
            </svg>
        </div>
        <dl class="time l_r">
            <dt>送达时间</dt>
            <dd  @click="open('picker3')" size="large">09:00</dd>
            <svg class="icon-jiantou">
                <use xlink:href="#icon-xiangyoujiantou"></use>
            </svg>
        </dl>
        <div class="item">
            <div class="goods">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>(清甜原味)</dt>
                    <dd>180克</dd>
                    <div><strong>￥18.00</strong></div>
                </dl>
                <div class="qty">x2</div>
            </div>
            <div class="goods">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>(清甜原味)</dt>
                    <dd>180克</dd>
                    <div><strong>￥18.00</strong></div>
                </dl>
                <div class="qty">x2</div>
            </div>
        </div>  
        <div class="price-list">
            <dl class="l_r">
                <dt>配送费 </dt>
                <dd>￥12</dd>
            </dl>
            <dl class="l_r">
                <dt>优惠券 <small>1张可用</small></dt>
                <dd>￥12</dd>
                <svg class="icon-jiantou">
                    <use xlink:href="#icon-xiangyoujiantou"></use>
                </svg>
            </dl>
            <dl class="l_r">
                <dt>促销优惠 </dt>
                <dd>￥12</dd>
            </dl>
            <dl class="l_r">
                <dd>共2件商品，合计 <em>123</em></dd>
            </dl>
        </div>
         <div class="price-list">
            <dl class="l_r">
                <dt>发票:</dt>
                <dd>不需要</dd>
                <svg class="icon-jiantou">
                    <use xlink:href="#icon-xiangyoujiantou"></use>
                </svg>
            </dl>
        </div>
        <div class="checkout-btn">
            <div class="text">待支付:</div>
            <div class="price">
                <div>
                    <small>￥</small><strong>321.10</strong>
                </div>
                <span>共优惠￥189.00</span>
            </div>
            <router-link class="btn" to="checkout">
                提交订单
            </router-link>
        </div>     
        <mt-datetime-picker
            ref="picker3"
            type="time"
            v-model="value3"
            @confirm="handleChange">
        </mt-datetime-picker>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'checkout',
    data: ()=>({
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
    }),
    beforeCreate: function () {
        // console.log(Config)
        // this.$store.dispatch('getHomeAds');
    },
    computed: {
        ...mapState({
            home: state => state.home,
        })
    },
    methods: {
        messagebox: function(index){
            console.log(index)
        },
        open(picker) {
            this.$refs[picker].open();
        },
        handleChange(value) {
            // Toast({
            //     message: '已选择 ' + value.toString(),
            //     position: 'bottom'
            // });
            console.log(value.toString())
        }
    },
    mounted: function() {
        // console.log('this is current swiper instance object', this)
        // this.swiper.slideTo(1)
    },
    components: {
    }

}
</script>
<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.checkout{
    padding-bottom: .46rem;
}
.address{
    padding: .1rem .08rem;
    background: #fff;
    @include display;
    @include align-items;
    .detail{
        @include flex;
        padding: 0 .1rem;
    }
    em{
        margin-right: .1rem;
    }
    small{
        font-size: .12rem;
        color: $gray-light;
        margin-right: .08rem;
    }
    .icon{
        width: .18rem; 
        height: .18rem;
        overflow: hidden;
        fill: $primary;
    }
}
.time{
    @include align-items;
    margin-top: .1rem;
    line-height: .44rem;
    padding: 0 .08rem;
    background: #fff;
    border-bottom: .01rem solid $line;
    dd{
        color: $primary;
        text-align: right;
        margin-right: .08rem;
    }
}
.item{
    background: #fff;
    margin:0 0 .1rem 0;
}
.goods{
    @include display;
    @include align-items;
    padding: .1rem .08rem;
    border-bottom: .01rem solid $line;
    img{
        width: .8rem;
        height: .8rem;
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
        color: $gray;
        font-size: .12rem;
        height: .35rem;
        line-height: .16rem;
    }
    dd{
        @include ellipsis;
        color: $gray-light;
        height: .3rem;
        line-height: .3rem;
        font-size: .11rem;
    }
    strong{
        color: $primary;
        font-weight: normal;
    }
    .qty{
        margin-left: .1rem;
        color: $gray-light;
    }
    &:last-of-type{
        border-bottom: none;
    }
}
.price-list{
    background: #fff;
    padding-left: .1rem;
    margin-bottom: .1rem;
    .l_r{
        padding-right: .08rem;
        line-height: .44rem;
        @include align-items;
        border-bottom: .01rem solid $gray-lighter;
        dt{
            color: $gray-light;
        }
        dd{
            margin-right: .08rem;
            text-align: right;
        }
        &:last-of-type{
            border-bottom: none;
        }
    }
    em{
        color: $primary;
        font-size: .18rem;
    }
    small{
        position: relative;
        font-size: .09rem;
        color: $primary;
        border:.01rem solid $primary;
        padding: .02rem .04rem;
        border-radius: .04rem;
        bottom: .02rem;
    }
}

.checkout-btn{
    @include display;
    position: fixed;
    left: 0;
    bottom: 0rem;
    width: 100%;
    background: #fff;
    line-height: .44rem;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);
    .text{
        padding-left: .08rem;
        color: $gray-light;
    }
    .price{
        padding: 0 .05rem;
        margin-top: .08rem;
        @include flex;
        line-height: 1;
    }
    small,strong{
        color: $primary;
    }
    small,span{
        font-size: .1rem;
        font-weight: 200;
    }
    span{
        color: $gray-light;
    }
    .btn{
        background: $primary;
        color: #fff;
        width: 1.20rem;
        text-align: center;
        font-size: .18rem;
    }
}
</style>
