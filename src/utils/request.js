import Axios from 'axios';
import store from '@/store';
import { Message, Msgbox } from 'element3';
import { setToken } from 'utils/auth';
import { removeToken } from 'utils/auth';
import router from '@/router';

// 创建axios实例
const axiosInstance = Axios.create({
    // 当发送请求时携带cookie
    withCredentials: true,
    // 在请求地址前面加上baseURL
    // baseURL: 'http://192.168.31.106:8080',
    // 请求超时时间
    timeout: 5000,
});

// 请求拦截
axiosInstance.interceptors.request.use(
    (config) => {
        // django-corsheaders 对应的跨域请求配置
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        const regex = /.*crsftoken=([^;.]*).*&/;
        config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
        // 在请求头中携带token信息
        if ( store.getters.token) {
            config.headers['X-Token'] = store.getters.token;
            // 实现使用jwt登录
            config.headers['Authorization'] = "JWT " + store.getters.token;
        }
        return config
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error);
        return Promise.reject(error);
    },
);

// 响应拦截器
axiosInstance.interceptors.response.use((response) => {
    // 可以自定义状态码，用于定义返回数据的状态
    return response
}, (error) => {
    console.log("err:" + error);
    // router.replace({
    //     path:'/login',
    //     query:{redirect:router.currentRoute.fullPath}
    // })
    return Promise.reject(error);
})

export default axiosInstance
