

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
import {init} from './core/util/initalize';

window.addEventListener("load", init, false);


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
