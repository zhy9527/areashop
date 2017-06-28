import * as types from './mutation-types'

export default {
    [types.AMWAY_TAB_HOME](state) {
        state.tab = 'home'
    },
    [types.AMWAY_TAB_ME](state) {
        state.tab = 'me'
    },
    [types.AMWAY_LIST](state,data){
        state.goodsList = data.products
    },
    [types.AMWAY_INCOME](state,data){
        state.income = data
    }
}
