// /*
// * 1. takes an input array
// * 2. checks the array for 2d
// * 3. builds out an html audio element tag
// * 4. injects tag into html DOM
// * 5. links up playback controls with decibel controls
// * */
//
// let fallbackLoader = (source)=> {
//
// 	let audioSource =  '<audio>';
//
// 	source.forEach((link) => {
// 		if(typeof link === 'string'){
// 			audioSource += buildAudioTag(link);
// 		} else if (typeof link === 'array' && link.length == 2) {
// 			audioSource += buildAudioTag(link[1]);
// 		} else {
// 			throw new Error("invalid audio source");
// 		}
// 	})
// }
//
// //export fallbackLoader(source);
//
// function buildAudioTag(link) {
// 	return ` <source src={link} type="audio/mp3">`
// }
