<template>
    <div class="user" id="user">
        <div class="user-inner">
            <div class="cricle-1"></div>
            <div class="cricle-2"></div>
            <img src="../../public/images/logo_zhide.png" alt="#" class="login-logo">
            <div class="register" style="height:292px;">
                <div class="cricle-3 animated rubberBand">去登录</div>
                <div class="holder animated flipInX">
                    <div class="with-line">
                        <span>邮箱注册</span>
                    </div>
                    <div class="mail-login">
                        <input type="text" class="text" placeholder="输入邮箱" v-model="UserName">
                        <input type="text" class="text" placeholder="输入昵称" v-model="Nick">
                        <input type="password" class="password" placeholder="密码" v-model="Pwdreg_1">
                        <input type="password" class="password" placeholder="再次输入密码" v-model="Pwdreg_2">
                        <a href="#" class="login-up">注册</a>
                    </div>
                </div>
            </div>
            <div class="login" style="height:232px;">
                <div class="cricle-4 animated rubberBand">去注册</div>
                <div class="holder animated flipInX">
                    <div class="with-line">
                        <span>使用账号登录</span>
                    </div>
                    <div class="mail-login">
                        <input type="text" class="text" placeholder="输入账号" v-model="UserName">
                        <input type="password" class="password" placeholder="密码" v-model="Pwd">
                        <a href="#" class="login-up">登录</a>
                    </div>
                </div>
            </div>
            <div class="close"><span></span></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            UserName:"",
            Nick:"",
            Pwdreg_1:"",
            Pwdreg_2:"",
            Pwd:""
        }
    },
    mounted(){
        
    },
    methods:{
    }
}
</script>

<style scoped>
/*  遮罩 */
.user{
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99998;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3)
}
/* 大盒子 */
.user-inner{
    margin-top:-250px;
    overflow: hidden;
    position: relative;
    left: 50%;
    top:50%;
    z-index: 99999;
    width: 520px;
    margin-left: -260px;
    background: #fff;
    padding:30px 0 20px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .3)
}
.cricle-1{
    top: -110px;
    left: 30px;
    position: absolute;
    width: 160px;
    height: 160px;
    background: #f5e84c;
    border-radius: 50%;
}
.cricle-2{
    top: -60px;
    left: -10px;
    position: absolute;
    width: 100px;
    height: 100px;
    background: #f56ba4;
    border-radius: 50%;
}
.user .login-logo{
    display: block;
    width: 156px;
    margin:0 auto;
}
/* // 注册 */
.user .register{
    height: 200px;
}
.user .register .holder{
    margin-top: 30px;
}
.user .holder{
    width: 286px;
    margin:0 auto;
}
.user .with-line{
    position: relative;
    height: 16px;
}
.user .with-line:before,
.user .with-line:after{
    content:"";
    position: absolute;
    top: 7px;
    width: 50px;
    border-top:1px solid #ededed;
}
.user .with-line:before{
    left: 0;
}
.user .with-line:after{
    right: 0;
}
.user .with-line span{
    display: block;
    text-align: center;
    color: #999;
    font-size: 16px;
    line-height: 16px;
}
.cricle-3{
    width: 160px;
    height: 160px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    background: #f57a6b;
    color: #fff;
    text-align: center;
    line-height: 60px;
    position: absolute;
    bottom: -110px;
    left: 186px;
    transition: .2s;
}
.user .mail-login{
    margin:16px 0 12px;
}
.user .mail-login input{
    margin-bottom: 10px;
    width: 100%;
    height: 34px;
    padding:0 10px;
    border:1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .05);
    color:#777;
    background: #fcfcfc;
    font-size: 16px;
}
.user .mail-login input:focus{
    background: #fff;
}
.user .mail-login .login-up{
    width: 100%;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #f57a6b;
    font-size: 16px;
    border:1px solid #f57a6b;
    border-radius: 3px;
}
.user .mail-login .login-up:hover{
    color: #fff;
    background: #f57a6b;
    box-shadow: inset 0 1px 0 rgba(225, 225, 225, .08),0 1px 0 rgba(225, 225, 225, .1)
}
.user .login {
    margin-top: 20px;
    margin-right: -10px;
}
.cricle-4{
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  bottom: -110px;
  left: 186px;
  position: absolute;
  width: 160px;
  height: 160px;
  background-color: #f38b73;
  border-radius: 50%;
  transition: .2s;
}
/* 关闭 */
.user .close{
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;
}
.user .close span{
    position: relative;
    left: 8px;
    top: 6px;
    display: block;
    width: 18px;
    height: 18px;
    background: url(../../public/images/user_close.png) no-repeat;
}
.user .close span:hover {
  background-position: 0 -30px;
}
</style>

