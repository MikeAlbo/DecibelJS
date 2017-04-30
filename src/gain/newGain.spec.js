import {expect} from 'chai';
import 'web-audio-test-api';
import {Gain} from './newGain';

describe("newGain", ()=>{

	let audioContext = null;

	before(()=>{
		audioContext = new AudioContext();
	});

	it("should have access to ctx", ()=>{
		const testGain = new Gain({volume:1, ctx: audioContext});
		expect(testGain).to.not.equal(null);
	});

	it("should have a gain volume of 1 by default", ()=>{
		const testGain = new Gain({ctx: audioContext});
		expect(testGain.gainNode.gain.value).to.equal(1);
	});

	it("should be about to set the volume by param", ()=>{
		const testGain = new Gain({volume: .5, ctx: audioContext});
		expect(testGain.gainNode.gain.value).to.equal(.5);
	});


	describe("gainLevel", ()=> {
		it("should accept a param, and ajust the gain level of the channel", ()=>{
			const testGain = new Gain({volume: .5, ctx: audioContext});
			testGain.gainlevel(2);
			expect(testGain.gainNode.gain.value).to.equal(2);
		});
	});

	describe("muteChannel", ()=>{
		it("should set gain level to 0 when called", ()=>{
			const testGain = new Gain({volume: .5, ctx: audioContext});
			testGain.muteChannel();
			expect(testGain.gainNode.gain.value).to.equal(0);
		});
	});
});

