<template>
    <div class="has-footer">
        <footer class="main-nav">
            <router-link to="/" class="footer-item" href="#">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
                <span>首页</span>
            </router-link>
            <router-link to="class">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-all"></use>
                </svg>
                <span>分类</span>
            </router-link>
            <router-link to="cart">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
                <span>购物车</span>
            </router-link>
            <router-link to="me">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yonghumorentouxiang"></use>
                </svg>
                <span>我的</span>
            </router-link>
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
        margin-bottom: .46rem;
    }
    .main-nav {
        @include fix-pos(auto, 0);
        @include display;
        box-shadow:0px -2px 2px 0px rgba(0,0,0,0.15);
        background: #fff;
        height: .44rem;
        line-height: $line-height-s;
        z-index: 100;
        a {
            width: 1%;
            color: $gray;
            display: block;
            text-align: center;
            @include flex();
            &.router-link-exact-active {
                color: $primary;
                fill: $primary;
            }
        }
        span{
            font-size: .1rem;
            font-weight: 200;
            display: inherit;
        }
        .icon {
            width: .24rem; 
            height: .24rem;
            display: block;
            margin: auto;
            overflow: hidden;
            padding: .04rem 0 .03rem 0;
        }
    }
</style>