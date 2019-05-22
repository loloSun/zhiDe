<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Footer
  }
}
</script>
<style lang="less">
*{
  margin:0;
  padding: 0;
  font-size: 14px;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  // color: #333;
  // background-color: #fff;
}
ul, ol {
  list-style: none;
}
a {
  display: block;
  color: #333;
  text-decoration: none;
}
em, strong, i {
  font-style: normal;
}
// a:hover {
//   color: #9A0000;
//   text-decoration: underline;
// }
select,input, button ,textarea{
  padding: 0;
  border: none;
  outline: none;
  background: none;
}
img {
  vertical-align: top;
}
</style>
