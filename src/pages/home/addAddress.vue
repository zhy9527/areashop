<template>
    <div class="add-address">
        <dl class="l_r">
            <dt>收货人</dt>
            <dd><input type="text" value="" placeholder="姓名"></dd>
        </dl>
        <dl class="l_r">
            <dt>联系电话</dt>
            <dd><input type="text" value="" placeholder="手机号码"></dd>
        </dl>
        <dl class="l_r">
            <dt>小区名称</dt>
            <dd @click="popupVisible = true" size="large">睿智禧园</dd>
            <svg class="icon-jiantou">
                <use xlink:href="#icon-xiangyoujiantou"></use>
            </svg>
        </dl>
        <dl class="l_r">
            <dt>详细地址</dt>
            <dd><input type="text" value="" placeholder="1号楼2单元1802室"></dd>
        </dl>
        <div class="address-btn">
            保存地址
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"  style="width: 100%">
            <mt-picker :slots="addressSlots" showToolbar @change="onValuesChange">
                <slot name="showToolbar">请选择小区</slot>
            </mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'addAddress',
    data: ()=>({
        popupVisible: false,
        addressSlots: [
        {
            flex: 1,
            values: ['睿智禧园', '祝福红城', '大学科技园'],
            defaultIndex: 1,
            className: 'slot',
        }
      ]
    }),
    mounted: function () {
        // console.log(Config)
    },
    watch: {
      
    },
    computed: {
        ...mapState({
            home: state => state.home,
        })
    },
    methods: {
        tab: function(index){
            this.$store.commit('CURRENT_CLASS_TAB', index)
        },
        onValuesChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        }
    },
    components: {
    }

}
</script>

<style lang="scss">
@import '../../assets/scss/mixin/mixins';
.picker-toolbar{
    text-align: center;
    line-height: .4rem;
    background: $gray-lighter;
    color: $gray-light;
}
</style>
<style scoped lang="scss">
@import '../../assets/scss/mixin/mixins';
.add-address{
    background: #fff;
    padding-left: .08rem;
    margin-bottom: .46rem;
}
dl{
    line-height: .44rem;
    border-bottom: .01rem solid $line;
    @include align-items;
    padding-right: .08rem;
    dt{
        width: .8rem;
    }
    &:last-of-type{
        border-bottom: none;
    }
}
input{
    width: 100%;
    height: .44rem;
    border:none;
    outline: none;
}
.address-btn{
    position: fixed;
    left: 0;
    bottom: 0rem;
    width: 100%;
    background: $primary;
    line-height: .44rem;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
    text-align: center;
    font-size: .18rem;
}
</style>
