<template>
    <footer class="main-nav">
        <router-link to="/" class="footer-item active" href="#">
            <span>首页</span>
        </router-link>
        <router-link to="hello" href="#">
            <span>分类</span>
        </router-link>
        <a class="footer-item" href="#">
            <span>购物车</span>
        </a>
        <a class="footer-item" href="#">
            <span>我的果园</span>
        </a>
    </footer>
</template>

<script>
export default {
  name: 'footer',
  data: function() {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
    .main-nav {
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);
  background: #fff;
  height: 42px;
  font-size: 10px;
  line-height: 1.2; }
  .main-nav a {
    width: 100%;
    color: #898989;
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1; }
    .main-nav a.active {
      color: #65a032; }
  .main-nav img {
    margin: 3px auto 4px;
    height: 21px;
    width: auto; }
  .main-nav i {
    display: block;
    font-size: 24px; }
</style>