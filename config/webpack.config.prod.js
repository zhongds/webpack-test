const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfig = require('./webpack.config');

const { rootDirectory } = require('./paths');

module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: rootDirectory
    })
  ]
})
