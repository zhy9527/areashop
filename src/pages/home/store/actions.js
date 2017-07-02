import * as types from './mutation-types'

export default {
    // 获取首页广告
    getHomeAds: ({ commit }) => {
        Fetch({
            url: 'http://m.fruitday.com/api?service=present_v2.items&source=wap',
            data: {
                region_id: '106092'
            }
        },function(response){
            commit(types.HOME_ADS, response.data.data)
        },function(error){
            console.log(error)
        })
    },
   
}
