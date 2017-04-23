
import {httpReq} from '../req/httpReq';

const simpleAudioLoader = (audioSources)=> {
	return new Promise((resolve, reject) => {

		let reqPromises = [];

		audioSources.forEach((source)=> {
			reqPromises.push(httpReq(source, audioSources));
		});

		return Promise.all(reqPromises).then((dataArrays)=> {
			console.log(reqPromises); //eslint-disable-line no-console
			let dataObject= {};
			dataArrays.forEach((e)=> {
				dataObject[e[0]] = e[1];
			});

			resolve(dataObject);
		}).catch((err)=> {
			reject(err);
		});

	});
};

export {simpleAudioLoader};
