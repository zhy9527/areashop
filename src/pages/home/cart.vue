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
                    handler: () => this.messagebox('delete')
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
        messagebox: function(){
            console.log('删除')
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

<style lang="scss">
.mint-cell-title{
    display: none;
}
.mint-cell-value{
    width: 100%;
}
.main-nav{
   
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
.goods{
    position: relative;
    @include display;
    @include align-items;
    padding: .1rem 0;
    width: 100%;
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
}
</style>
