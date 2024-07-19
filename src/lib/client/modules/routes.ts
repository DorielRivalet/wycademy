import type { ComponentType, SvelteComponent } from 'svelte';
import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
import ExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
import ExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
import { LocationIcons } from './frontier/locations';
import StygianZinogre from '$lib/client/components/frontier/icon/monster/StygianZinogre.svelte';
import YamaKurai2 from '$lib/client/components/frontier/icon/monster/YamaKurai2.svelte';
import Zerureusu from '$lib/client/components/frontier/icon/monster/Zerureusu.svelte';
import SupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
import Bogabadorumu6 from '$lib/client/components/frontier/icon/monster/Bogabadorumu6.svelte';
import BerserkRaviente from '$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte';
import ConquestFatalis7 from '$lib/client/components/frontier/icon/monster/ConquestFatalis7.svelte';
import AkuraJebia2 from '$lib/client/components/frontier/icon/monster/AkuraJebia2.svelte';
import BurningFreezingElzelion2 from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion2.svelte';
import AllWeapons from '$lib/client/components/frontier/icon/weapon/AllWeapons.svelte';
import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
import { getMonsterIcon, getWeaponIcon } from './frontier/functions';
import AllArmors from '$lib/client/components/frontier/icon/armor/AllArmors.svelte';
import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import UNKNOWN from '$lib/client/images/monster/shiten_unknown.webp';
import Logo from '$lib/client/images/logo.svg';
import MedicineIconWhite from '../components/frontier/icon/item/Medicine_Icon_White.svelte';
import {
	Bullhorn,
	Development,
	DocumentRequirements,
	Email,
	Group,
	InformationSquare,
	LogoYoutube,
	PiggyBank,
	QuestionAnswering,
} from 'carbon-icons-svelte';
import Duremudira from '$lib/client/components/frontier/icon/monster/Duremudira.svelte';
import KnifeIconWhite from '../components/frontier/icon/item/Knife_Icon_White.svelte';
import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
import AllItems from '../components/frontier/icon/item/AllItems.svelte';
import AllMonsters from '$lib/client/components/frontier/icon/monster/AllMonsters.svelte';
import pageThumbnail from '$lib/client/images/logo.png';
import thumbnailActiveFeature from '$lib/client/images/page-thumbnail/active-feature.png';
import thumbnailGuildPoogies from '$lib/client/images/page-thumbnail/guild-poogies.png';
import thumbnailRecipes from '$lib/client/images/page-thumbnail/recipes.png';

// TODO more fields? for search index
export type NavigationItem = {
	name: string;
	description: string;
	link: string;
	image: string | ComponentType<SvelteComponent>;
};

export type CategoryInfo = {
	category: NavigationItem;
	pages: NavigationItem[];
};

export function getPageThumbnail(link: string) {
	for (const entry of thumbnailInfo) {
		if (entry.link === link) {
			return entry.thumbnail;
		}
	}

	return pageThumbnail;
}

export function getNavigationItemFromLink(
	section: CategoryInfo[],
	link: string,
) {
	for (const categoryInfo of section) {
		// Check if the link matches the category link
		if (categoryInfo.category.link === link) {
			return categoryInfo.category;
		}

		// Check if the link matches any page link within the category
		for (const page of categoryInfo.pages) {
			if (page.link === link) {
				return page;
			}
		}
	}

	// Return null or a default message if no match is found
	return null; // Or return a default message like "Description not found."
}

export function getRoutesSection(url: string) {
	if (url.startsWith('/hunter-notes')) {
		return guidesInfo;
	} else if (url.startsWith('/support')) {
		return supportInfo;
	} else if (url.startsWith('/tools')) {
		return toolsInfo;
	} else {
		return null;
	}
}

/**Meta information about the website. */
export const supportInfo: CategoryInfo[] = [
	{
		category: {
			name: 'Website',
			description: 'General information about the website.',
			link: '/support/website',
			image: Logo,
		},
		pages: [
			{
				name: 'Announcements',
				description: 'Announcements from the developers of the website.',
				link: '/support/website/announcements',
				image: Bullhorn,
			},
			{
				name: 'About Us',
				description: 'About the website.',
				link: '/support/website/about',
				image: InformationSquare,
			},
			{
				name: 'Donate',
				description: 'Donations and sponsors.',
				link: '/support/website/donate',
				image: PiggyBank,
			},
			{
				name: 'FAQ',
				description: 'Frequently Asked Questions.',
				link: '/support/website/faq',
				image: QuestionAnswering,
			},
			{
				name: 'Contribute',
				description: 'How to contribute to the website.',
				link: '/support/website/contribute',
				image: Group,
			},
			{
				name: 'Develoment',
				description: 'Development process for the website.',
				link: '/support/website/development',
				image: Development,
			},
			{
				name: 'Contact',
				description: 'Contact information.',
				link: '/support/website/contact',
				image: Email,
			},
		],
	},
	{
		category: {
			name: 'Legal',
			description: 'Legal information about the website.',
			link: '/support/legal',
			image: BookIconWhite,
		},
		pages: [
			{
				name: 'Terms of Service',
				description: 'Terms of Service.',
				link: '/support/legal/terms-of-service',
				image: DocumentRequirements,
			},
			{
				name: 'Privacy Policy',
				description: 'Privacy Policy.',
				link: '/support/legal/privacy-policy',
				image: DocumentRequirements,
			},
		],
	},
];

/**Tools for the game */
export const toolsInfo: CategoryInfo[] = [
	{
		category: {
			name: 'Calculator',
			description: 'Calculators for the game.',
			link: '/tools/calculator',
			image: KnifeIconWhite,
		},
		pages: [
			{
				name: 'Damage',
				description:
					'A damage calculator that includes motion values of all weapons and formulas that update with your calculations.',
				image: AllWeapons,
				link: '/tools/calculator/damage',
			},
			{
				name: 'Ice Age',
				description: 'An Ice Age calculator; includes formulas.',
				image: JewelIconWhite,
				link: '/tools/calculator/ice-age',
			},
			{
				name: 'Crit Conversion',
				description:
					'A Crit Conversion calculator; includes formulas and graphs.',
				image: JewelIconWhite,
				link: '/tools/calculator/crit-conversion',
			},
			{
				name: 'Gunlance Shells & Wyvernfire',
				description: 'A Gunlance Shells & Wyvernfire calculator.',
				image: getWeaponIcon('Gunlance'),
				link: '/tools/calculator/gunlance-shells-and-wyvernfire',
			},
			{
				name: 'Heavy Bowgun Heat Beam',
				description: 'A Heavy Bowgun Heat Beam calculator.',
				image: getWeaponIcon('Heavy Bowgun'),
				link: '/tools/calculator/heavy-bowgun-heat-beam',
			},
		],
	},
	{
		category: {
			name: 'Generator',
			description:
				'Allows you to create various items found in the game to your liking.',
			image: AllMonsters,
			link: '/tools/generator',
		},
		pages: [
			{
				name: 'Weapon',
				description: 'A weapon generator.',
				image: AllWeapons,
				link: '/tools/generator/weapon',
			},
			{
				name: 'Armor',
				description: 'An armor generator.',
				image: AllArmors,
				link: '/tools/generator/armor',
			},
			{
				name: 'Item',
				description: 'An item generator.',
				image: AllItems,
				link: '/tools/generator/item',
			},
			{
				name: 'Icon',
				description: 'An icon generator.',
				image: getMonsterIcon('Abiorugu'),
				link: '/tools/generator/icon',
			},
			{
				name: 'Thumbnail',
				description: 'A thumbnail generator, for example YouTube thumbnails.',
				image: LogoYoutube,
				link: '/tools/generator/thumbnail',
			},
		],
	},
	{
		category: {
			name: 'Simulator',
			description:
				'Allows you to simulate various items found in the game to your liking, reflecting what would be shown in the game.',
			image: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
			link: '/tools/simulator',
		},
		pages: [
			{
				name: 'Tower Weapon',
				description: 'A tower weapon simulator.',
				image: Duremudira,
				link: '/tools/simulator/tower-weapon',
			},
		],
	},
	{
		category: {
			name: 'External',
			description: 'External tools for the game.',
			image: Logo,
			link: '/tools/external',
		},
		pages: [
			{
				name: 'mhfz-overlay',
				description:
					'A simple, customizable overlay with Discord Rich Presence integration for Monster Hunter Frontier Z on Windows.',
				link: '/tools/external/overlay',
				image: Logo,
			},
			{
				name: 'EZlion',
				description: 'The Frontier API',
				link: '/tools/external/ezlion',
				image:
					'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
			},
		],
	},
];

export const thumbnailInfo: { link: string; thumbnail: string }[] = [
	{
		link: '/hunter-notes/weapons/active-feature',
		thumbnail: thumbnailActiveFeature,
	},
	{
		link: '/hunter-notes/locations/guild-hall',
		thumbnail: thumbnailActiveFeature,
	},
	{
		link: '/hunter-notes/locations/guild-hall#recipes',
		thumbnail: thumbnailRecipes,
	},
	{
		link: '/hunter-notes/locations/guild-hall#guild-poogie-skills',
		thumbnail: thumbnailGuildPoogies,
	},
];

/**Guides for the game */
export const guidesInfo: CategoryInfo[] = [
	{
		category: {
			name: 'Getting Started',
			description:
				'The tutorials for new hunters and an overview of the main mechanics of the game.',
			image: BookIconWhite,
			link: '/hunter-notes/getting-started',
		},
		pages: [
			{
				name: 'Your First Hunts',
				description:
					'A walkthrough of the first tasks you should do when starting the game.',
				link: '/hunter-notes/getting-started/your-first-hunts',
				image: BookIconWhite,
			},
			{
				name: 'Elements',
				description:
					'The elements of weapons and monsters. Includes combo elements and elemental resistances.',
				link: '/hunter-notes/getting-started/elements',
				image: ExtremeFireblight,
			},
			{
				name: 'Ailments',
				description:
					"The status effects of both weapons and monsters. Includes monsters' status immunities.",
				link: '/hunter-notes/getting-started/ailments',
				image: ExtremeParalysis,
			},
			{
				name: 'Transcend',
				description:
					'Learn how to upgrade transcend and see a list of burst effects.',
				link: '/hunter-notes/getting-started/transcend',
				image: LocationIcons.find((e) => e.name === 'Transcend')?.icon,
			},
		],
	},
	{
		category: {
			name: 'Monsters',
			description: 'Information about monsters in the game.',
			link: '/hunter-notes/monsters',
			image: AllMonsters,
		},
		pages: [
			{
				name: 'Overview',
				description:
					'The full list of monsters and their attributes, ecology, hitzone values and more.',
				link: '/hunter-notes/monsters/overview',
				image: AllMonsters,
			},
			{
				name: 'Exotics',
				description:
					'The list of exotic monsters and the automatic skills they provide.',
				link: '/hunter-notes/monsters/exotics',
				image: StygianZinogre,
			},
			{
				name: 'Origin',
				description:
					'The list of origin monsters and the automatic skills they provide.',
				link: '/hunter-notes/monsters/origin',
				image: YamaKurai2,
			},
			{
				name: 'Burst',
				description: 'The list of burst monsters.',
				link: '/hunter-notes/monsters/burst',
				image: Zerureusu,
			},
			{
				name: 'Supremacy',
				description: 'The list of supremacy monsters and how to beat them.',
				link: '/hunter-notes/monsters/supremacy',
				image: SupremacyTeostra,
			},
			{
				name: 'Duremudira',
				description:
					'An explanation of Tower gear and skills, and how to beat 2nd District Duremudira.',
				link: '/hunter-notes/monsters/duremudira',
				image: Duremudira,
			},
			{
				name: 'Zenith',
				description:
					'The list of zenith monsters and how to beat them; their gear and skills.',
				link: '/hunter-notes/monsters/zenith',
				image: Bogabadorumu6,
			},
			{
				name: 'Raviente',
				description:
					'The list of Evolution weapons and their upgrade tree, Raviente armor, and a tutorial for slaying and supporting during a Raviente raid.',
				link: '/hunter-notes/monsters/raviente',
				image: BerserkRaviente,
			},
			{
				name: 'Conquest',
				description:
					'The list of conquest monsters and how to beat them; their materials and stats.',
				link: '/hunter-notes/monsters/conquest',
				image: ConquestFatalis7,
			},
			{
				name: 'Shiten',
				description:
					'The list of shiten monsters and how to beat them; their sigils and stats.',
				link: '/hunter-notes/monsters/shiten',
				image: UNKNOWN,
			},
			{
				name: 'Unlimited',
				description:
					'The list of unlimited (UL) monsters and their rewards upon hunting them.',
				link: '/hunter-notes/monsters/unlimited',
				image: AkuraJebia2,
			},
			{
				name: 'Musou',
				description: 'The list of musou monsters and how to beat them.',
				link: '/hunter-notes/monsters/musou',
				image: BurningFreezingElzelion2,
			},
		],
	},
	{
		category: {
			name: 'Weapons',
			description: 'Information about weapons in the game.',
			link: '/hunter-notes/weapons',
			image: AllWeapons,
		},
		pages: [
			{
				name: 'Overview',
				description:
					'An overview of each weapon type, their multipliers (including sharpness), recommended weapons, skills and sigils.',
				link: '/hunter-notes/weapons/overview',
				image: AllWeapons,
			},
			{
				name: 'Sword and Shield',
				description:
					'An overview of the Sword and Shield. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/sword-and-shield',
				image: getWeaponIcon('Sword and Shield'),
			},
			{
				name: 'Dual Swords',
				description:
					'An overview of the Dual Swords. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/dual-swords',
				image: getWeaponIcon('Dual Swords'),
			},
			{
				name: 'Great Sword',
				description:
					'An overview of the Great Sword. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/great-sword',
				image: getWeaponIcon('Great Sword'),
			},
			{
				name: 'Long Sword',
				description:
					'An overview of the Long Sword. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/long-sword',
				image: getWeaponIcon('Long Sword'),
			},
			{
				name: 'Lance',
				description:
					'An overview of the Lance. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/lance',
				image: getWeaponIcon('Lance'),
			},
			{
				name: 'Gunlance',
				description:
					'An overview of the Gunlance. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/gunlance',
				image: getWeaponIcon('Gunlance'),
			},
			{
				name: 'Hammer',
				description:
					'An overview of the Hammer. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/hammer',
				image: getWeaponIcon('Hammer'),
			},
			{
				name: 'Hunting Horn',
				description:
					'An overview of the Hunting Horn. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/hunting-horn',
				image: getWeaponIcon('Hunting Horn'),
			},

			{
				name: 'Tonfa',
				description:
					'An overview of the Tonfa. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/tonfa',
				image: getWeaponIcon('Tonfa'),
			},
			{
				name: 'Switch Axe F',
				description:
					'An overview of the Switch Axe F. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/switch-axe-f',
				image: getWeaponIcon('Switch Axe F'),
			},
			{
				name: 'Magnet Spike',
				description:
					'An overview of the Magnet Spike. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/magnet-spike',
				image: getWeaponIcon('Magnet Spike'),
			},
			{
				name: 'Light Bowgun',
				description:
					'An overview of the Light Bowgun. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/light-bowgun',
				image: getWeaponIcon('Light Bowgun'),
			},
			{
				name: 'Heavy Bowgun',
				description:
					'An overview of the Heavy Bowgun. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/heavy-bowgun',
				image: getWeaponIcon('Heavy Bowgun'),
			},
			{
				name: 'Bow',
				description:
					'An overview of the Bow. See the Frontier exclusive moveset, tips, best weapons, recommended armor skills and special mechanics.',
				link: '/hunter-notes/weapons/bow',
				image: getWeaponIcon('Bow'),
			},
			{
				name: 'Sigils',
				description: 'View a list of sigils.',
				link: '/hunter-notes/weapons/sigils',
				image: SigilIconWhite,
			},
			{
				name: 'Critical Distance',
				description:
					"An explanation of ranged weapons' Critical Distance mechanic.",
				link: '/hunter-notes/weapons/critical-distance',
				image: ShotIconWhite,
			},
			{
				name: 'Active Feature',
				description: "A list of each weapon's active feature.",
				link: '/hunter-notes/weapons/active-feature',
				image: AllWeapons,
			},
		],
	},
	{
		category: {
			name: 'Armor',
			description: 'Information about armor in the game.',
			link: '/hunter-notes/armor',
			image: AllArmors,
		},
		pages: [
			{
				name: 'Overview',
				description: 'An overview of armor types.',
				link: '/hunter-notes/armor/overview',
				image: AllArmors,
			},
			{
				name: 'Skills',
				description: 'The list of armor skills, including zenith skills.',
				link: '/hunter-notes/armor/skills',
				image: JewelIconWhite,
			},
			{
				name: 'Colors',
				description: 'The list of armor pigment colors and how to unlock them.',
				link: '/hunter-notes/armor/colors',
				image: AllArmors,
			},
			{
				name: 'Transmog',
				description: 'How to unlock transmog.',
				link: '/hunter-notes/armor/transmog',
				image: AllArmors,
			},
		],
	},
	{
		category: {
			name: 'Locations',
			description: 'Details about various locations in the game.',
			link: '/hunter-notes/locations',
			image: LocationIcons.find((e) => e.name === 'Mezeporta')?.icon,
		},
		pages: [
			{
				name: 'Mezeporta Square',
				description: 'List of NPC available at Mezeporta Square.',
				link: '/hunter-notes/locations/mezeporta-square',
				image: LocationIcons.find((e) => e.name === 'Mezeporta')?.icon,
			},
			{
				name: 'Guild Hall',
				description:
					'The various facilities of the Guild Hall explained: Guild Food, Guild Poogies, Guild Store, etc.',
				link: '/hunter-notes/locations/guild-hall',
				image: LocationIcons.find((e) => e.name === 'Guild Hall')?.icon,
			},
			{
				name: 'Bento',
				description: 'The various buffs provided by bentos summarized.',
				link: '/hunter-notes/locations/bento',
				image: LocationIcons.find((e) => e.name === 'Bento')?.icon,
			},
			{
				name: "Hunter's Road",
				description: 'The road skills list and how to upgrade them.',
				link: '/hunter-notes/locations/road',
				image: LocationIcons.find((e) => e.name === 'Road')?.icon,
			},
			{
				name: 'Gathering Maps',
				description:
					'The various gathering spots for all locations of the game.',
				link: '/hunter-notes/locations/gathering-maps',
				image: MapIconWhite,
			},
			{
				name: 'Caravan',
				description: 'Caravan gem, skills, colors, etc.',
				link: '/hunter-notes/locations/caravan',
				image: LocationIcons.find((e) => e.name === 'Caravan')?.icon,
			},
			{
				name: 'Blacksmith',
				description: 'List of NPC available at the Blacksmith.',
				link: '/hunter-notes/locations/blacksmith',
				image: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
			},
			{
				name: 'Diva Fountain',
				description:
					'See how to complete the Diva questline in order to earn various rewards.',
				link: '/hunter-notes/locations/diva-fountain',
				image: LocationIcons.find((e) => e.name === 'Diva Fountain')?.icon,
			},
			{
				name: 'My House',
				description: 'List of various options available in My House.',
				link: '/hunter-notes/locations/my-house',
				image: LocationIcons.find((e) => e.name === 'My House')?.icon,
			},
			{
				name: 'My Gallery',
				description: 'List of various options available in My Gallery.',
				link: '/hunter-notes/locations/my-gallery',
				image: LocationIcons.find((e) => e.name === 'My Gallery')?.icon,
			},
			{
				name: 'My Garden',
				description: 'List of various options available in My Garden.',
				link: '/hunter-notes/locations/my-garden',
				image: LocationIcons.find((e) => e.name === 'My Garden')?.icon,
			},
			{
				name: 'My Missions',
				description: 'List of various options available in My Missions.',
				link: '/hunter-notes/locations/my-missions',
				image: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
			},
			{
				name: 'My Support',
				description: 'List of various options available in My Support.',
				link: '/hunter-notes/locations/my-support',
				image: LocationIcons.find((e) => e.name === 'My Support')?.icon,
			},
			{
				name: 'My Tore',
				description: 'List of various options available in My Tore.',
				link: '/hunter-notes/locations/my-tore',
				image: LocationIcons.find((e) => e.name === 'My Tore')?.icon,
			},
			{
				name: 'Rasta Bar',
				description: 'List of various options available in the Rasta Bar.',
				link: '/hunter-notes/locations/rasta-bar',
				image: LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon,
			},
			{
				name: 'Tent',
				description: 'List of various options available in the Tent.',
				link: '/hunter-notes/locations/tent',
				image: LocationIcons.find((e) => e.name === 'Tent')?.icon,
			},
		],
	},
	{
		category: {
			name: 'Items',
			description: 'Information about various items in the game.',
			link: '/hunter-notes/items',
			image: AllItems,
		},
		pages: [
			{
				name: 'Item Box',
				description: 'Item Box capacity, presets and combinations.',
				link: '/hunter-notes/items/item-box',
				image: TrapToolIconWhite,
			},
			{
				name: 'Decorations',
				description: 'A list of decoration types.',
				link: '/hunter-notes/items/decorations',
				image: JewelIconWhite,
			},
			{
				name: 'Armor Spheres',
				description: 'List of armor spheres.',
				link: '/hunter-notes/items/armor-spheres',
				image: BallIconWhite,
			},
			{
				name: 'Special Items',
				description:
					'List of items that are unique to Frontier or adjust the quest rewards.',
				link: '/hunter-notes/items/special-items',
				image: TicketIconWhite,
			},
			{
				name: 'Medal Trades',
				description: 'List of items obtained by exchanging medals.',
				link: '/hunter-notes/items/medal-trades',
				image: SacIconWhite,
			},
		],
	},
	{
		category: {
			name: 'Events',
			description: 'Information about various events in the game.',
			link: '/hunter-notes/events',
			image: LocationIcons.find((e) => e.name === 'Mezfes')?.icon,
		},
		pages: [
			{
				name: 'Diva Defense',
				description:
					'The Diva Prayer Gems list, Song of War Chapter, Interception, etc.',
				link: '/hunter-notes/events/diva-defense',
				image: LocationIcons.find((e) => e.name === 'Interception')?.icon,
			},
			{
				name: 'Hunter Festival',
				description:
					"Hunting Competition, Soul gathering and Winner's Week information.",
				link: '/hunter-notes/events/hunter-festival',
				image: LocationIcons.find((e) => e.name === 'Festi')?.icon,
			},
			{
				name: 'Mezeporta Festival',
				description:
					"A list of minigames available during the festival's duration, with tips to get a highscore.",
				link: '/hunter-notes/events/mezeporta-festival',
				image: LocationIcons.find((e) => e.name === 'Mezfes')?.icon,
			},
			{
				name: "Wycademy's Events",
				description:
					"Information about time-limited events hosted by Wycademy's developers.",
				link: '/hunter-notes/events/wycademy-events',
				image: Logo,
			},
		],
	},
	{
		category: {
			name: 'Advanced',
			description: 'Tips for advanced hunters.',
			link: '/hunter-notes/advanced',
			image: LocationIcons.find((e) => e.name === 'Transcend')?.icon,
		},
		pages: [
			{
				name: 'Item Sets',
				description: 'The best item sets and how to obtain each item.',
				link: '/hunter-notes/advanced/item-sets',
				image: MedicineIconWhite,
			},
			{
				name: 'Item Interactions',
				description: 'Specific item interactions explained in greater detail.',
				link: '/hunter-notes/advanced/item-interactions',
				image: AllItems,
			},
			{
				name: 'Mechanics',
				description:
					'Various advanced mechanics of the game explained in great detail.',
				link: '/hunter-notes/advanced/mechanics',
				image: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
			},
			{
				name: 'Skills',
				description:
					'An overview of specific skill interactions, and which ones to use.',
				link: '/hunter-notes/advanced/skills',
				image: JewelIconWhite,
			},
		],
	},
];
