![天天果园](http://www.fruitday.com/images/common/logo.svg)
## 包含项目

> [积点福利 employeeBenefit](https://spa.fruitday.com/employeeBenefit?connect_id=你的&store_id_list=1)

> [在线客服 customerService](https://spa.fruitday.com/customerService?connect_id=你的&store_id_list=1)

> [送礼 sendGift](https://spa.fruitday.com/sendGift?connect_id=你的)

> [发现->文章详情 discovery](https://spa.fruitday.com/discovery/detail?id=1)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

[vue 文档](https://cn.vuejs.org/v2/guide/),[vue-router 文档](https://router.vuejs.org/zh-cn/),[vuex 文档](https://vuex.vuejs.org/zh-cn/).


## 记录
1. 公共方法挂载到window对象 还是 挂载到vue实例
2. `actions` 无法拿到vue实例,传参太麻烦
3. 模板无法直接使用本地方法,如果模板需要,需要计算

## 送礼
``` bash
## 优化
1. *h5订单列表分页
2. *h5首页加滚动导航定位
3. 商品详情滚动图用大图
4. *h5品类列表商品价格加粗

## 新增
1. 点击领取锁单，15分钟后释放
2. 子单详情加领取时间
3. 优化领取地址（使用微信地址不能控制可配送区域）
4. APP分享小程序（老版本分享h5，点击识别二维码）
5. 兼容iPhoneX
6. 首页banner可配置
7. *小程序订单增加领取的订单和购买的订单
8. 上下架商品，下架商品不展示。
9. 判断库存
10. 增加查看物流信息
```
