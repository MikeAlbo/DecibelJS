import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	//debug: true,
	devtool: 'inline-source-map',
	//noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path : path.resolve(__dirname, 'demo/public/Example1'),
		publicPath: './',
		filename: 'decibel.js',
		library: 'Decibel',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		sourceMapFilename: '[name].map'
	},
	plugins: [

		//html webpack plugin
		new HtmlWebpackPlugin({
			template: 'demo/public/assets/indexTemplate.html',
			inject: 'head',
			filename: 'index.html'
		}),

		// eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin()
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
