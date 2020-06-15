export default {
    addFn({ commit }, obj) {
        commit('ADD', obj)
    },
    logoFn({ commit }, obj) {
        commit('setLogo', obj)
    }


}