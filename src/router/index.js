/**
 * Created by 影浅-Seekwe on 2017-5-12 16:26:36
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: (r => {
    let rule = []
    r.keys()
     .forEach(key => {
       rule = rule.concat(r(key).default)
     })
    return rule
  })(require.context('../', true, /^\.\/pages\/((?!\/)[\s\S])+\/route\.js$/)),
  mode: 'hash'
})

export default router
