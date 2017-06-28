/**
 * Tools 工具类方法
 * 包括货币，设备user agent，
 */
let Tools = {
	/**
	 * 合并对象，返回新的对象
	 * 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
	 */
	updateObject: function(oldObject, newValues) {
    	return Object.assign({}, oldObject, newValues);
	},
	// 合并对象
	updateItemInArray: function(array, itemId, updateItemCallback) {
	    const updatedItems = array.map(item => {
	        if(item.product_id !== itemId) {
	            // 因为我们只想更新一个项目，所以保留所有的其他项目
	            return item;
	        }

	        // 使用提供的回调来创建新的项目
	        const updatedItem = updateItemCallback(item);
	        return updatedItem;
	    });

	    return updatedItems;
	},
	/**
	 * 浏览器判断方法相关
	 */
	// 是否微信浏览器
	isWeChatBrowser: function() {
        var e = navigator.userAgent.toLowerCase();
        return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1
    },
    // 是否果园APP
    isFruitdayAppBrowser: function() {
        var e = navigator.userAgent;
        return ("FD_iPhone" == e.match(/FD_iPhone/i) || "FD_Android" == e.match(/FD_Android/i)) ? !0 : !1
    },
    // 是否果园Android APP
    isFruitdayAndroidBrowser: function() {
        var e = navigator.userAgent;
        return ("FD_Android" == e.match(/FD_Android/i)) ? !0 : !1
    },
    // 是否果园iOS APP
    isFruitdayiOSBrowser: function() {
        var e = navigator.userAgent;
        return ("FD_iPhone" == e.match(/FD_iPhone/i)) ? !0 : !1
    },
    /**
     * 货币处理相关
     */
    // 分拆货币 200.65 => 200 | .65,fix 不传显示全部
    sliceCurrency: function(content,fix){
        if (!content || isNaN(content)){
            return content;
        }else{
            content = parseFloat(content).toFixed(2) + '';
        }

        var prefix, subfix, idx = content.indexOf('.');
        if (idx > 0) {
            prefix = content.substring(0, idx);
            subfix = content.substring(idx, content.length);
            if(subfix.indexOf('.00') > -1){
                subfix = ''
            }else if(subfix.substr(subfix.length-1,subfix.length) == '0'){
                subfix = subfix.substr(0,subfix.length - 1) == '.' ? '' : subfix.substr(0,subfix.length - 1)
            }
        } else {
            prefix = content;
            subfix = '';
        }

        if(fix == 'prefix'){
            return prefix;
        }else if(fix == 'subfix'){
            return subfix;
        }else{
            return prefix + subfix;
        }
    },
}

window.Tools = Tools;
