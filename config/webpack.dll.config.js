const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { rootDirectory } = require('./paths');

module.exports = {
	mode: "none",
	entry: ["antd"],
	output: {
		filename: "vender.[hash:5].js",
    path: path.resolve(rootDirectory, "dll"),
    library: "vendor_lib_[hash]"
	},
	plugins: [
    new CleanWebpackPlugin(['dll'], {
      root: rootDirectory
    }),
		new webpack.DllPlugin({
	    // context: __dirname,      
			name: "vendor_lib_[hash]",
			path: path.resolve(rootDirectory, "dll/vendor-manifest.json")
		})
	]
};