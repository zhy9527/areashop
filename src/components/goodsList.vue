<template>
    <div class="item">
        <router-link to="/goods" v-for="item in goodsListDate" :key="item.id">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
            <em>{{item.price}}</em>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gouwuche"></use>
            </svg>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'goodsList',
    props: {
        goodsListDate: {
            type: Array,
            default: () => goodsListDate
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/scss/mixin/mixins';
    .item{
        @include display;
        @include flex-wrap(wrap);
    }
    a{
        position: relative;
        width: calc(50% - .21rem);
        padding: .1rem;
        text-align: center;
        background: #fff;
        border-bottom: .01rem solid $line;
        font-size: .13rem;        
        &:nth-child(odd){
            border-right: .01rem solid $line;
        }
    }
    span, em {
        display: block;
        @include ellipsis;
        text-align: left;
    }
    span {
        line-height: 1.5;
        margin-top: .08rem;
        color: $gray;
    }
    em {
        margin-top: .06rem;
        color: $primary;
        
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
</style>