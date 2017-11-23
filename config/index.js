const path = require('path')
module.exports = {
  build: {
    assetsPublicPath: process.env.STATIC_ENV === 'test' ? 'http://static2.test.ximalaya.com/lib/awb-anchorpromotion/last/dist/' : 'http://s1.xmcdn.com/lib/awb-anchorpromotion/last/dist/',
    assetsSubDir: 'static',
    assetsRoot: path.join(__dirname, '../', 'dist'),
    index: path.resolve(__dirname, '../dist/index.html'),
    cssSourceMap: true
  },
  dev: {
    port: 3000,
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    autoOpenBrowser: true,
    cssSourceMap: false
  }
}
