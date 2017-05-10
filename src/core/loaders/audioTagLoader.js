
import {fileNameParser} from "../parsers/fileNameParser";

export default audioTagBuilder = (source) => {

	let audioTag = "<audio>";

	source.forEach((src)=> {
		const parsed = fileNameParser(src, source);
			audioTag += `<src href=${parsed[1]}>`;
	});

	audioTag += "</audio>";
	return audioTag;
};
