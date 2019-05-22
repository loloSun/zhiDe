<template>
    <div class="container" style="padding-right:0px;padding-left:0px;">
        <!-- 加载失败 -->
        <!-- <div class="info_err animated flipInX" v-if="errors">{{errors}}</div> -->
        <router-link to="/" class="header-logo"></router-link>
        <nav class="header-nav">
            <router-link to="/" class="item">发现</router-link>
            <router-link to="/newest" class="item new-icon">最新<i></i></router-link>
        </nav>
        <!-- 是否显示登陆按钮 -->
        <div>
        <!-- <div v-if="!user"> -->
            <div class="header-user">
                <!-- <router-link to="/" class="register" style="width:70px;display:block;"></router-link> -->
                <router-link to="/" class="register">注册</router-link>
                <router-link to="/" class="login">登录</router-link>
            </div>
        </div>
        <!-- <div v-if="user">
            <div class="header-user">
                <router-link to="/user" class="username">{{user.Nick}}</router-link>
            </div>
        </div> -->
    </div>
</template>
<style scoped>
.container{
    width: 1248px;
    margin:0 auto;
}
.header-logo{
    float: left;
    width: 80px;
    height: 60px;
    margin-top:6px;
    background: url(../../public/images/logo.png) no-repeat;
    background-size: 100%;
}
.header-nav{
    float: left;
    padding: 10px 22px 0 20px;
}
.header-nav .item{
    cursor: pointer;
    float: left;
    line-height: 28px;
    margin-right: 26px;
    color:rgba(225,225,225,.85);
    transition:.3s;
    border:none;
}
.header-nav .item:hover{
    text-decoration: none;
    border-bottom: 1px solid #fff;
}
.header-nav .item.router-link-active{
    border-bottom: 1px solid white;
}
.header-nav .new-icon{
    position:relative;
    margin-right: 20px;
}
.header-nav .new-icon i{
    display:inline-block;
    width: 30px;
    height: 14px;
    margin-left: 7px;
    margin-bottom: 4px;
    background: url(../../public/images/header_new.svg) no-repeat;
    vertical-align:middle;
}
.header-user{
    float:right;
    margin-top:8px;
}
.header-user .register,
.header-user .login{
    float: left;
    width: 52px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-left: 10px;
    color:#fff;
    border-radius: 2px;
}
.header-user .register{
    background: rgba(201,0,0,.6);
    /* 透明的 */
    border:1px solid transparent;
}
.header-user .register:hover{
    background: rgba(201,0,0,.9)
}
.header-user .login{
    border:1px solid rgba(225,225,225,.8);
    box-sizing:border-box;
}
.header-user .login:hover{
    color:#444;
    background: #fff;
}


/* 另一种nav样式 */
    
    .header-top__fixed .header-logo{
        background: url(../../public/images/logo_red.png) no-repeat;
        background-size: 100%;
    }
    .header-top__fixed .header-nav .item{
        color:#333;
    }
    .header-top__fixed .header-nav .item:hover{
        color:#f57a6b;
    }
    .header-top__fixed .header-nav .item.router-link-active{
        color:#f57a6b;
    }
    .header-top__fixed .header-user .register{
        height: 32px;
        line-height: 32px;
        background: #f57a6b;
    }
    .header-top__fixed .header-user .register:hover{
        /* 线性渐变 */
        background: linear-gradient(#F45D68, #E54646)
    }
    
    .header-top__fixed .header-user .login{
        height: 34px;
        line-height: 34px;
        color:#333;
        border-color:#d9d9d9;
    }
    .header-top__fixed .header-user .login:hover{
        background: linear-gradient(#fff,#f7f7f7);
        border-color:#ccc;
    }
</style>

