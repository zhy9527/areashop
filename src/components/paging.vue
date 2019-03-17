<template>
    <transition name="picker-fade">
        <div class="picker" v-show="state===1" @touchmove.prevent @click="cancel">
            <transition name="picker-move">
                <div class="picker-panel" v-show="state===1" @click.stop>
                    <div class="picker-choose border-bottom-1px">
                        <span class="cancel" @click="cancel">{{cancelTxt}}</span>
                        <span class="confirm" @click="confirm">{{confirmTxt}}</span>
                        <h1 class="picker-title">{{title}}</h1>
                    </div>
                    <div class="picker-content">
                        <div class="mask-top border-bottom-1px"></div>
                        <div class="mask-bottom border-top-1px"></div>
                        <div class="wheel-wrapper" ref="wheelWrapper">
                            <div class="wheel" v-for="data in pickerData">
                                <ul class="wheel-scroll">
                                    <li v-for="item in data" class="wheel-item">{{item.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="picker-footer"></div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: "paging",
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        
    },
    created() {
        
    },
    methods: {
        
    },
    watch: {
        
    }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/base/variables';
@import '../assets/scss/mixin/mixins';

</style>