const config = require('../config')
const path = require('path')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')
exports.assetsPath = function (_path) {
  var assetsSubDir = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDir
    : config.dev.assetsSubDir
  return path.posix.join(assetsSubDir, _path)
}

exports.cssLoaders = function (options) {
  var options = options || { vue: false, extract: false, sourceMap: false }
  var stylePre = options.vue ? 'vue-style-loader' : 'style-loader'
  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (options.extract) {
      return ExtractWebpackPlugin.extract({
        fallback: stylePre,
        use: loaders
      })
    } else {
      return [stylePre].concat(loaders)
    }
  }
  return {
    css: generateLoaders(),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass')
  }
}

exports.styleLoaders = function (options) {
  var rule = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    rule.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return rule
}
