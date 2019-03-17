<template>
    <div class="container">
	    <!-- <v-header :headerData="headerData"></v-header> -->
	    <!-- <div class="top">
    		<div class="logo">
    			<img src="../../assets/images/common/logo.png" alt="">
    		</div>
    		<div class="text">趣鱼超市</div>
    	</div> -->
    	<img src="../../assets/images/active/getCoupon.jpg" alt="">
    	<div class="coupon" v-if="coupon.code == 200">
            <div class="left">
              <small>￥</small>{{coupon.data.type_money}}
            </div>
            <div class="right">
              <div class="name">{{coupon.data.type_name}}</div>
              <div class="time">{{coupon.data.use_start_date | dateFormat('date')}}至{{coupon.data.use_end_date  | dateFormat('date')}}</div>
            </div>
            <div class="use" @click="use">去使用</div>
        </div>
        <div class="coupon-nothing" v-else>
        	<div class="nothing">{{coupon.message}}</div>
        </div>
        <div class="user">
        	<div class="title">好邻居，好运气</div>
        	<div class="list" v-for="x in list" :key="x.id">
        		<img v-lazy="x.avatarUrl" :alt="x.user_name">
        		<div class="info">
        			<div class="name">{{x.user_name}}</div>
              <div class="time">{{x.use_start_date | dateFormat('date')}}至{{x.use_end_date  | dateFormat('date')}}</div>
        		</div>
        		<div class="price"><small>￥</small>{{x.type_money}}</div>
        	</div>
        </div>
        <div class="rule">
        	<div class="title">活动规则</div>
        	<div class="content">
        		1.红包与其他优惠不可叠加使用; <br />
        		2.红包只限此微信号使用; <br />
        		3.红包可在个人中心->优惠券中查看; <br />
        		4.当满足使用条件时，下单时会出现在可用优惠券中，选择使用即可; <br />
        		2.其他未尽事宜，请咨询客服。
        	</div>
        </div>
        <div class="home" @click="use">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
          </svg>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'getCoupon',
    data: () => {
    	return {
        	headerData: {
        		title: '获取优惠券'
        	},
        	list: [],
        	coupon: {}
    	}
    },
    title: () => '获取优惠券',
    beforeCreate: function(){
    	let id = this.$route.query.id
    	let token = this.$route.query.token
    	Fetch({
            url: config.HOST_API + 'coupon/wantMoney?id=' + id,
            token: token,
            method: 'GET'
        }).then(response => {
        	if(response.code === 200) {
        		this.coupon = response
        	} else if(response.code === 400) {
        		this.coupon = response
        	}
        }).catch(error => {
        	console.log(error)
        })
        Fetch({
            url: config.HOST_API + 'coupon/wantMoneyUsers?id=' + id,
            token: token,
            method: 'GET'
        }).then(response => {
        	if(response.code === 200) {
        		this.list = response.data
        	} else if(response.code === 400) {
        		console.log(response.massage || '你已领取过该红包')
        	}
        }).catch(error => {
        	console.log(error)
        })
    },
    computed: {
        // ...mapState({
        //     point: state => state.employeeBenefit.point, 
        //     card: state => state.employeeBenefit.card, 
        //     hotGoods: state => state.employeeBenefit.hotGoods
        // }),
    },
    methods: {
        // getCode: function(card_number){
        // 	let connect_id = this.$route.query.connect_id;
        // 	let code = window.btoa(unescape(encodeURIComponent(card_number + '||' + connect_id)));
        // 	location.href = "https://m.fruitday.com/statics/ticket/goods.html?code="+code+'&connect_id='+connect_id+'&code='+code;
        // }
        use: function () {
        	wx.miniProgram.switchTab({url: '/pages/main/index'})
        }
    }
}
</script>

<style scoped lang="scss">
	@import '../../assets/scss/base/variables';
	@import '../../assets/scss/mixin/mixins';
.container{
  padding: .15rem 0;
  background: #f1492e;
}
/*.top{
  background: rgba(255,255,255,.8);
  border-radius: .06rem;
  padding-left: .2rem;
  display: -webkit-box;
	.logo{
	  width: .4rem;
	}
	.logo img{
	  display: block;
	  height: .4rem;
	}
	.text{
	  -webkit-box-flex: 1;
	  font-size: .14rem;
	  line-height: .4rem;
	  color: #515151;
	}
}*/

.coupon{
  margin: .2rem .15rem 0 .15rem;
  position: relative;
  border: .01rem solid #eee;
  box-shadow: 0 .01rem .03rem 0 rgba(0,0,0,.15);
  border-radius: .06rem;
  border-bottom: .01rem solid #fff;
  display: -webkit-box;
  -webkit-box-align: center;
  background: rgba(255,255,255,.8);
	.left{
	  width: .8rem;
	  text-align: center;
	  color: #E9521A; 
	  font-size: .3rem;
	}
	.left small,.left strong{
	  line-height: 1;
	}
	.left small{
	  font-size: .14rem;
	}
	.right{
	  padding: .1rem;
	  border-left: .01rem dashed #eee;
	  -webkit-box-flex: 1;
	  flex-box:1;
	}
	.right  .name{
	  font-size: .14rem;
	  color: #515151;
	  line-height:1.4;
	}
	.right .time{
	  margin-top: .06rem;
	  font-size: .12rem;
	  color: #818181;
	}
	.use{
	  width: .6rem;
	  text-align: center;
	  height: .24rem;
	  line-height: .24rem;
	  margin-right: .1rem;
	  background: #E9521A; 
	  font-size: .14rem;
	  color: #fff;
	  border-radius: .36rem;
	}
}
.coupon-nothing{
  margin: .2rem .15rem 0 .15rem;
  position: relative;
  border: .01rem solid #eee;
  box-shadow: 0 .01rem .03rem 0 rgba(0,0,0,.15);
  border-radius: .06rem;
  border-bottom: .01rem solid #E9521A;
  background: rgba(255,255,255,.8);
  text-align: center;
  padding: .1rem 0;
  line-height: 1.6;
}
.coupon-nothing .nothing{
  font-size: .16rem;
  color: #515151;
}
.coupon-nothing .note{
  font-size: .14rem;
  color: #818181;
}
.user{
  margin: .2rem .15rem 0 .15rem;
  background: rgba(255,255,255,.8);
  border-radius: .06rem;
	.title{
	  line-height: .4rem;
	  color: #515151;
	  text-align: center;
	  font-size: .16rem;
	}
	.list{
	  display: -webkit-box;
	  -webkit-box-align: center;
	  margin: 0 .1rem;
	  border-top: .01rem solid #eee;
	}
	.avatar{
	  display: block;
	  width: .34rem;
	  height: .34rem;
	  border-radius: 34rem;
	}
	.info{
	  font-size: .14rem;
	  -webkit-box-flex: 1;
	  margin: .1rem;
	}
	.name{
	  color: #515151;
	}
	.time{
	  color: #818181;
	}
	.price{
	  width: .8rem;
	  font-size: .3rem;
	  color: #E9521A; 
	  text-align: right;
	}
	.price small{
	  font-size: .14rem;
	}
	img{
	  display: block;
	  width: .4rem;
	  height: .4rem;
	  border-radius: 100%;
	}
}

.rule{
  margin: .2rem .15rem 0 .15rem;
  border-radius: .06rem;
  padding:.1rem .2rem;
  background: rgba(255,255,255,.8);
	.title{
	  line-height: .4rem;
	  color: #515151;
	  font-size: .16rem;
	}
	.content{
	  line-height: .20rem;
	  color: #818181;
	  font-size: .14rem;
	}
}
.home{
  position: fixed;
  top: .3rem;
  left: .2rem;
  width: .4rem;
  height: .4rem;
  line-height: .4rem;
  border-radius: .4rem;
  background: rgba(255,255,255,.7);
  text-align: center;
  .icon{
    width: .26rem; 
    height: .26rem;
    margin-top: .07rem;
    /*vertical-align: -0.15em;*/
    fill: currentColor;
    overflow: hidden;
    color: #515151;
  }
}

</style>
