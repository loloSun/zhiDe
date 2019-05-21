let express = require('express')
let app = express()

// 静态文件中间件
// app.use('public',express.static(__dirname + '/public'));

// 首页一行图接口
app.get('/',function(req,res){
    // let newList = data.reverse().slice(0,6)
    // res.json(newList)
    console.log(res.reverse())
})

app.listen(3000,()=>{
    console.log('OK')
})