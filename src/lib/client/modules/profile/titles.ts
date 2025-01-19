export const profileTitles: { id: string; title: string }[] = [
	{ id: 'None', title: '' },
	{ id: 'Hunter', title: 'Hunter' },
];

export const unlockableProfileTitles: { id: number; title: string }[] = [];

export function getTitle(id: string | number, unlockables?: boolean) {
	return unlockables
		? unlockableProfileTitles.find((e) => e.id === id)?.title ||
				profileTitles[0].title
		: profileTitles.find((e) => e.id === id)?.title || profileTitles[0].title;
}
