<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
*{
  margin:0;
  padding: 0;
  font-size: 14px;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  color: #333;
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
