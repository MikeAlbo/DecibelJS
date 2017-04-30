/* master gain spec
* 1. should import ctx
* 2. should connect to ctx output
* 3. should accept at least one input node
* 4. default volume value should be 1
* 5. should connect to the ctx.destination
* 6. should be able to control the volume level from outside the class*/

import {expect} from 'chai';
import 'web-audio-test-api';


import {MasterGain} from './masterGain';

describe("Master Gain", ()=>{

	let audioContext = null;

	before(()=>{
		audioContext = new AudioContext();
	});

	it("should init a new gain", ()=>{
		let testMasterGain = new MasterGain({ctx: audioContext});
		expect(testMasterGain).to.not.equal(null);
	});

	it("should set default gain level if no params passed", ()=>{
		let testMasterGain = new MasterGain({ctx: audioContext});
		expect(testMasterGain.gainNode.gain.value).to.equal(1);
	});

	it("should set gain level via param", ()=>{
		let testMasterGain = new MasterGain({volume: .5, ctx: audioContext});
		expect(testMasterGain.gainNode.gain.value).to.equal(.5);
	});

	describe("gainLevel", ()=>{

		it("should accept a volume param and set the gain value", ()=> {
			let testMasterGain = new MasterGain({volume: .5, ctx: audioContext});
			testMasterGain.gainlevel(2);
			expect(testMasterGain.gainNode.gain.value).to.equal(2);
		});

		it("should default to 1 if no value is passed", ()=> {
			let testMasterGain = new MasterGain({volume: .5, ctx: audioContext});
			testMasterGain.gainlevel();
			expect(testMasterGain.gainNode.gain.value).to.equal(1);
		});
	}); //gain level

	describe("Mute Channel", ()=> {

		it("should set gain level to 0 when called", ()=> {
			let testMasterGain = new MasterGain({volume: .5, ctx: audioContext});
			testMasterGain.muteChannel();
			expect(testMasterGain.gainNode.gain.value).to.equal(0);
		});
	}); // mute channel

}); // masster gain





