/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// if bitfields are not needed, make an object instead.

import type {
	FrontierArmorClass,
	FrontierArmorGRLevel,
	FrontierArmorLevel,
	FrontierArmorType,
	FrontierBowArcShot,
	FrontierBowCharge,
	FrontierBowChargeLevel,
	FrontierBowgunAttackLevel,
	FrontierBowgunRecoil,
	FrontierBowgunReloadSpeed,
	FrontierBowgunScope,
	FrontierElement,
	FrontierEquipmentDecorations,
	FrontierEquipmentRank,
	FrontierEquipmentSkillPoints,
	FrontierGunlanceShell,
	FrontierGunlanceShellLevel,
	FrontierHeavyBowgunUpgrade,
	FrontierHuntingHornWeaponNote,
	FrontierItemColor,
	FrontierItemDecoration,
	FrontierItemRankType,
	FrontierItemSigil,
	FrontierItemType,
	FrontierLightBowgunUpgrade,
	FrontierRarity,
	FrontierSlot,
	FrontierStatus,
	FrontierSwitchAxeFPhial,
	FrontierWeaponLength,
	FrontierWeaponSharpness,
	FrontierWeaponType,
} from './types';

import type {
	FrontierArmorSkillName,
	FrontierArmorSkillTree,
	FrontierSigil,
	FrontierWeaponClass,
	FrontierZenithSkill,
} from 'ezlion';

import GameLogoMonsterHunterFrontier from '$lib/client/images/game/mhf.webp';
import GameLogoMonsterHunterFrontierG from '$lib/client/images/game/mhfg.webp';
import GameLogoMonsterHunterFrontierGG from '$lib/client/images/game/mhfgg.webp';
import GameLogoMonsterHunterFrontierZSmall from '$lib/client/images/game/mhfz-small.webp';
import GameLogoMonsterHunterFrontierZ from '$lib/client/images/game/mhfz.webp';
import GameLogoMonsterHunterFrontierZZ from '$lib/client/images/game/mhfzz.webp';

// TODO the colors arrays should be grouped together.

/*
https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
The biggest argument in favour of this format over TypeScript’s enum is that it keeps your codebase aligned with the state of JavaScript, and when/if enums are added to JavaScript then you can move to the additional syntax.
*/
export const ODirection = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
} as const;

export const gameInfo: { name: string; icon: any }[] = [
	{
		name: 'Monster Hunter Frontier',
		icon: GameLogoMonsterHunterFrontier,
	},
	{
		name: 'Monster Hunter Frontier G',
		icon: GameLogoMonsterHunterFrontierG,
	},
	{
		name: 'Monster Hunter Frontier G Genuine',
		icon: GameLogoMonsterHunterFrontierGG,
	},
	{
		name: 'Monster Hunter Frontier Z (Small)',
		icon: GameLogoMonsterHunterFrontierZSmall,
	},
	{
		name: 'Monster Hunter Frontier Z',
		icon: GameLogoMonsterHunterFrontierZ,
	},
	{
		name: 'Monster Hunter Frontier Z Zenith',
		icon: GameLogoMonsterHunterFrontierZZ,
	},
];

export const RarityColors = [
	'#efefe9',
	'#efefe9',
	'#efefe9',
	'#73cb8d',
	'#ed93a4',
	'#96b5fd',
	'#ff985d',
	'#fffd2e',
	'#c8ff6a',
	'#68ecec',
	'#cba6fa',
	'#ff435d',
] as const;
export const ColorCodes = [
	'#323232',
	'#ff435d',
	'#56ff56',
	'#57ffff',
	'#ffff50',
	'#ffa461',
	'#ff84ff',
	'#bf6464',
	'#a0a0a0',
	'#808080',
	'#f08200',
	'#846b5c',
	'#80212e',
	'#747eff',
	'#ff9eca',
	'#4040ff',
	'#202020',
	'#602020',
	'#32bc64',
	'#001480',
	'#3e9dd8',
	'#72d242',
	'#b4641e',
	'#32bc64',
	'#4040ff',
	'#68ecec',
	'#c8ff6a',
	'#cba6fa',
	'#96b5fd',
	'#808028',
	'#640011',
	'#ffffff',
	'#000000',
	'#ff435d',
	'#56ff56',
	'#57ffff',
	'#ffff50',
	'#ffa461',
	'#ff84ff',
	'#bf6464',
	'#a0a0a0',
	'#808080',
	'#f08200',
	'#846b5c',
	'#80212e',
	'#2020a0',
	'#ff9eca',
	'#4040ff',
	'#202020',
	'#602020',
	'#32bc64',
	'#001480',
	'#3e9dd8',
	'#72d242',
	'#b4641e',
	'#32bc64',
	'#4040ff',
	'#68ecec',
	'#c8ff6a',
	'#cba6fa',
	'#96b5fd',
	'#808028',
	'#640011',
	'#684b02',
	'#014517',
	'#014066',
	'#c25900',
	'#4040ff',
	'#1f974f',
	'#a3a488',
	'#1c821c',
	'#cc5400',
	'#660066',
	'#000000',
	'#ff84ff',
	'#bf6464',
	'#ffff50',
	'#56ff56',
	'#ffffff',
	'#4040ff',
	'#57ffff',
	'#ffa461',
	'#e37eed',
	'#291c1c',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
] as const;

export const defaultArmorComponentValues = {
	armorName: 'Barb Helmet ZP',
	armorLevel: 7 as FrontierArmorLevel,
	armorGRLevel: 7 as FrontierArmorGRLevel,
	armorDefense: 100,
	armorFireResistance: 0,
	armorWaterResistance: 0,
	armorThunderResistance: 0,
	armorIceResistance: 0,
	armorDragonResistance: 0,
	armorTransmog: true,
	armorClass: 'Either' as FrontierArmorClass,
	armorID: '0',
	armorRank: 'Z' as FrontierEquipmentRank,
	armorZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	armorDescription:
		'A very very very very very very very very long description.',
	armorRarity: 12 as FrontierRarity,
	armorExtraIcons: false,
	armorSkillTreeNames: [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	] as FrontierArmorSkillTree[],
	armorSkillPoints: [10, 20, -30, 40, 50] as FrontierEquipmentSkillPoints,
	armorType: 'Zenith' as FrontierArmorType,
	armorAutomaticSkill: '' as FrontierArmorSkillName,
	armorDecorations: {
		slot1: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot2: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot3: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
	} as FrontierEquipmentDecorations,
} as const;

export const defaultItemComponentValues = {
	itemName: 'Book of Combos',
	itemDescription:
		'A book of Combos. Used for increasing the chance of success when combining items. Bought from the shop.',
	itemRarity: 11 as FrontierRarity,
	itemRank: 'Z' as FrontierItemRankType,
	itemIconName: 'Book',
	itemColorName: 'Red' as FrontierItemColor,
	itemType: 'Other' as FrontierItemType,
	itemZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	itemCuffSkill1: 'Vampirism' as FrontierArmorSkillTree,
	itemCuffSkill1Points: 10,
	itemCuffSkill2: 'Determination' as FrontierArmorSkillTree,
	itemCuffSkill2Points: -10,
	itemTowerSkill: 'Lone Wolf' as FrontierArmorSkillName,
	itemArmorClass: 'Either' as FrontierArmorClass,
	itemWeaponClass: 'Both' as FrontierWeaponClass,
	itemSlotsRequired: 2 as FrontierSlot,
	itemSigil: {
		slot1: {
			name: 'Attack Slayer',
			value: 8,
		},
		slot2: {
			name: 'Elemental Slayer',
			value: -8,
		},
		slot3: {
			name: 'Zenith Healing',
			value: 4,
		},
		slot4: {
			name: 'Affinity Slayer',
			value: -43,
		},
	} as FrontierItemSigil,
	itemDecoration: {
		slot1: {
			name: 'Determination',
			value: 7,
		},
		slot2: {
			name: 'Attack',
			value: -58,
		},
		slot3: {
			name: 'Defense',
			value: 9,
		},
		slot4: {
			name: 'Sharpness',
			value: 2,
		},
	} as FrontierItemDecoration,
} as const;

export const missionRequirementAttackCeilings = [
	1, 3, 5, 6, 7, 9, 12, 13, 15, 17, 18, 20, 22, 23, 24, 25, 28, 30, 31, 33, 36,
	37, 38, 39, 41, 42, 44, 46, 47, 48, 49, 51, 53, 54, 55, 57, 59, 60, 62, 64,
	65, 66, 67, 70, 72, 73, 75, 76, 78, 79, 81, 83, 84, 86, 88, 89, 90, 91, 94,
	95, 96, 97, 99, 101, 102, 104, 106, 107, 108, 109, 112, 113, 114, 115, 117,
	118, 120, 121, 123, 125, 126, 128, 130, 131, 132, 133, 135, 137, 138, 139,
	141, 143, 144, 146, 148, 150, 151, 153, 154, 156, 157, 159, 160, 161, 162,
	164, 166, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 179, 180, 181,
	182, 183, 184, 185, 187, 188, 189, 190, 191, 192, 193, 195, 196, 197, 198,
	199, 200, 201, 203, 204, 205, 206, 207, 208, 209, 211, 212, 213, 214, 215,
	216, 217, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230, 231, 232,
	233, 235, 236, 237, 238, 239, 240, 241, 243, 244, 245, 246, 247, 248, 249,
];

/*
// It requires an extra line to pull out the values
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

run(ODirection.Right);


public enum FrontierWeaponType
{
    GreatSword,
    HeavyBowgun,
    Hammer,
    Lance,
    SwordAndShield,
    LightBowgun,
    DualSwords,
    LongSword,
    HuntingHorn,
    Gunlance,
    Bow,
    Tonfa,
    SwitchAxeF,
    MagnetSpike,
}

public enum FrontierSharpness
{
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    White,
    Purple,
    Cyan,
}
*/
