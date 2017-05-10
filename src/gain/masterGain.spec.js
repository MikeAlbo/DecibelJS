/* master gain spec
* 1. should init a new gain
* 2. should set default gain level if no params passed
* 3. should set gain level via param
* 4. gain level method, should accept a volume param and set the gain value
* 5. gain level method, should default to 1 if no value is passed
* 6.  mute channel, should set gain level to 0 when called
* */

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





