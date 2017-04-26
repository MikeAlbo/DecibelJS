

//var audio = new Decibel();


// DEMO AUDIO FILES
var audioFiles = [
	"../audioFiles/simonSound1.mp3",                // string
	["src2","../audioFiles/simonSound2.mp3"],      // array
	"../audioFiles/simonSound3.mp3",                // string
	["src4","../audioFiles/simonSound4.mp3"]
];

var decodedAudioFiles = {};

Decibel.simpleAudioLoader(audioFiles).then(function (audioBuffers) {
	decodedAudioFiles = audioBuffers;
	console.log(decodedAudioFiles || "no audio");
}).catch(function (err) {
	console.log(err);
});

