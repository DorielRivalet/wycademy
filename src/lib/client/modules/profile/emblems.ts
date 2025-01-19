import { type Component } from 'svelte';

export interface Emblem {
	id: string;
	emblem: string | Component;
	type: 'text' | 'image' | 'component';
}

export const profileEmblems: Emblem[] = [
	{ id: 'None', emblem: '', type: 'text' },
	{ id: 'Beginner', emblem: '🔰', type: 'text' },
];

export const unlockableProfileEmblems: {
	id: number;
	emblem: string | Component;
	type: 'text' | 'image' | 'component';
}[] = [];

export function getEmblem(id: string | number, unlockables?: boolean) {
	return unlockables
		? unlockableProfileEmblems.find((e) => e.id === id) || profileEmblems[0]
		: profileEmblems.find((e) => e.id === id) || profileEmblems[0];
}
