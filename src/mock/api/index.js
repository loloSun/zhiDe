import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'
// 响应拦截
axios.interceptors.response.use(function(res){
    return res.data
},function(err){
    return Promise.reject(err)
})


// 首页theme
export let getThemeHot = () =>{
    let theme =  axios.get('/getThemeHot')
    return theme.then((res)=>{
        return res.message
    })
}






// module.exports = router;
