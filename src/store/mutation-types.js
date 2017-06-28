/**
 * 常量定义，约定action到reducer的处理关系
 */
class BaseConstant {
    /**
     * 添加固定的前缀，以区分不同模块
     * @param key string 描述字符串
     */
    add(key){
    	return this.module + '_' + key;
    }

    /**
     * 常量，标识请求开始
     */
    get FETCH_START() {
        return this.add('FETCH_START')
    }

    /**
     * 常量，标识请求成功
     */
    get FETCH_SUCCESS() {
        return this.add('FETCH_SUCCESS')
    }

    /**
     * 常量，标识请求失败
     */
    get FETCH_FAILED() {
        return this.add('FETCH_FAILED')
    }
}

export default BaseConstant;
