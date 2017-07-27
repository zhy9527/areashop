<template>
    <div class="address-list">
        <div class="item">
            <div class="info">
                <div><em>周赢</em><em>15639270772</em></div>
                <div><span>睿智禧园</span></div>
                <div><small>1号楼2单元，18021号楼2单元，18021号楼2单元，18021号楼2单元，18021号楼2单元，18021号楼2单元，1802</small></div>
            </div>
            <div class="edit">
                <div>
                    <svg class="icon">
                        <use xlink:href="#icon-lajixiang"></use>
                    </svg>
                </div>
                <router-link to="/addAddress">
                    <svg class="icon">
                        <use xlink:href="#icon-bianji"></use>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="item">
            <div class="info">
                <div><em>周赢</em><em>15639270772</em></div>
                <div><span>睿智禧园</span></div>
                <div><small>1号楼2单元，18021号楼2单元，1802</small></div>
            </div>
            <div class="edit">
                <div>
                    <svg class="icon">
                        <use xlink:href="#icon-lajixiang"></use>
                    </svg>
                </div>
                <router-link to="/addAddress">
                    <svg class="icon">
                        <use xlink:href="#icon-bianji"></use>
                    </svg>
                </router-link>
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
        return '我的收获地址'
    },
    components: {
    }

}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/mixin/mixins';
    .item{
        background: #fff;
        padding: .08rem 0 .08rem .08rem;
        @include display;
        @include align-items;
        margin-bottom: .1rem;
    }
    .info{
        @include flex;
        line-height: 1.8;
    }
    em{
        margin-right: .1rem;
        font-size: .16rem;
        color: $gray;
    }
    span{
        background: $gray-lighter;
        border-radius: .04rem;
        color: #515151;
        padding: .02rem .05rem;
        font-weight: 300;
    }
    small{
        display: inline-block;
        margin-top: .04rem;
        color: $gray-light;
        line-height: 1.4;
    }
    .edit{
        div,a{
            display: block;
            padding: .1rem;
        }
    }
    .icon{
        width: .26rem;
        height: .26rem;
        fill: $gray-light;
    }
</style>
