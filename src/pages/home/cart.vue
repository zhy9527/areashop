<template>
    <div class="cart">
        <div class="item">
            <mt-cell-swipe
                v-for="item in 4"
                :key="item.id" 
                :left="[{
                    content: '删除',
                    style: { display: 'none'}
                }]"  
                :right="[{
                    content: '删除',
                    style: { background: 'red', color: '#fff', 'line-height': '90px' },
                    handler: () => messagebox(item)
                }]">
                <div class="goods">
                    <div class="check">
                        <svg class="icon" :class="{ checked: item ==3 }" aria-hidden="true">
                            <use xlink:href="#icon-duihao"></use>
                        </svg>
                    </div>
                    <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                    <dl>
                        <dt>{{item}}(清甜原味)</dt>
                        <dd>180克</dd>
                        <div><strong>￥18.00</strong></div>
                    </dl>
                    <div class="qty">
                        <em>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jianhao"></use>
                            </svg>
                        </em>
                        <span> 12 </span>
                        <em>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-add"></use>
                            </svg>
                        </em>
                    </div>   
                </div>                 
            </mt-cell-swipe>
        </div>
        <div class="checkout">
            <div class="check">
                <svg class="icon" >
                    <use xlink:href="#icon-duihao"></use>
                </svg>
                全选
            </div>
            <div class="price">
                <div>
                    <small>￥</small><strong>321.10</strong>
                </div>
                <span>共优惠￥189.00</span>
            </div>
            <div class="btn">
                结算
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'class',
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
    },
    mounted: function() {
        // console.log('this is current swiper instance object', this)
        // this.swiper.slideTo(1)
    },
    components: {
    }

}
</script>
<<<<<<< HEAD
<style lang="scss">
    .main-nav{
        box-shadow: 0,0,0,0;
    }
</style>
<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.item{
    position: relative;
}

=======

<style lang="scss">
.mint-cell-title{
    display: none;
}
.mint-cell-value{
    width: 100%;
}
.cart .main-nav{
   box-shadow: initial;
}
</style>
<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.has-footer{
    margin-bottom: 1rem;
}
.item{
    position: relative;
}
.mint-cell-title{
    display: none;
}
>>>>>>> 6a3b9e5efec7aaf34170f8d5284f59bd39ebd77b
.goods{
    position: relative;
    @include display;
    @include align-items;
    padding: .1rem 0;
<<<<<<< HEAD
=======
    width: 100%;
>>>>>>> 6a3b9e5efec7aaf34170f8d5284f59bd39ebd77b
    img{
        width: .8rem;
        height: .8rem;
        margin: 0 .08rem;
        border-radius: .04rem;
    }
    dl{
        @include flex;
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
<<<<<<< HEAD
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
}
.qty{
    position: absolute;
    bottom: .1rem;
    right: 0rem;
    text-align: center;
    @include display;
    span{
        @include flex;
        line-height: .24rem;
        padding: 0 .06rem;
        font-size: .13rem;
    }
}
.icon {
    width: .18rem; 
    height: .18rem;
    overflow: hidden;
    fill: $primary;
    padding: .02rem;
    border-radius: 100%;
    border:.01rem solid $line;
=======
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
}
.qty{
    position: absolute;
    bottom: 0;
    right: 0rem;
    text-align: center;
    @include display;
    em{
        padding: .1rem;
    }
    span{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        text-align: center;
        @include flex;
        line-height: .42rem;
        font-size: .13rem;
    }
}
.icon {
    width: .18rem; 
    height: .18rem;
    overflow: hidden;
    fill: $primary;
    border-radius: 100%;
    border:.01rem solid $line;
}
.check{
    padding: .1rem;
    .icon{
        width: .14rem;
        height: .14rem;
    }
    .checked{
        background: $primary;
        border:.01rem solid $primary;
        fill: #fff;
    }
>>>>>>> 6a3b9e5efec7aaf34170f8d5284f59bd39ebd77b
}
.checkout{
    @include display;
    position: fixed;
    left: 0;
    bottom: .45rem;
    width: 100%;
    background: #fff;
    line-height: .4rem;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);
    .check{
        text-align: left;
        padding: 0 .1rem;
        color: $gray-light;
        font-size: .12rem;
        .icon{
            float: left;
            margin-top: .11rem;
            margin-right: .1rem;
        }
    }
    .price{
        padding: 0 .1rem;
        margin-top: .06rem;
        @include flex;
        line-height: 1;
        text-align: right;
    }
    small,strong{
        color: $primary;
    }
    small{
        
    }
    strong{
        
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
        width: .8rem;
        text-align: center;
    }
}
</style>
