let express = require('express')
let app = express()
let cors = require('cors')
app.use(cors())

let theme  = require('./json/Theme.json')
// 首页一行图接口
app.get('/theme',function(req,res){
    res.json({success_code:200,message:theme})
})

app.listen(4000,function(){
    console.log('OK')
})