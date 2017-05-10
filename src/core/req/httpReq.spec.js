// spec file for httpReq.js

import {should} from 'chai';
import {httpReq} from './httpReq';
//import {sinon} from 'sinon';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


describe("httpReq", ()=> {

	// beforeEach(()=>{
	// 	this.req = sinon.useFakeXMLHttpRequest();
	// 	this.request = [];
	// 	this.req.onCreate = function(req) {
	// 		this.requests.push(req);
	// 	}.bind(this);
	// });
    //
	// afterEach(()=> {
	// 	this.req.restore();
	// });

	it("should successfully return an array buffer", (done)=>{
		const link = 'http://localhost:3050/public/audioFiles/simonSound1.mp3';
		httpReq(link, XMLHttpRequest).then((aBuffer)=> {
			aBuffer.should.be.an.instanceOf(ArrayBuffer);
			done();
		}).catch((err)=>{
			done(err);
		});
	});

	it("should return an error if passed an error status code");

});
