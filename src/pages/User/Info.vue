<template>
  <div id="About">
    Info<br>
    <router-link to="/user">user</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        userId: 0
      }
    },
    mounted() {
      console.log('params', this.$route.params)
      console.log('query', this.$route.query)
    },
    computed: {},
    methods: {},

    components: {}
  }
</script>
