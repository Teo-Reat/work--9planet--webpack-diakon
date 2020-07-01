let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: [
			"./src/app/index.js",
			"./src/sass/style.scss"
		]
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "images"
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts'
						}
					}
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
