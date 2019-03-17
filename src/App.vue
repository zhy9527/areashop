<template>
    <transition :name="transitionName">
    <router-view></router-view>
    </transition>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            transitionName: ''
        }
    },
    created: function () {
    	// if(Common.isWeChatBrowser()){
    	// 	this.$store.state.isWeChatBrowser = 1;
     //    }else if(Common.isFruitdayAppBrowser()){
    	// 	this.$store.state.isFruitdayAppBrowser = 1;
     //    }else if(Common.isAliPayBrowser()){
     //        this.$store.state.isAliPayBrowser = 1;
     //    }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? '' : 'slide-fade'
      }
    }
}
</script>

<style lang="scss">
    @import './assets/scss/base/variables';
    @import './assets/scss/mixin/mixins';
    @import './assets/scss/base/normalize';
    @import './assets/scss/base/common';
    @import './assets/scss/base/iconfont';
    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(80px);
        opacity: 0;
    }
</style>
