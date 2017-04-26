// DEMO AUDIO FILES
var audioFiles = [
	"http://localhost:3050/audioFiles/simonSound1.mp3",                // string
	["src2","http://localhost:3050/audioFiles/simonSound2.mp3"],      // array
	"http://localhost:3050/audioFiles/simonSound3.mp3",                // string
	["src4","http://localhost:3050/audioFiles/simonSound4.mp3"]
];

var decodedAudioFiles = {};

Decibel.simpleAudioLoader(audioFiles).then(function (audioBuffers) {
	decodedAudioFiles = audioBuffers;
	console.log(decodedAudioFiles || "no audio");
}).catch(function (err) {
	console.log(err);
});
