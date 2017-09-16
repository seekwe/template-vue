/**
 * Created by 影浅-seekwe@gmail.com on 2017-05-10
 */
export default {
  path: '*',
  meta: {
    title: '404'
  },
  component: r => require.ensure([], () => r(require('./404.vue')), 'Main')
}

