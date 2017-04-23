//http req

/*
* Currently using XMLHttpRequest
* considering moving to Fetch (must use polyfill) (also has limitations)
* or bringing in a library such as Axios
* */

import {fileNameParser} from '../parsers/fileNameParser';


const httpReq = (file, source) => {
	return new Promise((resolve, reject)=> {
		const preppedFile = fileNameParser(file, source);
		if(preppedFile){
			let req = new XMLHttpRequest();
			req.open('GET', preppedFile[1], true);
			req.responseType = 'arraybuffer';
			req.onload = ()=> {
				if(req.readyState === 4) {
					if(req.status === 200){
						// call the ctx. decodeAudioData once created
						resolve([preppedFile[0], req.response]);
					} else {throw new Error(req.statusText);}
				} else {
					throw new Error(req.statusText);
				}
			}; // onLoad

			req.onerror = (e) => {
				reject(new Error(req.statusText, e));
			};

			req.send();
		} else {
			throw new Error("error prepping file: " + preppedFile);
		}
	}); // end of promise
}; // httpReq

export {httpReq};
