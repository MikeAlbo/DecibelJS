import {ctx} from '../core/util/initalize';

// class playback{
// 	constructor({buffer, gain = 1, start = 0}){
// 		this.gainNode = ctx.createGain();
// 		this.gainNode.connect(ctx.destination);
// 		this.bufferSource = ctx.createBufferSource();
// 		this.bufferSource.connect(gain);
// 		this.gainNode.gain.value = gain;
// 		this.bufferSource.source = buffer;
// 		start;
//
// 	}
//
// 	play(){
// 		this.bufferSource.start(this.start);
// 	}
// }

const playback = (buffer, gain = 1, start = 0)=>{
	let sourceNode = ctx.createBufferSource();
	let gainNode = ctx.createGain();
	sourceNode.buffer = buffer;
	sourceNode.connect(gainNode);
	gainNode.gain.value = gain;
	gainNode.connect(ctx.destination);
	sourceNode.start(start);
	console.log(sourceNode);
};


export {playback};
