import { ADD, TOTAL } from './mutation-types'

export default {
    run() {  //定义进入第一次app(任何页面)执行的方法，一般用于判断是否登录等,在main.js中调用
        console.log('我进入了app')
    },
    [ADD](state, obj) {
        console.log(obj)
        state.count++;
        this.commit('TOTAL');
    },
    [TOTAL](state) {
        state.total = state.count * 10;
    },


    setTopBarTitle(state, val) {
        state.topBarTitle = val;
    },
    setLogo(state, val) {
        state.logo = val;
    }


}