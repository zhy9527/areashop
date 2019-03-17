import axios from 'axios'
/**
 * 异步请求
 * @param options-封装请求url，请求数据，请求类型
 */
let Fetch = (options) => {
	//添加一个请求拦截器
	axios.interceptors.request.use(function(config){
		// console.log(config)
		//在请求发出之前进行一些操作
		return config;
	},function(err){
		//Do something with request error
		return Promise.reject(error);
	});
	//添加一个响应拦截器
	axios.interceptors.response.use(function(res){
		//在这里对返回的数据进行处理
		return res;
	},function(err){
		//Do something with response error
		return Promise.reject(error);
	})

	return axios({
		url: options.url || config.HOST_API,
        method: options.method || 'POST',
        baseURL: options.baseURL,
        headers: {
        	'X-Requested-With': 'XMLHttpRequest',
        	token: options.token || ''
        },
		//`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
		params: options.method ? options.data : '',
		data: options.data,
		timeout: options.timeout || 30000,
		//`withCredentails`选项表明了是否是跨域请求
		withCredentials: false,//default
		responseType: 'json',//default
		//`xsrfCookieName`是要用作 xsrf 令牌的值的cookie的名称
		xsrfCookieName: 'XSRF-TOKEN',//default
		// `xsrfHeaderName`是携带xsrf令牌值的http头的名称
		xsrfHeaderName:'X-XSRF-TOKEN',//default
		//`onUploadProgress`上传进度事件
		// onUploadProgress:function(progressEvent){
		// 	// console.log(progressEvent)
		// },
		// //下载进度的事件
		// onDownloadProgress:function(progressEvent){
		// 	// console.log(progressEvent)
		// },
		// //相应内容的最大值
		// maxContentLength: 2000,
		// //`validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
		// //如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
		// validateStatus:function(status){
		// 	return status >= 200 && status <300; //default
		// },
		// //`maxRedirects`定义了在nodejs中重定向的最大数量
		maxRedirects: 5,//default
    })
	.then(response=>{
		let code = Number(response.data.code)
		return response.data;
	})

}

window.Fetch = Fetch;
