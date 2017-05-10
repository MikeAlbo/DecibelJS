//http req

/*
* Currently using XMLHttpRequest
* considering moving to Fetch (must use polyfill) (also has limitations)
* or bringing in a library such as Axios
* */

var Promise = require('es6-promise');

const httpReq = (link, testXML) => {
		return new Promise((resolve, reject)=> {
			let req = new testXML || XMLHttpRequest() ;
			req.open('GET', link, true);
			req.responseType = 'arraybuffer';
			req.onload = ()=> {
				if(req.readyState === 4) {
					if(req.status === 200){
						resolve(req.response);
					}
				}
			}; // onLoad

			req.onerror = (err) => {

				reject(new Error(req.status));
			};

			req.send();
		})
}; // httpReq

export {httpReq};
