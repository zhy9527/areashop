import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './states'
import actions from './actions'
import getters from './getters'
import * as modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    actions,
    getters,
    modules,
    strict: debug
})