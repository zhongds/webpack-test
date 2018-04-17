const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 3 });

const { rootDirectory, distDirectory, appDirectory, nodeModules } = require('./paths');

const cssLoaderWithModule = {
  loader: "css-loader", 
  options: {
    modules: true,
    localIdentName: '[local]___[hash:base64:5]'
  }
}

const lessLoader = {
  loader: "less-loader",
  options: {
    javascriptEnabled: true
  }
}

module.exports = {
  entry: {
    index: path.resolve(appDirectory, 'index.js')
  },
  output: {
    path: distDirectory,
    filename: '[name].[hash:5].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/' ,
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'happypack/loader?id=js' },
      { test: /\.css$/,
        include: nodeModules,
        use: 'happypack/loader?id=css'
        // use: [
        //   "style-loader", 
        //   "css-loader",
        // ]
      },
      { test: /\.less$/,
        include: nodeModules,
        use: 'happypack/loader?id=less'
        // use: [
        //   "style-loader", 
        //   "css-loader",
        //   lessLoader,
        // ]
      },
      { test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // "style-loader", 
          MiniCssExtractPlugin.loader,
          cssLoaderWithModule
        ]
      },
      { test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // "style-loader", 
          MiniCssExtractPlugin.loader,
          cssLoaderWithModule,
          lessLoader,
        ]
      },
      { test: /\.(scss||sass)$/,
        exclude: /node_modules/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          cssLoaderWithModule, 
          "sass-loader"
        ]
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   loader: 'file-loader'
      // },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:5].[ext]',
          outputPath: './images',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      "node_modules",
      appDirectory
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, 'index.ejs'),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css",
      chunkFilename: "[name].[contenthash:5].chunk.css"
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: [
        "style-loader", 
        "css-loader",
      ]
    }),
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: [
        "style-loader", 
        "css-loader",
        lessLoader,
      ]
    }),
  ],
}
