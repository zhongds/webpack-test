const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = merge(webpackConfig, {
  devtool: 'hidden-source-map',  
})
