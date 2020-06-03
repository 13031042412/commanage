import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,  //数据
    getters,    //计算属性
    mutations,  //方法
    actions,    //提交mutations
    modules: {}
})