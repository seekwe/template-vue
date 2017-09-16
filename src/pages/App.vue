<style lang="less">
  .transition {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    opacity: 1;
    transition: opacity .6s, transform .3s ease-in
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3D(3rem, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate3D(-3rem, 0, 0);
  }
  body{
    overflow: hidden;
  }
</style>
<template>
    <transition :name="transitionName" mode="in-out">
      <router-view class="transition" v-title="$route.meta.title"></router-view>
    </transition>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        transitionName: 'slide',
        alertMsg: ''
      }
    },
    watch: {
      '$route'(to) {
        const toPath = to.path
        const fromPath = this.$store.getters.historyPrev
        if (fromPath) {
          this.transitionName = (toPath === fromPath) ? 'slide-right' : ((toPath.split('/').length) < (fromPath.split('/').length)) ? 'slide-right' : 'slide-left'
        } else {
          this.transitionName = 'slide-left'
        }

        this.$store.dispatch('UpdateHistory', toPath)
      }
    },
    mounted() {},
    computed: {},
    methods: {},
    components: {}
  }
</script>
