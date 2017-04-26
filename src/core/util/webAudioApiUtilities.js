// web audio api utilities

/*
* utilities provided by the webAudio webAudio Api
*
*/
var Promise = require('es6-promise');

import {ctx} from './initalize';

// decode audioFiles
// this will need to be updated to a promise structure, promise structure is not currently working I believe
const decodeAudio = (arrayBuffer) => {
			return new Promise((resolve, reject) => {
				ctx.decodeAudioData(arrayBuffer, function (buffer) {
					resolve(buffer);
				}, function (err) {
					reject(err);
				});
			})
};


//export
export {decodeAudio};

