<template>
    <div class="coupon">
        <ul class="tab">
           <li :class="{ active: currTab == 0 }" @click="tab(0)">未使用</li> 
           <li :class="{ active: currTab == 1 }" @click="tab(1)">已使用</li> 
           <li :class="{ active: currTab == 2 }" @click="tab(2)">已过期</li> 
        </ul>
        <div class="items" v-if="currTab == 0">
            <div class="item">
                <div class="money">
                    <small>￥</small>30
                </div>
                <div class="info">
                    <em>全场通用券全场通用券全场通用券全场通用券全场通用券全场通用券全场通用券全场通用券</em>
                    <small>2017-08-12至2018-09-13</small>
                </div>
            </div>
            <div class="item">
                <div class="money">
                    <small>￥</small>30
                </div>
                <div class="info">
                    <div><em>全场通用券</em></div>
                    <div><small>2017-08-12至2018-09-13</small></div>
                </div>
            </div>
        </div>
        <div class="items" v-if="currTab == 1">
            1
        </div>
        <div class="items" v-if="currTab == 2">
            2
        </div>
        
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'coupon',
    data: ()=>({
        currTab: 0
    }),
    beforeCreate: function () {
        // console.log(Config)
        this.$store.dispatch('getHomeAds');
    },
    computed: {
        ...mapState({
            home: state => state.home,
        })
    },
    title () {
        return '优惠券'
    },
    methods: {
        tab: function(index){
            this.currTab = index
        }
    },
    components: {
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .tab{
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        line-height: .42rem;
        box-shadow:0px 2px 2px 0px rgba(0,0,0,0.15);
        @include display;
        text-align: center;
        font-size: .16rem;
        font-weight: 200;
        li{
            color: $gray-light;
            @include flex;
            border-bottom: .01rem solid #fff;
            &.active{
                color: $primary;
                border-bottom: .01rem solid $primary;
            }
        }
    }
    .coupon{
        margin-top: .46rem;
    }
    .item{
        background: #fff;
        @include display;
        @include align-items;
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.15);
        margin-bottom: .1rem;
    }
    .money{
        width: .8rem;
        text-align: center;
        font-size: .3rem;
        color: $primary;
        small{
            font-size: .14rem;
        }
    }
    .info{
        @include flex;
        padding:.08rem .08rem .08rem .15rem;
        border-left: .01rem dashed $gray-lighter;
        em,samll{
            display: block;
        }
        em{
            line-height: 1.4;
            color: $gray;
            padding-bottom: .1rem;
        }
        small{
            color: $gray-light;
        }
    }
</style>
