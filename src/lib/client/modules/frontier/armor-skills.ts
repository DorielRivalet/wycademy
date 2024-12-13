import type { FrontierWeaponName } from 'ezlion';
import type { FrontierItemColor } from './types';

export const obscurityValues: {
	weapons: FrontierWeaponName[];
	values: number[];
}[] = [
	{
		weapons: ['Sword and Shield', 'Lance', 'Gunlance', 'Tonfa'],
		values: [
			0, 40, 80, 120, 160, 200, 220, 240, 260, 280, 300, 70, 140, 210, 240, 270,
			300,
		],
	},
	{
		weapons: ['Great Sword', 'Switch Axe F', 'Magnet Spike'],
		values: [
			0, 30, 60, 90, 120, 150, 165, 180, 195, 210, 225, 50, 100, 150, 175, 200,
			225,
		],
	},
	{
		weapons: ['Long Sword'],
		values: [
			0, 20, 40, 60, 80, 100, 110, 120, 130, 140, 150, 30, 60, 90, 110, 130,
			150,
		],
	},
];

export type FrontierSkill =
	| 'armor'
	| 'zenith'
	| 'diva'
	| 'automatic'
	| 'road/dure'
	| 'partner'
	| 'style rank'
	| 'halk';

// TODO find pages where this is not used.
export const SkillColors: {
	name: FrontierItemColor;
	value: string;
	skill: FrontierSkill;
}[] = [
	// guild food skill: guild hall icon.
	// caravan skill: gem icon.
	// active feature: not a skill.
	// hh notes: hh note icon.
	// sigil skill: sigil icon.
	// TODO sky corridor / tower?
	// TODO partnya?
	// everything else is jewel icon with these colors.
	{ name: 'White', value: '#efefe9', skill: 'armor' },
	{ name: 'Red', value: '#ff435d', skill: 'zenith' },
	{ name: 'Green', value: '#73cb8d', skill: 'partner' },
	{ name: 'Blue', value: '#96b5fd', skill: 'diva' },
	{ name: 'Yellow', value: '#f3c832', skill: 'style rank' },
	{ name: 'Purple', value: '#cba6fa', skill: 'road/dure' },
	{ name: 'Cyan', value: '#68ecec', skill: 'automatic' },
	// { name: 'Orange', value: '#ff985d' }, // unk
	// { name: 'Pink', value: '#ed93a4' },
	// { name: 'Brown', value: '#bf6464' }, // unk
	{ name: 'Gray', value: '#7f7f7f', skill: 'halk' },
];

export function getSkillColor(skill: FrontierSkill) {
	const fallback = SkillColors[0].value;

	const found = SkillColors.find((w) => w.skill === skill);
	if (!found) {
		return fallback;
	}

	return found.value;
}
