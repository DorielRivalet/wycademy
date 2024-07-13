export const announcementsTitles: {
	date: string;
	title: string;
	link: string;
	summary: string;
}[] = [
	{
		date: '2024-07-11',
		title: `Urgent Notice for YouTube Content Creators`,
		link: '/support/website/announcements/2024/07/11',
		summary:
			'Since late 2023, there have been multiple reports of people receiving copyright strikes on YouTube due to the use, or apparent use, of mods or any external programs, even if they are not technically mods, in Monster Hunter games.',
	},
];

export function getAnnouncementByPathName(pathName: string) {
	return announcementsTitles.find((e) => e.link === pathName);
}

function groupAnnouncementsByDate(
	announcements: {
		date: string;
		title: string;
		link: string;
		summary: string;
	}[],
) {
	return announcements.reduce((acc, { date, title, link, summary }) => {
		const [year, month, day] = date.split('-');
		if (!acc[year]) acc[year] = {};
		if (!acc[year][month]) acc[year][month] = [];
		acc[year][month].push({ day, title, link, summary });
		return acc;
	}, {});
}

export const groupedAnnouncements =
	groupAnnouncementsByDate(announcementsTitles);
