<template>
    <footer> 
        <div v-show="bottomData.con == 0">
            <div class="price">
                <small>待支付: ￥</small>
                <span class="totalPrice"><strong>{{bottomData.price}}</strong><small>{{bottomData.price}}</small></span>
                <span>(20人可领)</span>
            </div> 
            <div class="btn">提交订单</div>
        </div>

        <div v-show="bottomData.con == 1">
            <a class="footer-item cancel" href="javascript:;"> 取消订单 </a>  
            <a class="footer-item pay" href="javascript:;"> 立即支付 </a> 
        </div>

        <div v-show="bottomData.con == 2">
            <a class="footer-item refund" href="javascript:;"> 退款进度 </a>
        </div>
    </footer>
    
</template>

<script>


    
export default {
  name: 'bottom',
  data: function() {
    return {
      con: ''
    }
  },
  props: {
    bottomData: {
        default: () => bottomData
    }
  },
  methods:{
    receive: function(){
        console.log(1);
        this.$emit('submit')
    }
  }
}
</script>

<style lang='scss' scoped>
    @import '../assets/scss/base/variables';
    @import '../assets/scss/mixin/mixins';
    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: .45rem;
        background:rgba(255,255,255,0.95);
        box-shadow:0px -2px 2px 0px rgba(0,0,0,0.15);
        >div{
            @include box;
        }
        
        .price{
            @include box-flex;
            line-height: .5rem;
            padding-left: .1rem;
            small{
                font-size: $font-size-s;
                color: $secondary;
            }
            strong{
                font-size: .18rem;
                color: $secondary;
                font-weight: 500;
            }
            span{
                color: $gray-light;
                font-size: $font-size-s;
            }
        }
        
        .btn{
            width: 1.1rem;
            text-align: center;
            background: $secondary;
            font-size: .18rem;
            line-height: .45rem;
            color: #fff;
        }

        .footer-item {
            @include box-flex; 
            display: block;
            width: 100%;
            color: $gray;
            text-align: center; 
            line-height: .45rem;
            font-size: .18rem;

        }

        .footer-item:last-of-type {
          background: $secondary;
          color: #fff;
          &.dis{
                background: $gray-lightest
            }
        }
    }
</style>