import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../.webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

/* eslint-disable no-console */

const port = 3000;
const app = express();
//const compiler = webpack(config);

app.use(webpackMiddleware(webpack(config)));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/files', function (req, res) {
	// hard coded for simplicity
	res.send([
		"https://s3.amazonaws.com/decibeldemo/simonSound1.mp3",                // string
		["src2","https://s3.amazonaws.com/decibeldemo/simonSound2.mp3"],      // array
		"https://s3.amazonaws.com/decibeldemo/simonSound3.mp3",                // string
		["src4","https://s3.amazonaws.com/decibeldemo/simonSound4.mp3"]
	]);
});
app.listen(port, function (err) {
	if(err){
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
