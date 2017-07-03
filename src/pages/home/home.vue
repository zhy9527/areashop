<template>
    <div class="home">
        <home-header></home-header>
        <swiper :swiperDate="home.homeBanner">
            <slot name="pagination"></slot>
        </swiper>
        <news :newsDate="home.homeNews"></news>
        <home-class :classDate="home.homeClass"></home-class>
        <div class="hot">
            <div>为您推荐</div>
            <span>简单点，生活的方式简单点</span>
        </div>
        <goods-list :goodsListDate="home.homeClass[0].goods"></goods-list>
        <v-footer></v-footer>
        <div class="area-list" v-if="home.areaListState">
            <div>选择配送小区</div>
            <ul>
                <li @click="areaSelect(0,'睿智禧园')">睿智禧园</li>
                <li @click="areaSelect(0,'祝福红城')">祝福红城</li>
                <li @click="areaSelect(0,'河南省大学科技园')">河南省大学科技园</li>
                <li>其他区域，敬请期待...</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import homeHeader from './components/homeHeader.vue'
import news from './components/homeNews.vue'
import homeClass from './components/homeClass.vue'
import goodsList from '../../components/goodsList.vue'
import footer from '../../components/footer.vue'
import swiper from '../../components/swiper.vue'

export default {
    name: 'home',
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
        areaSelect: function(state,currentArea){
            this.$store.commit('AREA_LIST_STATE', state)
            this.$store.commit('CURRENT_AREA', currentArea)
        }
    },
    components: {
        'home-header': homeHeader,
        'v-footer': footer,
        swiper,
        news,
        'home-class': homeClass,
        'goods-list': goodsList
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .home{
        margin: .45rem 0 .5rem 0;
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
    .area-list{
        position: fixed;
        top: .8rem;
        left: 10%;
        width: 80%;
        text-align: center;
        z-index: 10;
        background: #fff;
        border-radius: .04rem;
        opacity: .96;
        padding-bottom: .1rem;
        box-shadow: 0 0 .6rem $gray-light;
        div{
           line-height: .5rem;
           font-size: .14rem; 
           color: $primary;
           border-bottom: .01rem solid $line;
        }
        ul{
            padding: .15rem;
        }
        li{
            line-height: .4rem;
            color: $gray;
            border-bottom: .01rem solid $line;
            &:last-of-type{
                border-bottom: none;
            }
        }
    }
    /*.swiper-container{
        margin-top: .45rem;
    }*/
</style>
