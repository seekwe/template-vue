/**
 * Created by 影浅-seekwe@gmail.com on 2017-03-28
 */

import axios from 'axios'
import Zls from 'zlslib'
import qs from 'qs'
const plugin = {}
const isJson = obj => {
  return (typeof obj === 'object') &&
    (Object.prototype.toString.call(obj)
           .toLowerCase() === '[object object]') &&
    !obj.length
}

plugin.install = function (Vue) {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  axios.defaults.headers['X-Requested-With'] = 'xmlhttprequest'
  axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '' : process.env.APIHOST + '/'
  axios.defaults.withCredentials = true
  axios.defaults.validateStatus = function (code) {
    return true
  }
  axios.ZlsCustom = {}
  let before = null
  let after = null
  new Zls()
  const $axios = {
    get() {
      if (before === null) {
        before = axios.interceptors.request.use(config => {
          if (typeof (config.data) === 'string') {
            config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
          } else if (config.method === 'post') {
            config.data = qs.stringify(config.data)
          }
          return config
        }, error => {
          return Promise.reject(error)
        })
      }
      if (after === null) {
        after = axios.interceptors.response.use(response => {
          const data = response.data
          if (!isJson(data)) {
            response.status = 201
            response.statusText = 'Not JSON'
          } else if (response.status === 200) {
            return response.data
          }
          return Promise.reject(response)
        }, error => {
          return Promise.reject(error)
        })
      }

      axios.ZlsCustom.unset = name => {
        switch (name) {
          case 'before':
            axios.interceptors.request.eject(before)
            before = null
            break
          case 'after':
            axios.interceptors.response.eject(after)
            after = null
            break
          default:
            break
        }
        return axios
      }
      return axios
    }
  }
  let iframeTitle = null
  const setWechatTitle = (title, img) => {
    if (title === undefined || window.document.title === title) {
      return
    }
    document.title = title
    if (window.zls.ua().Mobile) {
      if (!iframeTitle) {
        iframeTitle = document.createElement('iframe')
        iframeTitle.id = 'setWechatTitle'
        iframeTitle.style.display = 'none'
        const iframeCallback = function () {
        }
        iframeTitle.addEventListener('load', iframeCallback)
        document.body.appendChild(iframeTitle)
      }
      iframeTitle.setAttribute('src', img || 'favicon.ico')
    }
  }
  Object.defineProperties(Vue.prototype, {
    $axios,
    $http: $axios,
    $zls: window.zls
  })
  Vue.directive('title', (el, binding) => {
    setWechatTitle(binding.value, el.getAttribute('img-set') || null)
  })
}
export default plugin
