/**
 * Created by 影浅-seekwe@gmail.com on 2017-05-10
 */

const api = 'http://127.0.0.1'
const staticFiles = 'static/'
module.exports = () => ({
  entry: 'src/index.js',
  dist: 'dist',
  px2rem: 100,
  host: '0.0.0.0',
  port: 2378,
  eslint: false,
  promise: true,
  analyzer: false,
  sourceMap: false,
  extract: false,
  templateCompiler: true,
  html: {
    title: 'Loading',
    template: 'index.html',
    favicon: 'static/favicon.ico',
    minify: {
      removeAttributeQuotes: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }
  },
  copy: [{
    from: './static',
    to: './'
  }],
  filename: {
    js: staticFiles + '[name].[hash:8].js',
    chunk: staticFiles + '[name].[hash:8].js',
    css: staticFiles + '[name].[hash:8].css',
    static: staticFiles + '[name].[hash:8].[ext]'
  },
  env: {
    STATICFILES: staticFiles,
  },
  // proxy: {
  //   '/api/': {
  //     target: api,
  //     changeOrigin: true,
  //   }
  // },
  webpack(cfg) {
    return cfg
  }
})
