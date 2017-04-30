// // spec file for controls
//
// import {expect, assert} from 'chai';
// import 'web-audio-test-api';
// import {MasterGain} from '../gain/masterGain';
// import {Gain} from '../gain/newGain';
// import {muteChannel} from './controls';
//
// describe("Gain Controls", ()=>{
//
// 	let audioContext = null;
//
// 	before(()=>{
// 		audioContext = new AudioContext();
// 	});
//
// 	describe("muteChannel", ()=>{
//
// 		it("should throw error if not passed a param", ()=>{
// 				expect(muteChannel()).to.throw(Error("param must be a gain node"));
// 		});
//
// 		it("should throw error if param is not a gain Node", ()=> {
// 			const badInput = {};
// 			// expect(()=>{
// 			// 	return muteChannel(badInput);
// 			// }).to.throw(Error("param must be a gain node"));
// 			assert.ifError(()=>{
// 				muteChannel(badInput);
// 			});
//
// 		});
//
// 		it("should mute channel when called", ()=> {
// 			let testGain = new Gain({ctx: audioContext});
// 			let testMasterGain = new MasterGain({ctx: audioContext});
// 			muteChannel(testGain);
// 			muteChannel(testMasterGain);
// 			expect(testGain.gainNode.gain.value).to.equal(0);
// 			expect(testMasterGain.gainNode.gain.value).to.equal(0);
// 		});
//
// 	}); // mute channel
//
// 	describe("gainLevel", ()=>{
//
// 		it("should, when passed a value, update the gain nodes value");
//
// 		it("should, when not passed a value, default to 1");
//
// 	});
//
//
// }); // Gain Controls

