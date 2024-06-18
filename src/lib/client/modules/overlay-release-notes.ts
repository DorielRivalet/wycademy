export const releaseNotesSummaries: { version: string; summary: string }[] = [
	{
		version: 'v0-39-0',
		summary: `Hello!\n\nToday we are happy to anounce the overlay now has its own pages. Check them out!\n\nThis update will be very fun to try for Dual Swords users, read below to see why!`,
	},
];

export function getReleaseNotesSummary(version: string) {
	return (
		releaseNotesSummaries.find((e) => e.version === version)?.summary ||
		'No release notes summary found.'
	);
}
