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
export type FrontierWeaponMultiplier = 1.4 | 4.8 | 5.2 | 2.3 | 5.4 | 1.8 | 1.2;
export type FrontierTonfaMode = 'Long' | 'Short';
export type FrontierWeapon = {
	id: FrontierWeaponID;
	name: FrontierWeaponName;
	class: FrontierWeaponClass;
	icon: any;
	hiden: FrontierMaxHiden;
	bloatAttackMultiplier: FrontierWeaponMultiplier;
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
export type FrontierPassiveItemMultipliedAttack = 0 | 6 | 9 | 15;
export type FrontierFoodConsumablesMultipliedAttack = 0 | 3 | 5 | 10 | 15;
export type FrontierSeedFlutesCatMultipliedAttack =
	| 0
	| 10
	| 20
	| 25
	| 30
	| 40
	| 50
	| 60;
export type FrontierLanceHBGMultipliedAttack = 0 | 20 | 50;
export type FrontierLoneWolfMultipliedAttack = 0 | 100;
export type FrontierStylishAssaultMultipliedAttack =
	| 0
	| 100
	| 120
	| 140
	| 160
	| 180
	| 200
	| 220;
export type FrontierConsumptionSlayerMultipliedAttack = 0 | 100;
export type FrontierObscurityMultipliedAttack =
	| 0
	| 20
	| 30
	| 40
	| 60
	| 80
	| 90
	| 100
	| 110
	| 120
	| 130
	| 140
	| 150
	| 160
	| 165
	| 175
	| 180
	| 195
	| 200
	| 210
	| 220
	| 225
	| 240
	| 260
	| 270
	| 280
	| 300;
export type FrontierRushMultipliedAttack = 0 | 50 | 130 | 200;
export type FrontierFuriousMultipliedAttack = 0 | 70 | 100 | 180;
export type FrontierFuriousElementMultiplier = 1 | 1.05 | 1.1 | 1.2;
export type FrontierFuriousAffinity = 0 | 10 | 25 | 40;
export type FrontierShiriagariMinutes = 0 | 1 | 3 | 5 | 10 | 15 | 20;
export type FrontierShiriagariMultipliedAttack =
	| 0
	| 20
	| 50
	| 80
	| 130
	| 180
	| 200;
export type FrontierIncitementMultipliedAttack = 0 | 40;
export type FrontierRoadAttackMultipliedAttack = 0 | 10 | 20 | 30 | 50 | 70;
export type FrontierRoadAdvancementMultipliedAttack = 0 | 20 | 40 | 60;
export type FrontierRoadLastStandMultipliedAttack = 0 | 80 | 120;
export type FrontierDuremudiraAttackMultipliedAttack =
	| 0
	| 50
	| 75
	| 100
	| 150
	| 200;
export type FrontierConquestAttackMedicineMultipliedAttack = 0 | 100;

export type FrontierHuntingHornSongAttackMultiplier = 1 | 1.1 | 1.15 | 1.2;
export type FrontierAdrenalineVigorousMultiplier = 1 | 0.7 | 1.15 | 1.3 | 1.5;
export type FrontierVigorousUpAttack = 0 | 50 | 100;
export type FrontierHidenSkillAttackMultiplier = 1 | 1.2 | 1.3 | 1.4;
export type FrontierWeaponMechanicAttackMultiplier =
	| 1
	| 1.03
	| 1.05
	| 1.1
	| 1.15
	| 1.2
	| 1.2375
	| 1.3
	| 1.4
	| 1.5
	| 1.6;
export type FrontierCombatSupremacyAttackMultiplier = 1 | 1.2;

export type FrontierArmorFlatAttack = 0 | 15 | 30 | 45 | 60 | 80;
export type FrontierOriginArmorFlatAttack = 0 | 20 | 40 | 60 | 80 | 110;
export type FrontierGRankArmor3PiecesFlatAttack = 0 | 30;
export type FrontierSecretTechniqueFlatAttack = 0 | 320;
export type FrontierRedSoulFlatAttack = 0 | 15 | 30 | 100;
export type FrontierAssistanceFlatAttack = 0 | 20;
export type FrontierMaleHunterBondFlatAttack = 0 | 5;
export type FrontierPartnyaaBondFlatAttack = 0 | 10 | 20 | 30;

export type FrontierFireElementMultiplier = 1 | 1.1 | 1.2 | 1.21 | 1.33;
export type FrontierWaterElementMultiplier = 1 | 1.1 | 1.2 | 1.21 | 1.33;
export type FrontierIceElementMultiplier = 1 | 1.1 | 1.2 | 1.21 | 1.33;
export type FrontierThunderElementMultiplier = 1 | 1.1 | 1.2 | 1.21 | 1.33;
export type FrontierDragonElementMultiplier = 1 | 1.1 | 1.2 | 1.21 | 1.33;
export type FrontierElementalAttackMultiplier = 1 | 1.2 | 1.32;
export type FrontierHuntingHornElementalUpSongAttackMultiplier = 1 | 1.1;

export type FrontierDrugKnowledgeStatusMultiplier = 0.38 | 0.42;
export type FrontierStatusAttackUpStatusMultiplier = 1 | 1.125;
export type FrontierGuildPoogieStatusAttackUpStatusMultiplier = 1 | 1.125;
export type FrontierStatusSigilStatusMultiplier = 1 | 1.1 | 1.5 | 1.65;
export type FrontierWeaponModifierStatusMultiplier = 1 | 1.2 | 1.3;

export type FrontierAreaOfEffectSigilStack = 0 | 1 | 2 | 3 | 4;
export type FrontierSharpnessAttackMultiplier =
	| 0.6
	| 0.85
	| 1.1
	| 1.325
	| 1.45
	| 1.6
	| 1.7
	| 1.8;
export type FrontierLanceImpactAttackMultiplier = 1 | 0.72;
export type FrontierTranscendAttackMultiplier = 1 | 1.13;
export type FrontierPowerSwordCrystalAttackMultiplier = 1 | 1.2;

/**replaces weapon element*/
export type FrontierElementalSwordCrystalsElementValue = 0 | 500 | 700 | 900;
export type FrontierGR600ElementalSwordCrystalsElementValue =
	| 0
	| 1300
	| 1500
	| 2100;
export type FrontierWeaponTypeExclusiveElementMultiplier = 1 | 1.3 | 2 | 2.6;

export type FrontierMonsterAfflictedStatusAttackMultiplier = 1 | 1.1 | 3;

export type FrontierThunderCladRawHitzoneAddition = 0 | 5;
export type FrontierExploitWeaknessRawHitzoneAddition = 0 | 5;
export type FrontierPointBreakthroughRawHitzoneAddition = 0 | 2 | 5;
export type FrontierAcidShotRawHitzoneAddition = 0 | 10;
export type FrontierAcidShotElementHitzoneAddition = 0 | 10;
export type FrontierHuntingHornDebuffRawHitzone = 0 | 2;
export type FrontierHuntingHornDebuffElementHitzone = 0 | 4;
export type FrontierCriticalDistanceRawHitzoneAddition = 0 | 5;

export type FrontierAbsoluteDefenseAttackMultiplier = 1 | 0.8;
export type FrontierCourseBonusAttackMultiplier = 1 | 1.25;

export type FrontierGunnerDistanceAttackMultiplier =
	| 1
	| 1.1
	| 1.2
	| 1.3
	| 1.4
	| 1.5
	| 1.6
	| 1.7
	| 1.8
	| 1.9
	| 2
	| 2.1
	| 2.15
	| 2.2
	| 2.3
	| 2.4
	| 2.45
	| 2.5
	| 2.55
	| 2.6;
export type FrontierBulletAttackModifier = 1 | 1.1 | 1.3;
export type FrontierShotAttackMultiplier = 0.5 | 0.6 | 0.73 | 1 | 1.3 | 1.4 | 2;

export type FrontierMotionValue = {
	name: string;
	animation?: string;
	values: string; // TODO: to number array?
	notes?: string;
};

export type FrontierMotionValueSection = {
	name: string;
	motionValues: FrontierMotionValue[];
};

export type FrontierMotionValues = {
	name: FrontierWeaponName;
	sections: FrontierMotionValueSection[];
};
