/**
 * Created by 影浅-Seekwe on 2017-02-27 00:20:20
 */
import Vue from 'vue'
import store from './stores'
import utils from './utils/index'
import App from './pages/App.vue'
import router from './router'
import ZlsUI from 'zls.ui'
import 'zls.ui/ZlsUI.css'
Vue.use(utils)
Vue.use(ZlsUI)
const mounted = () => {
}
new Vue({
  el: '#app',
  mounted,
  render: h => h(App),
  store,
  router
})
