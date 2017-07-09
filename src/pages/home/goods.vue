<template>
    <div class="goods">
        <ul class="tab">
           <li :class="{ active: currTab == 0 }" @click="tab(0)">商品</li> 
           <li :class="{ active: currTab == 1 }" @click="tab(1)">详情</li> 
        </ul>
        <div class="detail" v-if="currTab == 0">
            <swiper :swiperDate="home.homeBanner">
                <slot name="pagination"></slot>
            </swiper>
            <div class="info">
                <h3>女神樱桃-美国加州樱桃</h3>
                <div class="price"><em><span>￥</span>166.00</em><span>5个</span></div>
                <div class="btn">加入购物车</div>
            </div>
            <div class="hot">
                <div>为您推荐</div>
                <span>简单点，生活的方式简单点</span>
            </div>
            <goods-list :goodsListDate="home.homeClass[0].goods"></goods-list>
        </div>
        <div class="desc" v-if="currTab == 1">
            描述
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import goodsList from '../../components/goodsList.vue'

export default {
    name: 'goods',
    data: ()=>({
        currTab: 0
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
        tab: function(index){
            this.currTab = index
        }
    },
    components: {
        'goods-list': goodsList
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .tab{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: .44rem;
        background: rgba(255,255,255,.9);
        z-index: 10;
        text-align: center;
        li{
            display: inline-block;    
            margin-top: .1rem;
            line-height: .32rem;
            padding: 0 .26rem; 
            font-size: .16rem;     
        }
        .active{
            color: $primary;
            border-bottom: .02rem solid $primary;  
        }
    }
    .info{
        background: #fff;
        text-align: center;
        padding: .2rem .1rem;
        h3{
            margin: 0;
            color: $gray;
            font-weight: normal;
        }
        .price{
            color: $gray-light;
            line-height: 2;
        }
        em{
            color: $primary;
            font-size: .2rem;
            margin-right: .1rem;
        }
        span{
            font-size: .12rem;
        }
        .btn{
            color: #fff;
            background: $primary;
            display: inline-block;
            padding:0 .2rem;
            /*height: 3rem;*/
            line-height: .3rem;
            border-radius: .3rem;
        }
    }
    .hot{
        text-align: center;
        height: .5rem;
        line-height: 1.2;
        margin-top: .24rem;
        text-shadow: 1px 1px 1px #fff;
        div{
            color: $gray;
            font-size: .14rem;
        }
        span{
            font-size: .11rem;
            color: $gray-light;
        }
    }
    .desc,.detail{
        margin-top: .44rem;
    }
</style>
