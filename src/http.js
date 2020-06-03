import axios from 'axios'

axios.defaults.headers.get = 'text/html;charset=UTF-8;application/json';
axios.defaults.headers.post = 'application/x-www-form-urlencoded';
axios.defaults.headers.clientid = '3';
axios.defaults.headers.token_client = '18830d4e05beb9ed3004b0c2cb665406';
axios.defaults.headers.token_user = '';


// 响应拦截
axios.interceptors.response.use(
    response=>{
        return response;
    },
    error => {
        // 错误提醒
        console.log(error.response.data);
        return Promise.reject(error);
    }
);











export default axios;
