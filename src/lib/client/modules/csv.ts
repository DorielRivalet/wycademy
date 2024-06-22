export function getCSVFromArray(array: Array<object>) {
	// Check if the array is not empty
	if (array.length === 0) {
		return '';
	}

	// Extract the keys from the first object in the array to use as the header row
	const header = Object.keys(array[0]).join(',');

	// Convert the array of objects to a CSV string, including the header row
	const csv = array.map((obj) => Object.values(obj).join(',')).join('\n');

	// Return the CSV string with the header row at the beginning
	return `${header}\n${csv}`;
}
