// // master gain

import {Gain} from './newGain';

class MasterGain extends Gain{
	constructor(options){
		super(options);
		this.gainNode.connect(options.ctx.destination);
	}
}

// let masterGain = ({volume, ctx}) => {
// 	let _mg = new MasterGain({volume, ctx});
// 	return _mg.gainNode;
// };

 export {MasterGain};

