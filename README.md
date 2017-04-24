# decibel_mockup
a mockup seed project for the decibel open source project

## importing files
### array req
currently, the developer passes an array of files into a request that returns a promise when they have all been loaded

### JSON request
the developer will be able to create a JSON file that will allow them to set different properties of the file they are importing and then customize how those files are loaded

an example (params are just an idea, will need define the required ones)
```javascript
const audioLog = [
    {"id": 1, "title": "loadingTrack", "que": false, "preload": true, "other" : "can customize"},
    {"id": 1, "title": "loadingTrack", "que": false, "preload": true, "other" : "can customize"},
    {"id": 1, "title": "loadingTrack", "que": false, "preload": true, "other" : "can customize"},
    {"id": 1, "title": "loadingTrack", "que": false, "preload": true, "other" : "can customize"}
];
```
when the site is loaded, a JSON file loader fill begin processing the files on the list. 


## future ideas

### auto file type detection
1. a function or regex will test the 3 characters in the string and test them against a set of known types
2. if the type is supported by the current browser, then it will be passed to the build phase
3. else, it will be passed and a warning will be displayed

### multiple formats
1. ability to load in most audio/ video file formats
2. allow the developer to have variations and fallback audio files

### game design sound
1. dynamic audio loading
2. audio sprites
3. dynamic control of audio space (3d space)

### live music
1. ability to setup streaming
2. ability to connect to streaming services

## exporting
currently, the output minifies the file
1. create another build script that runs a uncompressed output
2. call both, have build to the same directory
3. have  simplePlayback, liveStream, and DynamicAudio versions as well

