const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfig = require('./webpack.config');

const { rootDirectory } = require('./paths');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: rootDirectory
    })
  ]
})
