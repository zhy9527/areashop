/*
 * 对象原型扩展
 * 包含字符串，数组，对象等
 */
// 数组相关
// 求交集
window.Array.intersect = function(b) {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            var str = arguments[i][j];
            if (!obj[str]) {
                obj[str] = 1;
            }
            else {
                obj[str]++;
                if (obj[str] == arguments.length)
                {
                    result.push(str);
                }
            }
        }
    }
    return result;
}