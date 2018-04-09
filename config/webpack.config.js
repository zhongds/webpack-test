const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { appDirectory, distDirectory } = require('./paths');
console.log('dist', distDirectory);

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(appDirectory, 'index.js')
  },
  output: {
    path: distDirectory,
    filename: '[name].js',
    publicPath: '/' ,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"]}
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: appDirectory
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
}
