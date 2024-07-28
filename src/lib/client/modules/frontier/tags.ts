import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
import WhetstoneIconWhite from '$lib/client/components/frontier/icon/item/Whetstone_Icon_White.svelte';
import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
import ChestIconWhite from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import Thunder from '$lib/client/components/frontier/icon/element/Thunder.svelte';
import Bleed2 from '$lib/client/components/frontier/icon/ailment/Bleed2.svelte';
import Blast from '$lib/client/components/frontier/icon/status/Blast.svelte';
import OreIconWhite from '$lib/client/components/frontier/icon/item/Ore_Icon_White.svelte';
import Fire from '$lib/client/components/frontier/icon/element/Fire.svelte';
import Water from '$lib/client/components/frontier/icon/element/Water.svelte';
import Ice from '$lib/client/components/frontier/icon/element/Ice.svelte';
import Dragon from '$lib/client/components/frontier/icon/element/Dragon.svelte';
import Light from '$lib/client/components/frontier/icon/element/Light.svelte';
import Blaze from '$lib/client/components/frontier/icon/element/Blaze.svelte';
import Tenshou from '$lib/client/components/frontier/icon/element/Tenshou.svelte';
import Okiko from '$lib/client/components/frontier/icon/element/Okiko.svelte';
import LightningRod from '$lib/client/components/frontier/icon/element/LightningRod.svelte';
import BlackFlame from '$lib/client/components/frontier/icon/element/BlackFlame.svelte';
import CrimsonDemon from '$lib/client/components/frontier/icon/element/CrimsonDemon.svelte';
import EmperorRoar from '$lib/client/components/frontier/icon/element/EmperorRoar.svelte';
import BurningZero from '$lib/client/components/frontier/icon/element/BurningZero4.svelte';
import Dark from '$lib/client/components/frontier/icon/element/Dark.svelte';
import Music2 from '$lib/client/components/frontier/icon/element/Music2.svelte';
import Sound2 from '$lib/client/components/frontier/icon/element/Sound2.svelte';
import Wind from '$lib/client/components/frontier/icon/element/Wind.svelte';
import Poison from '$lib/client/components/frontier/icon/status/Poison.svelte';
import Paralysis from '$lib/client/components/frontier/icon/status/Paralysis.svelte';
import Sleep from '$lib/client/components/frontier/icon/status/Sleep.svelte';
import Blind from '$lib/client/components/frontier/icon/ailment/Blind.svelte';
import CorruptedPoison from '$lib/client/components/frontier/icon/ailment/CorruptedPoison.svelte';
import Crystal from '$lib/client/components/frontier/icon/ailment/Crystal.svelte';
import DracophageErosion from '$lib/client/components/frontier/icon/ailment/DracophageErosion.svelte';
import ExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
import ExtremeWaterblight from '$lib/client/components/frontier/icon/ailment/ExtremeWaterblight.svelte';
import ExtremeThunderblight from '$lib/client/components/frontier/icon/ailment/ExtremeThunderblight.svelte';
import ExtremeIceblight from '$lib/client/components/frontier/icon/ailment/ExtremeIceblight.svelte';
import ExtremeDragonblight from '$lib/client/components/frontier/icon/ailment/ExtremeDragonblight.svelte';
import ExtremePoison from '$lib/client/components/frontier/icon/ailment/ExtremePoison.svelte';
import ExtremeSleep from '$lib/client/components/frontier/icon/ailment/ExtremeSleep.svelte';
import ExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
import Fatigue from '$lib/client/components/frontier/icon/ailment/Fatigue.svelte';
import Frostbite from '$lib/client/components/frontier/icon/ailment/Frostbite.svelte';
import FrenzyVirus from '$lib/client/components/frontier/icon/ailment/FrenzyVirus.svelte';
import Confusion from '$lib/client/components/frontier/icon/ailment/Confusion.svelte';
import SmokeIconWhite from '$lib/client/components/frontier/icon/item/Smoke_Icon_White.svelte';
import DefenseDown from '$lib/client/components/frontier/icon/ailment/DefenseDown.svelte';
import VocalCordParalysis from '$lib/client/components/frontier/icon/ailment/VocalCordParalysis.svelte';
import Stun from '$lib/client/components/frontier/icon/ailment/Stun.svelte';
import Stench from '$lib/client/components/frontier/icon/ailment/Stench.svelte';
import Snowman from '$lib/client/components/frontier/icon/ailment/Snowman.svelte';
import Magnetism from '$lib/client/components/frontier/icon/ailment/Magnetism.svelte';
import type { TagColor } from './types';

export const tagInfo: {
	color: TagColor;
	icon: any;
	link: string;
	values: string[];
}[] = [
	{
		color: 'outline',
		icon: QuestionMarkIconWhite,
		link: '/',
		values: ['None'],
	},
	{
		color: 'outline',
		icon: MapIconWhite,
		link: '/hunter-notes/locations',
		values: ['Location'],
	},
	{
		color: 'red',
		icon: MonsterPartIconWhite,
		link: '/hunter-notes/monsters/overview',
		values: [
			'Monster',
			'Musou',
			'Hardcore',
			'Unlimited',
			'Custom',
			'Supremacy',
			'Zenith',
			'Upper Shiten',
			'Lower Shiten',
			'Conquest',
			'Exotic',
			'Gou',
			'Low Rank',
			'High Rank',
			'G Rank',
			'Conquest LV1',
			'Conquest LV200',
			'Conquest LV1000',
			'Conquest LV9999',
			'Event',
		],
	},
	{
		color: 'cool-gray',
		icon: MonsterPartIconWhite,
		link: '/hunter-notes/monsters/overview',
		values: [
			'Lynian',
			'Herbivore',
			'Fish',
			'Wingdrake',
			'Neopteron',
			'Temnoceran',
			'Bird Wyvern',
			'Flying Wyvern',
			'Piscine Wyvern',
			'Carapaceon',
			'Amphibian',
			'Fanged Beast',
			'Leviathan',
			'Snake Wyvern',
			'Brute Wyvern',
			'Fanged Wyvern',
			'Elder Dragon',
			'Unknown',
			'???',
			'Relict',
			'Unclassified Monster',
		],
	},
	{
		color: 'magenta',
		icon: WhetstoneIconWhite,
		link: '/hunter-notes/weapons',
		values: [
			'Weapon',
			'Sword and Shield',
			'Dual Swords',
			'Long Sword',
			'Great Sword',
			'Hammer',
			'Hunting Horn',
			'Lance',
			'Gunlance',
			'Bow',
			'Heavy Bowgun',
			'Light Bowgun',
			'Switch Axe F',
			'Tonfa',
			'Magnet Spike',
		],
	},
	{
		color: 'purple',
		icon: MantleIconWhite,
		link: '/hunter-notes',
		values: [
			'Zenith Skill',
			'Z Sigil',
			'Z AOE Sigil',
			'Style Rank',
			'Prayer Gem',
			'Road/Tower',
			'Halk',
		],
	},
	{
		color: 'blue',
		icon: JewelIconWhite,
		link: '/hunter-notes', /// TODO?
		values: ['Armor Skill', 'Guild Food', 'Caravan Skill', 'Diva Skill'],
	},
	{
		color: 'cyan',
		icon: HelmetIconWhite,
		link: '/hunter-notes/armor',
		values: ['Blademaster', 'Gunner', 'BM/GN'],
	},
	{ color: 'teal', icon: MapIconWhite, link: '/', values: ['Quest'] },
	{
		color: 'green',
		icon: ChestIconWhite,
		link: '/hunter-notes/armor',
		values: ['Armor', 'Cuff'],
	},
	{
		color: 'gray',
		icon: SacIconWhite,
		link: '/tools/search',
		values: ['Item', 'Sigil', 'Z Sigil', 'Decoration', 'Consumable'],
	},
	{
		color: 'cool-gray',
		icon: Thunder,
		link: '/hunter-notes/getting-started/elements',
		values: ['Element'],
	},
	{ color: 'warm-gray', icon: Blast, link: '/', values: ['Status'] },
	{
		color: 'warm-gray',
		icon: Bleed2,
		link: '/hunter-notes/getting-started/ailments',
		values: ['Ailment'],
	},
	{
		color: 'high-contrast',
		icon: OreIconWhite,
		link: '',
		values: ['NPC', 'Badge', 'Achievement', 'Medal', 'Trophy'],
	},
	{
		color: 'red',
		link: '/hunter-notes/getting-started/elements',
		icon: Fire,
		values: ['Fire'],
	},
	{
		color: 'blue',
		link: '/hunter-notes/getting-started/elements',
		icon: Water,
		values: ['Water'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/elements',
		icon: Thunder,
		values: ['Thunder'],
	},
	{
		color: 'cyan',
		link: '/hunter-notes/getting-started/elements',
		icon: Ice,
		values: ['Ice'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/elements',
		icon: Dragon,
		values: ['Dragon'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/elements',
		icon: Light,
		values: ['Light'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/elements',
		icon: Blaze,
		values: ['Blaze'],
	},
	{
		color: 'high-contrast',
		link: '/hunter-notes/getting-started/elements',
		icon: Tenshou,
		values: ['Tenshou'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/elements',
		icon: Okiko,
		values: ['Okiko'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/elements',
		icon: LightningRod,
		values: ['Lightning Rod', 'L. Rod'],
	},
	{
		color: 'gray',
		link: '/hunter-notes/getting-started/elements',
		icon: BlackFlame,
		values: ['Black Flame', 'B. Flame'],
	},
	{
		color: 'red',
		link: '/hunter-notes/getting-started/elements',
		icon: CrimsonDemon,
		values: ['Crimson Demon', 'C. Demon'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/elements',
		icon: EmperorRoar,
		values: ["Emperor's Roar", 'E. Roar'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/elements',
		icon: BurningZero,
		values: ['Burning Zero', 'B. Zero'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/elements',
		icon: Dark,
		values: ['Dark'],
	},
	{
		color: 'cool-gray',
		link: '/hunter-notes/getting-started/elements',
		icon: Music2,
		values: ['Music'],
	},
	{
		color: 'teal',
		link: '/hunter-notes/getting-started/elements',
		icon: Sound2,
		values: ['Sound'],
	},
	{
		color: 'gray',
		link: '/hunter-notes/getting-started/elements',
		icon: Wind,
		values: ['Wind'],
	},

	// TODO
	// Locations
	// Habitats
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/ailments',
		icon: Poison,
		values: ['Poison'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: Paralysis,
		values: ['Paralysis'],
	},
	{
		color: 'cyan',
		link: '/hunter-notes/getting-started/ailments',
		icon: Sleep,
		values: ['Sleep'],
	},
	{
		color: 'green',
		link: '/hunter-notes/getting-started/ailments',
		icon: Blast,
		values: ['Blast'],
	},
	{
		color: 'red',
		link: '/hunter-notes/getting-started/ailments',
		icon: Bleed2,
		values: ['Bleed'],
	},
	{
		color: 'high-contrast',
		link: '/hunter-notes/getting-started/ailments',
		icon: Blind,
		values: ['Blind'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/ailments',
		icon: CorruptedPoison,
		values: ['Corrupted Poison'],
	},
	{
		color: 'teal',
		link: '/hunter-notes/getting-started/ailments',
		icon: Crystal,
		values: ['Crystal'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/ailments',
		icon: DracophageErosion,
		values: ['Dracophage Erosion'],
	},
	{
		color: 'red',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeFireblight,
		values: ['Extreme Fireblight'],
	},
	{
		color: 'blue',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeWaterblight,
		values: ['Extreme Waterblight'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeThunderblight,
		values: ['Extreme Thunderblight'],
	},
	{
		color: 'cyan',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeIceblight,
		values: ['Extreme Iceblight'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeDragonblight,
		values: ['Extreme Dragonblight'],
	},
	{
		color: 'purple',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremePoison,
		values: ['Extreme Poison'],
	},
	{
		color: 'blue',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeSleep,
		values: ['Extreme Sleep'],
	},
	{
		color: 'warm-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: ExtremeParalysis,
		values: ['Extreme Paralysis'],
	},
	{
		color: 'magenta',
		link: '/hunter-notes/getting-started/ailments',
		icon: Fatigue,
		values: ['Fatigue'],
	},
	{
		color: 'cool-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: Frostbite,
		values: ['Frostbite'],
	},
	{
		color: 'gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: Magnetism,
		values: ['Magnetism'],
	},
	{
		color: 'cool-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: Snowman,
		values: ['Snowman'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/ailments',
		icon: Stench,
		values: ['Stench'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/ailments',
		icon: Stun,
		values: ['Stun'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/ailments',
		icon: VocalCordParalysis,
		values: ['Vocal Cord Paralysis'],
	},
	{
		color: 'cool-gray',
		link: '/hunter-notes/getting-started/ailments',
		icon: DefenseDown,
		values: ['Defense Down'],
	},
	{
		color: 'green',
		link: '/hunter-notes/getting-started/ailments',
		icon: SmokeIconWhite,
		values: ['Farcaster'],
	},
	{
		color: 'outline',
		link: '/hunter-notes/getting-started/ailments',
		icon: Confusion,
		values: ['Confusion'],
	},
	{
		color: 'magenta',
		link: '/hunter-notes/getting-started/ailments',
		icon: FrenzyVirus,
		values: ['Frenzy Virus'],
	},
];

export function getTag(value: string) {
	for (const tagType of tagInfo) {
		if (tagType.values.includes(value)) {
			return tagType;
		}
	}
	return tagInfo[0];
}
