<template>
    <div class="has-header">
        <nav>
            <div class="left">
                <div class="back" @click="back">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangyou1"></use>
                    </svg>
                </div>
            </div>
            <div class="text">{{ headerData.title }}</div>
            <slot>
                <router-link v-if="headerData.rightUrl" :to="headerData.rightUrl" class="next">
                    {{ headerData.rightText || '' }}
                </router-link>
                <div v-else class="next"></div>
            </slot>
        </nav>
    </div>
</template>

<script>
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'vheader',
    props: {
        headerData: {
            type: Object,
            default: () => headerData
        }
    },
    methods: {
        back: function () {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='scss' scoped>
    @import '../assets/scss/mixin/mixins';
    .has-header{
        height: .46rem;
    }
    nav {
        background: #fff;
        padding-top: .19rem;
        height: .45rem;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        @include box;
        border-bottom: .01rem solid $line;
        z-index: 100;
        .left{
            width: .8rem;
            @include box;
        }
        .text{
            @include box-flex;
            line-height: .45rem;
            text-align: center;
            font-size: .17rem;
            @include ellipsis;
        }
        .next{
            display: block;
            width: .72rem;
            padding-right: .08rem;
            line-height: .45rem;
            text-align: right;
            color: #333;
        }
    }
    .icon{
        width: .2rem;
        height: .2rem;
        overflow: hidden;
        transform:rotate(180deg);
    }
    .back{
        width: .4rem;
        height: .33rem;
        padding-top: .13rem;
        text-align: center;
    }
</style>
