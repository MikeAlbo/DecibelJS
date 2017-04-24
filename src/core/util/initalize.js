let ctx;

const init = () => {

	if(!ctx){
		try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			ctx = new AudioContext();
			console.log('audioContext created!!'); //eslint-disable-line no-console
		}
		catch(e){
			// this will eventually call the html5 audio tag injector or trigger it to be called
			console.error(e, " browser does not support audio context"); //eslint-disable-line no-console
		}
	}

};

export {ctx, init};
