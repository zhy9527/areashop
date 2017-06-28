<template>
    <div class="has-header">
        <header>
            <div class="back">
                <router-link v-if="!this.$store.state.isFruitdayAppBrowser" href="javascript:history.go(-1)" class="iconfont icon-morehome"></router-link>
                <router-link v-else-if="store.closeAppView" href="fruitday://Back" class="iconfont icon-searchhomedel"></router-link>
            </div>
            <div class="text">{{store.title}}</div>
            <router-link to="{{store.rightUrl}}" class="l_r more">
                {{store.rightText}}
            </router-link>
            <a href="javascript:void(0);" class="next"></a>
        </header>
    </div>
</template>

<script>
export default {
    name: 'header',
    created: function () {
        // `this` 指向 vm 实例
        // console.log(this.$store.state.home)
    },
    props: {
        store: {
            type: null,
            default: function () {
                return store
            }
        }
    },
    computed: {
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @import '../assets/scss/mixin/mixins';
    .has-header{
        padding-top: .46rem;
    }
    header {
        background: #fff;
        color: #75A739;
        height: .45rem;
        line-height: .43rem;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        @include display;
        border-bottom: .01rem solid $line;
        z-index: 100;
        .back,.next{
            display: inline-block;
        }
        .back{
            width: .88rem;
            .icon-morehome{
                text-align: center;
                padding-left: .07rem;
                @include rotate;
                float: left;
            }
            .icon-searchhomedel{
                margin-top: .05rem;
                float: right;
                text-align: left;
            }
            a{
                width: .4rem;
                color: #75A739;
                display: inline-block;
                font-size: .22rem;
            }
        }
        .text{
            @include flex;
            text-align: center;
            font-size: .17rem;
            @include ellipsis;
        }
        .next, .more{
            width: .8rem;
            margin-right: .08rem;
            text-align: right;
            color: #75A739;
            .iconfont{
                font-size: .2rem;
            }       
        }
    }

</style>
