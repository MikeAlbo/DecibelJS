import {ctx} from '../core/util/initalize';

class Gain {
	constructor({volume = 1, ctx = ctx}){
		this.gainNode = ctx.createGain();
		this.gainNode.gain.value = volume;
		this.gainNode;
	}
	gainlevel(value){
		this.gainNode.gain.value = value ? value : 1;
	}

	muteChannel(){
		this.gainNode.gain.value = 0;
	}

}


export {Gain};
