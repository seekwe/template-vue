/**
 * Created by 影浅-seekwe@gmail.com on 2017-05-10
 */

export default [
  {
    path: '/user',
    meta: {
      title: '会员中心'
    },
    component: r => require.ensure([], () => r(require('./Main.vue')), 'Main')
  }, {
    path: '/user/info',
    meta: {
      title: '会员详情'
    },
    component: r => require.ensure([], () => r(require('./Info.vue')), 'Info')
  },
  {
    path: '/user/info/:userId',
    name: 'info', // params 传参必须
    meta: {
      title: '会员详情'
    },
    component: r => require.ensure([], () => r(require('./Info.vue')), 'Info')
  },
  {
    path: '/user/login',
    meta: {
      title: '登陆'
    },
    component: r => require.ensure([], () => r(require('./Login.vue')), 'Main')
  }
]
