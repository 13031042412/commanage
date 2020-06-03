import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '../public/base.css'
import store from './store'
import axios from './http'
// import 'swiper/css/swiper.min.css'

import GlobalLoading from './components/GlobalLoading.vue'




Vue.config.productionTip = false;

//第一次进入程序执行
store.commit('run');

// 全局loading组件
Vue.component('GlobalLoading', GlobalLoading);

Vue.prototype.$axios = axios;




new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app');
