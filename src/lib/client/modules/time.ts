export function formatDateTime(date: string) {
	// Create a Date object from the ISO string
	const dateTime = new Date(date);

	// Extract components
	const year = dateTime.getFullYear();
	const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1 and pad with leading zero if necessary
	const day = String(dateTime.getDate()).padStart(2, '0'); // Pad with leading zero if necessary
	const hour = String(dateTime.getHours()).padStart(2, '0'); // Pad with leading zero if necessary
	const minute = String(dateTime.getMinutes()).padStart(2, '0'); // Pad with leading zero if necessary
	const second = String(dateTime.getSeconds()).padStart(2, '0'); // Pad with leading zero if necessary

	// Assemble formatted string
	return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}

export enum TimerFormat {
	MinutesSeconds,
	MinutesSecondsMilliseconds,
}

export enum TimerMode {
	Elapsed,
	Remaining,
}

export function TimeSpanTimerFormat(
	timeInt: number,
	timerFormat: TimerFormat,
	isFrames: boolean = true,
	timeDefInt: number = 0,
	timeLeftPercentShown: boolean = false,
	timeLeftPercentNumber: string = '',
	timerMode: TimerMode = TimerMode.Elapsed,
): string {
	const time =
		timerMode === TimerMode.Elapsed && timeInt <= timeDefInt
			? timeDefInt - timeInt
			: timeInt;
	const framesPerSecond = isFrames ? Numbers.FramesPerSecond : 1;
	const timeInSeconds = time / framesPerSecond;
	const timeInSecondsSpan = new Date(timeInSeconds * 1000);
	const roundedMilliseconds = Math.round(timeInSecondsSpan.getMilliseconds());
	const totalMinutes = Math.floor(timeInSecondsSpan.getTime() / 60000);
	const minutes =
		totalMinutes >= 60 ? totalMinutes : timeInSecondsSpan.getUTCMinutes();
	const timeLeftPercent = timeLeftPercentShown ? timeLeftPercentNumber : '';

	// Format the TimeSpan object as a string
	switch (timerFormat) {
		case TimerFormat.MinutesSeconds:
			return `${minutes.toString().padStart(2, '0')}:${timeInSecondsSpan.getUTCSeconds().toString().padStart(2, '0')}${timeLeftPercent}`;
		case TimerFormat.MinutesSecondsMilliseconds:
		default:
			return `${minutes.toString().padStart(2, '0')}:${timeInSecondsSpan.getUTCSeconds().toString().padStart(2, '0')}.${roundedMilliseconds.toString().padStart(3, '0')}${timeLeftPercent}`;
	}
}

// Assuming `Numbers.FramesPerSecond` is a constant value
export const Numbers = {
	FramesPerSecond: 30, // or whatever the correct value is
};
