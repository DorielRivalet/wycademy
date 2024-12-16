import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
import type { Component } from 'svelte';

export interface ReactionOption {
	id: ReactionType;
	reaction: string | Component;
}

export interface Reaction {
	id: ReactionType;
	quantity: number;
	clicked: boolean;
	users: string[];
}

export type ReactionType =
	| 'like'
	| 'heart'
	| 'fire'
	| 'tada'
	| 'star'
	| 'mindblown'
	| 'sunglasses'
	| 'party'
	| 'skull'
	| '100'
	| 'clap'
	| 'eyes'
	| 'gs'
	| 'ds'
	| 'sns'
	| 'ls'
	| 'saf'
	| 'hammer'
	| 'tonfa'
	| 'gl'
	| 'lance'
	| 'bow'
	| 'hbg'
	| 'lbg'
	| 'ms'
	| 'hh';

export function getReaction(reaction: ReactionType) {
	return availableReactions.find((e) => reaction === e.id)?.reaction;
}

export const availableReactions: ReactionOption[] = [
	{
		id: 'like',
		reaction: '👍',
	},
	{
		id: 'heart',
		reaction: '❤️',
	},
	{
		id: 'fire',
		reaction: '🔥',
	},
	{
		id: 'tada',
		reaction: '🎉',
	},
	{
		id: 'star',
		reaction: '⭐',
	},
	{
		id: 'mindblown',
		reaction: '🤯',
	},
	{
		id: 'sunglasses',
		reaction: '😎',
	},
	{
		id: 'party',
		reaction: '🥳',
	},
	{
		id: 'skull',
		reaction: '💀',
	},
	{
		id: '100',
		reaction: '💯',
	},
	{
		id: 'clap',
		reaction: '👏',
	},
	{
		id: 'eyes',
		reaction: '👀',
	},
	{
		id: 'gs',
		reaction: getWeaponIcon('Great Sword'),
	},
	{
		id: 'ls',
		reaction: getWeaponIcon('Long Sword'),
	},
	{
		id: 'ds',
		reaction: getWeaponIcon('Dual Swords'),
	},
	{
		id: 'sns',
		reaction: getWeaponIcon('Sword and Shield'),
	},
	{
		id: 'lance',
		reaction: getWeaponIcon('Lance'),
	},
	{
		id: 'gl',
		reaction: getWeaponIcon('Gunlance'),
	},
	{
		id: 'hammer',
		reaction: getWeaponIcon('Hammer'),
	},
	{
		id: 'hh',
		reaction: getWeaponIcon('Hunting Horn'),
	},
	{
		id: 'tonfa',
		reaction: getWeaponIcon('Tonfa'),
	},
	{
		id: 'saf',
		reaction: getWeaponIcon('Switch Axe F'),
	},
	{
		id: 'ms',
		reaction: getWeaponIcon('Magnet Spike'),
	},
	{
		id: 'lbg',
		reaction: getWeaponIcon('Light Bowgun'),
	},
	{
		id: 'hbg',
		reaction: getWeaponIcon('Heavy Bowgun'),
	},
	{
		id: 'bow',
		reaction: getWeaponIcon('Bow'),
	},
];
