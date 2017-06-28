<template>
    <div class="has-footer">
        <footer class="main-nav">
            <router-link to="/" class="footer-item active" href="#">
                <i class="iconfont icon-homeclick"></i>
                <span>首页</span>
            </router-link>
            <router-link to="hello" href="#">
                <i class="iconfont icon-kinddefault"></i>
                <span>分类</span>
            </router-link>
            <router-link to="amway" href="#">
                <i class="iconfont icon-cartdefault"></i>
                <span>购物车</span>
            </router-link>
            <a class="footer-item" href="#">
                <i class="iconfont icon-centerdefault"></i>
                <span>我的果园</span>
            </a>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'footer',
  data: function() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang='scss' scoped>
    @import '../assets/scss/mixin/mixins';
    .has-footer{
        margin-bottom: .42rem;
    }
    .main-nav {
        @include fix-pos(auto, 0);
        @include display;
        box-shadow:0px -2px 2px 0px rgba(0,0,0,0.15);
        background: #fff;
        height: .42rem;
        font-size: .1rem;
        line-height: $line-height-s;
        a {
            width: 100%;
            color: #898989;
            display: block;
            text-align: center;
            @include flex();
            &.active {
                color: $primary;
            }
        }
        img {
            margin: .03rem auto .04rem;
            height: .21rem;
            width: auto;
        }
        i {
            display: block;
            font-size: .24rem;
        }
    }
</style>