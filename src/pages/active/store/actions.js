import * as types from './mutation-types'

export default {
    // 获取首页数据
    // fuliHome: ({ commit, state }) => {
    //     Fetch({
    //         url: config.HOST_API + 'apigateway',
    //         data: {
    //             service: 'user.fuliHome',
    //             source: 'app',
    //             connect_id: Storage.get('routeQuery',1).connect_id
    //         }
    //     })
    //     .then(response=>{
    //         const data = response.data;
    //         let string = Object.prototype.toString; 
    //         if(string.call(data.point) == "[object Object]" && data.point.list && data.point.list.length > 0){
    //             commit(types.POINT, data.point)
    //         }
    //         if(data.card.length > 0){
    //             commit(types.CARD, data.card)
    //         }
    //     })
    // }
}
