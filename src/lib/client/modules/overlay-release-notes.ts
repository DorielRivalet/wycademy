/**summary uses Discord flavored markdown */
export const releaseNotesSummaries: {
	version: string;
	summary: string;
	date: string;
}[] = [
	{
		version: 'v0-41-0',
		date: '2024-10-28',
		summary: `We're back with another exciting update! Here's what's new:\n\n🎉 Features\nHotkeys settings, database size reduced, updated monster images.\nParty Size Adjustments: Planning your next hunt? We’ve added a new party size dictionary field in the database. Now your stats will be more accurate. 🏹🛡️\n\n🛠️ Bug Fixes\nAchievement Fixes: Some achievements for Dual Sword (DS) users were being shy. We’ve coaxed them out, so now your accomplishments will be recognized properly. 🏆✔️`,
	},
	{
		version: 'v0-40-0',
		date: '2024-06-19',
		summary: `This is a hotfix patch focused on Discord Rich Presence.`,
	},
	{
		date: '2024-06-19',
		version: 'v0-39-0',
		summary: `Hello!\n\nToday we are happy to anounce the overlay now has its own pages. Check them out!\n\nThis update will be very fun to try for Dual Swords users, read below to see why!`,
	},
];

export function getReleaseNotesSummary(version: string) {
	return (
		releaseNotesSummaries.find((e) => e.version === version)?.summary || ''
	);
}
