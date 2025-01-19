import DefaultAvatar from '$lib/client/images/icon/transcend.webp';
import Cattleya from '$lib/client/images/icon/cattleya.webp';

/**Default without needing to unlock */
export const profileAvatars: { id: string; src: string }[] = [
	{ id: 'Default', src: DefaultAvatar },
	{ id: 'Cattleya', src: Cattleya },
];

/**Have to unlock via comparing to profile_avatars table. Make a unlocked field as boolean for getting the list for a user. */
export const unlockableProfileAvatars: {
	id: number;
	name: string;
	src: string;
}[] = [];

export function getAvatar(id: string | number, unlockables?: boolean) {
	return unlockables
		? unlockableProfileAvatars.find((e) => e.id === id)?.src ||
				profileAvatars[0].src
		: profileAvatars.find((e) => e.id === id)?.src || profileAvatars[0].src;
}
