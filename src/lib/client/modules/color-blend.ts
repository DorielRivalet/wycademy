import { round } from 'mathjs';

/**
original color: [r, g, b] with values 0-255

target color: same structure as above

output color for each value: (((source + target) / 255) - 1) * 255

inputs as #rrggbb
*/
export function blendColor(source: string, target: string) {
	const sourceArray = hexStringToArray(source);
	const targetArray = hexStringToArray(target);
	const result = [];
	for (let i = 0; i < 3; i++) {
		let value = sourceArray[i] + targetArray[i];
		value /= 255;
		value -= 1;
		if (value <= 0) {
			value = 0;
		} else {
			value = value * 255;
		}
		value = round(value);
		result.push(value);
	}
	return hexArrayToString(result);
}

// https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function hexArrayToString(hex: number[]) {
	let r = hex[0].toString(16);
	let g = hex[1].toString(16);
	let b = hex[2].toString(16);
	r = r.padStart(2, '0');
	g = g.padStart(2, '0');
	b = b.padStart(2, '0');
	const str = `#${r}${g}${b}`;
	return str;
}

function hexStringToArray(hex: string) {
	hex = hex.replace('#', '');
	const arr = [
		parseInt('0x' + hex.substring(0, 2)),
		parseInt('0x' + hex.substring(2, 4)),
		parseInt('0x' + hex.substring(4, 6)),
	];
	return arr;
}
