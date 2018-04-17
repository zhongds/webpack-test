const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path')

const webpackConfig = require('./webpack.config');

console.log('port', process.env.NODE_ENV);

module.exports = merge(webpackConfig, {
  mode: 'development',  
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    publicPath: webpackConfig.output.publicPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    port: process.env.NODE_ENV || 4001,
    // watchOptions: {
    //   ignored: /node_modules/,
    // }
  }
})
