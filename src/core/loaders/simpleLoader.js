
import {decodeAudio} from '../util/webAudioApiUtilities';
import {httpReq} from '../req/httpReq';
import {fileNameParser} from '../parsers/fileNameParser';

var Promise = require('es6-promise');

const audioFileBuilder= (source, audioSource) => {
	return new Promise((resolve, reject)=>{
		const parsedFile = fileNameParser(source, audioSource);
		httpReq(parsedFile[1]).then((arrayBuffer)=> {
			decodeAudio(arrayBuffer).then((audioBuffer)=> {
				resolve([parsedFile[0], audioBuffer]);
			});
		}).catch((err)=>{
			reject(err);
		});
	});
};



const simpleAudioLoader = (audioSource) => {

	let reqPromises = [];
	audioSource.forEach((source)=> {
		reqPromises.push(audioFileBuilder(source, audioSource));
	});

	return Promise.all(reqPromises).then((data)=>{
		let dataObject = {};
		data.forEach((e)=>{
			dataObject[e[0]] = e[1];
		});

		return dataObject;

	});

};

export {simpleAudioLoader};
