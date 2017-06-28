/**
 * 配置信息
 */
let Config = {
	IS_DEBUG: true, //是否调试模式,线上为 false
    PAGE_SIZE: 10, //默认分页大小
    PAGE: 1, //当前第几页，从0开始
    baseUrl: location.protocol + '//' + location.host + '/',
    imgBaseUrl: location.protocol + '//' + location.host + '/',
    DEF_IMG_URL: '../assets/images/logo.png', //默认图片
    RATIO_OF_ADSPIC: 75 / 106, //广告图片的宽高比
    VERSION: '1.0.0' //版本号
}

if (!!Config.IS_DEBUG || process.env.NODE_ENV == 'development') {
	Config.baseUrl = 'http://staging.m.fruitday.com/';
}

window.Config = Config;
