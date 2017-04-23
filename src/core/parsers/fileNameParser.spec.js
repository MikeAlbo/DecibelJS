import {expect} from 'chai';
import {assert} from 'chai';
import {fileNameParser} from './fileNameParser';

describe('Our first test', () => {
	it('should pass', ()=> {
		expect(true).to.equal(true);
	});
});

// should check if string exist and match regex

describe('should check if string exist and match regex', ()=>{

	const link = "https://s3.amazonaws.com/decibeldemo/simonSound1.mp3";
	const source = ["https://s3.amazonaws.com/decibeldemo/simonSound1.mp3" ];
	const result = fileNameParser(link, source);

	it("should be an array", ()=>{
		expect(result).to.be.a('array');
	});

	it("position 0 should == src1", ()=>{
		expect(result[0]).to.equal("src1");
	});

	it("position 1 should == weblink", ()=>{
		expect(result[1]).to.equal(link);
	});

	it("should have a length of 2", ()=> {
		expect(result).to.have.lengthOf(2);
	});

});

describe('should take in a 2d array', ()=> {
	const link = ["audio1", "https://s3.amazonaws.com/decibeldemo/simonSound1.mp3"];
	const source = ["https://s3.amazonaws.com/decibeldemo/simonSound1.mp3" ];
	const result = fileNameParser(link, source);

	it("should return the file if it passes test", ()=> {
		assert(result, link);
	});

});

describe('should throw error', ()=> {
	const link = ["audio1", "https://s3.amazonaws.com/decibeldemo/simonSound1.bad"];
	const source = ["https://s3.amazonaws.com/decibeldemo/simonSound1.bad" ];
	const result = fileNameParser(link, source);

	it("should throw error", ()=> {
		assert.ifError(result);
		var err = fileNameParser(link, source);
		assert.ifError(err);
	});
});

// should check if string exist and doesn't match regex

// should check if array exist and matches regex and length

// should check if array exist and does not match regex

// should check if array exist and does not match length

// should check if "other" type of input is submitted

// should check if no source is submitted  ***
