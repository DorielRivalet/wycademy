import type { FrontierWeaponName } from 'ezlion';

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
