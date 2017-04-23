var express = require('express');
var path = require('path');
var cors = require('cors');
var chalk = require('chalk');

var app = express();
var port = 3050;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
	res.send('Mock API to serve static audio files');
});

app.listen(port, function () {
	console.log(chalk.blue('Mock Api is listening on port: ' + port));
});
