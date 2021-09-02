import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
	cartList: []
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
}) 

export default  store
