const merge = require('webpack-merge');
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
