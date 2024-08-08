import {
	ezlionSkillDivaPrayerGem,
	type FrontierDivaPrayerGemSkillName,
} from 'ezlion';
import type {
	FrontierDivaPrayerGemColor,
	FrontierDivaPrayerGemLevel,
} from './types';

export const divaPrayerGemColors: {
	name: FrontierDivaPrayerGemColor | 'Inactive';
	color: string;
}[] = [
	{ name: 'Red', color: '#ab2646' },
	{ name: 'Yellow', color: '#e4d63c' },
	{ name: 'Green', color: '#43ac54' },
	{ name: 'Blue', color: '#4096df' },
	{ name: 'Inactive', color: '#808080' },
];

export const divaPrayerGems: {
	id: number;
	name: FrontierDivaPrayerGemSkillName;
	description: string;
	maxLevel: FrontierDivaPrayerGemLevel;
	unused: boolean;
	partyEffect: boolean;
	affectedByDamageCalculator: boolean;
}[] = [
	{
		id: 0,
		name: ezlionSkillDivaPrayerGem[0],
		description: 'None.',
		maxLevel: 0,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: true,
	},
	{
		id: 1,
		name: ezlionSkillDivaPrayerGem[1],
		description:
			'Sharpness does not decrease with blademaster weapons. Works for 5, 10 or 20 quests depending on level during the prayer active window.',
		maxLevel: 3,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 2,
		name: ezlionSkillDivaPrayerGem[2],
		description: 'Reduces the recoil and reload speed of Gunner weapons.',
		maxLevel: 7,
		unused: true,
		partyEffect: true,
		affectedByDamageCalculator: false,
	},
	{
		id: 3,
		name: ezlionSkillDivaPrayerGem[3],
		description: 'Tails can be cut with any damage type.',
		maxLevel: 1,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 4,
		name: ezlionSkillDivaPrayerGem[4],
		description: 'Adds passive HP recovery to all quests.',
		maxLevel: 2,
		unused: false,
		partyEffect: true,
		affectedByDamageCalculator: false,
	},
	{
		id: 5,
		name: ezlionSkillDivaPrayerGem[5],
		description:
			'Makes it easier to scare monsters by attacking with Earth Style.',
		maxLevel: 4,
		unused: true,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 6,
		name: ezlionSkillDivaPrayerGem[6],
		description:
			'Makes it easier to scare monsters by attacking with Heaven Style.',
		maxLevel: 4,
		unused: true,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 7,
		name: ezlionSkillDivaPrayerGem[7],
		description:
			'Makes it easier to scare monsters by attacking with Storm Style.',
		maxLevel: 4,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 8,
		name: ezlionSkillDivaPrayerGem[8],
		description:
			'Increases the amount of raw damage dealt by a cutting weapon by adjusting hitzones to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
		maxLevel: 3,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: true,
	},
	{
		id: 9,
		name: ezlionSkillDivaPrayerGem[9],
		description:
			'Increases the amount of raw damage dealt by an impact weapon by adjusting hitzones to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
		maxLevel: 3,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: true,
	},
	{
		id: 10,
		name: ezlionSkillDivaPrayerGem[10],
		description:
			'Increases the amount of raw damage dealt by a ranged weapon by adjusting hitzones to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
		maxLevel: 3,
		unused: false,
		affectedByDamageCalculator: true,
		partyEffect: false,
	},
	{
		id: 11,
		name: ezlionSkillDivaPrayerGem[11],
		description:
			'Increases the duration of status effects on monsters. +22/35/60 seconds increase. Around 10 seconds downtime with Abnormality, around 25 without.',
		maxLevel: 3,
		unused: false,
		partyEffect: true,
		affectedByDamageCalculator: false,
	},
	{
		id: 12,
		name: ezlionSkillDivaPrayerGem[12],
		description: 'Monsters are more susceptible to status ailments.',
		maxLevel: 3,
		unused: true,
		partyEffect: true,
		affectedByDamageCalculator: false,
	},
	{
		id: 13,
		name: ezlionSkillDivaPrayerGem[13],
		description:
			'Increases damage when striking body parts upon which your attacks are highly effective. However, element damage does not change.',
		maxLevel: 3,
		unused: true,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 14,
		name: ezlionSkillDivaPrayerGem[14],
		description:
			'Elemental damage increases based on level. +1/2/3 Elemental Hitzone increase.',
		maxLevel: 3,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: true,
	},
	{
		id: 15,
		name: ezlionSkillDivaPrayerGem[15],
		description: 'Monsters cannot flee if in the same area as a hunter.',
		maxLevel: 3,
		unused: false,
		partyEffect: true,
		affectedByDamageCalculator: false,
	},
	{
		id: 16,
		name: ezlionSkillDivaPrayerGem[16],
		description: 'Adds new items to the GCP store based on level.',
		maxLevel: 1,
		unused: false,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 17,
		name: ezlionSkillDivaPrayerGem[17],
		description:
			"Attack will go up based on the number of players in a quest. +10/20/30 True Raw increase if you are the only player. This is not affected by multipliers like Adrenaline, instead it's a flat addition.",
		maxLevel: 3,
		unused: false,
		partyEffect: true,
		affectedByDamageCalculator: true,
	},
	{
		id: 18,
		name: ezlionSkillDivaPrayerGem[18],
		description:
			"Gives Divine Protection, Goddess' Embrace or Soul Revival based on level.",
		maxLevel: 3,
		unused: false,
		partyEffect: false,
		affectedByDamageCalculator: false,
	},
	{
		id: 19,
		name: ezlionSkillDivaPrayerGem[19],
		description:
			'Increases affinity of all weapons based on the level of the song. +25/50/100% Affinity increase.',
		maxLevel: 3,
		unused: false,
		affectedByDamageCalculator: true,
		partyEffect: false,
	},
	{
		id: 20,
		name: ezlionSkillDivaPrayerGem[20],
		description: 'Increases fire resistance.',
		maxLevel: 3,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 21,
		name: ezlionSkillDivaPrayerGem[21],
		description: 'Increases water resistance.',
		maxLevel: 3,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 22,
		name: ezlionSkillDivaPrayerGem[22],
		description: 'Increases thunder resistance.',
		maxLevel: 3,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 23,
		name: ezlionSkillDivaPrayerGem[23],
		description: 'Increases dragon resistance.',
		maxLevel: 3,
		affectedByDamageCalculator: false,
		unused: true,
		partyEffect: false,
	},
	{
		id: 24,
		name: ezlionSkillDivaPrayerGem[24],
		description: 'Increases ice resistance.',
		maxLevel: 3,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
	{
		id: 25,
		name: ezlionSkillDivaPrayerGem[25],
		description: 'Increases resistance to all elements.',
		maxLevel: 2,
		unused: true,
		affectedByDamageCalculator: false,
		partyEffect: false,
	},
];

export function getDivaPrayerGemColor(
	color: FrontierDivaPrayerGemColor | 'Inactive',
) {
	return divaPrayerGemColors.find((e) => e.name === color)?.color ?? '#ffffff';
}
