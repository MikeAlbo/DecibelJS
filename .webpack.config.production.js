import path from 'path';
import webpack from 'webpack';
export default {
	//debug: true,
	//devtool: 'inline-source-map',
	//noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path : path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'decibel.js'
	},
	plugins: [
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
