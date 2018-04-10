const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { rootDirectory, distDirectory, appDirectory } = require('./paths');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(rootDirectory, 'index.js')
  },
  output: {
    path: distDirectory,
    filename: '[name].js',
    publicPath: '/' ,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"]},
      { test: /\.(scss||sass)$/, exclude: /node_modules/, use: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      "node_modules",
      appDirectory
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
}
