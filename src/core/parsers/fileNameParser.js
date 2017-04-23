// file name parser

/*
* audio files can be submitted in a single array with links [link/audio1.mp3, link/audio2.mp3] ...
* ... or as a 2d array with names [[sound1, link/audio1.mp3],[sound2, link/audio2.mp3]]
* prepFile takes 2 arguments (file,source)
* 1.checks the typeOf file
* 2. if file type is string (as opposed to array), then the function will generate a filename
* 	a. appends the indexOf the file in the source to "src",
* 	b. returns ["src#", file[1]];
* 3. if the typeOf[0] is a string, then return file
*
* ** future notes!!! **
* i. should probably convert an if/else statement to switch using a regex to test
* ii. should handle errors more effectively, return the reason my the error occurred
* iii. should support all possible audio formats
* */

const fileNameParser = (file, source)=> {

	const sourceRegex = /\.(mp3|wav|aac)/g;

	if(typeof file === 'string' && file.match(sourceRegex)){
		return [`src${source.indexOf(file) + 1}`, file];
	} else if(typeof file[1] === 'string' && file[1].match(sourceRegex) && file.length == 2){
		return file;
	}else {
		new Error("seems to be an error");
	}
}; // file name parser


export {fileNameParser};
