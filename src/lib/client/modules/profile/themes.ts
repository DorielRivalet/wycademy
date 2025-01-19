// TODO maybe more fields?
export const profileThemes: { id: string; src: string }[] = [
	{ id: 'Default', src: '' }, // background sources
	{ id: 'Red', src: '' },
	{ id: 'Blue', src: '' },
];

export const unlockableProfileThemes: {
	id: number;
	name: string;
	src: string;
}[] = [];

export function getProfileTheme(id: string | number, unlockables?: boolean) {
	return unlockables
		? unlockableProfileThemes.find((e) => e.id === id) || profileThemes[0]
		: profileThemes.find((e) => e.id === id) || profileThemes[0];
}
