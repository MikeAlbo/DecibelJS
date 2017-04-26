import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	// debug: true,
	 devtool: 'inline-source-map',
	// noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path : path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js',
		library: 'Decibel',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		sourceMapFilename: '[name].map'
	},
	plugins: [
		//html webpack plugin
		new HtmlWebpackPlugin({
			template: 'demo/public/assets/indexTemplate.html',
			inject: 'head'
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
