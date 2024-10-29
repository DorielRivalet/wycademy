export function getRatioForValue(value: number, min: number, max: number) {
	if (value <= min) return 0;
	if (value >= max) return 1;
	return value / max;
}
