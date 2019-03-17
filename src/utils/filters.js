// 分拆货币 200.65 => 200 | .65,fix 不传显示全部
export function sliceCurrency(content,fix){  
    var content = content.toString();
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
    }

    if(fix == 'pre'){
        return prefix;
    }else if(fix == 'sub'){
        return subfix;
    }else{
        return prefix + subfix;
    }
} 

export function dateFormat(timestamp,type) {
    var timestamp = parseInt(timestamp)
    var date = new Date((timestamp + 28800) * 1000),
        Y = date.getFullYear() + '-',
        M = addPrefix(date.getMonth()+1) + '-',
        D = addPrefix(date.getDate()),
        h = addPrefix(date.getHours()) + ':',
        m = addPrefix(date.getMinutes()) + ':',
        s = addPrefix(date.getSeconds());
    if(type == 'date'){
        return Y + M + D;
    }else if(type == 'time'){
        return h + m + s
    }else{
       return Y + M + D + ' ' + h + m + s;
    }
}

function addPrefix(argument) {
    var argument = parseInt(argument)
    return argument < 10 ? ('0' + argument) : argument
}