<style lang="less" scoped>
  #login {
    & input {
      width: 100%;
    }
  }
</style>
<template>
  <div id="login">
    login ...?<br>
    <div>
      <label>用户名<input type="text" v-model="username" /></label> <label>密码<input type="text" v-model="password" /></label>
      <z-button @click.native='login'>login</z-button>
      <br>
      <router-link to="/">
        <button>返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mounted() {
    }, computed: {},
    methods: {
      login() {
        this.$emit('alert', '发起了一个post')
        const data = { name: this.username, pass: this.password }
        this.$http.post('/admin/user-api/login.aspx', data)
            .then(e => {
              console.log(e)
            })
            .catch(e => {
              this.$dialog(e.statusText)
            })
      }
    },
    components: {}
  }
</script>
