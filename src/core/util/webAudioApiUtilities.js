// web audio api utilities

/*
* utilities provided by the webAudio webAudio Api
*
*/

import chalk from 'chalk';

// initialize the ctx

const init = () => {
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		const initializedVar = new AudioConext();
		console.log(chalk.green('audioContext created!!')); //eslint-disable-line no-console
		return initializedVar;
	}
	catch(e){
		// this will eventually call the html5 audio tag injector or trigger it to be called
		console.error(e, " browser does not support audio context"); //eslint-disable-line no-console
	}
};

// decode audioFiles
// this will need to be updated to a promise structure, promise structure is not currently working I believe
const decodeAudio = (ctx, arrayBuffer) => {
	return new Promise((resolve, reject) => {
			ctx.decodeAudioData(arrayBuffer, function (buffer) {
				resolve(buffer);
			}, function (err) {
				reject(new Error(err));
			});
	});
};


//export
export {init, decodeAudio};

