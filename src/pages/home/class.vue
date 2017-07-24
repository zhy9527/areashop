<template>
    <div class="class">
        <ul class="tab">
            <li :class="{ active: home.currentClass == 0 }" @click="tab(0)">新鲜水果</li>
            <li :class="{ active: home.currentClass == 1 }" @click="tab(1)">肉类禽蛋</li>
            <li :class="{ active: home.currentClass == 2 }" @click="tab(2)">新鲜水果</li>
            <li :class="{ active: home.currentClass == 3 }" @click="tab(3)">肉类禽蛋</li>
        </ul>
        <div class="item" v-show="home.currentClass == 0">
            <router-link to="goods">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>明治保加利亚LB81酸奶明治保加利亚LB81酸奶明治保加利亚LB81酸奶(清甜原味)</dt>
                    <dd>180克</dd>
                    <div><strong>￥18.00</strong> <del>$17.00</del></div>
                </dl>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
            </router-link>
        </div>
        <div class="item" v-show="home.currentClass == 1">
            <router-link to="goods">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>明治保加利亚LB81酸奶明治保加利亚LB81酸奶明治保加利亚LB81酸奶(清甜原味)</dt>
                    <dd>180克</dd>
                    <div><strong>￥18.00</strong> <del>$17.00</del></div>
                </dl>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
            </router-link>
            <router-link to="goods">
                <img src="https://imgjd3.fruitday.com/images/product_pic/2163/1/1-370x370-2163-4UA8R1KX.jpg" alt="">
                <dl>
                    <dt>明治保加利亚LB81</dt>
                    <dd></dd>
                    <div><strong>￥18.00</strong> <del>$17.00</del></div>
                </dl>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
            </router-link>
        </div>
        <div class="item" v-show="home.currentClass == 2">
            3
        </div>
        <div class="item" v-show="home.currentClass == 3">
            4
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import footer from '../../components/footer.vue'

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
        tab: function(index){
            this.$store.commit('CURRENT_CLASS_TAB', index)
        }
    },
    components: {
        'v-footer': footer,
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .class{}
    .tab{
        width: .78rem;
        position: fixed;
        left: 0;
        top: 0;
        background: #fff;
        height: calc(100% - .46rem);
        text-align: center;
        overflow: auto;
        li{
            border-left: .02rem solid #fff;
            line-height: .44rem;
            font-size: .13rem;
            border-bottom: .01rem solid $line;
        }
        .active{
            border-left: .02rem solid $primary;
            color: $primary;
        }
    }
    .item{
        margin-left: .82rem;
        padding-bottom: .5rem;
        a{
            position: relative;
            @include display;
            background: #fff;
            margin-bottom: .03rem;
            padding: .08rem;
            img{
                width: .8rem;
                height: .8rem;
                margin-right: .08rem
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
            del{
                color: $gray-light;
                font-size: .11rem;
            }
        }
        .icon{
            position: absolute;
            right: .1rem;
            bottom: .05rem;
            background: $tertiary;
            border-radius: 100%;
            padding: .05rem;
            width: .18rem;
            height: .18rem;
            fill: #fff;
        }
    }
</style>
