import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	// debug: true,
	// devtool: 'inline-source-map',
	// noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path : path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		//html webpack plugin
		new HtmlWebpackPlugin({
			template: 'demo/indexTemplate.html',
			inject: true
		})
	],
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
