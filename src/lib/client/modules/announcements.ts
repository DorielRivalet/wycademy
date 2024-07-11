export const announcementsTitles: {
	date: string;
	title: string;
	link: string;
}[] = [
	{
		date: '2024-07-11',
		title: `Urgent Notice for YouTube Content Creators`,
		link: '/support/website/announcements/2024/07/11',
	},
];

export function getAnnouncementTitle(date: string) {
	return (
		announcementsTitles.find((e) => e.date === date)?.title ||
		'No announcement title found.'
	);
}

function groupAnnouncementsByDate(
	announcements: { date: string; title: string; link: string }[],
) {
	return announcements.reduce((acc, { date, title, link }) => {
		const [year, month, day] = date.split('-');
		if (!acc[year]) acc[year] = {};
		if (!acc[year][month]) acc[year][month] = [];
		acc[year][month].push({ day, title, link });
		return acc;
	}, {});
}

export const groupedAnnouncements =
	groupAnnouncementsByDate(announcementsTitles);
