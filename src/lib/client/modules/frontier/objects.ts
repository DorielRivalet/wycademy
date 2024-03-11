/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// if bitfields are not needed, make an object instead.

import type {
	DropdownItemOption,
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
	FrontierElementMultiplier,
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
	FrontierMotionValueSection,
	FrontierMotionValues,
	FrontierRarity,
	FrontierSlot,
	FrontierStatus,
	FrontierSwitchAxeFPhial,
	FrontierWeapon,
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
	FrontierWeaponClass,
	FrontierZenithSkill,
} from 'ezlion';
import MotionSwordAndShieldNoneJumpSlash from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';

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
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 20,
		statusAssaultParalysis: 10,
	},
	{
		id: 1,
		name: 'Heavy Bowgun',
		class: 'Gunner',
		icon: HeavyBowgunIcon,
		hiden: 'Gun Sage',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 2,
		name: 'Hammer',
		class: 'Blademaster',
		icon: HammerIcon,
		hiden: 'Blunt Beast',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 10,
	},
	{
		id: 3,
		name: 'Lance',
		class: 'Blademaster',
		icon: LanceIcon,
		hiden: 'Heavenly Spear',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 14,
		statusAssaultParalysis: 7,
	},
	{
		id: 4,
		name: 'Sword and Shield',
		class: 'Blademaster',
		icon: SwordAndShieldIcon,
		hiden: 'Sword Saint',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 12,
		statusAssaultParalysis: 7,
	},
	{
		id: 5,
		name: 'Light Bowgun',
		class: 'Gunner',
		icon: LightBowgunIcon,
		hiden: 'Gun Prodigy',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 6,
		name: 'Dual Swords',
		class: 'Blademaster',
		icon: DualSwordsIcon,
		hiden: 'Dual Dragon',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 3,
	},
	{
		id: 7,
		name: 'Long Sword',
		class: 'Blademaster',
		icon: LongSwordIcon,
		hiden: 'Katana God',
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
	},
	{
		id: 8,
		name: 'Hunting Horn',
		class: 'Blademaster',
		icon: HuntingHornIcon,
		hiden: 'Flamboyant Emperor',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 7,
	},
	{
		id: 9,
		name: 'Gunlance',
		class: 'Blademaster',
		icon: GunlanceIcon,
		hiden: 'Cannon Emperor',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 9,
	},
	{
		id: 10,
		name: 'Bow',
		class: 'Gunner',
		icon: BowIcon,
		hiden: 'Bow Demon',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 11,
		name: 'Tonfa',
		class: 'Blademaster',
		icon: TonfaIcon,
		hiden: 'Piercing Phoenix',
		bloatAttackMultiplier: 1.8,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 6,
	},
	{
		id: 12,
		name: 'Switch Axe F',
		class: 'Blademaster',
		icon: SwitchAxeFIcon,
		hiden: 'Edge Marshal',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
	},
	{
		id: 13,
		name: 'Magnet Spike',
		class: 'Blademaster',
		icon: MagnetSpikeIcon,
		hiden: 'Magnetic Star',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 6,
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

// TODO dmg calc
export const sharedWeaponMotionValues: FrontierMotionValueSection = {
	name: 'Shared',
	motionValues: [
		{
			name: 'Reflect+1',
			animation: MotionSwordAndShieldNoneJumpSlash,
			values: '24',
			notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		},
		{ name: 'Reflect+2', animation: '', values: '36' },
		{ name: 'Reflect+3', animation: '', values: '48' },
		{ name: 'Reflect Up', animation: '', values: '68' },
		{ name: 'Perfect Guard', animation: '', values: '72' },
		{ name: 'Perfect Guard Up', animation: '', values: '92' },
		{ name: 'Stylish Up', animation: '', values: '30' },
		{ name: 'Custom Motion', animation: '', values: '0' },
	],
};

export const weaponMotionValues: FrontierMotionValues[] = [
	{
		name: 'Sword and Shield',
		sections: [
			{
				name: 'None',
				motionValues: [
					{
						name: 'Jump Slash (Unsheathe)',
						animation: MotionSwordAndShieldNoneJumpSlash,
						values: '13(5)･21',
						notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
					},
					{ name: 'Slide Slash', animation: '', values: '21' },
					{ name: 'Slash 1', animation: '', values: '20' },
					{ name: 'Slash 2', animation: '', values: '26' },
					{ name: 'Slash 3', animation: '', values: '10(5)･16' },
					{ name: 'Horizontal Slash', animation: '', values: '31' },
					{ name: 'Vacuum Slash Sigil', animation: '', values: '31･16' },
					{ name: 'Jump Slash 2', animation: '', values: '26･24' },
					{ name: 'Upslash', animation: '', values: '20' },
					{ name: 'Infinite Slash', animation: '', values: '25' },
					{ name: 'Infinite Slash Sigil', animation: '', values: '28' },
					{ name: 'Shield Bash', animation: '', values: '13(5)' },
					{ name: 'Shield Bash 2', animation: '', values: '18(10)' },
					{ name: 'Shield Bash Sigil', animation: '', values: '19(5)' },
					{ name: 'Shield Bash 2 Sigil', animation: '', values: '27(10)' },
					{ name: 'Slide Slash', animation: '', values: '21' },
					{ name: 'Slide Slash (Sigil)', animation: '', values: '31' },
					{
						name: 'Continuous Bashing 1 to 3',
						animation: '',
						values: '20(13) (Up to x3)',
					},
					{ name: 'Dash: Aerial Shield Bash', animation: '', values: '34(10)' },
					{ name: 'Dash: Frontflip Slash', animation: '', values: '18･34' },
					{
						name: 'Dash: Jump Slash (Unsheathe)',
						animation: '',
						values: '13(5)･21',
					},
					{ name: 'Evade Slash', animation: '', values: '17' },
					{ name: 'Sigil Additional', animation: '', values: '17' },
				],
			},
		],
	},
	{
		name: 'Dual Swords',
		sections: [
			{
				name: 'Extreme Demon Mode',
				motionValues: [
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Rising Slash', animation: '', values: '13･13･12･12' },
					{
						name: 'Evasion Slash (Forward･Back)',
						animation: '',
						values: '16･16',
					},
					{
						name: 'Evasion Slash (Left･Right)',
						animation: '',
						values: '8･8･8･8',
					},
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '16x2' },
				],
			},
			{
				name: 'Extreme Demon Mode (Red Mode)',
				motionValues: [
					{ name: 'Downslash 1', animation: '', values: '14･18' },
					{ name: 'Downslash 2', animation: '', values: '14･11' },
					{ name: 'Downslash 3', animation: '', values: '13･10･20･34' },
					{ name: 'Upslash', animation: '', values: '24' },
					{ name: 'Flurry Combo', animation: '', values: '14x3' },
					{ name: 'Flurry Rotation', animation: '', values: '23･36･55' },
					{ name: 'Whirlwind Combo', animation: '', values: '15x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '39･58' },
					{ name: 'Rising Slash', animation: '', values: '14･14･13･13' },
					{
						name: 'Evasion Slash (Forward･Back)',
						animation: '',
						values: '17･17',
					},
					{
						name: 'Evasion Slash (Left･Right)',
						animation: '',
						values: '9･8･9･8',
					},
					{ name: 'Dash: Upslash', animation: '', values: '24' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '29･29' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '17x2' },
				],
			},
			{
				name: 'Standard Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '11･5' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '16･7' },
					{ name: 'Downslash 1', animation: '', values: '10･13' },
					{ name: 'Downslash 2', animation: '', values: '10･8' },
					{ name: 'Downslash 3', animation: '', values: '9･7･14･24' },
					{ name: 'Rotation Slash', animation: '', values: '14･9･5' },
					{ name: 'Upslash', animation: '', values: '17' },
					{ name: 'Dash: Upslash', animation: '', values: '17' },
					{ name: 'Dash: Sky Dance', animation: '', values: '6x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '20･20' },
				],
			},
			{
				name: 'Demon Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '14･6' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '21･9' },
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Rotation Slash', animation: '', values: '18･12･6･29･17･12' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
				],
			},
			{
				name: 'True Demon Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '14･6' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '21･9' },
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Rotation Slash', animation: '', values: '18･12･6･29･17･12' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Evasion Slash', animation: '', values: '12x2' },
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '12x2' },
				],
			},
			{
				name: 'True Demon Mode (Red Mode)',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '15･7' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '23･10' },
					{ name: 'Downslash 1', animation: '', values: '14･18' },
					{ name: 'Downslash 2', animation: '', values: '14･11' },
					{ name: 'Downslash 3', animation: '', values: '13･9･20･35' },
					{ name: 'Rotation Slash', animation: '', values: '20･13･7･31･18･13' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Evasion Slash', animation: '', values: '13x2' },
					{ name: 'Dash: Upslash', animation: '', values: '24' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '29･29' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '13x2' },
				],
			},
		],
	},
	{
		name: 'Great Sword',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Vertical Slash', animation: '', values: '60' },
					{
						name: 'Vertical Finisher',
						animation: '',
						values: '45･76',
						notes: 'Has high hitlag',
					},
					{ name: 'Horizontal Slash', animation: '', values: '46' },
					{ name: 'Horizontal Slash (Sigil)', animation: '', values: '59' },
					{ name: 'Horizontal Finisher', animation: '', values: '105' },
					{ name: 'Upswing', animation: '', values: '58' },
					{ name: 'Upswing (Sigil)', animation: '', values: '75' },
					{ name: 'Upswing Finisher', animation: '', values: '117' },
					{ name: 'Lv1 Charge', animation: '', values: '85x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '105x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '146x130%' },
					{ name: 'Upswing Lv1 Charge', animation: '', values: '92' },
					{ name: 'Upswing Lv2 Charge', animation: '', values: '112x110%' },
					{ name: 'Upswing Lv3 Charge', animation: '', values: '157x120%' },
					{ name: 'Upswing Lv4 Charge', animation: '', values: '200x130%' },
					{ name: 'Guard: Vertical', animation: '', values: '200' },
					{ name: 'Guard: Horizontal', animation: '', values: '125' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '27x17 (459)',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Lv1 Charge', animation: '', values: '92x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '112x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '156x130%' },
					{ name: 'Upswing Lv1', animation: '', values: '99' },
					{ name: 'Upswing Lv2', animation: '', values: '119x110%' },
					{ name: 'Upswing Lv3', animation: '', values: '167x120%' },
					{ name: 'Upswing Lv4', animation: '', values: '213x130%' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '40x17 (680)',
					},
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Lv1 Charge', animation: '', values: '95x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '115x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '161.5x130%' },
					{ name: 'Upswing Lv1', animation: '', values: '102' },
					{ name: 'Upswing Lv2', animation: '', values: '122x110%' },
					{ name: 'Upswing Lv3', animation: '', values: '172.5x120%' },
					{ name: 'Upswing Lv4', animation: '', values: '220x130%' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '47x17 (799)',
					},
				],
			},
		],
	},
	{
		name: 'Long Sword',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Down Slash', animation: '', values: '40' },
					{ name: 'Downslash 2', animation: '', values: '33' },
					{ name: 'Thrust', animation: '', values: '25' },
					{ name: 'Rising Slash', animation: '', values: '28' },
					{ name: 'Rising Slash (Sigil)', animation: '', values: '42' },
					{ name: 'Evade Slash', animation: '', values: '30' },
					{ name: 'Spirit 1 (0% Bar)', animation: '', values: '17' },
					{ name: 'Spirit 1', animation: '', values: '37' },
					{ name: 'Spirit 2', animation: '', values: '39' },
					{ name: 'Spirit 3', animation: '', values: '21･21･46' },
					{ name: 'Sidehop Slash', animation: '', values: '26' },
					{ name: 'Piercing Stab', animation: '', values: '26･13･13' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '35･17･17' },
					{ name: 'Strong Piercing Stab', animation: '', values: '25･12x5･31' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '33･16x5･41',
					},
					{ name: 'Blade Release [<50%]', animation: '', values: '5' },
					{ name: 'Blade Release [>50%]', animation: '', values: '5･5' },
					{ name: 'Blade Release [100%]', animation: '', values: '5･5･5' },
					{
						name: 'Release Blast [<50%] (No Fencing)',
						animation: '',
						values: '10',
					},
					{
						name: 'Release Blast [>50%] (No Fencing)',
						animation: '',
						values: '60',
					},
					{
						name: 'Release Blast [100%] (No Fencing)',
						animation: '',
						values: '180',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '18' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '70' },
					{ name: 'Guard: Teleport', animation: '', values: '30･15' },
					{ name: 'Guard: Piercing Stab', animation: '', values: '25･12x5･31' },
					{ name: 'Spirit Release', animation: '', values: '40･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '60･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '70･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '90･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '35' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '26' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '20' },
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Piercing Stab', animation: '', values: '29･15x2' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '38･19x2' },
					{ name: 'Strong Piercing Stab', animation: '', values: '28･13x5･35' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '36･17x5･45',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '23' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '80' },
					{ name: 'Spirit Release', animation: '', values: '49･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '71･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '82･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '105･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '41' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '32' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '26' },
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Piercing Stab', animation: '', values: '30･16x2' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '39･20x2' },
					{ name: 'Strong Piercing Stab', animation: '', values: '33･16x5･41' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '38･18x5･47',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '26' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '86' },
					{ name: 'Spirit Release', animation: '', values: '54･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '76･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '88･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '112･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '44' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '35' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '29' },
				],
			},
		],
	},
	{
		name: 'Hammer',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '32(24)' },
					{ name: 'Unsheathe (Sigil)', animation: '', values: '48(24)' },
					{ name: 'Quick Smash', animation: '', values: '60(50)' },
					{ name: 'Baseball Swing', animation: '', values: '100(50)' },
					{ name: 'Baseball Swing (Sigil)', animation: '', values: '130(50)' },
					{ name: 'Smash 1', animation: '', values: '52(25)' },
					{ name: 'Smash 2', animation: '', values: '38(25)' },
					{ name: 'Upswing', animation: '', values: '100(80)' },
					{ name: 'Horizontal Swing', animation: '', values: '30(35)' },
					{ name: 'Charge Upswing', animation: '', values: '45(30)' },
					{ name: 'Charge Lv1', animation: '', values: '52(20)' },
					{ name: 'Charge Lv2', animation: '', values: '52(20)･35(20)' },
					{ name: 'Charge Lv3', animation: '', values: '40(20)･100(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '40(30)･30(30)･120(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '60(60)･45(40)･145(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '60(15)' },
					{ name: 'Swipes Combo', animation: '', values: '45(15)xn' },
					{ name: 'Swinging', animation: '', values: '20(12)' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '30(20)･40(30)･10(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '30(20)･40(30)･70(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '30(20)･40(30)･160(130)',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Charge Upswing', animation: '', values: '52(30)' },
					{ name: 'Charge Lv1', animation: '', values: '56(20)' },
					{ name: 'Charge Lv2', animation: '', values: '56(20)･36(20)' },
					{ name: 'Charge Lv3', animation: '', values: '44(20)･109(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '41(30)･35(30)･128(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '63(60)･47(40)･153(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '64(15)' },
					{ name: 'Swipes Combo', animation: '', values: '48(15)xn' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '32(20)･43(30)･13(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '32(20)･43(30)･75(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '32(20)･43(30)･167(130)',
					},
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Charge Upswing', animation: '', values: '55(30)' },
					{ name: 'Charge Lv1', animation: '', values: '58(20)' },
					{ name: 'Charge Lv2', animation: '', values: '58(20)･37(20)' },
					{ name: 'Charge Lv3', animation: '', values: '46(20)･114(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '41(30)･35(30)･128(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '64(60)･48(40)･157(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '66(15)' },
					{ name: 'Swipes Combo', animation: '', values: '49(15)xn' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '33(20)･44(30)･15(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '33(20)･44(30)･77(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '33(20)･44(30)･170(130)',
					},
				],
			},
		],
	},
	{
		name: 'Hunting Horn',
		sections: [
			{
				name: 'None',
				motionValues: [
					{
						name: 'Slam Attack (to Note 2)',
						animation: '',
						values: '18(8)･57(30)',
					},
					{ name: 'Upthrust Start', animation: '', values: '60(24)' },
					{ name: 'Upthrust (to Note 2)', animation: '', values: '30(24)xn' },
					{ name: 'Upthrust End', animation: '', values: '39(30)' },
					{ name: 'Upswings (to Note 3)', animation: '', values: '40(20)' },
					{ name: 'Poke (to Note 1)', animation: '', values: '16' },
					{ name: 'Poke (to Note 1) (Sigil)', animation: '', values: '27' },
					{ name: 'Start Playing', animation: '', values: '26(26)' },
					{ name: 'Start Playing (Sigil)', animation: '', values: '39(26)' },
					{ name: 'Note 1 (L/R Face Button)', animation: '', values: '50(26)' },
					{
						name: 'Note 1 (L/R Face Button) (Sigil)',
						animation: '',
						values: '75(26)',
					},
					{ name: 'Note 2 (Top Face Button)', animation: '', values: '43(26)' },
					{
						name: 'Note 2 (Top Face Button) (Sigil)',
						animation: '',
						values: '64(26)',
					},
					{
						name: 'Note 3 (T+R Face Buttons)',
						animation: '',
						values: '49(26)',
					},
					{
						name: 'Note 3 (T+R Face Buttons) (Sigil)',
						animation: '',
						values: '73(26)',
					},
					{ name: 'Stop Playing', animation: '', values: '31(30)' },
					{ name: 'Stop Playing (Sigil)', animation: '', values: '46(30)' },
					{
						name: 'Dash: Turning Point',
						animation: '',
						values: '40(20)･40(20)',
					},
					{ name: 'Sonic Bomb Debuff', animation: '', values: '30 Fixed' },
				],
			},
		],
	},
	{
		name: 'Lance',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Unsheathe Stabs', animation: '', values: '36' },
					{ name: 'Thrust 1 - 3', animation: '', values: '32' },
					{ name: 'Thrust 4', animation: '', values: '38' },
					{ name: 'Thurst 4 (Hiden)', animation: '', values: '48' },
					{ name: 'Upthrust 1 - 3', animation: '', values: '35' },
					{ name: 'Upthrust 4', animation: '', values: '38' },
					{ name: 'Upthrust 4 (Hiden)', animation: '', values: '48' },
					{ name: 'Sky Stab 1 - 3', animation: '', values: '38' },
					{ name: 'Sky Stab 4', animation: '', values: '43' },
					{ name: 'Sky Stab 4 (Hiden)', animation: '', values: '53' },
					{
						name: 'Shield Rush ※ White Sharp',
						animation: '',
						values: '3(5)･25(10) ※ Impact',
					},
					{
						name: 'Shield Rush (Sigil) ※ White Sharp',
						animation: '',
						values: '4(5)･37(10) ※ Impact',
					},
					{ name: 'Yellow Charge', animation: '', values: '50' },
					{ name: 'Red Charge', animation: '', values: '78' },
					{ name: 'Evade Thrust', animation: '', values: '24' },
					{ name: 'Finishing Thrust', animation: '', values: '91' },
					{ name: 'Dash: Heavy Thrust', animation: '', values: '50' },
					{
						name: 'Dash: Guard ※ White Sharp',
						animation: '',
						values: '25(13) ※ Impact',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Yellow Charge', animation: '', values: '55' },
					{ name: 'Red Charge', animation: '', values: '89' },
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Yellow Charge', animation: '', values: '58' },
					{ name: 'Red Charge', animation: '', values: '94' },
				],
			},
		],
	},
	{
		name: 'Gunlance',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Rush Thrust (Unsheathe)', animation: '', values: '38' },
					{
						name: 'Rush Thrust (Unsheathe) (Sigil)',
						animation: '',
						values: '57',
					},
					{ name: 'Horizontal Sweep', animation: '', values: '34' },
					{ name: 'Horizontal Sweep (Sigil)', animation: '', values: '51' },
					{ name: 'Backhop Slash', animation: '', values: '18 + Shelling' },
					{ name: 'Thrust 1-2', animation: '', values: '33' },
					{ name: 'Thrust 3', animation: '', values: '34' },
					{ name: 'Upswing', animation: '', values: '42' },
					{ name: 'Upthrusts', animation: '', values: '30' },
					{
						name: 'Bombardment Boost: Dash Cleave',
						animation: '',
						values: '58',
					},
					{
						name: 'Heatblade (Elemental)',
						animation: '',
						values: '5 + Element',
					},
					{ name: 'Heatblade (Raw)', animation: '', values: '9' },
					{ name: 'Heatblade Slam', animation: '', values: '62' },
					{ name: 'Ele Shell Charge Up', animation: '', values: '25' },
				],
			},
		],
	},
	{
		name: 'Tonfa',
		sections: [
			{
				name: 'Long Mode',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '28(12)' },
					{ name: 'Standard 1', animation: '', values: '14(6)' },
					{ name: 'Standard 2 Lv1', animation: '', values: '11(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '38(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '58(32)' },
					{ name: 'EX Pursuit 1', animation: '', values: '8(7)' },
					{ name: 'EX Pursuit 2', animation: '', values: '23(20)' },
					{ name: 'EX Pursuit 3', animation: '', values: '33(30)' },
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '11(8)･8(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '38(8)･23(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '58(8)･33(30)',
					},
					{ name: 'Standard 3', animation: '', values: '18(6)' },
					{ name: 'Standard 4', animation: '', values: '9x2(7)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '16(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '50(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '110(110)' },
					{ name: 'EX Evade (Back)', animation: '', values: '34(20)' },
					{ name: 'EX Evade (Side)', animation: '', values: '20(20)･20(10)' },
					{ name: 'EX Evade (Forward)', animation: '', values: '24(15)' },
					{ name: 'Aerial EX Evade', animation: '', values: '16(8)･16(8)' },
					{ name: 'Dash Stab', animation: '', values: '12(10)･20(15)' },
					{ name: 'Dash Kick', animation: '', values: '7x2(3)[K]･12(4)･20(4)' },
					{ name: 'Special 1', animation: '', values: '11x2(2)[K]' },
					{ name: 'Special 2', animation: '', values: '10(10)' },
					{ name: 'Special 3', animation: '', values: '9(6)･12(8)' },
					{ name: 'Special 4', animation: '', values: '26(24)' },
					{
						name: 'Special 5',
						animation: '',
						values: '16(15)･11x4(13)･24(20)',
					},
					{ name: 'Special 6', animation: '', values: '19x2(2)[K]' },
					{ name: 'Jump Evasion', animation: '', values: '5x2(2)[K]' },
					{ name: 'Aerial 1', animation: '', values: '15(14)' },
					{ name: 'Aerial 2', animation: '', values: '10x2(13)' },
					{ name: 'Aerial 3', animation: '', values: '15(11)[K]･16(11)' },
					{ name: 'Aerial 1-3 Combo', animation: '', values: '66 (5 hits)' },
					{ name: 'Landing Kick', animation: '', values: '12x2(12)' },
					{ name: 'Ryuuki', animation: '', values: '1x2･40(2)' },
					{ name: 'Aerial Ryuuki', animation: '', values: '1x2･30(2)' },
					{ name: 'Boxing Dance 4 Hits', animation: '', values: '12(2)' },
					{ name: 'Boxing Dance 8 Hits', animation: '', values: '14(2)' },
					{ name: 'Boxing Dance 12 Hits', animation: '', values: '16(2)' },
					{
						name: 'Boxing Dance 12 Hit Combo',
						animation: '',
						values: '168(24)',
					},
					{ name: 'Boxing Dance 13 Hits ~', animation: '', values: '28(2)' },
					{ name: 'Release', animation: '', values: '30(10)' },
					{ name: '~ Burst ~ 3 Hits', animation: '', values: 'Bomb 50(5)' },
					{ name: '~ Burst ~ 11 Hits', animation: '', values: 'Bomb 100(5)' },
					{ name: '~ Burst ~ 12 Hits+', animation: '', values: 'Bomb 200(5)' },
				],
			},
			{
				name: 'Charge Attack Up +2 & Gunnery God',
				motionValues: [
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '13(8)･11(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '42(22)･32(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '65(32)･48(30)',
					},
				],
			},
			{
				name: 'Long Mode Charge Attack Up +1',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '12(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '41(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '62(32)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '18(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '55(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '119(110)' },
				],
			},
			{
				name: 'Long Mode Charge Attack Up +2',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '13(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '42(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '65(32)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '20(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '61(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '131(110)' },
				],
			},
			{
				name: 'Gunnery',
				motionValues: [
					{ name: 'EX Pursuit 1 (G. God)', animation: '', values: '11(7)' },
					{ name: 'EX Pursuit 2 (G. God)', animation: '', values: '32(20)' },
					{ name: 'EX Pursuit 3 (G. God)', animation: '', values: '48(30)' },
					{ name: 'EX Pursuit 1 (G. Expert)', animation: '', values: '10(7)' },
					{ name: 'EX Pursuit 2 (G. Expert)', animation: '', values: '29(20)' },
					{ name: 'EX Pursuit 3 (G. Expert)', animation: '', values: '43(30)' },
					{ name: 'EX Pursuit 1 (G. Novice)', animation: '', values: '9(7)' },
					{ name: 'EX Pursuit 2 (G. Novice)', animation: '', values: '26(20)' },
					{ name: 'EX Pursuit 3 (G. Novice)', animation: '', values: '38(30)' },
					{ name: 'Ryuuki (G. Novice)', animation: '', values: '8x2･40(2)' },
					{ name: 'Ryuuki (G. Expert)', animation: '', values: '10x2･40(2)' },
					{ name: 'Ryuuki (G. God)', animation: '', values: '15x2･40(2)' },
					{
						name: 'Aerial Ryuuki (G. Novice)',
						animation: '',
						values: '7x2･30(2)',
					},
					{
						name: 'Aerial Ryuuki (G. Expert)',
						animation: '',
						values: '9x2･30(2)',
					},
					{
						name: 'Aerial Ryuuki (G. God)',
						animation: '',
						values: '12x2･30(2)',
					},
				],
			},
			{
				name: 'Martial Arts +1',
				motionValues: [
					{
						name: 'Dash Kick',
						animation: '',
						values: '11x2(3)[K]･15(4)･25(4)',
					},
					{ name: 'Jump Evasion', animation: '', values: '6x2(2)[K]' },
					{ name: 'Special 1', animation: '', values: '16x2(2)[K]' },
					{ name: 'Special 6', animation: '', values: '28x2(2)[K]' },
					{
						name: 'Aerial 1 - 3',
						animation: '',
						values: '74 (5 hits) (Orig: 116)',
					},
				],
			},
			{
				name: 'Martial Arts +2',
				motionValues: [
					{
						name: 'Dash Kick',
						animation: '',
						values: '15x2(3)[K]･15(4)･25(4)',
					},
					{ name: 'Jump Evasion', animation: '', values: '7x2(2)[K]' },
					{ name: 'Special 1', animation: '', values: '18x2(2)[K]' },
					{ name: 'Special 6', animation: '', values: '33x2(2)[K]' },
					{
						name: 'Aerial 3',
						animation: '',
						values: '23(11)[K]･25(11) (Orig: 31･33)',
					},
					{
						name: 'Aerial 1-3 Combo',
						animation: '',
						values: '83 (5 hits) (Orig: 116)',
					},
				],
			},

			{
				name: 'Short Mode',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '28(12)' },
					{ name: 'Standard 1', animation: '', values: '14(6)' },
					{ name: 'Standard 2 Lv1', animation: '', values: '11(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '38(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '58(32)' },
					{ name: 'EX Pursuit 1', animation: '', values: '8(7)' },
					{ name: 'EX Pursuit 2', animation: '', values: '23(20)' },
					{ name: 'EX Pursuit 3', animation: '', values: '33(30)' },
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '11(8)･8(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '38(8)･23(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '58(8)･33(30)',
					},
					{ name: 'Standard 3', animation: '', values: '18(6)' },
					{ name: 'Standard 4', animation: '', values: '9x2(7)' },
					{ name: 'Continuous Thrust 1', animation: '', values: '11(3)･12(3)' },
					{ name: 'Continuous Thrust 2', animation: '', values: '10x4(3)' },
					{ name: 'Continuous Thrust 3', animation: '', values: '40(12)' },
					{ name: 'EX Evade (Back)', animation: '', values: '34(20)' },
					{ name: 'EX Evade (Side)', animation: '', values: '20(20)･20(10)' },
					{ name: 'EX Evade (Forward)', animation: '', values: '24(15)' },
					{ name: 'Aerial EX Evade', animation: '', values: '16(8)･16(8)' },
					{
						name: 'Dash Tonfa Rotation',
						animation: '',
						values: '3x4(2)･10x2(4)',
					},
					{ name: 'Dash Kick', animation: '', values: '7x2(3)[K]･12(4)･20(4)' },
					{ name: 'Special 1', animation: '', values: '11x2(2)[K]' },
					{ name: 'Special 2', animation: '', values: '10(10)' },
					{ name: 'Special 3', animation: '', values: '9(6)･12(8)' },
					{ name: 'Special 4', animation: '', values: '26(24)' },
					{
						name: 'Special 5',
						animation: '',
						values: '16(15)･11x4(13)･24(20)',
					},
					{ name: 'Special 6', animation: '', values: '19x2(2)[K]' },
					{ name: 'Jump Evasion', animation: '', values: '5x2(2)[K]' },
					{ name: 'Aerial 1', animation: '', values: '15(14)' },
					{ name: 'Aerial 2', animation: '', values: '10x2(13)' },
					{ name: 'Aerial 3', animation: '', values: '15(11)[K]･16(11)' },
					{ name: 'Aerial 1-3 Combo', animation: '', values: '66 (5 hits)' },
					{ name: 'Glide Kick (Airtime+)', animation: '', values: '14(14)[K]' },
					{ name: 'Ryuuki', animation: '', values: '1x2･40(2)' },
					{ name: 'Aerial Ryuuki', animation: '', values: '1x2･30(2)' },
					{ name: 'Boxing Dance 4 Hits', animation: '', values: '12(2)' },
					{ name: 'Boxing Dance 8 Hits', animation: '', values: '14(2)' },
					{ name: 'Boxing Dance 12 Hits', animation: '', values: '16(2)' },
					{
						name: 'Boxing Dance 12 Hit Combo',
						animation: '',
						values: '168(24)',
					},
					{ name: 'Boxing Dance 13 Hits ~', animation: '', values: '28(2)' },
					{ name: 'Release', animation: '', values: '30(10)' },
					{ name: '~ Burst ~ 3 Hits', animation: '', values: 'Bomb 50(5)' },
					{ name: '~ Burst ~ 11 Hits', animation: '', values: 'Bomb 100(5)' },
					{ name: '~ Burst ~ 12 Hits+', animation: '', values: 'Bomb 200(5)' },
				],
			},
			{
				name: 'Short Mode Charge Attack Up +1',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '12(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '41(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '62(32)' },
				],
			},
			{
				name: 'Short Mode Charge Attack Up +2',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '13(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '42(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '65(32)' },
				],
			},
		],
	},
	{
		name: 'Switch Axe F',
		sections: [
			{
				name: 'Axe Mode',
				motionValues: [
					{ name: 'Vertical Slash', animation: '', values: '46' },
					{ name: 'Upslash', animation: '', values: '35' },
					{ name: 'Horizontal Slash', animation: '', values: '34' },
					{ name: 'Rush Slash', animation: '', values: '33' },
					{ name: "Hack 'n' Slash", animation: '', values: '35' },
				],
			},
			{
				name: 'Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '32･41 (15･0)',
					},
					{ name: 'Running Upslash', animation: '', values: '29 (14)' },
					{ name: 'Slash Evasion', animation: '', values: '21 (6)' },
					{ name: 'S Evasion into Thrust', animation: '', values: '33' },
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '75 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '33 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '75 (38)' },
				],
			},
			{
				name: 'Charge Attack Up +1 Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '81 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '35 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '81 (38)' },
				],
			},
			{
				name: 'Charge Attack Up +2 Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '83 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '37 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '83 (38)' },
				],
			},
			{
				name: 'Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'Light Sword Transformation',
						animation: '',
						values: '46 (19)',
					},
					{ name: 'Vertical Slash', animation: '', values: '46 (19)' },
					{ name: 'Upslash', animation: '', values: '48 (15)' },
					{ name: 'Side Slash', animation: '', values: '41 (15)' },
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '33･45 (21･21)',
					},
					{ name: 'Running Upslash', animation: '', values: '31 (15)' },
					{ name: 'Slash Evasion', animation: '', values: '22 (7)' },
					{ name: 'S Evasion Upslash', animation: '', values: '48 (15)' },
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '79 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '79 (38)' },
					{ name: 'Overcharged Downslash', animation: '', values: '46 (19)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '35 (6)' },
					{ name: 'Continuous Slash', animation: '', values: '53･53 (19･19)' },
					{
						name: 'Continuous Slash Finisher',
						animation: '',
						values: '42･73 (26･35)',
					},
					{ name: 'Discharge [Start]', animation: '', values: '19 (8)' },
					{ name: 'Discharge [Ticks]', animation: '', values: '13 (0)' },
					{
						name: 'Discharge [Early Blast]',
						animation: '',
						values: '160 (20) (40 Sigil)',
					},
					{
						name: 'Discharge [Blast]',
						animation: '',
						values: '270 (50) (80 Sigil)',
					},
					{
						name: 'Absolute Release [Ticks]',
						animation: '',
						values: '13･13･13 (4･4･4)',
					},
					{
						name: 'Absolute Release [Early Finisher]',
						animation: '',
						values: '9･9 (5･5)',
					},
					{
						name: 'Absolute Release [Early Blast]',
						animation: '',
						values: '125 (40) (50 sigil)',
					},
					{
						name: 'Absolute Release [1~2 Ticks Finisher]',
						animation: '',
						values: '18･18 (5･5)',
					},
					{
						name: 'Absolute Release [1~2 Ticks Blast]',
						animation: '',
						values: '280 (130) (150 Sigil)',
					},
					{
						name: 'Absolute Release [Finisher]',
						animation: '',
						values: '27･27 (5･5)',
					},
					{
						name: 'Absolute Release [Blast]',
						animation: '',
						values: '375 (150) (220 Sigil)',
					},
				],
			},
			{
				name: 'Charge Attack Up +1 Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '85 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '85 (38)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '37 (6)' },
				],
			},
			{
				name: 'Charge Attack Up +2 Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '87 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '87 (38)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '39 (6)' },
				],
			},
			{
				name: 'Power Phial Sword Mode',
				motionValues: [
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '35･41 (15･0)',
					},
					{ name: 'Running Upslash', animation: '', values: '31' },
					{ name: 'Slash Evasion', animation: '', values: '23' },
					{ name: 'S Evasion into Thrust', animation: '', values: '33' },
					{ name: 'S Evasion Charged Upslash', animation: '', values: '82' },
					{ name: 'Charge Infinite Slash', animation: '', values: '36' },
					{ name: 'Charged Upslash', animation: '', values: '82' },
				],
			},
			{
				name: 'Charge Attack Up +1 Power Phial Sword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '89' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Charged Upslash', animation: '', values: '89' },
				],
			},
			{
				name: 'Charge Attack Up +2 Power Phial Sword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '89' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Charged Upslash', animation: '', values: '89' },
				],
			},
			{
				name: 'Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'Light Sword Transformation', animation: '', values: '50' },
					{ name: 'Vertical Slash', animation: '', values: '50' },
					{ name: 'Upslash', animation: '', values: '52' },
					{ name: 'Side Slash', animation: '', values: '45' },
					{ name: 'Running Rotation Slash', animation: '', values: '36･45' },
					{ name: 'Running Upslash', animation: '', values: '34' },
					{ name: 'Slash Evasion', animation: '', values: '24' },
					{ name: 'S Evasion Upslash', animation: '', values: '52' },
					{ name: 'S Evasion Charged Upslash', animation: '', values: '86' },
					{ name: 'Charged Upslash', animation: '', values: '86' },
					{ name: 'Overcharged Downslash', animation: '', values: '50' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Continuous Slash', animation: '', values: '58･58' },
					{ name: 'Continuous Slash Finisher', animation: '', values: '46･80' },
					{ name: 'Discharge [Start]', animation: '', values: '20' },
					{ name: 'Discharge [Ticks]', animation: '', values: '14' },
					{ name: 'Discharge [Early Blast]', animation: '', values: '176' },
					{ name: 'Discharge [Blast]', animation: '', values: '297' },
					{
						name: 'Absolute Release [Ticks]',
						animation: '',
						values: '14･14･14',
					},
					{
						name: 'Absolute Release [Early Finisher]',
						animation: '',
						values: '9･9',
					},
					{
						name: 'Absolute Release [Early Blast]',
						animation: '',
						values: '125',
					},
					{
						name: 'Absolute Release [1~2 Ticks Finisher]',
						animation: '',
						values: '19･19',
					},
					{
						name: 'Absolute Release [1~2 Ticks Blast]',
						animation: '',
						values: '280',
					},
					{
						name: 'Absolute Release [Finisher]',
						animation: '',
						values: '29･29',
					},
					{ name: 'Absolute Release [Blast]', animation: '', values: '375' },
				],
			},
			{
				name: 'Charge Attack Up +1 Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '85' },
					{ name: 'Charged Upslash', animation: '', values: '85' },
					{ name: 'Charge Infinite Slash', animation: '', values: '37' },
				],
			},
			{
				name: 'Charge Attack Up +2 Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '87' },
					{ name: 'Charged Upslash', animation: '', values: '87' },
					{ name: 'Charge Infinite Slash', animation: '', values: '39' },
				],
			},
		],
	},
	{
		name: 'Magnet Spike',
		sections: [
			{
				name: 'Cutting Mode',
				motionValues: [
					{ name: 'Unsheathe Vertical', animation: '', values: '61' },
					{ name: 'Vertical 1', animation: '', values: '43' },
					{ name: 'Upslash', animation: '', values: '35' },
					{ name: 'Vertical 2', animation: '', values: '46' },
					{ name: 'Horizontal 1', animation: '', values: '56' },
					{ name: 'Horizontal 2', animation: '', values: '46' },
					{ name: 'Horizontal 3', animation: '', values: '64' },
					{ name: 'Finishing Slash', animation: '', values: '120' },
					{
						name: 'Finishing Slash [Magnetised]',
						animation: '',
						values: '120‧10x3',
					},
					{ name: 'Guard Counter', animation: '', values: '30' },
					{ name: 'Guard Counter [Success]', animation: '', values: '30‧80' },
					{ name: 'Magnetic Double Slash', animation: '', values: '44‧54' },
					{ name: 'Magnetic Evade Upslash', animation: '', values: '55' },
					{ name: 'Retreat Slash', animation: '', values: '20‧20' },
					{ name: 'Magnetic Assault (Leap)', animation: '', values: '80' },
					{ name: 'Falling Downslash', animation: '', values: '200' },
					{ name: 'Magnetic Pin', animation: '', values: '1' },
					{ name: 'Magnetic Pin Finisher', animation: '', values: '600' },
					{
						name: 'Magnetic Pin Finisher [Feature]',
						animation: '',
						values: '750',
					},
				],
			},
			{
				name: 'Impact Mode',
				motionValues: [
					{ name: 'Horizontal 1', animation: '', values: '44 (30)' },
					{ name: 'Horizontal 2', animation: '', values: '53 (30)' },
					{ name: 'Overhead Horizontal', animation: '', values: '100 (45)' },
					{ name: 'Down Swipe', animation: '', values: '46 (25)' },
					{ name: 'Triple Strike 1', animation: '', values: '51 (10)' },
					{ name: 'Triple Strike 2', animation: '', values: '58 (20)' },
					{ name: 'Triple Strike 3', animation: '', values: '130 (50)' },
					{ name: 'Charged Strike', animation: '', values: '338 (190)' },
					{
						name: 'Charged Strike [Charge UP+1]',
						animation: '',
						values: '363 (190)',
					},
					{
						name: 'Charged Strike [Charge UP+2]',
						animation: '',
						values: '373 (190)',
					},
					{ name: 'Supplex', animation: '', values: '96 ‧ 121 (50 ‧ 65)' },
					{ name: 'Guard Assault', animation: '', values: '73 ‧ 90 (35 ‧ 45)' },
					{
						name: 'Magnetic Double Swipe',
						animation: '',
						values: '42 ‧ 52 (30 ‧ 35)',
					},
					{ name: 'Magnetic Shock (Whiff)', animation: '', values: '75 (30)' },
					{
						name: 'Magnetic Shock (Iframes Used)',
						animation: '',
						values: '125 ‧ 5x3 (60 ‧ 5x3)',
					},
					{
						name: 'Magnetic Assault (Leap)',
						animation: '',
						values: '40 ‧ 50 (35 ‧ 35)',
					},
					{
						name: 'Falling Swings',
						animation: '',
						values: '25 ‧ 80 ‧ 120 (20 ‧ 35 ‧ 75)',
					},
					{ name: 'Magnetic Pin', animation: '', values: '1' },
					{ name: 'Magnetic Pin Finisher', animation: '', values: '600' },
					{
						name: 'Magnetic Pin Finisher [Feature]',
						animation: '',
						values: '750',
					},
				],
			},
		],
	},
	{
		name: 'Light Bowgun',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'LV1 Norm S.', animation: '', values: '6' },
					{ name: 'LV2 Norm S.', animation: '', values: '12' },
					{ name: 'LV3 Norm S.', animation: '', values: '12xn' },
					{ name: 'LV1 Pierce S. (1 Hit)', animation: '', values: '10x3' },
					{ name: 'LV2 Pierce S. (1 Hit)', animation: '', values: '9x4' },
					{ name: 'LV3 Pierce S. (1 Hit)', animation: '', values: '7x6' },
					{ name: 'LV1 Pierce S. (3 Hit)', animation: '', values: '10x3' },
					{ name: 'LV2 Pierce S. (4 Hit)', animation: '', values: '9x4' },
					{ name: 'LV3 Pierce S. (6 Hit)', animation: '', values: '7x6' },
					{ name: 'LV1 Pellet S.', animation: '', values: '5x3, Water 50' },
					{ name: 'LV2 Pellet S.', animation: '', values: '5x4, Water 40' },
					{ name: 'LV3 Pellet S.', animation: '', values: '5x5, Water 40' },
					{
						name: 'LV1 Impact Pellet (Sigil)',
						animation: '',
						values: '10(4)x2',
					},
					{
						name: 'LV2 Impact Pellet (Sigil)',
						animation: '',
						values: '9(4)x3',
					},
					{
						name: 'LV3 Impact Pellet (Sigil)',
						animation: '',
						values: '7(4)x5',
					},
					{
						name: 'LV1 Crag S.',
						animation: '',
						values: '3, Bomb 30, Fire 400',
					},
					{
						name: 'LV2 Crag S.',
						animation: '',
						values: '3, Bomb 40, Fire 600',
					},
					{
						name: 'LV3 Crag S.',
						animation: '',
						values: '3, Bomb 50, Fire 800',
					},
					{
						name: 'LV1 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 3',
					},
					{
						name: 'LV2 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 4',
					},
					{
						name: 'LV3 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 5',
					},
					{
						name: 'Fire Shot',
						animation: '',
						values: '1 + (Attack x 0.4 Fire)',
					},
					{
						name: 'Water Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Water)) x 3',
					},
					{
						name: 'Thunder Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Thunder)) x 3',
					},
					{
						name: 'Ice Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Ice)) x 3',
					},
					{ name: 'Dragon Shot', animation: '', values: '750 Dragon' },
					{
						name: 'LV1 Recovery Shot',
						animation: '',
						values: '1 (30 Healing)',
					},
					{
						name: 'Lv2 Recovery Shot',
						animation: '',
						values: '1 (50 Healing)',
					},
					{ name: 'LV1 Poison', animation: '', values: '10 (25 Status)' },
					{ name: 'Lv2 Poison', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Para', animation: '', values: '10 (25 Status)' },
					{ name: 'LV2 Para', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Sleep', animation: '', values: '1 (25 Status)' },
					{ name: 'LV2 Sleep', animation: '', values: '1 (50 Status)' },
					{ name: 'Tranq Shot', animation: '', values: '1 (80 Cap Value)' },
					{ name: 'Paint Shot', animation: '', values: '1 (Paintball)' },
					{ name: 'Demon Shot', animation: '', values: '1 (Attack +3)' },
					{ name: 'Armour Shot', animation: '', values: '1 (Defense +6)' },
					{ name: 'Acid Shot', animation: '', values: '1 (Raw Weakness +10)' },
					{
						name: 'Ele Acid Shot',
						animation: '',
						values: '1 (Ele Weakness +10)',
					},
				],
			},
			{
				name: 'Melee',
				motionValues: [
					{ name: 'Melee Attacks', animation: '', values: '5･5･10' },
				],
			},
		],
	},

	{
		name: 'Heavy Bowgun',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'LV1 Norm S.', animation: '', values: '6x1' },
					{ name: 'LV2 Norm S.', animation: '', values: '12x1' },
					{ name: 'LV3 Norm S.', animation: '', values: '12xn' },
					{ name: 'LV1 Pierce S. (1 Hit)', animation: '', values: '12' },
					{ name: 'LV2 Pierce S. (1 Hit)', animation: '', values: '11' },
					{ name: 'LV3 Pierce S. (1 Hit)', animation: '', values: '10' },
					{ name: 'LV1 Pierce S. (3 Hit)', animation: '', values: '12x3' },
					{ name: 'LV2 Pierce S. (4 Hit)', animation: '', values: '11x4' },
					{ name: 'LV3 Pierce S. (6 Hit)', animation: '', values: '10x6' },
					{ name: 'LV1 Pellet S.', animation: '', values: '5x3, Water 50' },
					{ name: 'LV2 Pellet S.', animation: '', values: '5x4, Water 40' },
					{ name: 'LV3 Pellet S.', animation: '', values: '5x5, Water 40' },
					{
						name: 'LV1 Impact Pellet (Sigil)',
						animation: '',
						values: '10x2 (8x2 KO)',
					},
					{
						name: 'LV2 Impact Pellet (Sigil)',
						animation: '',
						values: '9x3 (8x3 KO)',
					},
					{
						name: 'LV3 Impact Pellet (Sigil)',
						animation: '',
						values: '7x5 (8x5 KO)',
					},
					{
						name: 'LV1 Crag S.',
						animation: '',
						values: '3, Bomb 30, Fire 400',
					},
					{
						name: 'LV2 Crag S.',
						animation: '',
						values: '3, Bomb 40, Fire 600',
					},
					{
						name: 'LV3 Crag S.',
						animation: '',
						values: '3, Bomb 50, Fire 800',
					},
					{
						name: 'LV1 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x3',
					},
					{
						name: 'LV2 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x4',
					},
					{
						name: 'LV3 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x5',
					},
					{
						name: 'Fire Shot',
						animation: '',
						values: '1 + (Attack x 0.5 Fire)',
					},
					{
						name: 'Water Shot',
						animation: '',
						values: '1 + (Attack x 0.25 Water) x 3',
					},
					{
						name: 'Thunder Shot',
						animation: '',
						values: '1 + (Attack x 0.27 Thunder) x 3',
					},
					{
						name: 'Ice Shot',
						animation: '',
						values: '1 + (Attack x 0.25 Ice) x 3',
					},
					{ name: 'Dragon Shot', animation: '', values: '900 Dragon x 6' },
					{ name: 'LV1 Recov', animation: '', values: '1 (30 Healing)' },
					{ name: 'Lv2 Recov', animation: '', values: '1 (50 Healing)' },
					{ name: 'LV1 Poison', animation: '', values: '10 (25 Status)' },
					{ name: 'Lv2 Poison', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Para', animation: '', values: '10 (25 Status)' },
					{ name: 'LV2 Para', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Sleep', animation: '', values: '1 (25 Status)' },
					{ name: 'LV2 Sleep', animation: '', values: '1 (50 Status)' },
					{ name: 'Tranq Shot', animation: '', values: '1 (80 Cap Value)' },
					{ name: 'Paint Shot', animation: '', values: '1 (Paintball)' },
					{ name: 'Demon Shot', animation: '', values: '1 (Attack +3)' },
					{ name: 'Armour Shot', animation: '', values: '1 (Defense +6)' },
				],
			},
			{
				name: 'Compression Shots',
				motionValues: [
					{ name: 'Compressed Shot Motion', animation: '', values: '0' }, // TODO
					{ name: 'Compressed Elemental Shot', animation: '', values: '0' },
				],
			},
		],
	},
	{
		name: 'Bow',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'Rapid LV1', animation: '', values: '14' },
					{ name: 'Rapid LV2', animation: '', values: '14･6' },
					{ name: 'Rapid LV3', animation: '', values: '14･6･5' },
					{ name: 'Rapid LV4', animation: '', values: '14･6･5･3' },
					{ name: 'Scatter LV1', animation: '', values: '4･6･4' },
					{ name: 'Scatter LV2', animation: '', values: '6･7･6' },
					{ name: 'Scatter LV3', animation: '', values: '4･6･6･6･4' },
					{ name: 'Scatter LV4', animation: '', values: '4･6･7･6･4' },
					{ name: 'Pierce LV1', animation: '', values: '7x3' },
					{ name: 'Pierce LV2', animation: '', values: '7x4' },
					{ name: 'Pierce LV3', animation: '', values: '7x5' },
					{ name: 'Pierce LV4', animation: '', values: '7x6' },
					{
						name: 'Uncharged Horizontal Rising Shot',
						animation: '',
						values: '4',
					},
					{
						name: 'Uncharged Vertical Rising Shot',
						animation: '',
						values: '40 (0.4x Raw, 1.0x Elemental)',
					},
					{
						name: 'Charged Horizontal Rising Shot',
						animation: '',
						values: '4 (1.0x Raw, 1.5x Elemental)',
					},
					{
						name: 'Charged Vertical Rising Shot',
						animation: '',
						values: '40 (1.0x Raw, 1.5x Elemental)',
					},
					{
						name: 'Sigil Additional',
						animation: '',
						values: '0',
					},
				],
			},
			{
				name: 'Arc Shots',
				motionValues: [
					{ name: 'Wide Pellet Arc', animation: '', values: '18(3)x7' },
					{ name: 'Narrow Pellet Arc', animation: '', values: '16x5' },
					{
						name: 'Explosive Shell Arc',
						animation: '',
						values: '15(30) 19 Bomb',
					},
					{
						name: 'Arrow Rain Arc (Cutting, Shot HB)',
						animation: '',
						values: '12x7',
					},
				],
			},
			{
				name: 'Crouch Shots',
				motionValues: [
					{ name: 'Sniper Shot Lv4', animation: '', values: '12x5' },
					{
						name: 'Piercing Sniper Shot Lv4',
						animation: '',
						values: '10x5･25･10･5･4･2',
					},
					{ name: 'Sniper Shot Lv5', animation: '', values: '12x5' },
					{
						name: 'Piercing Sniper Shot Lv4',
						animation: '',
						values: '10x5･25･10･5･4･2',
					},
				],
			},
			{
				name: 'Melee',
				motionValues: [
					{ name: 'Melee Attacks', animation: '', values: '10･10･18' },
					{ name: 'Shoryuken', animation: '', values: '12x2･10x2･31･10' },
					{
						name: 'Shoryuken (Sigil)',
						animation: '',
						values: '17x2･15x2･41･15',
					},
				],
			},
		],
	},
];

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

/** GL Shells Norm1-9,Long1-9,Spread1-9
 */
export const gunlanceShellValues = [
	16, 23, 30, 35, 40, 65, 75, 85, 99, 24, 33, 42, 48, 53, 84, 95, 106, 122, 31,
	44, 57, 63, 68, 107, 119, 133, 153,
];

export const affinityDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (x1 Ele & Status)',
		value: 0,
	},
	{
		name: 'Affinity +20% (+20%)',
		value: 20,
	},
	{
		name: 'Affinity +24% (+24%)',
		value: 24,
	},
	{
		name: 'Affinity +26% (+26%)',
		value: 26,
	},

	{
		name: 'Below Blue or Gunners (+0%)',
		value: 0,
	},
	{
		name: 'Blue (+5%)',
		value: 5,
	},
	{
		name: 'White Upwards (+10%)',
		value: 10,
	},

	{
		name: 'Expert +1 (+10%)',
		value: 10,
	},
	{
		name: 'Expert +2 (+20%)',
		value: 20,
	},
	{
		name: 'Expert +3 (+30%)',
		value: 30,
	},
	{
		name: 'Expert +4 (+40%)',
		value: 40,
	},
	{
		name: 'Expert +5 (+50%)',
		value: 50,
	},
	{
		name: 'Determination (+100%)',
		value: 100,
	},

	{
		name: 'Critical Conversion (+30%)',
		value: 30,
	},

	{
		name: 'None or Determination',
		value: 0,
	},
	{
		name: 'Issen +1 (+5% / +0.10x)',
		value: 5,
	},
	{
		name: 'Issen +2 (+10% / +0.15x)',
		value: 10,
	},
	{
		name: 'Issen +3 (+20% / +0.25x)',
		value: 20,
	},

	{
		name: 'Ceaseless 1st Stage (+35% / +0.10x)',
		value: 35,
	},
	{
		name: 'Ceaseless 2nd Stage (+50% / +0.15x)',
		value: 60,
	},
	{
		name: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
		value: 70,
	},

	{
		name: 'Starving Wolf+1 (+50% / +0.00x)',
		value: 50,
	},
	{
		name: 'Starving Wolf+2 (+50% / +0.10x)',
		value: 50,
	},

	// {
	// 	name: '1.8x LBG & Bow Crit Distance',
	// 	value: 1.8,
	// },

	{
		name: 'Caravan Whetstone (+10%)',
		value: 10,
	},
	{
		name: 'Halk Drink (+30%)',
		value: 30,
	},
	{
		name: 'Both (+40%)',
		value: 40,
	},
	{
		name: 'Unsheathe and Parry Attacks (+100%)',
		value: 100,
	},

	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 10,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 25,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 40,
	},
] as const;

export const multipliedBaseDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Strong Attack +1 (+20)',
		value: 20,
	},
	{
		name: 'Strong Attack +2 (+35)',
		value: 35,
	},
	{
		name: 'Strong Attack +3 (+50)',
		value: 50,
	},
	{
		name: 'Strong Attack +4 (+80)',
		value: 80,
	},
	{
		name: 'Determination (+100)',
		value: 100,
	},
	{
		name: 'Strong Attack +5 (+150)',
		value: 50,
	},
	{
		name: 'Strong Attack +6 (+200)',
		value: 200,
	},
	{
		name: 'Shooting Rampage (x1.1) (Ranged Only)',
		value: 1.1,
	},
	{
		name: 'Weapons Art Small (x1.01)',
		value: 1.01,
	},
	{
		name: 'Weapons Art Medium (x1.025)',
		value: 1.025,
	},
	{
		name: 'Weapons Art Large (x1.05)',
		value: 1.05,
	},
	{
		name: 'Power Charm (+6)',
		value: 6,
	},
	{
		name: 'Power Talon (+9)',
		value: 9,
	},
	{
		name: 'Both (+15)',
		value: 15,
	},
	{
		name: 'Demon Drug / Halk D. Drug (+3)',
		value: 3,
	},
	{
		name: 'Mega Demon Drug (+5)',
		value: 5,
	},
	{
		name: 'Small Atk Food (+3)',
		value: 3,
	},
	{
		name: 'Med Atk Food(+5)',
		value: 5,
	},
	{
		name: 'SR Med Atk Food (+10)',
		value: 10,
	},
	{
		name: 'SR Lg Atk Food (+15)',
		value: 15,
	},
	{
		name: 'Power Seed(+10)',
		value: 10,
	},
	{
		name: 'Demon Horn (+10)',
		value: 10,
	},
	{
		name: 'Art of Dancing (+10)',
		value: 10,
	},
	{
		name: 'Tonfa Body Aura (Ranged Only) (+25)',
		value: 25,
	},
	{
		name: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
		value: 50,
	},
	{
		name: 'Long Sword Attack Up (+10)',
		value: 10,
	},
	{
		name: 'Long Sword Active Feature Attack Up (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn (No Skill) (+10)',
		value: 10,
	},
	{
		name: '(Cat) Demon Horn +1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) Demon Horn +2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
		value: 50,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
		value: 60,
	},
	{
		name: 'HBG Power Barrel (+20)',
		value: 20,
	},
	{
		name: 'Lance Self Buff (+50)',
		value: 50,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},
	{
		name: 'Crit C. Up +1 (Z1)', // TODO
		value: 0,
	},
	{
		name: 'Crit C. Up +2 (Z1)',
		value: 0,
	},

	{
		name: 'S. Assault Up (+120) (Z1)',
		value: 120,
	},
	{
		name: 'S. Assault Up (+140) (Z1)',
		value: 140,
	},
	{
		name: 'S. Assault Up (+160) (Z1)',
		value: 160,
	},
	{
		name: 'S. Assault Up (+180) (Z1)',
		value: 180,
	},
	{
		name: 'S. Assault Up (+200) (Z1)',
		value: 200,
	},
	{
		name: 'S. Assault Up (+220) (Z1)',
		value: 220,
	},
	{
		name: '1st Stage (+50)',
		value: 50,
	},
	{
		name: '2nd Stage (+130)',
		value: 130,
	},
	{
		name: '3rd Stage (+200) (Rush Up)',
		value: 200,
	},
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)', // TODO
		value: 70,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 100,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 180,
	},
	{
		name: '1 Minute (+20)',
		value: 20,
	},
	{
		name: '3 Minutes (+50)',
		value: 50,
	},
	{
		name: '5 Minutes (+80)',
		value: 80,
	},
	{
		name: '10 Minutes (+130)',
		value: 130,
	},
	{
		name: '15 Minutes (+180)',
		value: 180,
	},
	{
		name: '20 Minutes (+200)',
		value: 200,
	},
	{
		name: 'Active (+40)',
		value: 40,
	},
	{
		name: 'Road Attack Lv 1 (+10)',
		value: 10,
	},
	{
		name: 'Road Attack Lv 2 (+20)',
		value: 20,
	},
	{
		name: 'Road Attack Lv 3 (+30)',
		value: 30,
	},
	{
		name: 'Road Attack Lv 4 (+50)',
		value: 50,
	},
	{
		name: 'Road Attack Lv 5 (+70)',
		value: 70,
	},
	{
		name: 'Lv 1 (+20 / +10)',
		value: 20,
	},
	{
		name: 'Lv 2 (+40 / +10)',
		value: 40,
	},
	{
		name: 'Lv 3 (+60 / +10)',
		value: 60,
	},
	{
		name: 'Last Stand Lv 1 (+80)',
		value: 80,
	},
	{
		name: 'Last Stand Lv 2 (+120)',
		value: 120,
	},
	{
		name: 'Dure Attack Lv 1 (+50)',
		value: 50,
	},
	{
		name: 'Dure Attack Lv 2 (+75)',
		value: 75,
	},
	{
		name: 'Dure Attack Lv 3 (+100)',
		value: 100,
	},
	{
		name: 'Dure Attack Lv 4 (+150)',
		value: 15,
	},
	{
		name: 'Dure Attack Lv 5 (+200)',
		value: 200,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},

	{ name: 'None', value: 0 }, // TODO
	{
		name: '1 Block (+40 / +30 / +20)',
		value: 1,
	},
	{
		name: '2 Blocks (+80 / +60 / +40)',
		value: 2,
	},
	{
		name: '3 Blocks (+120 / +90 / +60)',
		value: 3,
	},
	{
		name: '4 Blocks (+160 / +120 / +80)',
		value: 4,
	},
	{
		name: '5 Blocks (+200 / +150 / +100)',
		value: 5,
	},
	{
		name: '6 Blocks (+220 / +165 / +110)',
		value: 6,
	},
	{
		name: '7 Blocks (+240 / +180 / +120)',
		value: 7,
	},
	{
		name: '8 Blocks (+260 / +195 / +130)',
		value: 8,
	},
	{
		name: '9 Blocks (+280 / +210 / +140)',
		value: 9,
	},
	{
		name: '10 Blocks (+300 / +225 / +150)',
		value: 10,
	},
	{
		name: '1 Block (+70 / +50 / +30)',
		value: 11,
	},
	{
		name: '2 Blocks (+140 / +100 / +60)',
		value: 12,
	},
	{
		name: '3 Blocks (+210 / +150 / +90)',
		value: 13,
	},
	{
		name: '4 Blocks (+240 / +175 / +110)',
		value: 14,
	},
	{
		name: '5 Blocks (+270 / +200 / +130)',
		value: 15,
	},
	{
		name: '6 Blocks (+300 / +225 / +150)',
		value: 16,
	},
] as const;

export const multipliersDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 1.05,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 1.1,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 1.2,
	},
	{
		name: 'G Rank Atk Sm (x1.10)',
		value: 1.1,
	},
	{
		name: 'G Rank Atk Sm Bonus (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg Bonus (x1.2)',
		value: 1.2,
	},
	{
		name: 'Vigorous (x1.15)',
		value: 1.15,
	},
	{
		name: 'Worry (x0.70)',
		value: 0.7,
	},
	{
		name: 'Bowguns (x1.3)',
		value: 1.3,
	},
	{
		name: 'Melee / Bows (x1.5)',
		value: 1.5,
	},
	{
		name: 'Active (+50 Ranged, +100 Melee)',
		value: 0, // TODO
	},
	{
		name: 'Ranged Large Hiden (x1.4)',
		value: 1.4,
	},
	{
		name: 'SnS or Ranged (x1.3)',
		value: 1.3,
	},
	{
		name: 'Other Weapons (x1.2)',
		value: 1.2,
	},
	{
		name: '1 Sharpen (x1.05)',
		value: 1.05,
	},
	{
		name: '2 Sharpens (x1.10)',
		value: 1.1,
	},
	{
		name: '3 Sharpens (x1.15)',
		value: 1.15,
	},
	{
		name: '4 Sharpens (x1.20)',
		value: 1.2,
	},
	{
		name: '1 Bar (x1.10)',
		value: 1.1,
	},
	{
		name: '2 Bar (x1.20)',
		value: 1.2,
	},
	{
		name: '3 Bar (x1.30)',
		value: 1.3,
	},
	{
		name: '4 Bar (x1.40)',
		value: 1.4,
	},
	{
		name: '5 Bar (x1.50)',
		value: 1.5,
	},
	{
		name: '6 Bar (x1.60)',
		value: 1.6,
	},
	{
		name: 'Hammer Perfect Charge (x1.30)',
		value: 1.3,
	},
	{
		name: 'Long Sword Maxed Gauge (x1.2375)',
		value: 1.2375,
	},
	{
		name: 'Swaxe Hiden Boost (x1.05)',
		value: 1.05,
	},
	{
		name: 'MS Hiden Boost (x1.03)',
		value: 1.03,
	},
	{
		name: 'Yes (x1.2)',
		value: 1.2,
	},
] as const;

export const flatAdditionsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '1 Storm / Suprem / Burst Piece (+15)',
		value: 15,
	},
	{
		name: '2 Storm / Suprem / Burst Pieces (+30)',
		value: 30,
	},
	{
		name: '3 Storm / Suprem / Burst Pieces (+45)',
		value: 45,
	},
	{
		name: '4 Storm / Suprem / Burst Pieces (+60)',
		value: 60,
	},
	{
		name: '5 Storm / Suprem / Burst Pieces (+80)',
		value: 80,
	},
	{
		name: '1 Origin Piece (+20)',
		value: 20,
	},
	{
		name: '2 Origin Pieces (+40)',
		value: 40,
	},
	{
		name: '3 Origin Pieces (+60)',
		value: 60,
	},
	{
		name: '4 Origin Pieces (+80)',
		value: 80,
	},
	{
		name: '5 Origin Pieces (+110)',
		value: 110,
	},
	{
		name: '3+ G Rank Pieces (+30)',
		value: 30,
	},
	{
		name: 'Secret Technique Used (+320)',
		value: 320,
	},
	{
		name: 'On Self (+15)',
		value: 15,
	},
	{
		name: 'Hit by Other (+30)',
		value: 30,
	},
	{
		name: 'Red Soul Up (+100)',
		value: 100,
	},
	{
		name: 'Active (+20)',
		value: 20,
	},
	{
		name: 'Active (+5)',
		value: 50,
	},
	{
		name: 'Bond Level 1(+0)', // TODO
		value: 0,
	},
	{
		name: 'Bond Level 2(+10)',
		value: 10,
	},
	{
		name: 'Bond Level 3(+20)',
		value: 20,
	},
	{
		name: 'Bond Level 4(+30)',
		value: 30,
	},
] as const;

export const elementalSkillsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Small or Halk Drink (1.1x)',
		value: 1.1,
	},
	{
		name: 'Large (1.2x)',
		value: 1.2,
	},
	{
		name: 'Small and Halk Drink (1.21x)',
		value: 1.21,
	},
	{
		name: 'Large and Halk Drink (1.33x)',
		value: 1.33,
	},
	{
		name: 'Active (1.1x)',
		value: 1.1,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Both (1.32x)',
		value: 1.32,
	},
	{
		name: 'Ele Up Song (1.1x)',
		value: 1.1,
	},
] as const;

export const statusSkillsDropdownItems: DropdownItemOption[] = [
	{
		name: 'Standard (0.38x Status)',
		value: 0.38,
	},
	{
		name: 'Drug Knowledge Up (0.42x Status)',
		value: 0.42,
	},
	{
		name: 'On (1.125x)',
		value: 1.125,
	},
	{
		name: 'Normal (1.1x)',
		value: 1.1,
	},
	{
		name: 'Zenith (1.5x)',
		value: 1.5,
	},
	{
		name: 'Both (1.65x)',
		value: 1.65,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Swaxe Status Phial Active (1.3x)',
		value: 1.3,
	},
] as const;

export const blademasterDropdownItems: DropdownItemOption[] = [
	{
		name: 'Red (0.6x)',
		value: 0.6,
	},
	{
		name: 'Orange (0.85x)',
		value: 0.85,
	},
	{
		name: 'Yellow (1.1x)',
		value: 1.1,
	},
	{
		name: 'Green (1.325x)',
		value: 1.325,
	},
	{
		name: 'Blue (1.45x)',
		value: 1.45,
	},
	{
		name: 'White (1.6x)',
		value: 1.6,
	},
	{
		name: 'Purple (1.7x)',
		value: 1.7,
	},
	{
		name: 'Cyan (1.8x)',
		value: 1.8,
	},
] as const;

export const gunnerDropdownItems: DropdownItemOption[] = [
	{ name: 'Not Compressed (0x)', value: 0 },
	{ name: 'Lv1 Norm S. (2.4x Bullets Loaded)', value: 2.4 },
	{ name: 'Lv2 Norm S. (6.0x Bullets Loaded)', value: 6.0 },
	{ name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)', value: 6.0 },
	{ name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)', value: 5.0 },
	{ name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)', value: 4.5 },
	{ name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)', value: 3.5 },
	{ name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)', value: 15.0 },
	{ name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)', value: 18.0 },
	{ name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)', value: 21.0 },
	{ name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)', value: 9 },
	{ name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)', value: 12 },
	{ name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)', value: 15 },
	{ name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)', value: 10 },
	{ name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)', value: 13.5 },
	{ name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)', value: 17.5 },
	{ name: 'Lv1 Norm S. (3.6x Bullets Loaded)', value: 3.1 },
	{ name: 'Lv2 Norm S. (8.4x Bullets Loaded)', value: 8.4 },
	{ name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)', value: 8.4 },
	{ name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)', value: 7 },
	{ name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)', value: 6.3 },
	{ name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)', value: 4.9 },
	{ name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)', value: 21 },
	{ name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)', value: 25.2 },
	{ name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)', value: 29.4 },
	{ name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)', value: 14 },
	{ name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)', value: 18.9 },
	{ name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)', value: 24.5 },
	{
		name: '1.8x LBG & Bow Crit Distance',
		value: 1.8,
	},
	{
		name: '2.3x HBG 1st Half Crit Distance',
		value: 2.3,
	},
	{
		name: '2.0x HBG 2nd Half Crit Distance',
		value: 2.0,
	},
	{
		name: '1.9x LBG & Bow Crit D. & Z Piece',
		value: 1.9,
	},
	{
		name: '2.45x HBG 1st Half Crit D. & Zenith',
		value: 2.45,
	},
	{
		name: '2.15x HBG 2nd Half Crit D. & Zenith',
		value: 2.15,
	},
	{
		name: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.1x 1st Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '1.8x 2nd Half Crit D. (HBG Active Feature)',
		value: 1.8,
	},
	{
		name: '2.0x HBG 1st Half Crit D.',
		value: 2.0,
	},
	{
		name: '1.7x 2nd Half Crit D.',
		value: 1.7,
	},
	{
		name: '1.5x Bow or LBG Crit D.',
		value: 1.5,
	},
	{
		name: '2.2x',
		value: 2.2,
	},
	{
		name: '1.6x',
		value: 1.6,
	},
	{
		name: '1.4x',
		value: 1.4,
	},
	{
		name: '1.3x',
		value: 1.3,
	},
	{
		name: '1.2x',
		value: 1.2,
	},
	{
		name: '1.1x',
		value: 1.1,
	},
	{
		name: '1.0x',
		value: 1.0,
	},
	{
		name: '2.3x Step Shot & Z Piece',
		value: 2.3,
	},
	{
		name: '2.0x Step Shot & Z Piece',
		value: 2.0,
	},
	{
		name: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
		value: 1.9,
	},
	{
		name: '1.6x Standard C. Distance (LBG Active Feature)',
		value: 1.6,
	},
	{
		name: '2.4x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.5x',
		value: 2.5,
	},
	{
		name: '2.55x',
		value: 2.55,
	},
	{
		name: '2.60x',
		value: 2.6,
	},
	{
		name: 'Normal / Rapid Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pierce Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pellet / Scatter Up (1.3x)',
		value: 1.3,
	},
	{
		name: 'Just Shot (1.3x)',
		value: 1.3,
	},
	{
		name: 'Perfect JS (1.4x)',
		value: 1.4,
	},
	{
		name: 'Evade Shot (0.6x)',
		value: 0.6,
	},
	{
		name: 'Finishing Shot (2.0x)',
		value: 2.0,
	},
	{
		name: 'Rapid Fire (0.5x)',
		value: 0.5,
	},
	{
		name: 'Ultra Rapid Lv 1 Pierce S (0.73x)',
		value: 0.73,
	},
	{
		name: 'Normal / Charge Lv 0 (x1)',
		value: 1,
	},
	{
		name: 'Charge Lv 1 (1.15x)',
		value: 1.15,
	},
	{
		name: 'Charge Lv 2 (1.3x)',
		value: 1.3,
	},
	{
		name: 'Charge Lv 3 (1.5x)',
		value: 1.5,
	},
	{
		name: 'Storm Style Lv 0 (0.95x)',
		value: 0.95,
	},
] as const;

export const elementDropdownItems: DropdownItemOption[] = [
	{
		name: 'Not Compressed (x1)',
		value: 1,
	},
	{
		name: 'Lv1 Norm S. (2.4x Bullets Loaded)', // TODO
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (6.0x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
		value: 0,
	},
	{
		name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Norm S. (3.6x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (8.4x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Power Bottle (1.6x)',
		value: 1.6,
	},
	{
		name: 'P. Bottle + Bow Hiden (1.8x)',
		value: 1.8,
	},
	{
		name: 'P. + Origin (1.7x)',
		value: 1.7,
	},
	{
		name: 'P. + Origin + Hiden (1.9x)',
		value: 1.9,
	},
	{
		name: 'Status Bottle (1.5x)',
		value: 1.5,
	},
	{
		name: 'S. Bottle + Hiden (1.7x)',
		value: 1.7,
	},
	{
		name: 'S. Bottle + Origin (1.6x)',
		value: 1.6,
	},
	{
		name: 'S. + Origin + Hiden (1.8x)',
		value: 1.8,
	},
	{
		name: 'Non-G Power Bottle (1.5x)',
		value: 0.5,
	},
	{
		name: 'Lv1 (0.4x / 0.7x)', // TODO
		value: 0,
	},
	{
		name: 'Lv2 (1.0x / 0.95x)',
		value: 0,
	},
	{
		name: 'Lv3 (1.5x / 1.2x)',
		value: 0,
	},
	{
		name: 'Lv4 (1.85x / 1.334x)',
		value: 0,
	},
	{
		name: 'Sniper Lv4 (1.0x / 1.0x)',
		value: 0,
	},
	{
		name: 'Sniper Lv5 (1.125x / 1.1x)',
		value: 0,
	},
	{
		name: 'Uncharged Rising Shot (0.4x / 1.0x)',
		value: 0,
	},
	{
		name: 'Charged Rising Shot (1.0x / 1.5x)',
		value: 0,
	},
	{
		name: 'Crouched Lv1 (0.48x / 0.7x)',
		value: 0,
	},
	{
		name: 'Crouched Lv2 (1.3x / 0.8x)',
		value: 0,
	},
	{
		name: 'Crouched Lv3 (2.1x / 1.2x)',
		value: 0,
	},
	{
		name: 'Crouched Lv4 (2.59x / 1.334x)',
		value: 0,
	},
	{
		name: 'Normal (All 1.0x)',
		value: 1.0,
	},
	{
		name: 'Swaxe Sword Mode Elemental Phial (1.3x)',
		value: 1.3,
	},
	{
		name: 'Maxed Transcend (2.0x)',
		value: 2.0,
	},
	{
		name: 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
		value: 2.6,
	},
] as const;

export const monsterDropdownOptions: DropdownItemOption[] = [
	{
		name: 'Paralysed (1.1x)',
		value: 1.1,
	},
	{
		name: 'Sleeping (3.0x)',
		value: 3.0,
	},
] as const;

export const hitzoneValueModifiersDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'Exploit Weakness (+5 on 35+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Determination (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Active (+5 Raw Hitzones)',
		value: 5,
	},
	{
		name: 'Raviente (+2 Raw Hitzones)',
		value: 2,
	},
	{
		name: 'Raw Acid (+10 raw hitzones)',
		value: 10,
	},
	{
		name: 'Elemental Exploit (+X to 20+ ele hitzones)', // TODO
		value: 0,
	},
	{
		name: 'Dissolver Up (+X to 15+ ele hitzones)',
		value: 0,
	},
	{
		name: 'Determination (+X to ele hitzones)',
		value: 0,
	},
	{
		name: 'Raw Weakness (+2 on Raw Hitzones)',
		value: 2.0,
	},
	{
		name: 'Elemental Weakness (+4 on all Elemental Hitzones)',
		value: 4.0,
	},
	{
		name: 'Both (+4 on Elemental, +2 on Raw)', // TODO
		value: 0,
	},
	{
		name: 'In Crit Distance (+5 on raw hitzones)',
		value: 5,
	},
] as const;

export const otherDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (1.0x)',
		value: 1.0,
	},
	{
		name: 'Downtime (0.8x)',
		value: 0.8,
	},
	{
		name: 'Inactive (1x)',
		value: 1.0,
	},
	{
		name: 'Active (1.25x)',
		value: 1.25,
	},
] as const;

export const sigilDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '0 Sigils',
		value: 0,
	},
	{
		name: '1 Sigil',
		value: 1,
	},
	{
		name: '2 Sigils',
		value: 2,
	},
	{
		name: '3 Sigils',
		value: 3,
	},
	{
		name: '4 Sigils',
		value: 4,
	},
] as const;

export const elementMultipliers: FrontierElementMultiplier[] = [
	{
		name: 'Fire',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Water',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Thunder',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Ice',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Dragon',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: 'Light',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Blaze',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Tenshou',
		fireMultiplier: 0.3,
		waterMultiplier: 1,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Lightning Rod',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Okiko',
		fireMultiplier: 0.8,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.8,
		dragonMultiplier: 0.4,
	},
	{
		name: 'Black Flame',
		fireMultiplier: 0.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1.5,
	},
	{
		name: 'Crimson Demon',
		fireMultiplier: 1.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
	{
		name: 'Dark',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.7,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Music',
		fireMultiplier: 9,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Sound',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: '',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Wind',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0.8,
		iceMultiplier: 0.8,
		dragonMultiplier: 0,
	},
	{
		name: 'Burning Zero',
		fireMultiplier: 1.25,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1.25,
		dragonMultiplier: 0,
	},
	{
		name: "Emperor's Roar",
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1.5,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
] as const;

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
