/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// TODO this will need to support i18n later on. same for any other strings. prefer numbers or IDs.
export type FrontierWeaponID =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13;

export type FrontierWeaponName =
	| 'Great Sword'
	| 'Long Sword'
	| 'Dual Swords'
	| 'Sword and Shield'
	| 'Hammer'
	| 'Hunting Horn'
	| 'Lance'
	| 'Gunlance'
	| 'Heavy Bowgun'
	| 'Light Bowgun'
	| 'Bow'
	| 'Tonfa'
	| 'Switch Axe F'
	| 'Magnet Spike';
export type FrontierRarity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FrontierElement =
	| ''
	| 'Fire'
	| 'Water'
	| 'Thunder'
	| 'Ice'
	| 'Dragon'
	| 'Light'
	| 'Blaze'
	| 'Tenshou'
	| 'L. Rod'
	| 'Okiko'
	| 'B. Flame'
	| 'C. Demon'
	| 'Dark'
	| 'Music'
	| 'Sound'
	| 'Wind'
	| 'B. Zero'
	| 'E. Roar';
export type FrontierStatus =
	| ''
	| 'Poison'
	| 'Paralysis'
	| 'Sleep'
	| 'Blast'
	| 'Def';
export type FrontierWeaponLength =
	| 'V. Short'
	| 'Short'
	| 'Medium'
	| 'Long'
	| 'V. Long';
export type FrontierWeaponClass = 'Blademaster' | 'Gunner';
export type FrontierEquipmentRank = '' | 'G' | 'Z';
export type FrontierWeaponSharpness = [
	Red: number,
	Orange: number,
	Yellow: number,
	Green: number,
	Blue: number,
	White: number,
	Purple: number,
	Cyan: number,
];
export type UICornerStyle = 0 | 1 | 2 | 3;
export type FrontierZenithSkill =
	| ''
	| 'Skill Slots Up+1'
	| 'Skill Slots Up+2'
	| 'Skill Slots Up+3'
	| 'Skill Slots Up+4'
	| 'Skill Slots Up+5'
	| 'Skill Slots Up+6'
	| 'Skill Slots Up+7'
	| 'Flash Conversion Up+1'
	| 'Flash Conversion Up+2'
	| 'Stylish Assault Up+1'
	| 'Stylish Assault Up+2'
	| 'Dissolver Up'
	| 'Thunder Clad Up+1'
	| 'Thunder Clad Up+2'
	| 'Ice Age Up'
	| 'Hearing Protection Up+1'
	| 'Hearing Protection Up+2'
	| 'Hearing Protection Up+3'
	| 'Wind Res Up+1'
	| 'Wind Res Up+2'
	| 'Wind Res Up+3'
	| 'Wind Res Up+4'
	| 'Quake Res Up+1'
	| 'Quake Res Up+2'
	| 'Poison Res Up+1'
	| 'Poison Res Up+2'
	| 'Para Res Up+1'
	| 'Para Res Up+2'
	| 'Sleep Res Up+1'
	| 'Sleep Res Up+2'
	| 'Vampirism Up'
	| 'Drug Knowledge Up'
	| 'Assistance Up'
	| 'Bullet Saver Up+1'
	| 'Bullet Saver Up+2'
	| 'Guard Up+1'
	| 'Guard Up+2'
	| 'Adaptation Up+1'
	| 'Adaptation Up+2'
	| 'Encourage Up+1'
	| 'Encourage Up+2'
	| 'Reflect Up+1'
	| 'Reflect Up+2'
	| 'Reflect Up+3'
	| 'Stylish Up'
	| 'Vigorous Up'
	| 'Obscurity Up'
	| 'Soul Up'
	| 'Ceaseless Up'
	| 'Rush Up';
export type FrontierSwitchAxeFPhial = 'Stun' | 'Power' | 'Ele' | 'Status';

/** Does not include pink. */
export type FrontierHuntingHornWeaponNotes =
	| ''
	| 'White'
	| 'Blue'
	| 'Red'
	| 'Green'
	| 'Yellow'
	| 'Purple'
	| 'Cyan';

export type FrontierHuntingHornNotes = FrontierHuntingHornWeaponNotes | 'Pink';
