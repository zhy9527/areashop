import * as types from './mutation-types'

export default {
    [types.HOME_ADS](state,data){
        state.homeAds = data
    },
    [types.AREA_LIST_STATE](state,data){
        state.areaListState = data
    },
    [types.CURRENT_AREA](state,data){
        state.currentArea = data
    },
    [types.CURRENT_CLASS_TAB](state,data){
        state.currentClass = data
    }
}
