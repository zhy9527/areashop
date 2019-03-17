/**
 * Common 公共方法
 */
let Common = {
	/**
	 * 浏览器userAgent判断方法相关
	 */
	// 是否微信浏览器
	isWeChatBrowser: function() {
        var e = navigator.userAgent.toLowerCase();
        return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1
    },
    //获取自定义存储的数据
    getData: function(el, name, val){
        let prefix = 'data-'
        if (val) {
            return el.setAttribute(prefix + name, val)
        }
        return el.getAttribute(prefix + name)
    }
}

window.Common = Common;