<template>
<div>
    <footer class="footer" id="footer">
        <!-- 列 -->
        <div class="footer-column__wrapper">
            <!-- logo -->
            <div class="footer-column foot_logo">
                <img src="../../public/images/logo_zhide.png" style="width:120px;padding-top:30px;">
            </div>
            <div class="content_foot">
                <div class="footer-column">
                    <a href="#" class="title">发现</a>
                    <a href="#">值得首页</a>
                    <a href="#">值得精选</a>
                </div>
                <div class="footer-column">
                    <a href="#" class="title">联系与合作</a>
                    <a href="#">联系我们</a>
                    <a href="#">用户反馈</a>
                </div>
                <div class="footer-column">
                    <a href="#" class="title">关注我们</a>
                    <a href="http://weibo.com/u/2786413907">新浪微博：@PxCao</a>
                    <a href="#">邮箱：fanshyiis@163.com</a>
                </div>
            </div>
            <!-- 三个彩色半圆 -->
            <div class="foot_cricle">
                <div class="foot_cricle_1"></div>
                <div class="foot_cricle_2"></div>
                <div class="foot_cricle_3"></div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>©Copyright 值得工作室
                <span class="divider">|</span>
                <a href="#">京ICP备16019587号-2</a>
            </p>
        </div>
    </footer>
    <!-- 回到顶部 -->
    <div class="elevator-wrap">
        <a href="javascript:;" id="elevator"></a>
        <a href="javascript:;" id="plus"></a>
        <div id="plus_popup">
            <router-link to="/index/newZhide"><i class="icon-pencile"></i>写值得</router-link>
            <router-link to="/user"><i class="icon-board"></i>个人中心</router-link>
        </div>
    </div>
</div>
</template>
<style scoped>
/* 底部 */
    .footer{
        background: #f8f8f8;
    }
    .footer-column__wrapper{
        position: relative;
        width: 1248px;
        margin:0 auto;
        font-size: 0;
        padding-top:25px;
    }
    .content_foot{
        margin-top:120px;
        width: 100%;
        text-align: center;
    }
    .footer-column{
        display: inline-block;
        width: 200px;
        height: 142px;
        vertical-align: top;
    }
    .foot_logo{
        position: absolute;
        text-align: center;
        width: 100%;
    }
    .footer-column a{
        line-height: 32px;
        color:#bbb;
        font-size: 14px;
    }
    .footer-column .title{
        font-size: 16px;
        color:#999;
    }
    .footer-column a:hover{
        color:#f57a6b;
    }
    /* 三个彩色半圆 */
    .foot_cricle{
        overflow: hidden;
        height: 70px;
        position: relative;
    }
    .foot_cricle_1{
        margin-left: -100px;
        border-radius: 50%;
        left: 50%;
        width: 200px;
        position: absolute;
        height: 200px;
        background: #f7fe00;
    }
    .foot_cricle_2{
        top: 30px;
        margin-left: -200px;
        border-radius: 50%;
        left: 50%;
        width: 200px;
        position: absolute;
        height: 200px;
        background: #f97083;
    }
    .foot_cricle_3{
        top: 30px;
        margin-left: 0;
        left: 50%;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        position: absolute;
        background: #89ec6a;
    }
    /* 黑块 */
    .footer-copyright{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color:#999;
        background-color: #000;
    }
    .footer-copyright .divider{
        display: inline-block;
        margin:0 8px;
        color:#555;
    }
    .footer-copyright a{
        display: inline;
        color:#999;
    }
/* 回到顶部 */
    .elevator-wrap{
        position: fixed;
        z-index: 999;
        right: 15px;
        bottom: 10px;
    }
    #elevator,
    #plus{
        width: 40px;
        height: 36px;
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        background: rgba(0,0,0,.6) url(../../public/images/elevator_icon.png) no-repeat;
        border-radius: 2px;
    }
    #elevator{
        background-position: 8px 6px;
        margin-bottom: 6px;
    }
    #plus{
        background-position: 8px -34px;
    }
    #elevator:hover,
    #plus:hover{
        background-color: rgba(0,0,0,.7)
    }
    #plus_popup{
        display: none;
        position: absolute;
        right: 50px;
        bottom: 0;
        padding:10px 0;
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        background-color: #fff;
        border-radius: 2px;
    }
    #plus_popup:after{
        /* 箭头 */
        content:"";
        position: absolute;
        right: -6px;
        bottom: 14px;
        width: 6px;
        height: 11px;
        background: url(../../public/images/plus_arrow.png) no-repeat;
    }
    #plus_popup a{
        display: inline-block;
        width: 142px;
        height: 38px;
        line-height: 38px;
        color: #333;
    }
    #plus_popup a:hover{
        background: #f2f2f2;
    }
    #plus_popup i{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-left: 16px;
        margin-right: 12px;
        background: url(../../public/images/plus_icons.svg) no-repeat;
    }
    #plus_popup i.icon-board {
        background-position: 0 -520px;
    }
</style>


