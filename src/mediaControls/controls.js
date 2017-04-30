// controls

import {Gain} from '../gain/newGain';

//gain

const muteChannel = (gainNode) => {
	if(gainNode && gainNode instanceof Gain){
		return gainNode.gainNode.gain.value = 0;
	} else {
		Error("param must be a gain node");
	}
};

const gainLevel = (gainNode, value = 1) => {
	if(gainNode && gainNode instanceof Gain){
		return gainNode.gainNode.gain.value = value;
	} else {
		Error("param must be a gain node");
	}
};

// possible refactor muteChannel to access gainLevel and psss 0;

export {muteChannel};
