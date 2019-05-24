let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// var router = express.Router();

// 首页theme接口
let theme  = require('./json/Theme.json')
app.get('/getThemeHot',function(req,res){
    res.json({success_code:200,message:theme})
})


app.listen(4000,function(){
    console.log('OK')
})




