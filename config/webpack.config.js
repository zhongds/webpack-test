const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    filename: '[name].js',
    publicPath: '/' ,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/,
        include: nodeModules,
        use: [
          "style-loader", 
          "css-loader",
        ]
      },
      { test: /\.less$/,
        include: nodeModules,
        use: [
          "style-loader", 
          "css-loader",
          lessLoader,
        ]
      },
      { test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          cssLoaderWithModule
        ]
      },
      { test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          cssLoaderWithModule,
          lessLoader,
        ]
      },
      { test: /\.(scss||sass)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
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
  ],
}
