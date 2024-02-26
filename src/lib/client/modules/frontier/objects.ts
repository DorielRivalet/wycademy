/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// if bitfields are not needed, make an object instead.

import type {
	FrontierArmor,
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
	FrontierWeapon,
	FrontierWeaponClass,
	FrontierWeaponLength,
	FrontierWeaponSharpness,
	FrontierWeaponType,
} from './types';
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

import ArmorHelmetIcon from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
import ArmorChestIcon from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
import ArmorArmsIcon from '$lib/client/components/frontier/icon/armor/Arm_Icon_White.svelte';
import ArmorWaistIcon from '$lib/client/components/frontier/icon/armor/Waist_Icon_White.svelte';
import ArmorLegsIcon from '$lib/client/components/frontier/icon/armor/Leg_Icon_White.svelte';

import ArmorSphereIconWhite from '$lib/client/components/frontier/icon/item/Armor_Sphere_Icon_White.svelte';
import BaitIconWhite from '$lib/client/components/frontier/icon/item/Bait_Icon_White.svelte';
import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
import BarrelIconWhite from '$lib/client/components/frontier/icon/item/Barrel_Icon_White.svelte';
import BbqIconWhite from '$lib/client/components/frontier/icon/item/BBQ_Icon_White.svelte';
import BerryIconWhite from '$lib/client/components/frontier/icon/item/Berry_Icon_White.svelte';
import BombIconWhite from '$lib/client/components/frontier/icon/item/Bomb_Icon_White.svelte';
import BoneIconWhite from '$lib/client/components/frontier/icon/item/Bone_Icon_White.svelte';
import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
import BugIconWhite from '$lib/client/components/frontier/icon/item/Bug_Icon_White.svelte';
import BugnetIconWhite from '$lib/client/components/frontier/icon/item/Bugnet_Icon_White.svelte';
import CarapaceIconWhite from '$lib/client/components/frontier/icon/item/Carapace_Icon_White.svelte';
import CharmIconWhite from '$lib/client/components/frontier/icon/item/Charm_Icon_White.svelte';
import ClawIconWhite from '$lib/client/components/frontier/icon/item/Claw_Icon_White.svelte';
import CoatingIconWhite from '$lib/client/components/frontier/icon/item/Coating_Icon_White.svelte';
import CoinIconWhite from '$lib/client/components/frontier/icon/item/Coin_Icon_White.svelte';
import EggIconWhite from '$lib/client/components/frontier/icon/item/Egg_Icon_White.svelte';
import EyeIconWhite from '$lib/client/components/frontier/icon/item/Eye_Icon_White.svelte';
import FangIconWhite from '$lib/client/components/frontier/icon/item/Fang_Icon_White.svelte';
import FinIconWhite from '$lib/client/components/frontier/icon/item/Fin_Icon_White.svelte';
import FishIconWhite from '$lib/client/components/frontier/icon/item/Fish_Icon_White.svelte';
import FlaskIconWhite from '$lib/client/components/frontier/icon/item/Flask_Icon_White.svelte';
import FluidIconWhite from '$lib/client/components/frontier/icon/item/Fluid_Icon_White.svelte';
import FluteIconWhite from '$lib/client/components/frontier/icon/item/Flute_Icon_White.svelte';
import HeadIconWhite from '$lib/client/components/frontier/icon/item/Head_Icon_White.svelte';
import HerbIconWhite from '$lib/client/components/frontier/icon/item/Herb_Icon_White.svelte';
import HideIconWhite from '$lib/client/components/frontier/icon/item/Hide_Icon_White.svelte';
import HornIconWhite from '$lib/client/components/frontier/icon/item/Horn_Icon_White.svelte';
import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
import KnifeIconWhite from '$lib/client/components/frontier/icon/item/Knife_Icon_White.svelte';
import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
import MeatIconWhite from '$lib/client/components/frontier/icon/item/Meat_Icon_White.svelte';
import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
import MushroomIconWhite from '$lib/client/components/frontier/icon/item/Mushroom_Icon_White.svelte';
import OreIconWhite from '$lib/client/components/frontier/icon/item/Ore_Icon_White.svelte';
import OreIconSpecial_001 from '$lib/client/components/frontier/icon/item/Ore_Icon_Special_001.svelte';
import PickaxeIconWhite from '$lib/client/components/frontier/icon/item/Pickaxe_Icon_White.svelte';
import PillIconWhite from '$lib/client/components/frontier/icon/item/Pill_Icon_White.svelte';
import PlateIconWhite from '$lib/client/components/frontier/icon/item/Plate_Icon_White.svelte';
import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import ScaleIconWhite from '$lib/client/components/frontier/icon/item/Scale_Icon_White.svelte';
import ScrapIconWhite from '$lib/client/components/frontier/icon/item/Scrap_Icon_White.svelte';
import SeedIconWhite from '$lib/client/components/frontier/icon/item/Seed_Icon_White.svelte';
import ShellIconWhite from '$lib/client/components/frontier/icon/item/Shell_Icon_White.svelte';
import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
import SmokeIconWhite from '$lib/client/components/frontier/icon/item/Smoke_Icon_White.svelte';
import SteakIconWhite from '$lib/client/components/frontier/icon/item/Steak_Icon_White.svelte';
import TailIconWhite from '$lib/client/components/frontier/icon/item/Tail_Icon_White.svelte';
import TalismanIconWhite from '$lib/client/components/frontier/icon/item/Talisman_Icon_White.svelte';
import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
import TowerSigil from '$lib/client/components/frontier/icon/item/Tower_Sigil.svelte';
import TrapIconWhite from '$lib/client/components/frontier/icon/item/Trap_Icon_White.svelte';
import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
import VegetableIconWhite from '$lib/client/components/frontier/icon/item/Vegetable_Icon_White.svelte';
import VialIconWhite from '$lib/client/components/frontier/icon/item/Vial_Icon_White.svelte';
import VoucherIconWhite from '$lib/client/components/frontier/icon/item/Voucher_Icon_White.svelte';
import WebbingIconWhite from '$lib/client/components/frontier/icon/item/Webbing_Icon_White.svelte';
import WhetstoneIconWhite from '$lib/client/components/frontier/icon/item/Whetstone_Icon_White.svelte';
import WingIconWhite from '$lib/client/components/frontier/icon/item/Wing_Icon_White.svelte';
import WoodIconWhite from '$lib/client/components/frontier/icon/item/Wood_Icon_White.svelte';
import type {
	FrontierArmorSkillName,
	FrontierArmorSkillTree,
	FrontierSigil,
	FrontierZenithSkill,
} from 'ezlion';

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

export const ItemColors: { name: FrontierItemColor; value: string }[] = [
	{ name: 'White', value: '#ffffff' },
	{ name: 'Red', value: '#ff435d' },
	{ name: 'Green', value: '#56ff56' },
	{ name: 'Blue', value: '#4040ff' },
	{ name: 'Yellow', value: '#ffff50' },
	{ name: 'Purple', value: '#cba6fa' },
	{ name: 'Cyan', value: '#57ffff' },
	{ name: 'Orange', value: '#ffc850' }, // unk
	{ name: 'Pink', value: '#ff84ff' },
	{ name: 'Brown', value: '#bf6464' }, // unk
	{ name: 'Gray', value: '#7f7f7f' },
];

export const ItemIcons: { name: string; icon: any }[] = [
	{
		name: 'Armor Sphere',
		icon: ArmorSphereIconWhite,
	},
	{
		name: 'Bait',
		icon: BaitIconWhite,
	},
	{
		name: 'Ball',
		icon: BallIconWhite,
	},
	{
		name: 'Barrel',
		icon: BarrelIconWhite,
	},
	{
		name: 'BBQ',
		icon: BbqIconWhite,
	},
	{
		name: 'Berry',
		icon: BerryIconWhite,
	},
	{
		name: 'Bomb',
		icon: BombIconWhite,
	},
	{
		name: 'Bone',
		icon: BoneIconWhite,
	},
	{
		name: 'Book',
		icon: BookIconWhite,
	},
	{
		name: 'Bug',
		icon: BugIconWhite,
	},
	{
		name: 'Bugnet',
		icon: BugnetIconWhite,
	},
	{
		name: 'Carapace',
		icon: CarapaceIconWhite,
	},
	{
		name: 'Charm',
		icon: CharmIconWhite,
	},
	{
		name: 'Claw',
		icon: ClawIconWhite,
	},
	{
		name: 'Coating',
		icon: CoatingIconWhite,
	},
	{
		name: 'Coin',
		icon: CoinIconWhite,
	},
	{
		name: 'Egg',
		icon: EggIconWhite,
	},
	{
		name: 'Eye',
		icon: EyeIconWhite,
	},
	{
		name: 'Fang',
		icon: FangIconWhite,
	},
	{
		name: 'Fin',
		icon: FinIconWhite,
	},
	{
		name: 'Fish',
		icon: FishIconWhite,
	},
	{
		name: 'Flask',
		icon: FlaskIconWhite,
	},
	{
		name: 'Fluid',
		icon: FluidIconWhite,
	},
	{
		name: 'Flute',
		icon: FluteIconWhite,
	},
	{
		name: 'Head',
		icon: HeadIconWhite,
	},
	{
		name: 'Herb',
		icon: HerbIconWhite,
	},
	{
		name: 'Hide',
		icon: HideIconWhite,
	},
	{
		name: 'Horn',
		icon: HornIconWhite,
	},
	{
		name: 'Jewel',
		icon: JewelIconWhite,
	},
	{
		name: 'Knife',
		icon: KnifeIconWhite,
	},
	{
		name: 'Mantle',
		icon: MantleIconWhite,
	},
	{
		name: 'Map',
		icon: MapIconWhite,
	},
	{
		name: 'Meat',
		icon: MeatIconWhite,
	},
	{
		name: 'Medicine',
		icon: MedicineIconWhite,
	},
	{
		name: 'Monster Part',
		icon: MonsterPartIconWhite,
	},
	{
		name: 'Mushroom',
		icon: MushroomIconWhite,
	},
	{
		name: 'Ore',
		icon: OreIconWhite,
	},
	{
		name: 'Ore Special  001',
		icon: OreIconSpecial_001,
	},
	{
		name: 'Pickaxe',
		icon: PickaxeIconWhite,
	},
	{
		name: 'Pill',
		icon: PillIconWhite,
	},
	{
		name: 'Plate',
		icon: PlateIconWhite,
	},
	{
		name: 'Question Mark',
		icon: QuestionMarkIconWhite,
	},
	{
		name: 'Sac',
		icon: SacIconWhite,
	},
	{
		name: 'Scale',
		icon: ScaleIconWhite,
	},
	{
		name: 'Scrap',
		icon: ScrapIconWhite,
	},
	{
		name: 'Seed',
		icon: SeedIconWhite,
	},
	{
		name: 'Shell',
		icon: ShellIconWhite,
	},
	{
		name: 'Shot',
		icon: ShotIconWhite,
	},
	{
		name: 'Smoke',
		icon: SmokeIconWhite,
	},
	{
		name: 'Steak',
		icon: SteakIconWhite,
	},
	{
		name: 'Tail',
		icon: TailIconWhite,
	},
	{
		name: 'Talisman',
		icon: TalismanIconWhite,
	},
	{
		name: 'Ticket',
		icon: TicketIconWhite,
	},
	{
		name: 'Tower Sigil',
		icon: TowerSigil,
	},
	{
		name: 'Trap',
		icon: TrapIconWhite,
	},
	{
		name: 'Trap Tool',
		icon: TrapToolIconWhite,
	},
	{
		name: 'Vegetable',
		icon: VegetableIconWhite,
	},
	{
		name: 'Vial',
		icon: VialIconWhite,
	},
	{
		name: 'Voucher',
		icon: VoucherIconWhite,
	},
	{
		name: 'Webbing',
		icon: WebbingIconWhite,
	},
	{
		name: 'Whetstone',
		icon: WhetstoneIconWhite,
	},
	{
		name: 'Wing',
		icon: WingIconWhite,
	},
	{
		name: 'Wood',
		icon: WoodIconWhite,
	},
];

export const ArmorTypes: FrontierArmor[] = [
	{
		id: 0,
		name: 'Head',
		icon: ArmorHelmetIcon,
	},

	{
		id: 1,
		name: 'Chest',
		icon: ArmorChestIcon,
	},

	{
		id: 2,
		name: 'Arms',
		icon: ArmorArmsIcon,
	},

	{
		id: 3,
		name: 'Waist',
		icon: ArmorWaistIcon,
	},

	{
		id: 4,
		name: 'Legs',
		icon: ArmorLegsIcon,
	},
];

export const WeaponTypes: FrontierWeapon[] = [
	{
		id: 0,
		name: 'Great Sword',
		class: 'Blademaster',
		icon: GreatSwordIcon,
		hiden: 'Sword King',
	},
	{
		id: 1,
		name: 'Heavy Bowgun',
		class: 'Gunner',
		icon: HeavyBowgunIcon,
		hiden: 'Gun Sage',
	},
	{
		id: 2,
		name: 'Hammer',
		class: 'Blademaster',
		icon: HammerIcon,
		hiden: 'Blunt Beast',
	},
	{
		id: 3,
		name: 'Lance',
		class: 'Blademaster',
		icon: LanceIcon,
		hiden: 'Heavenly Spear',
	},
	{
		id: 4,
		name: 'Sword and Shield',
		class: 'Blademaster',
		icon: SwordAndShieldIcon,
		hiden: 'Sword Saint',
	},
	{
		id: 5,
		name: 'Light Bowgun',
		class: 'Gunner',
		icon: LightBowgunIcon,
		hiden: 'Gun Prodigy',
	},
	{
		id: 6,
		name: 'Dual Swords',
		class: 'Blademaster',
		icon: DualSwordsIcon,
		hiden: 'Dual Dragon',
	},
	{
		id: 7,
		name: 'Long Sword',
		class: 'Blademaster',
		icon: LongSwordIcon,
		hiden: 'Katana God',
	},
	{
		id: 8,
		name: 'Hunting Horn',
		class: 'Blademaster',
		icon: HuntingHornIcon,
		hiden: 'Flamboyant Emperor',
	},
	{
		id: 9,
		name: 'Gunlance',
		class: 'Blademaster',
		icon: GunlanceIcon,
		hiden: 'Cannon Emperor',
	},
	{
		id: 10,
		name: 'Bow',
		class: 'Gunner',
		icon: BowIcon,
		hiden: 'Bow Demon',
	},
	{
		id: 11,
		name: 'Tonfa',
		class: 'Blademaster',
		icon: TonfaIcon,
		hiden: 'Piercing Phoenix',
	},
	{
		id: 12,
		name: 'Switch Axe F',
		class: 'Blademaster',
		icon: SwitchAxeFIcon,
		hiden: 'Edge Marshal',
	},
	{
		id: 13,
		name: 'Magnet Spike',
		class: 'Blademaster',
		icon: MagnetSpikeIcon,
		hiden: 'Magnetic Star',
	},
];

export const SharpnessNames = Object.keys(Sharpness) as readonly string[];
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
