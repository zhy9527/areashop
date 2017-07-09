<template>
    <header>
        <img src="../../../assets/images/common/logo.png" alt="">
        <div class="address"  @click="areaSelect(true)">
            <span>{{this.$store.state.home.currentArea}}</span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouhuodizhi"></use>
            </svg>
        </div>
    </header>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'home-header',
    mounted: function () {
        // console.log(Config)
        // this.$store.dispatch('getAmwayList');
    },
    computed: mapGetters([
        
    ]),
    methods: {
        areaSelect: function(state){
            this.$store.commit('AREA_LIST_STATE', state)
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/mixin/mixins';
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255,255,255,.9);
        @include display;
        height: .42rem;
        line-height: .42rem;
        z-index: 1;
        img{
            width: auto;
            height: .3rem;
            margin-top: .06rem;
            margin-left: .1rem;
        }
        .address{
            @include flex;
            margin-right: .1rem;
        }
        .icon {
            float: right;
            width: .22rem; 
            height: .22rem;
            overflow: hidden;
            fill: $primary;
            padding-top: .1rem;
            margin-right: .08rem;
        }
        span{
            color: $primary;
            float: right;
            display: inline-block;
        }

    };
</style>
