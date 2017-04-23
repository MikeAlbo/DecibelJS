

// index.js

/*
* this is the starting point of the app
*
* ***Demo***
 * We are calling the httpReq on Fake Data and outputting it to the html document
 * in the future, this data will be called upon loading the file
 * we are also including the promise structure here that will be moved to a different file
 * */

//import {httpReq} from './core/req/httpReq';
import {simpleAudioLoader} from './core/loaders/simpleLoader';

// const decodeAudioFiles = (audioSources)=> {
// 	return new Promise((resolve, reject) => {
//
// 		let reqPromises = [];
//
// 		audioSources.forEach((source)=> {
// 			reqPromises.push(httpReq(source, audioSources, ctx));
// 		});
//
// 		return Promise.all(reqPromises).then((dataArrays)=> {
// 			console.log(reqPromises); //eslint-disable-line no-console
// 			let dataObject= {};
// 			dataArrays.forEach((e)=> {
// 				dataObject[e[0]] = e[1];
// 			});
//
// 			resolve(dataObject);
// 		}).catch((err)=> {
// 			reject(err);
// 		});
//
// 	});
// };



// DEMO AUDIO FILES
const audioFiles = [
	"http://localhost:3050/audioFiles/simonSound1.mp3",                // string
	["src2","http://localhost:3050/audioFiles/simonSound2.mp3"],      // array
	"http://localhost:3050/audioFiles/simonSound3.mp3",                // string
	["src4","http://localhost:3050/audioFiles/simonSound4.mp3"]
];

let decodedAudioFiles = {};

simpleAudioLoader(audioFiles).then((decoded)=> {
	decodedAudioFiles = decoded;
	console.log(decodedAudioFiles || "no decoded files"); //eslint-disable-line no-console
}).catch((e)=> {
	console.error(e); //eslint-disable-line no-console
});
