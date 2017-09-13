const path = require('path')
module.exports = {
  build: {
    assetsPublicPath: '',
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
