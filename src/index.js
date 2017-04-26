

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


export {simpleAudioLoader};

/*
* as of now, we are exporting the modules as a library, inside the developers main.js file, it is being accessed via Decibel.simpleAudioLoader() Decibel is the Library name as defined inside of the webpack.config file*/




//export default new Decibel();

//export default {Decibel};
