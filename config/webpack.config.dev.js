const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path')

const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = merge(webpackConfig, {
  devtool: 'eval-source-map',  
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: webpackConfig.output.publicPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    port: 4001,
    // watchOptions: {
    //   ignored: /node_modules/,
    // }
  }
})
