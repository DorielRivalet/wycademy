import GreatSwordIcon from '$lib/client/components/frontier/icon/weapon/Great_Sword_Icon_White5.svelte';
import LongSwordIcon from '$lib/client/components/frontier/icon/weapon/Long_Sword_Icon_White4.svelte';
import DualSwordsIcon from '$lib/client/components/frontier/icon/weapon/Dual_Blades_Icon_White4.svelte';
import SwordAndShieldIcon from '$lib/client/components/frontier/icon/weapon/Sword_and_Shield_Icon_White.svelte';
import GunlanceIcon from '$lib/client/components/frontier/icon/weapon/Gunlance_Icon_White4.svelte';
import LanceIcon from '$lib/client/components/frontier/icon/weapon/Lance_Icon_White5.svelte';
import HammerIcon from '$lib/client/components/frontier/icon/weapon/Hammer_Icon_White2.svelte';
import HuntingHornIcon from '$lib/client/components/frontier/icon/weapon/Hunting_Horn_Icon_White4.svelte';
import LightBowgunIcon from '$lib/client/components/frontier/icon/weapon/Light_Bowgun_Icon_White2.svelte';
import HeavyBowgunIcon from '$lib/client/components/frontier/icon/weapon/Heavy_Bowgun_Icon_White2.svelte';
import BowIcon from '$lib/client/components/frontier/icon/weapon/Bow_Icon_White4.svelte';
import TonfaIcon from '$lib/client/components/frontier/icon/weapon/Tonfa_Icon_White.svelte';
import SwitchAxeFIcon from '$lib/client/components/frontier/icon/weapon/Switch_Axe_Icon_White4.svelte';
import MagnetSpikeIcon from '$lib/client/components/frontier/icon/weapon/Magnet_Spike_Icon_White.svelte';

import GreatSwordIconSmall from '$lib/client/images/weapon/small/small_gs.webp';
import LongSwordIconSmall from '$lib/client/images/weapon/small/small_ls.webp';
import DualSwordsIconSmall from '$lib/client/images/weapon/small/small_ds.webp';
import SwordAndShieldIconSmall from '$lib/client/images/weapon/small/small_sns.webp';
import HammerIconSmall from '$lib/client/images/weapon/small/small_hammer.webp';
import HuntingHornIconSmall from '$lib/client/images/weapon/small/small_hh.webp';
import LanceIconSmall from '$lib/client/images/weapon/small/small_lance.webp';
import GunlanceIconSmall from '$lib/client/images/weapon/small/small_gl.webp';
import TonfaIconSmall from '$lib/client/images/weapon/small/small_tonfa.webp';
import SwitchAxeFIconSmall from '$lib/client/images/weapon/small/small_saf.webp';
import MagnetSpikeIconSmall from '$lib/client/images/weapon/small/small_ms.webp';
import BowIconSmall from '$lib/client/images/weapon/small/small_bow.webp';
import LightBowgunIconSmall from '$lib/client/images/weapon/small/small_lbg.webp';
import HeavyBowgunIconSmall from '$lib/client/images/weapon/small/small_hbg.webp';

import GreatSwordIconSmallRed from '$lib/client/images/weapon/small/small_gs_red.webp';
import LongSwordIconSmallRed from '$lib/client/images/weapon/small/small_ls_red.webp';
import DualSwordsIconSmallRed from '$lib/client/images/weapon/small/small_ds_red.webp';
import SwordAndShieldIconSmallRed from '$lib/client/images/weapon/small/small_sns_red.webp';
import HammerIconSmallRed from '$lib/client/images/weapon/small/small_hammer_red.webp';
import HuntingHornIconSmallRed from '$lib/client/images/weapon/small/small_hh_red.webp';
import LanceIconSmallRed from '$lib/client/images/weapon/small/small_lance.webp';
import GunlanceIconSmallRed from '$lib/client/images/weapon/small/small_gl_red.webp';
import TonfaIconSmallRed from '$lib/client/images/weapon/small/small_tonfa_red.webp';
import SwitchAxeFIconSmallRed from '$lib/client/images/weapon/small/small_saf_red.webp';
import MagnetSpikeIconSmallRed from '$lib/client/images/weapon/small/small_ms_red.webp';
import BowIconSmallRed from '$lib/client/images/weapon/small/small_bow_red.webp';
import LightBowgunIconSmallRed from '$lib/client/images/weapon/small/small_lbg_red.webp';
import HeavyBowgunIconSmallRed from '$lib/client/images/weapon/small/small_hbg_red.webp';
import type {
	FrontierBowArcShot,
	FrontierBowCharge,
	FrontierBowChargeLevel,
	FrontierBowgunAttackLevel,
	FrontierBowgunRecoil,
	FrontierBowgunReloadSpeed,
	FrontierBowgunScope,
	FrontierElement,
	FrontierEquipmentRank,
	FrontierGunlanceShell,
	FrontierGunlanceShellLevel,
	FrontierHeavyBowgunUpgrade,
	FrontierHuntingHornWeaponNote,
	FrontierLightBowgunUpgrade,
	FrontierRarity,
	FrontierStatus,
	FrontierSwitchAxeFPhial,
	FrontierWeapon,
	FrontierWeaponLength,
	FrontierWeaponSharpness,
	FrontierWeaponType,
} from './types';
import type {
	FrontierArmorSkillName,
	FrontierSigil,
	FrontierWeaponName,
	FrontierZenithSkill,
} from 'ezlion';

export function getWeaponIcon(weaponName: FrontierWeaponName) {
	const icon = WeaponTypes[4].icon;

	const found = WeaponTypes.find((w) => w.name === weaponName);
	if (!found) {
		return icon;
	}

	return found.icon;
}

export const HuntingHornWeaponNotesCombinations: FrontierHuntingHornWeaponNote[][] =
	[
		['White', 'Blue', 'Red'],
		['White', 'Yellow', 'Red'],
		['White', 'Green', 'Red'],
		['White', 'Cyan', 'Red'],
		['White', 'Green', 'Yellow'],
		['White', 'Blue', 'Yellow'],
		['White', 'Green', 'Cyan'],
		['White', 'Green', 'Blue'],
		['White', 'Yellow', 'Cyan'],
		['White', 'Cyan', 'Blue'],
		['Purple', 'Blue', 'Red'],
		['Purple', 'Yellow', 'Red'],
		['Purple', 'Green', 'Red'],
		['Purple', 'Cyan', 'Red'],
		['Purple', 'Green', 'Yellow'],
		['Purple', 'Blue', 'Yellow'],
		['Purple', 'Green', 'Blue'],
		['Purple', 'Green', 'Cyan'],
		['Purple', 'Yellow', 'Cyan'],
		['Purple', 'Cyan', 'Blue'],
	];

type levelQuantity = [level1: number, level2: number, level3: number];

export const defaultWeaponComponentValues = {
	weaponSharpness: [
		170, 170, 170, 170, 170, 200, 250, 350,
	] as FrontierWeaponSharpness,
	weaponName: 'Depth Flamepike "Glory"',
	weaponLevel: 100,
	weaponRarity: 12 as FrontierRarity,
	weaponTypeId: '3',
	weaponRank: 'Z' as FrontierEquipmentRank,
	weaponLength: 'Very Long' as FrontierWeaponLength,
	weaponElementBoost: true,
	weaponStatusBoost: true,
	weaponAttackBoost: true,
	weaponAttack: 100,
	weaponElementValue: 1200,
	weaponStatusValue: 1100,
	weaponElementType: 'Fire' as FrontierElement,
	weaponStatusType: 'Poison' as FrontierStatus,
	weaponZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	weaponSharpnessBoost: true,
	weaponDescription:
		'A spear decorated with a rare scarlet jewel from a foreign country.',
	weaponExtraIcons: false,
	weaponType: 'Evolution' as FrontierWeaponType,
	weaponAffinity: 150,
	weaponSigil1Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil2Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil3Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil4Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil5Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil6Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil7Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil8Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil9Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil1Value: 1,
	weaponSigil2Value: -2,
	weaponSigil3Value: 3,
	weaponSigil4Value: -4,
	weaponSigil5Value: 5,
	weaponSigil6Value: -6,
	weaponSigil7Value: 7,
	weaponSigil8Value: -8,
	weaponSigil9Value: 9,
	weaponAutomaticSkill: '' as FrontierArmorSkillName,
	huntingHornNote1:
		HuntingHornWeaponNotesCombinations[0][0] as FrontierHuntingHornWeaponNote,
	huntingHornNote2:
		HuntingHornWeaponNotesCombinations[0][1] as FrontierHuntingHornWeaponNote,
	huntingHornNote3:
		HuntingHornWeaponNotesCombinations[0][2] as FrontierHuntingHornWeaponNote,
	safPhial: 'Power' as FrontierSwitchAxeFPhial,
	gunlanceShellType: 'Spread' as FrontierGunlanceShell,
	gunlanceShellLevel: 9 as FrontierGunlanceShellLevel,
	bowArc: 'Narrow' as FrontierBowArcShot,
	bowChargeType1: 'Pierce' as FrontierBowCharge,
	bowChargeLevel1: 3 as FrontierBowChargeLevel,
	bowChargeType2: 'Spread' as FrontierBowCharge,
	bowChargeLevel2: 3 as FrontierBowChargeLevel,
	bowChargeType3: 'Pierce' as FrontierBowCharge,
	bowChargeLevel3: 4 as FrontierBowChargeLevel,
	bowPoisonCoatingAvailable: true,
	bowParalysisCoatingAvailable: true,
	bowSleepCoatingAvailable: true,
	bowImpactCoatingAvailable: true,
	bowPowerCoatingAvailable: true,
	bowgunReload: 'Very Fast' as FrontierBowgunReloadSpeed,
	bowgunRecoil: 'Smaller' as FrontierBowgunRecoil,
	bowgunScope: 'Zoom' as FrontierBowgunScope,
	lightBowgunUpgrade: 'Silencer' as FrontierLightBowgunUpgrade,
	heavyBowgunUpgrade: 'Power Barrel' as FrontierHeavyBowgunUpgrade,
	bowgunAttackLevel: 5 as FrontierBowgunAttackLevel,
	bowgunNormalAmmo: [9, 9, 12] as levelQuantity,
	bowgunPierceAmmo: [6, 6, 6] as levelQuantity,
	bowgunPelletAmmo: [6, 6, 6] as levelQuantity,
	bowgunCragAmmo: [2, 2, 2] as levelQuantity,
	bowgunClusterAmmo: [0, 0, 0] as levelQuantity,
	bowgunRecoveryAmmo: [0, 0, 0] as levelQuantity,
	bowgunPoisonAmmo: [0, 0, 0] as levelQuantity,
	bowgunParalysisAmmo: [0, 0, 0] as levelQuantity,
	bowgunSleepAmmo: [0, 0, 0] as levelQuantity,
	bowgunFlamingAmmo: [6, 0, 0] as levelQuantity,
	bowgunWaterAmmo: [0, 0, 0] as levelQuantity,
	bowgunThunderAmmo: [0, 0, 0] as levelQuantity,
	bowgunFreezeAmmo: [0, 0, 0] as levelQuantity,
	bowgunDragonAmmo: [0, 0, 0] as levelQuantity,
	bowgunTranqAmmo: [2, 0, 0] as levelQuantity,
	bowgunPaintAmmo: [2, 0, 0] as levelQuantity,
	bowgunDemonAmmo: [1, 0, 0] as levelQuantity,
	bowgunArmorAmmo: [1, 0, 0] as levelQuantity,
} as const;

export const WeaponTypes: FrontierWeapon[] = [
	{
		id: 0,
		name: 'Great Sword',
		class: 'Blademaster',
		icon: GreatSwordIcon,
		smallIcon: GreatSwordIconSmall,
		smallIconRed: GreatSwordIconSmallRed,
		activeFeatureValue: 1,
		hiden: 'Sword King',
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 20,
		statusAssaultParalysis: 10,
		elementalExploitModifier: 15,
		damageType: 'Cutting',
	},
	{
		id: 1,
		name: 'Heavy Bowgun',
		class: 'Gunner',
		icon: HeavyBowgunIcon,
		smallIcon: HeavyBowgunIconSmall,
		smallIconRed: HeavyBowgunIconSmallRed,
		activeFeatureValue: 2,
		hiden: 'Gun Sage',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
		elementalExploitModifier: 5,
		damageType: 'Shot',
	},
	{
		id: 2,
		name: 'Hammer',
		class: 'Blademaster',
		icon: HammerIcon,
		smallIcon: HammerIconSmall,
		smallIconRed: HammerIconSmallRed,
		activeFeatureValue: 4,
		hiden: 'Blunt Beast',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 10,
		elementalExploitModifier: 15,
		damageType: 'Impact',
	},
	{
		id: 3,
		name: 'Lance',
		class: 'Blademaster',
		icon: LanceIcon,
		smallIcon: LanceIconSmall,
		smallIconRed: LanceIconSmallRed,
		activeFeatureValue: 8,
		hiden: 'Heavenly Spear',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 14,
		statusAssaultParalysis: 7,
		elementalExploitModifier: 15,
		damageType: 'Pierce',
	},
	{
		id: 4,
		name: 'Sword and Shield',
		class: 'Blademaster',
		icon: SwordAndShieldIcon,
		smallIcon: SwordAndShieldIconSmall,
		smallIconRed: SwordAndShieldIconSmallRed,
		activeFeatureValue: 16,
		hiden: 'Sword Saint',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 12,
		statusAssaultParalysis: 7,
		elementalExploitModifier: 15,
		damageType: 'Cutting',
	},
	{
		id: 5,
		name: 'Light Bowgun',
		class: 'Gunner',
		icon: LightBowgunIcon,
		smallIcon: LightBowgunIconSmall,
		smallIconRed: LightBowgunIconSmallRed,
		activeFeatureValue: 32,
		hiden: 'Gun Prodigy',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
		elementalExploitModifier: 10,
		damageType: 'Shot',
	},
	{
		id: 6,
		name: 'Dual Swords',
		class: 'Blademaster',
		icon: DualSwordsIcon,
		smallIcon: DualSwordsIconSmall,
		smallIconRed: DualSwordsIconSmallRed,
		activeFeatureValue: 64,
		hiden: 'Dual Dragon',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 3,
		elementalExploitModifier: 10,
		damageType: 'Cutting',
	},
	{
		id: 7,
		name: 'Long Sword',
		class: 'Blademaster',
		icon: LongSwordIcon,
		smallIcon: LongSwordIconSmall,
		smallIconRed: LongSwordIconSmallRed,
		activeFeatureValue: 128,
		hiden: 'Katana God',
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
		elementalExploitModifier: 15,
		damageType: 'Cutting',
	},
	{
		id: 8,
		name: 'Hunting Horn',
		class: 'Blademaster',
		icon: HuntingHornIcon,
		smallIcon: HuntingHornIconSmall,
		smallIconRed: HuntingHornIconSmallRed,
		activeFeatureValue: 256,
		hiden: 'Flamboyant Emperor',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 7,
		elementalExploitModifier: 15,
		damageType: 'Impact',
	},
	{
		id: 9,
		name: 'Gunlance',
		class: 'Blademaster',
		icon: GunlanceIcon,
		smallIcon: GunlanceIconSmall,
		smallIconRed: GunlanceIconSmallRed,
		activeFeatureValue: 512,
		hiden: 'Cannon Emperor',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 9,
		elementalExploitModifier: 10,
		damageType: 'Cutting',
	},
	{
		id: 10,
		name: 'Bow',
		class: 'Gunner',
		icon: BowIcon,
		smallIcon: BowIconSmall,
		smallIconRed: BowIconSmallRed,
		activeFeatureValue: 1024,
		hiden: 'Bow Demon',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
		elementalExploitModifier: 5,
		damageType: 'Shot',
	},
	{
		id: 11,
		name: 'Tonfa',
		class: 'Blademaster',
		icon: TonfaIcon,
		smallIcon: TonfaIconSmall,
		smallIconRed: TonfaIconSmallRed,
		activeFeatureValue: 2048,
		hiden: 'Piercing Phoenix',
		bloatAttackMultiplier: 1.8,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 6,
		elementalExploitModifier: 15,
		damageType: 'Impact',
	},
	{
		id: 12,
		name: 'Switch Axe F',
		class: 'Blademaster',
		icon: SwitchAxeFIcon,
		smallIcon: SwitchAxeFIconSmall,
		smallIconRed: SwitchAxeFIconSmallRed,
		activeFeatureValue: 4096,
		hiden: 'Edge Marshal',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
		elementalExploitModifier: 15,
		damageType: 'Cutting',
	},
	{
		id: 13,
		name: 'Magnet Spike',
		class: 'Blademaster',
		icon: MagnetSpikeIcon,
		smallIcon: MagnetSpikeIconSmall,
		smallIconRed: MagnetSpikeIconSmallRed,
		activeFeatureValue: 8192,
		hiden: 'Magnetic Star',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 6,
		elementalExploitModifier: 15,
		damageType: 'Cutting',
	},
];

/** GL Shells Norm1-9,Long1-9,Spread1-9
 */
export const gunlanceShellValues = [
	16, 23, 30, 35, 40, 65, 75, 85, 99, 24, 33, 42, 48, 53, 84, 95, 106, 122, 31,
	44, 57, 63, 68, 107, 119, 133, 153,
];

export const Sharpness = {
	Red: 0,
	Orange: 1,
	Yellow: 2,
	Green: 3,
	Blue: 4,
	White: 5,
	Purple: 6,
	Cyan: 7,
} as const;

export const SharpnessNames = Object.keys(Sharpness) as readonly string[];

export const oldBlademasterSharpness = [
	{
		name: 'Red (0.6x)',
		value: 0.25,
	},
	{
		name: 'Orange (0.85x)',
		value: 0.5,
	},
	{
		name: 'Yellow (1.1x)',
		value: 0.75,
	},
	{
		name: 'Green (1.325x)',
		value: 1,
	},
	{
		name: 'Blue (1.45x)',
		value: 1.0625,
	},
	{
		name: 'White (1.6x)',
		value: 1.125,
	},
	{
		name: 'Purple (1.7x)',
		value: 1.15,
	},
	{
		name: 'Cyan (1.8x)',
		value: 1.2,
	},
];

export const bowChargeLevels = [
	{
		chargeModifier: 'Lv1 (0.4x / 0.7x)',
		levels: { raw: 0.4, element: 0.7 },
	},
	{
		chargeModifier: 'Lv2 (1.0x / 0.95x)',
		levels: { raw: 1, element: 0.8 }, // TODO legacy values, 0.95 and 0.90 mismatch
	},
	{
		chargeModifier: 'Lv3 (1.5x / 1.2x)',
		levels: { raw: 1.5, element: 1.2 },
	},
	{
		chargeModifier: 'Lv4 (1.85x / 1.334x)',
		levels: { raw: 1.85, element: 1.334 },
	},
	{
		chargeModifier: 'Sniper Lv4 (1.0x / 1.0x)',
		levels: { raw: 1.0, element: 1.0 },
	},
	{
		chargeModifier: 'Sniper Lv5 (1.125x / 1.1x)',
		levels: { raw: 1.125, element: 1.1 },
	},
	{
		chargeModifier: 'Uncharged Rising Shot (0.4x / 1.0x)',
		levels: { raw: 0.4, element: 1 },
	},
	{
		chargeModifier: 'Charged Rising Shot (1.0x / 1.5x)',
		levels: { raw: 1.0, element: 1.5 },
	},
	{
		chargeModifier: 'Crouched Lv1 (0.48x / 0.7x)',
		levels: { raw: 0.48, element: 0.7 },
	},
	{
		chargeModifier: 'Crouched Lv2 (1.3x / 0.8x)',
		levels: { raw: 1.3, element: 0.8 },
	},
	{
		chargeModifier: 'Crouched Lv3 (2.1x / 1.2x)',
		levels: { raw: 2.1, element: 1.2 },
	},
	{
		chargeModifier: 'Crouched Lv4 (2.59x / 1.334x)',
		levels: { raw: 2.59, element: 1.334 },
	},
];

export const greatSwordCharges = [
	{ name: 'Lv1 Charge', multiplier: 1.1 },
	{ name: 'Lv2 Charge', multiplier: 1.2 },
	{ name: 'Lv3 Charge', multiplier: 1.3 },
];