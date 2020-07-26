const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: "./src/template.html"
		// }),
		// new HtmlWebpackPlugin({
		// 	template: "./src/template.html"
		// }),
		// new HtmlWebpackPlugin({
		// 	template: "./src/pages/lk-personal.html"
		// }),
		// new HtmlWebpackPlugin({
		// 	template: "./src/pages/lk-instructions.html"
		// }),
		new HtmlWebpackPlugin({
			template: "./src/pages/lk-form.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Inject styles into DOM
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
