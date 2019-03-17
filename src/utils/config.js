/**
 * 配置信息
 * 挂载window，便于actions使用。挂载store下便于模板使用
 * 把配置信息分为基础配置、提示信息
 */

window.config = {
    IS_DEBUG: 1, //是否调试模式,线上为 0
    PAGE_SIZE: 20, //默认分页大小
    PAGE: 1, //当前第几页，从0开始
    HOST_API: location.protocol + '//' + location.host + '/',
    HOST_IMAGE: location.protocol + '//' + location.host + '/',
    RATIO_OF_ADSPIC: 75 / 106, //广告图片的宽高比
    SMS_DURATION: 120, //发短信计时间隔，秒
    SHARE_HOSTS: [ //分享域名集合
        location.protocol + '//' + location.host
    ],
    APPId:'wxddd65382bd30dcbb',
    BAIDU_ID: '', //百度统计,正式
    VERSION: '1.0.0' //版本号
};

if (config.IS_DEBUG) {
    //配置测试相关信息
    config.HOST_API = 'https://api.areashop.cn/';
    // config.HOST_API = 'https://spa.fruitday.com/';
    // config.HOST_API = 'http://stagingnirvana3.fruitday.com/';
}
