import { formatDate } from './time';

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

export function downloadLogsAsCSV(logs: Array<object>, prefix: string) {
	try {
		let text = getCSVFromArray(logs);

		let blob = new Blob([text], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);

		let a = document.createElement('a');
		a.href = url;
		a.download = `${prefix}-${formatDate(new Date())}.csv`;

		document.body.appendChild(a); // Required for Firefox
		a.click();
		document.body.removeChild(a);

		setTimeout(() => {
			URL.revokeObjectURL(url);
		}, 10000); // Revoke after 10 seconds
	} catch (error) {
		console.error('Error downloading CSV:', error);
		alert('Failed to download CSV file.');
	}
}
