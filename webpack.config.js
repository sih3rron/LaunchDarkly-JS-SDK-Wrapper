const path = require('path');
const webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},

	module:{
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
					presets: ['@babel/preset-env']
					}
				}
			}
		],
	},

	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 9000,
		hotOnly: true,
		publicPath: '/dist'
	},

	plugins: [new webpack.HotModuleReplacementPlugin()]
}