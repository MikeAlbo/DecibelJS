import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', ()=> {
		expect(true).to.equal(true);
	});
});

/* The below test  loads the html file into a virtual dom and then preforms test upon the file.
* These test should be added to the example section of the project in order to test the actual usage of the project */

describe('index.html', ()=>{
	it('should say hello', (done)=>{
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function (err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal('Hello World');
			done();
			window.close();
		});
	})
});
