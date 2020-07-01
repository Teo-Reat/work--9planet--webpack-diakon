let path = require("path");
let common = require("./webpack.common");
let merge = require("webpack-merge");
let CleanWebpackPlugin = require("clean-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3. Extract css into files
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
