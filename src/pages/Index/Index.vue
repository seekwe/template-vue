<style lang="less" scoped>
  /* 颜色全局变量 */
  @import '../../utils/colour.less';

  a {
    display: inline-block;
    padding: .3rem;
  }

  button {
    border: 1px solid #ddd;
    padding: .2rem;
    background-color: @main_light;
    color: #fff;
  }
</style>
<template>
  <div id="app">
    <!--这页也可以用来判断用户身份-->
    <img src="./img/my.jpg"> <img src="./img/1.jpg"> <img src="./img/my1.jpg">
    <demo-app></demo-app>
    <router-link to="/user">user</router-link>
    <router-link to="/user/login">Login</router-link>
    <router-link to="/user/reg">reg</router-link>
    <router-link to="/Other">Other</router-link>
    <br>
    <z-button @click.native="get">
      发起一个Get请求
    </z-button>
    <z-qr :bg-src="require('./img/1.jpg')" text="Hello world!"></z-qr>
  </div>
</template>

<script type="text/javascript">
  // 引入一个通用组件
  import Vue from 'vue'
  import App from '@/components/App'
  import Qr from 'zls.ui/z-qr'
  Vue.use(Qr)
  export default {
    data() {
      return {
        getData: ''
      }
    },
    mounted() {
    },
    computed: {},
    methods: {
      get() {
        this.$http.get('/')
            .then(e => {
              console.log(e)
            })
            .catch((e, r) => {
              console.log('失败了:', e, r)
            })
      }
    },
    components: {
      demoApp: App
    }
  }
</script>
