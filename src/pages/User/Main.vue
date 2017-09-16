<template>
  <div id="Main">
    Main ...?<br>
    <router-link to="/">Home</router-link>
    <br>
    <router-link :to="{ path: '/user/info', query: { userId: '123' }}">info(传递query)</router-link>
    <br>
    <router-link :to="{ name: 'info', params: { userId: 123 }}">info(传递params)</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {}
    },
    mounted() {
      console.log(this.$route.params)
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style lang='less' scoped>
  #Main {
    background-color: #8bc34a;
    color: #fff;
  }
</style>
