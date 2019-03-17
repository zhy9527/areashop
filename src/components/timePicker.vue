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
                            <div class="wheel">
                                <ul class="wheel-scroll">
                                    <li v-for="item in pickerData[0]" class="wheel-item">{{item.date_value}}</li>
                                </ul>
                            </div>
                            <div class="wheel">
                                <ul class="wheel-scroll">
                                    <li v-for="item in pickerData[1]" class="wheel-item">{{item.time_value}}</li>
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
const STATE_HIDE = 0
const STATE_SHOW = 1
const COMPONENT_NAME = 'timePicker'
const EVENT_SELECT = 'timeSelect'
const EVENT_VALUE_CHANGE = 'valuechange'
const EVENT_CANCEL = 'cancel'
const EVENT_CHANGE = 'timeChange'
export default {
    name: COMPONENT_NAME,
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        },
        title: {
            type: String
        },
        cancelTxt: {
            type: String,
            default: '取消'
        },
        confirmTxt: {
            type: String,
            default: '确认'
        },
        selectedIndex: {
            type: Array,
            default () {
                return []
            }
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            state: STATE_HIDE,
            pickerData: this.data.slice(),
            pickerSelectedIndex: [0,0],
            pickerSelectedVal: [0,0],
            pickerSelectedText: []
        }
    },
    created() {
        if (!this.pickerSelectedIndex.length) {
            this.pickerSelectedIndex = []
            for (let i = 0; i < this.pickerData.length; i++) {
                this.pickerSelectedIndex[i] = 0
            }
        }
    },
    methods: {
        confirm() {
            if (!this._canConfirm()) {
                return
            }
            this.hide()
            let changed = false
            for (let i = 0; i < this.pickerData.length; i++) {
                let index = this.wheels[i].getSelectedIndex()
                this.pickerSelectedIndex[i] = index
                let value = null
                if (this.pickerData[i].length) {
                    value = this.pickerData[i][index].date_key
                }
                if (this.pickerSelectedVal[i] !== value) {
                    changed = true
                }
                if(i == 0){
                    this.pickerSelectedText[i] = this.pickerData[i][index].date_value
                    this.pickerSelectedVal[i] = this.pickerData[i][index].date_key
                }else if(i == 1){
                    this.pickerSelectedText[i] = this.pickerData[i][index].time_value
                    this.pickerSelectedVal[i] = this.pickerData[i][index].time_key
                }
            }

            this.$emit(EVENT_SELECT, this.pickerSelectedVal, this.pickerSelectedIndex, this.pickerSelectedText)
            if (changed) {
                this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedVal, this.pickerSelectedIndex, this.pickerSelectedText)
            }

        },
        cancel() {
            this.hide()
            this.$emit(EVENT_CANCEL)
        },
        show() {
            if (this.state === STATE_SHOW) {
                return
            }
            this.state = STATE_SHOW
            if (!this.wheels || this.dirty) {
                this.$nextTick(() => {
                    this.wheels = []
                    let wheelWrapper = this.$refs.wheelWrapper
                    for (let i = 0; i < this.pickerData.length; i++) {
                        this._createWheel(wheelWrapper, i)
                    }
                    this.dirty = false
                })
            } else {
                for (let i = 0; i < this.pickerData.length; i++) {
                    this.wheels[i].enable()
                    this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
                }
            }
        },
        hide() {
            this.state = STATE_HIDE
            for (let i = 0; i < this.pickerData.length; i++) {
                this.wheels[i].disable()
            }
        },
        setData(data) {
            this.pickerData = data.slice(0)
            this.dirty = true
        },
        setSelectedIndex(index) {
            this.pickerSelectedIndex = index
        },
        refill(datas) {
            let ret = []
            if (!datas.length) {
                return ret
            }
            datas.forEach((data, index) => {
                ret[index] = this.refillColumn(index, data)
            })
            return ret
        },
        refillColumn(index, data) {
            if (this.state !== STATE_SHOW) {
                console.error('can not use refillColumn when picker is not show')
                return
            }
            const wheelWrapper = this.$refs.wheelWrapper
            let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
            let wheel = this.wheels[index]
            if (scroll && wheel) {
                let oldData = this.pickerData[index]
                this.$set(this.pickerData, index, data)
                let selectedIndex = wheel.getSelectedIndex()
                let dist = 0
                if (oldData.length) {
                    let oldValue = oldData[selectedIndex].value
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].value === oldValue) {
                            dist = i
                            break
                        }
                    }
                }
                this.pickerSelectedIndex[index] = dist
                this.$nextTick(() => {
                    // recreate wheel so that the wrapperHeight will be correct.
                    wheel = this._createWheel(wheelWrapper, index)
                    wheel.wheelTo(dist)
                })
                return dist
            }
        },
        scrollTo(index, dist) {
            if(!this.wheels[index]) return;
            const wheel = this.wheels[index]
            this.pickerSelectedIndex[index] = dist
            wheel.wheelTo(dist)
        },
        refresh() {
            setTimeout(() => {
                this.wheels.forEach((wheel, index) => {
                    wheel.refresh()
                })
            }, 200)
        },
        _createWheel(wheelWrapper, i) {
            if (!this.wheels[i]) {
                this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                    wheel: {
                        selectedIndex: this.pickerSelectedIndex[i]
                    },
                    probeType: 3
                })
                this.wheels[i].on('scrollEnd', () => {
                    this.$emit(EVENT_CHANGE, i, this.wheels[i].getSelectedIndex());
                    this.scrollTo(i+1,0)
                    this.wheels[i].refresh()
                })
            } else {
                this.wheels[i].refresh()
            }
            return this.wheels[i]
        },
        _canConfirm() {
            return this.wheels.every((wheel) => {
                return !wheel.isInTransition
            })
        }
    },
    watch: {
        data(newData) {
            this.setData(newData);
        }
    }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/base/variables';
@import '../assets/scss/mixin/mixins';
.border-top-1px, .border-right-1px, .border-bottom-1px, .border-left-1px{
  position: relative;
  &:before, &:after{
    content: "";
    display: block;
    position: absolute;
    transform-origin: 0 0;
  }
}
.border-top-1px:before{
    border-top: 1px solid $line;
    left: 0;
    top: 0;
    width: 100%;
    transform-origin: 0 top;
}

.border-right-1px:after{
    border-right: 1px solid $line;
    top: 0;
    right: 0;
    height: 100%;
    transform-origin: right 0;
}

.border-bottom-1px:after{
    border-bottom: 1px solid $line;
    left: 0;
    bottom: 0;
    width: 100%;
    transform-origin: 0 bottom;
}

.border-left-1px:before{
    border-left: 1px solid $line;
    top: 0;
    left: 0;
    height: 100%;
    transform-origin: left 0;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2){
  .border-top-1px:before{
      width: 200%;
      transform: scale(.5) translateZ(0)
  }
  .border-right-1px:after{
      height: 200%;
      transform: scale(.5) translateZ(0)
  }
  .border-bottom-1px:after{
      width: 200%;
      transform: scale(.5) translateZ(0)
  }
  .border-left-1px:before{
    height: 200%;
    transform: scale(.5) translateZ(0)
  }
}

@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3){
  .border-top-1px:before{
      width: 300%;
      transform: scale(.333) translateZ(0)
  }
  .border-right-1px:after{
      height: 300%;
      transform: scale(.333) translateZ(0)
  }
  .border-bottom-1px:after{
      width: 300%;
      transform: scale(.333) translateZ(0)
  }
  .border-left-1px:before{
      height: 300%;
      transform: scale(.333) translateZ(0)
  }
}
.picker {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    background: rgba(0, 0, 0, .4);
    &.picker-fade-enter,
    &.picker-fade-leave-active {
        opacity: 0
    }
    &.picker-fade-enter-active,
    &.picker-fade-leave-active {
        transition: all .3s ease-in-out
    }
}

.picker-panel {
    position: absolute;
    z-index: 600;
    bottom: 0;
    width: 100%;
    height: 273px;
    background: #fff;
    &.picker-move-enter,
    &.picker-move-leave-active {
        transform: translate3d(0, 273px, 0)
    }
    &.picker-move-enter-active,
    &.picker-move-leave-active {
        transition: all .3s ease-in-out
    }
    .picker-choose {
        position: relative;
        height: 60px;
        color: #333;
    }
    .picker-title {
        margin: 0;
        line-height: 60px;
        font-weight: normal;
        text-align: center;
        font-size: .18rem;
        color: #333;
    }
    .confirm,
    .cancel {
        position: absolute;
        top: 6px;
        line-height: 1;
        padding: 16px;
    }
    .confirm {
        right: 0;
        color: #75A739;
        &:active {
            color: #75A739;
        }
    }
    .cancel {
        left: 0;
        color: #fff
        &:active {
            color: #fff
        }
    }
}

.picker-content {
    position: relative;
    top: 20px;
    .mask-top,
    .mask-bottom {
        z-index: 10;
        width: 100%;
        height: 68px;
        pointer-events: none;
        transform: translateZ(0);
    }

    .mask-top {
        position: absolute;
        top: 0;
        background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
    }

    .mask-bottom {
        position: absolute;
        bottom: 1px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
    }
}

.wheel-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 .16rem;
    .wheel {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        /*-webkit-flex-basis: 1e-9px;*/
        /*flex-basis: 1e-9px;*/
        height: 173px;
        overflow: hidden;
        font-size: .16rem;
    }
}


.wheel-scroll {
    padding: 0;
    margin-top: 68px;
    line-height: 36px;
    list-style: none;
    .wheel-item {
        list-style: none;
        height: 36px;
        overflow: hidden;
        white-space: nowrap;
        color: #333;
    }
}

.picker-footer {
    height: 20px
}
</style>