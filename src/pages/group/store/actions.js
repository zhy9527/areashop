import * as types from './mutation-types'

const connect_id = 'b27c9eda0e7a8ddcaffc80ad92503bad'

export default {
    // 获取商品列表
    getAmwayList: ({ commit }) => {
        Fetch({
            url: 'ajax/anli',
            data: {
                server: 'anli.products',
                connect_id: connect_id
            }
        },function(response){
            commit(types.AMWAY_LIST, response.data.data)
        },function(error){
            console.log(error)
        })
    },
    // 获取收益
    getAmwayIncome: ({ commit }) => {
        Fetch({
            url: 'ajax/anli',
            data: {
                server: 'anli.revenue',
                connect_id: connect_id
            }
        },function(response){
            commit(types.AMWAY_INCOME, response.data.data)
        },function(error){
            console.log(error)
        })
    },
    // 获取收益明细
    getIncomeDetail: ({ commit }) => {
        Fetch({
            url: 'ajax/anli',
            data: {
                server: 'anli.orderList',
                connect_id: connect_id,
                status: status
            }
        },function(response){
            commit(types.AMWAY_INCOME, response.data.data)
        },function(error){
            console.log(error)
        })
    },
}
