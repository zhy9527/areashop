<template>
    <router-view style="position: relative;"></router-view>
</template>

<script>
export default {
    name: 'app',
    created: function () {
    	if(Tools.isWeChatBrowser()){
    		this.$store.state.isWeChatBrowser = true;
        }else if(Tools.isFruitdayAppBrowser()){
    		this.$store.state.isFruitdayAppBrowser = true;
        }
        if(Tools.isFruitdayAndroidBrowser()){
    		this.$store.state.isFruitdayAndroidBrowser = true;
        }else if(Tools.isFruitdayiOSBrowser()){
    		this.$store.state.isFruitdayiOSBrowser = true;
        }
    }
}
</script>

<style lang="scss">
    @import './assets/scss/base/variables';
    @import './assets/scss/mixin/mixins';
    @import './assets/scss/base/normalize';
    @import '../node_modules/mint-ui/lib/style.min.css';
    @import './assets/scss/base/common';
    @import './assets/scss/base/iconfont';
</style>
