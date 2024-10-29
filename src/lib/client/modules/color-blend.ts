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

export function tweenColor(
	colorA: string,
	colorB: string,
	ratio: number,
): string {
	// Ensure ratio is between 0 and 1
	const clampedRatio = Math.max(0, Math.min(1, ratio));

	// Helper to convert hex to RGB
	const hexToRgb = (hex: string) => {
		const parsedHex = hex.startsWith('#') ? hex.slice(1) : hex;
		const bigint = parseInt(parsedHex, 16);
		return {
			r: (bigint >> 16) & 255,
			g: (bigint >> 8) & 255,
			b: bigint & 255,
		};
	};

	// Helper to convert RGB to hex
	const rgbToHex = (r: number, g: number, b: number) =>
		`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

	// Parse the input colors
	const rgbA = hexToRgb(colorA);
	const rgbB = hexToRgb(colorB);

	// Interpolate between colors
	const r = Math.round(rgbA.r + (rgbB.r - rgbA.r) * clampedRatio);
	const g = Math.round(rgbA.g + (rgbB.g - rgbA.g) * clampedRatio);
	const b = Math.round(rgbA.b + (rgbB.b - rgbA.b) * clampedRatio);

	// Return the interpolated color as a hex string
	return rgbToHex(r, g, b);
}
