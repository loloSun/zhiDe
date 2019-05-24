<template>
    <div>
        <!-- 头部（nav banner） -->
        <header class="header" id="header">
            <div class="header-bg"></div>
            <div class="header-top">
                 <Nav />
            </div>
            <!-- banner图上的内容 -->
            <div class="banner">
                <h2 class="banner-title">
                    <img src="../../public/images/banner-title_img.png" alt="#">
                </h2>
                <div class="search">
                        <form action="#">
                        <input type="text" class="search-text" placeholder="搜索你喜欢的">
                        <a href="#" class="search-btn sprite_icon"><!-- 妖精 --></a>  
                    </form>
                </div>
            </div>
            <div class="header-bg__info">图片：<a href="#">插画师苏寒</a></div>
        </header> 
        <!-- 登录注册 -->
        <Login />
        <!-- 中间部分 -->
        <div class="main">
            <div class="main-inner">
                <div class="main-list">
                    <!-- 介绍线 -->
                    <div class="recommend-line">
                        <span>大家正在关注</span>
                    </div>
                    <!-- 长条banner -->
                    <div class="banner_2"></div>
                    <!-- 一行图 -->
                    <div class="main-list__wrapper clearfix">
                        <!-- <div class="noLoad">
                            <div class="spinner">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </div> -->
                        <!-- theme 主题 -->
                        <a style="cursor:pointer;" v-for="(theme,index) in Theme" :key="index" @click="goTheme(theme.objectId)">
                            <img class="blur" :src="theme.mainPic.url" :alt="theme.Theme_title">
                            <span>{{theme.Theme_title}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Nav from '@/components/Nav.vue'
import Login from '@/components/Login.vue'
import {getThemeHot} from '../mock/api'
export default {
    data(){
        return{
            Theme:[]
        }
    },
    components:{
        Nav,
        Login
    },
    async created(){
        this.Theme = await getThemeHot()
    },
    methods:{
        goTheme:function(e){
            console.log(e)
        }
    },
    mounted(){
        // 屏幕滚动
        $(window).scroll(function () {
            // 背景图放大
            $('.header-bg ').css("background-size",$(this).scrollTop() / 12 + 100 + '%')
            // nav 样式变化 添加类名
            if ($(this).scrollTop() >= 300) {
            $('.header-top').addClass('header-top__fixed');
            } else {
            $('.header-top').removeClass('header-top__fixed');
            }
        })
    }
}
</script>
<style scoped>
@import url(../../public/css/animate.min.css);
/* header */
    .header{
        position: relative;
        width: 100%;
        height: 560px;
    }
    .header-bg{
        width:100%;
        height: 560px;
        background: url(../../public/images/header_bg3.jpg) no-repeat center top;
        background-attachment: fixed;/* 指明背景图的位置是固定于视口的，还是随着包含块移动的 */
        background-size: 100%;
    }
    .header-top{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 48px;
        transition: .3s;
    }
    /* 另一种nav样式 */
    .header-top__fixed{
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        background: #fff;
        border-bottom: 1px solid rgba(204, 204, 204, 0.25);
    }
    /* banner图上的内容 */
    .banner{
        position: absolute;
        top: 120px;
        left:50%;
        width: 558px;
        margin-left:-279px;
    }
    .banner-title{
        width: 100%;
        text-align: center;
    }
    /* search */
    .banner .search{
        margin-top:40px;
        position: relative;
    }
    .banner .search-text{
        width: 558px;
        height: 36px;
        border:1px solid rgba(225, 225, 225, .8);
        background: rgba(0,0,0,.15);
        float: left;
        padding:0 12px;
        border-radius: 2px;
        box-sizing: border-box;
        color:#a9a9a9;
    }
    .banner .search:hover .search-text{
        border:1px solid rgba(225,225,225,1);
        background: rgba(0,0,0,.3);
    }
    .banner .search-btn{
        width: 40px;
        height: 36px;
        background: url(../../public/images/icon-search.svg) no-repeat 9px 7px;
        float: left;
        position: absolute;
        right: 0;
        top: 0;
    }
    .banner .search:hover .search-btn {
        background-position: 9px -43px;
    }
    .header-bg__info{
        position: absolute;
        right: 50px;
        bottom: 0;
        line-height: 56px;
        color: #fff;
    }
    .header-bg__info a{
        display: inline;
        color:rgba(225, 225, 225, .85)
    }
/* main */
    .main{
        padding-bottom:42px;
    }
    .main-inner{
        width: 1248px;
        margin:0 auto;
    }
    /* 介绍线 */
    .recommend-line{
        position: relative;
        padding:20px 0;
    }
    .recommend-line:before,
    .recommend-line:after{
        content:"";
        position: absolute;
        top: 28px;
        width: 44%;
        border-top:1px solid #ededed;
    }
    .recommend-line:before{
        left: 0;
    }
    .recommend-line:after{
        right: 0;
    }
    .recommend-line span{
        font-size: 16px;
        color:#999;
        text-align: center;
        display: block;
    }
    /* banner2 */
    .banner_2{
        margin-bottom:10px;
        border-radius: 5px;
        width: 99.7%;
        height: 58px;
        background: url(../../public/images/banner_1.jpg) center;
    }
    /* 一行图 */
    .main-list__wrapper{
        margin-right:-16px;
    }
    .main-list__wrapper a{
        position: relative;
        overflow: hidden;
        float: left;
        width: 164px;
        height: 70px;
        margin-right: 16px;
        border-radius: 5px;
    }
    .main-list__wrapper img{
        opacity: .9;
    }
    .main-list__wrapper a:hover img{
        opacity: 1;
    }
    .main-list__wrapper span{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        line-height: 70px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    /* 清除浮动 */
    .clearfix{
        zoom: 1;
    }
    .clearfix:after{
        content:"020";
        height: 0;
        display: block;
        clear: both;
        visibility: hidden;
    }

</style>


