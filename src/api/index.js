import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
// 响应拦截
axios.interceptors.response.use(function(res){
    return res.data
},function(err){
    return Promise.reject(err)
})