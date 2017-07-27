<template>
    <section class="amway">
        <v-header :store="{title:'返利',rightText:'查看规则'}"></v-header>
        <img src="../../assets/images/amway/process.png">
        <div class="tab-content goods" v-if="amway.tab == 'home'">
            <div class="title">
                <i class="iconfont icon-fanlishangpin"></i>本期返利商品
            </div>
            <div class="goods-items" id="product-list">
                <div class="item l_r" v-for="item in amway.goodsList">
                    <img src="https://imgws5.fruitday.com/images/product_pic/46/1/1-180x180-46-CUDTC1KY.jpg" alt="">
                    <div class="info">
                        <div class="name">{{item.product_name}}</div>
                        <div class="format">
                            <span class="unit">{{item.volume}}</span>
                            <div class="price">
                                <div class="rebate"><span>￥{{item.price}}</span><em>(返￥{{item.money}})</em>
                                </div>
                                <a href="fruitday://Share?shareUrl=<!--[= $hostApi()]-->statics/amway/goods.html#uid*<!--[= $getUid() ]-->|product_id*<!--[=list[i].product_id]-->&shareTitle=果园好物推荐:<!--[=list[i].product_name]-->&shareText=果园好物推荐:<!--[=list[i].product_name]-->&iconUrl=<!--[=list[i].thum_photo]-->">分享得返利</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content income" v-else>
            <div class="extract">
                <p>可提取佣金金额</p>
                <dl class="l_r">
                    <dt class="amount" id="amount">￥{{amway.income.money[2]}}</dt>
                    <dd class="btn" v-bind:class="{ active: amway.income.money[2]>0 }">提现</dd>
                </dl>
            </div>
            <div class="total">
                <div class="item">
                    <p>累计已提取</p>
                    <p class="data" id="data-a">￥{{amway.income.money[3]}}</p>
                </div>
                <div class="item">
                    <p>待结算金额</p>
                    <p class="data" id="data-b">￥{{amway.income.money[1]}}</p>
                </div>
                <div class="item">
                    <p>好友累计购买</p>
                    <p class="data" id="data-c">{{amway.income.count}}次</p>
                </div>
            </div>
            <router-link to="/amway/incomeDetail" class="l_r more">
                <dt>收益明细</dt>
                <dd><i class="iconfont icon-morehome"></i></dd>
            </router-link>
            <router-link to="/amway/withdrawLog" class="l_r more">
                <dt>提现记录</dt>
                <dd><i class="iconfont icon-morehome"></i></dd>
            </router-link>
            <router-link to="/amway/incomeDetail1" class="l_r more">
                <dt>身份认证</dt>
                <dd><i class="iconfont icon-morehome"></i></dd>
            </router-link>
        </div>
        <v-footer></v-footer>
    </section>
</template>

<script>
import header from '../../components/header.vue'
import footer from './components/footer.vue'
import { mapState } from 'vuex'
export default {
    name: 'goodsList',
    created: function () {
        this.$store.dispatch('getAmwayList');
        this.$store.dispatch('getAmwayIncome');
    },
    computed: {
        ...mapState({
            amway: state => state.amway,
        })
    },
    components: {
        'v-header': header,
        'v-footer': footer,
    }

}
</script>

