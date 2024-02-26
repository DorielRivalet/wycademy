/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type {
	FrontierArmorSkillName,
	FrontierArmorSkillTree,
	FrontierSigil,
	FrontierWeaponID,
	FrontierWeaponName,
} from 'ezlion';

// TODO this will need to support i18n later on. same for any other strings. prefer numbers or IDs.

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
	| 'Very Short'
	| 'Short'
	| 'Medium'
	| 'Long'
	| 'Very Long';
export type FrontierBowgunReloadSpeed =
	| 'Very Slow'
	| 'Slow'
	| 'Normal'
	| 'Fast'
	| 'Very Fast';
export type FrontierBowgunRecoil = 'Medium' | 'Small' | 'Smaller';
export type FrontierBowgunAmmo =
	| 'Norm S.'
	| 'Pierce S.'
	| 'Pellet S.'
	| 'Crag S.'
	| 'Cluster S.'
	| 'Rec S.'
	| 'Psn S.'
	| 'Para S.'
	| 'Slp S.'
	| 'Flaming S'
	| 'Water S'
	| 'Thunder S'
	| 'Freeze S'
	| 'Dragon S'
	| 'Tranq S'
	| 'Paint S'
	| 'Demon S.'
	| 'Armor S.'
	| 'Rapid Fire'
	| 'Ultra Rapid Fire';
export type FrontierBowArcShot = 'Wide' | 'Narrow' | 'Bomb' | 'Slicing';
export type FrontierBowCharge = 'Pierce' | 'Rapid' | 'Spread' | 'Rising';
export type FrontierBowChargeLevel = 1 | 2 | 3 | 4;
export type FrontierBowCoating =
	| 'Power'
	| 'Crit'
	| 'Poison'
	| 'Para'
	| 'Sleep'
	| 'Impact';
export type FrontierBowAvailableCoatings = {
	power: boolean;
	// crit: boolean;
	poison: boolean;
	para: boolean;
	sleep: boolean;
	impact: boolean;
};
export type FrontierBowgunScope = 'Fixed' | 'Zoom';
// TODO is level up separate? export type FrontierBowgunUpgrade = '' | 'Level Up'
export type FrontierHeavyBowgunUpgrade =
	| ''
	| 'Shield'
	| 'Power Barrel'
	| 'Heavy Barrel'
	| 'Heat Beam';
export type FrontierLightBowgunUpgrade = '' | 'Silencer' | 'Long Barrel';
/**0 Does not show. */
export type FrontierBowgunAttackLevel = 0 | 1 | 2 | 3 | 4 | 5;
export type FrontierGunlanceShell = 'Spread' | 'Long' | 'Normal';
export type FrontierGunlanceShellLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type FrontierWeaponClass = 'Blademaster' | 'Gunner' | 'Both';
export type FrontierMaxHiden =
	| 'Sword King'
	| 'Gun Sage'
	| 'Blunt Beast'
	| 'Heavenly Spear'
	| 'Sword Saint'
	| 'Gun Prodigy'
	| 'Dual Dragon'
	| 'Katana God'
	| 'Flamboyant Emperor'
	| 'Cannon Emperor'
	| 'Bow Demon'
	| 'Piercing Phoenix'
	| 'Edge Marshal'
	| 'Magnetic Star';
export type FrontierArmorName = 'Head' | 'Chest' | 'Arms' | 'Waist' | 'Legs';
export type FrontierArmorClass = 'Either' | 'Blademaster' | 'Gunner';
export type FrontierArmorID = 0 | 1 | 2 | 3 | 4;
export type FrontierSlot = 0 | 1 | 2 | 3;
export type FrontierArmor = {
	id: FrontierArmorID;
	name: FrontierArmorName;
	icon: any;
};
/**0 does not show. Shows in 2nd page. */
export type FrontierArmorGRLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
/**The level shown in the 1st page. */
export type FrontierArmorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type FrontierWeapon = {
	id: FrontierWeaponID;
	name: FrontierWeaponName;
	class: FrontierWeaponClass;
	icon: any;
	hiden: FrontierMaxHiden;
};
export type FrontierEquipmentSkillPoints = [
	firstSkill: number,
	secondSkill: number,
	thirdSkill: number,
	fourthSkill: number,
	fifthSkill: number,
];
export type FrontierSkillTreePoints = {
	name: FrontierArmorSkillTree;
	points: number;
};
export type FrontierDecoration = {
	name: string;
	skill1: FrontierSkillTreePoints;
	skill2: FrontierSkillTreePoints;
	skill3: FrontierSkillTreePoints;
	skill4: FrontierSkillTreePoints;
};
export type FrontierEquipmentDecorations = {
	slot1: FrontierDecoration;
	slot2: FrontierDecoration;
	slot3: FrontierDecoration;
};
export type FrontierItemSigil = {
	slot1: FrontierSigilSlot;
	slot2: FrontierSigilSlot;
	slot3: FrontierSigilSlot;
	slot4: FrontierSigilSlot;
};
export type FrontierItemDecoration = {
	slot1: FrontierDecorationSlot;
	slot2: FrontierDecorationSlot;
	slot3: FrontierDecorationSlot;
	slot4: FrontierDecorationSlot;
};
export type FrontierItemColor =
	| 'White'
	| 'Red'
	| 'Green'
	| 'Yellow'
	| 'Blue'
	| 'Purple'
	| 'Cyan'
	| 'Pink'
	| 'Orange'
	| 'Brown'
	| 'Gray';
export type FrontierItemRankType = '' | 'G' | 'Z' | 'T';
export type FrontierItemType =
	| 'Decoration'
	| 'Sigil'
	| 'Cuff'
	| 'Zenith Cuff'
	| 'Hiden Cuff'
	| 'Tower Sigil'
	| 'Tower Decoration'
	| 'Other';
export type FrontierSigilPoints = [
	slot1: number,
	slot2: number,
	slot3: number,
	slot4: number,
	slot5: number,
	slot6: number,
	slot7: number,
	slot8: number,
	slot9: number,
];
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

export type FrontierSwitchAxeFPhial = 'Stun' | 'Power' | 'Ele' | 'Status';

/** Does not include pink. */
export type FrontierHuntingHornWeaponNote =
	| ''
	| 'White'
	| 'Blue'
	| 'Red'
	| 'Green'
	| 'Yellow'
	| 'Purple'
	| 'Cyan';
export type FrontierHuntingHornNote = FrontierHuntingHornWeaponNote | 'Pink';

export type FrontierSigilSlot = { name: FrontierSigil; value: number };
export type Range = { name: string; minimum: number; maximum: number };
export type FrontierDecorationSlot = {
	name: FrontierArmorSkillTree;
	value: number;
};

export type FrontierArmorSkillType =
	| ''
	| 'Health and Stamina'
	| 'Offensive'
	| 'Defensive'
	| 'Blademaster'
	| 'Gunner'
	| 'Hiden'
	| 'Resistances'
	| 'Status'
	| 'Protection'
	| 'Items and Combination'
	| 'Map and Detection'
	| 'Gathering'
	| 'Rewards'
	| 'Other';

export type FrontierArmorSkillNameInfo = {
	name: FrontierArmorSkillName;
	points: number;
	id: number;
};
export type FrontierArmorSkill = {
	tree: FrontierArmorSkillTree;
	type: FrontierArmorSkillType;
	demo: string;
	skills: FrontierArmorSkillNameInfo[];
};

// const a: FrontierArmorSkill = {
// 	tree: 'Guts',
// 	type: 'Defensive',
// 	demo: '',
// 	skills: [
// 		{
// 			name: 'True Guts',
// 			points: 30,
// 			id: 1,
// 		},
// 	],
// };

export type FrontierWeaponType =
	| 'Standard'
	| 'SP'
	| 'HC'
	| "Master's Mark"
	| 'Evolution'
	| 'Gou'
	| 'Heavenly Storm'
	| 'Supremacy'
	| 'G Supremacy'
	| 'Burst'
	| 'Origin'
	| 'G Rank'
	| 'G Rank Finesse'
	| 'Tower'
	| 'Exotic'
	| 'Prayer'
	| 'Zenith'
	| 'Z Finesse';
export type FrontierArmorType =
	| 'Standard'
	| 'SP'
	| 'HC'
	| 'HS'
	| 'G'
	| 'GS'
	| 'GP'
	| 'Gou'
	| 'Heavenly Storm'
	| 'Supremacy'
	| 'G Supremacy'
	| 'Burst'
	| 'Origin'
	| 'Tower'
	| 'Exotic'
	| 'Zenith';
export type FrontierBowgunAmmoLevel = 1 | 2 | 3;
export type FrontierBowgunAmmoQuantity = {
	type: FrontierBowgunAmmo;
	levelQuantity: [level1: number, level2: number, level3: number];
};
export type FrontierBowChargeLevels = {
	type: FrontierBowCharge;
	level: FrontierBowChargeLevel;
};

// for dmg calculations
export type FrontierStyleRankAffinity = 0 | 20 | 24 | 26;
export type FrontierSharpnessAffinity = 0 | 5 | 10;
export type FrontierExpertAffinity = 0 | 10 | 20 | 30 | 40 | 50 | 100;
export type FrontierFlashConversionAffinity = 0 | 30;

/**deter overrides this */
export type FrontierIssenAffinity = 0 | 5 | 10 | 20;
/**deter overrides this */
export type FrontierIssenAffinityMultiplier = 1 | 1.1 | 1.15 | 1.25;

export type FrontierCeaselessAffinity = 0 | 35 | 50 | 60;
export type FrontierCeaselessAffinityMultiplier = 1 | 1.1 | 1.15 | 1.2;
export type FrontierStarvingWolfAffinity = 0 | 50;
export type FrontierStarvingWolfAffinityMultiplier = 1 | 1.1;
export type FrontierGreatSwordActiveFeatureAffinity = 0 | 100;

export type FrontierAttackSkillMultipliedAttack =
	| 0
	| 20
	| 35
	| 50
	| 80
	| 100
	| 150
	| 200;
export type FrontierCaravanSkillMultipliedAttack =
	| 1
	| 1.01
	| 1.025
	| 1.05
	| 1.1;
