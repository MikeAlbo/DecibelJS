
# DecibelJS
a javascript interface for the Web Audio API

*version 0.1*

## About
DecibelJS began as a way to simplify loading and playback of short audio files. It is slowly evolving into a more complex interface for developers. Future iterations of the project will include the ability to load/ playback large file, handle streaming, manipulate real-time audio effects, and handle file management. There will also be efforts to handle cross-browser support along with advanced codec support.

## important notes and gotchas
there's a few...
* DecibelJS, is not not currently considered reliable for production, but you can help with that! [link to be added]
* Not supported in IE, as of now. (The WebAudioApi)
	* A major goal of the project is to implement a work around for this
* AudioBuffer size limitations
	* due to the nature of the how audio buffers are stored, you should limit the size of your files to less than [45 seconds][bufferLength]. 
	
## Project Goals
* stable across all browsers using HTML5
* loading and playback of short audio clips
* audio file data management 
* large file streaming from disk/ feed
* facilitate on the fly audio signal manipulation
	* fancy for: turn up the volume (right now)
* ability to broadcast an audio/ video feed 

## Current Features
* SimpleAudioLoader [Getting Started](#gettingStarted)
* playback [Getting Started](#gettingStarted)

## Future Features
*wish list*

* JSON audio files
	* as a developer, you should be able to pass an manifest with the links and meta data for your projects audio schema
* Api integration
	* ability for developers to integrate a server side api into the library
* Stream files from local storage or network
* Add audio effects in real time, or schedule them 
* Audio channel mapping
* all major codec support



## <a name="gettingStarted"></a> Getting Started

Getting started with Decibel is easy!


### Installing

#### NPM 
```
npm install decibelJS // not currently on npm yet but this is how you'll do it
```
#### Download
You can clone or copy/paste the code from the Dist folder. Links with auto-downloading will be added

#### CDN
When we eventually release v1.0, we will have it available on a CDN

### Setup 
*note: currently, decodeAudioFiles asnd playback are the only 2 methods available*

 **link to your copy of DecibelJS --** 
 
 ```<script type="text/javascript" src=../pathTo/DecibelJS></script> ``` 
 
**create an array of links, or 2d array of file names and links** 

```javascript
	var audioFiles = [
  	"http://localhost:3050/audioFiles/simonSound1.mp3",                // string
  	["src2","http://localhost:3050/audioFiles/simonSound2.mp3"],      // array
  	"http://localhost:3050/audioFiles/simonSound3.mp3",                // string
  	["src4","http://localhost:3050/audioFiles/simonSound4.mp3"]  //array
  ];
```
**Create an empty object to store the returned AudioBuffers**
```javascript
var audioBuffers = {};
```

**Call Decibel.simpleAudioLoader(audioFiles)**

simpleAudioLoader wraps the XMLHttpRequest, and the audio context's decodeAudioData method. It then converts the information from an array into a single object. 

```javascript
Decibel.simpleAudioLoader(audioFiles).then(function(buffers) {
  audioFiles = buffers;
}).catch(function(err) {
  console.error(err);
});
```
**the returned audioBuffer object will look like...**

if passed an array: 
```javascript
{
    fileName: AudioBuffer,
    nextFileName: AudioBuffer,
    otherFileName: AudioBuffer
}
```
if only passed a link:
```javascript
{
    src1: AudioBuffer,
    src2: AudioBuffer,
    src3: AudioBuffer
}
```

### Playback

The Decibel.playback method wraps the audio context's createBufferSource, which is single use, and applies the connections needed to output the sound file. The default will automatically begin the file from the beginning. 

*playback is currently being refactored to remove the internal gain node and replace it with a connection to an external node. It should still function the same, but avoid passing a gain value*

```javascript
Decibel.playback(audioFiles.src1); // optional {buffer: audioFiles.src1, start: int}
```

## More Info

1. Wiki:  to be built
2. API DOCS: to be built
3. Getting Started guide: Look Up 

## Contributing

DecibelJS is a work in progress at the moment, I am currently open to volunteers who would be interested in taking it to the next level. Please read the [Contributing](./.github/CONTRIBUTING.md) page to see how to best help, report an issue, or request a feature. 

## License

currently under an open source MIT [License](LICENSE)

[bufferLength]: https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer
