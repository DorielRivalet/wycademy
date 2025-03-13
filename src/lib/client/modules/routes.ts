import type { Component } from 'svelte';
import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
import { LocationIcons } from './frontier/locations';
import StygianZinogre from '$lib/client/components/frontier/icon/monster/StygianZinogre.svelte';
import YamaKurai from '$lib/client/components/frontier/icon/monster/YamaKurai.svelte';
import Zerureusu from '$lib/client/components/frontier/icon/monster/Zerureusu.svelte';
import SupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
import Bogabadorumu6 from '$lib/client/components/frontier/icon/monster/Bogabadorumu.svelte';
import BerserkRaviente from '$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte';
import ConquestFatalis7 from '$lib/client/components/frontier/icon/monster/ConquestFatalis.svelte';
import AkuraJebia2 from '$lib/client/components/frontier/icon/monster/AkuraJebia.svelte';
import BurningFreezingElzelion2 from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion.svelte';
import AllWeapons from '$lib/client/components/frontier/icon/weapon/AllWeapons.svelte';
import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
import AllArmors from '$lib/client/components/frontier/icon/armor/AllArmors.svelte';
import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import UNKNOWN from '$lib/client/images/monster/shiten_unknown.webp';
import Logo from '$lib/client/images/logo.svg';
import MedicineIconWhite from '../components/frontier/icon/item/Medicine_Icon_White.svelte';
import Bullhorn from 'carbon-icons-svelte/lib/Bullhorn.svelte';
import Development from 'carbon-icons-svelte/lib/Development.svelte';
import DocumentRequirements from 'carbon-icons-svelte/lib/DocumentRequirements.svelte';
import Email from 'carbon-icons-svelte/lib/Email.svelte';
import Group from 'carbon-icons-svelte/lib/Group.svelte';
import InformationSquare from 'carbon-icons-svelte/lib/InformationSquare.svelte';
import VideoPlayer from 'carbon-icons-svelte/lib/VideoPlayer.svelte';
import PiggyBank from 'carbon-icons-svelte/lib/PiggyBank.svelte';
import QuestionAnswering from 'carbon-icons-svelte/lib/QuestionAnswering.svelte';
import GroupSecurity from 'carbon-icons-svelte/lib/GroupSecurity.svelte';

// TODO replace monster icons with monstercomponent?
import Duremudira from '$lib/client/components/frontier/icon/monster/Duremudira.svelte';
import KnifeIconWhite from '../components/frontier/icon/item/Knife_Icon_White.svelte';
import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
import AllItems from '../components/frontier/icon/item/AllItems.svelte';
import AllMonsters from '$lib/client/components/frontier/icon/monster/AllMonsters.svelte';
import { monsterInfo } from './frontier/monsters';
import { getWeaponIcon } from './frontier/weapons';
import Binoculars from '$lib/client/images/icon/svg/Binoculars_Icon_White.svg';
import { getArmorIcon } from './frontier/armor';
import License from 'carbon-icons-svelte/lib/License.svelte';
import ReferenceArchitecture from 'carbon-icons-svelte/lib/ReferenceArchitecture.svelte';
import Link from 'carbon-icons-svelte/lib/Link.svelte';
import AllElements from '../components/frontier/icon/element/AllElements.svelte';
import AllAilments from '../components/frontier/icon/ailment/AllAilments.svelte';
import Security from 'carbon-icons-svelte/lib/Security.svelte';
import UserFeedback from 'carbon-icons-svelte/lib/UserFeedback.svelte';
import Tools from 'carbon-icons-svelte/lib/Tools.svelte';

// TODO more fields? for search index
export type NavigationItem = {
	name: string;
	description: string;
	link: string;
	image: string | Component | undefined;
};

export type CategoryInfo = {
	category: NavigationItem;
	pages: NavigationItem[];
};

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

// This affects the header megamenu, homepage counters and the page navigation tiles, not the sidebar lists.

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
			// {
			// 	name: 'FAQ',
			// 	description: 'Frequently Asked Questions.',
			// 	link: '/support/website/faq',
			// 	image: QuestionAnswering,
			// },
			{
				name: 'Feedback',
				description: 'Feedback and surveys.',
				link: '/support/website/feedback',
				image: UserFeedback,
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
			name: 'Policies',
			description:
				'Legal information about the website. Policies are enforced by the website and describe standards all users have to follow.',
			link: '/support/policies',
			image: BookIconWhite,
		},
		pages: [
			{
				name: 'Terms of Service',
				description: 'Terms of Service.',
				link: '/support/policies/terms-of-service',
				image: DocumentRequirements,
			},
			{
				name: 'Privacy Policy',
				description: 'Privacy Policy.',
				link: '/support/policies/privacy-policy',
				image: DocumentRequirements,
			},
			{
				name: 'Copyright',
				description: 'Our stance on copyright and intellectual property.',
				link: '/support/policies/copyright',
				image: License,
			},
			{
				name: 'Acknowledgements',
				description: 'Acknowledgements and licenses.',
				link: '/support/policies/acknowledgements',
				image: License,
			},
			{
				name: 'Security',
				description: 'Information about the security of the website.',
				link: '/support/policies/security',
				image: Security,
			},
			{
				name: 'Community Standards',
				description: 'Standards for community conduct and interactions',
				link: '/support/policies/community-standards',
				image: GroupSecurity,
			},
		],
	},
	// {
	// 	category: {
	// 		name: 'Wycademy Documentation',
	// 		description: "Documentation about the website's code and design.",
	// 		link: '/support/wycademy-documentation',
	// 		image: BookIconWhite,
	// 	},
	// 	pages: [
	// 		{
	// 			name: 'Architecture',
	// 			description: 'Architecture of the website.',
	// 			link: '/support/wycademy-documentation/architecture',
	// 			image: ReferenceArchitecture,
	// 		},
	// 	],
	// },
	// {
	// 	category: {
	// 		name: 'Overlay Documentation',
	// 		description: "Documentation about the overlay's code and design.",
	// 		link: '/support/overlay-documentation',
	// 		image: BookIconWhite,
	// 	},
	// 	pages: [
	// 		{
	// 			name: 'Architecture',
	// 			description: 'Architecture of the overlay.',
	// 			link: '/support/overlay-documentation/architecture',
	// 			image: ReferenceArchitecture,
	// 		},
	// 	],
	// },
	{
		category: {
			name: 'External',
			description:
				'External websites. If you wish to add or remove from this list, see our GitHub issue tracker and select the External Tools template.',
			link: '/support/external',
			image: BookIconWhite,
		},
		pages: [
			{
				name: 'Websites',
				description:
					'List of external websites. If you wish to add or remove from this list, see our GitHub issue tracker and select the External Tools template.',
				link: '/support/external/websites',
				image: Link,
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
			// {
			// 	name: 'Gunlance Shells & Wyvernfire',
			// 	description: 'A Gunlance Shells & Wyvernfire calculator.',
			// 	image: getWeaponIcon('Gunlance'),
			// 	link: '/tools/calculator/gunlance-shells-and-wyvernfire',
			// },
			// {
			// 	name: 'Heavy Bowgun Heat Beam',
			// 	description: 'A Heavy Bowgun Heat Beam calculator.',
			// 	image: getWeaponIcon('Heavy Bowgun'),
			// 	link: '/tools/calculator/heavy-bowgun-heat-beam',
			// },
			{
				name: 'Sigils',
				description: 'A sigils calculator; includes formulas and graphs.',
				image: SigilIconWhite,
				link: '/tools/calculator/sigil',
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
			{
				name: 'Sigils',
				description: 'A sigils simulator.', // TODO add these + more to search index
				image: SigilIconWhite,
				link: '/tools/simulator/sigil',
			},
			{
				name: 'Partner Skills',
				description: 'A partner skills simulator, including the skill tree.',
				image: JewelIconWhite,
				link: '/tools/simulator/partner-skills',
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
				image: monsterInfo.find((e) => e.displayName === 'Abiorugu')?.icon,
				link: '/tools/generator/icon',
			},
			{
				name: 'Thumbnail',
				description: 'A thumbnail generator, for example YouTube thumbnails.',
				image: VideoPlayer,
				link: '/tools/generator/thumbnail',
			},
		],
	},
	{
		category: {
			name: 'External',
			description:
				'External tools for the game made by the community. If you wish to add or remove from this list, see our GitHub issue tracker and select the External Tools template.',
			image: Logo,
			link: '/tools/external',
		},
		pages: [
			{
				name: 'MHFZZDatabase', // the order is intentional
				description:
					'A companion android app for Monster Hunter Frontier Z by theMaelstro.',
				link: '/tools/external/mhfzzdatabase',
				image: Tools,
			},
			{
				name: 'mhfz-overlay',
				description:
					'A simple, customizable overlay with Discord Rich Presence integration for Monster Hunter Frontier Z on Windows.',
				link: '/tools/external/overlay',
				image: Logo,
			},
			{
				name: 'EZlion',
				description: 'The Frontier API.',
				link: '/tools/external/ezlion',
				image:
					'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
			},
			{
				name: 'Erupe',
				description: 'Monster Hunter Frontier Server Emulator by ZeruLight.',
				link: '/tools/external/erupe',
				image: Tools,
			},
			{
				name: 'FrontierTextHandler',
				description:
					'Easy to use Python tools to import/export text data from Monster Hunter Frontier files by Houmgaor.',
				link: '/tools/external/frontier-text-handler',
				image: Tools,
			},
			{
				name: 'MHFrontier-Blender-Addon',
				description:
					'A model importer for Monster Hunter Frontier Files by Houmgaor.',
				link: '/tools/external/mhfrontier-blender-addon',
				image: Tools,
			},
			{
				name: 'Monster-Hunter-Frontier-Patterns',
				description:
					'ImHex pattern files documenting the structure of data in Monster Hunter Frontier by var-username.',
				link: '/tools/external/monster-hunter-frontier-patterns',
				image: Tools,
			},
		],
	},
	// {
	// 	category: {
	// 		name: 'Search',
	// 		description: 'Searching tools.',
	// 		image: Binoculars,
	// 		link: '/tools/search',
	// 	},
	// 	pages: [
	// 		{
	// 			name: 'Armor Set Searcher',
	// 			description: "Wycademy's Armor Set Searcher (WASS).",
	// 			link: '/tools/search/armor-set-searcher',
	// 			image: getArmorIcon('Stand'),
	// 		},
	// 		{
	// 			name: 'Advanced Search',
	// 			description:
	// 				'Advanced Search: items, weapons, gear, monsters, and much more.',
	// 			link: '/tools/search/advanced-search',
	// 			image: Logo,
	// 		},
	// 	],
	// },
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
				name: 'Style Rank',
				description:
					'An overview of Weapon Styles, Style Rank Skills, Style Rank Stats, My Mission, Hiden and more.',
				link: '/hunter-notes/getting-started/style-rank',
				image: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
			},
			{
				name: 'Elements',
				description:
					'The elements of weapons and monsters. Includes combo elements and elemental resistances.',
				link: '/hunter-notes/getting-started/elements',
				image: AllElements,
			},
			{
				name: 'Ailments',
				description:
					"The status effects of both weapons and monsters. Includes monsters' status immunities.",
				link: '/hunter-notes/getting-started/ailments',
				image: AllAilments,
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
				image: YamaKurai,
			},
			// {
			// 	name: 'Burst',
			// 	description: 'The list of burst monsters.',
			// 	link: '/hunter-notes/monsters/burst',
			// 	image: Zerureusu,
			// },
			// {
			// 	name: 'Supremacy',
			// 	description: 'The list of supremacy monsters and how to beat them.',
			// 	link: '/hunter-notes/monsters/supremacy',
			// 	image: SupremacyTeostra,
			// },
			// {
			// 	name: 'Duremudira',
			// 	description:
			// 		'An explanation of Tower gear and skills, and how to beat 2nd District Duremudira.',
			// 	link: '/hunter-notes/monsters/duremudira',
			// 	image: Duremudira,
			// },
			// {
			// 	name: 'Zenith',
			// 	description:
			// 		'The list of zenith monsters and how to beat them; their gear and skills.',
			// 	link: '/hunter-notes/monsters/zenith',
			// 	image: Bogabadorumu6,
			// },
			{
				name: 'Raviente',
				description:
					'The list of Evolution weapons and their upgrade tree, Raviente armor, and a tutorial for slaying and supporting during a Raviente raid.',
				link: '/hunter-notes/monsters/raviente',
				image: BerserkRaviente,
			},
			// {
			// 	name: 'Conquest',
			// 	description:
			// 		'The list of conquest monsters and how to beat them; their materials and stats.',
			// 	link: '/hunter-notes/monsters/conquest',
			// 	image: ConquestFatalis7,
			// },
			// {
			// 	name: 'Shiten',
			// 	description:
			// 		'The list of shiten monsters and how to beat them; their sigils and stats.',
			// 	link: '/hunter-notes/monsters/shiten',
			// 	image: UNKNOWN,
			// },
			// {
			// 	name: 'Unlimited',
			// 	description:
			// 		'The list of unlimited (UL) monsters and their rewards upon hunting them.',
			// 	link: '/hunter-notes/monsters/unlimited',
			// 	image: AkuraJebia2,
			// },
			// {
			// 	name: 'Musou',
			// 	description: 'The list of musou monsters and how to beat them.',
			// 	link: '/hunter-notes/monsters/musou',
			// 	image: BurningFreezingElzelion2,
			// },
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
			{
				name: 'Tower Weapons',
				description: 'An overview on tower weapons.',
				link: '/hunter-notes/weapons/tower',
				image: Duremudira,
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
			// {
			// 	name: 'Overview',
			// 	description: 'An overview of armor types.',
			// 	link: '/hunter-notes/armor/overview',
			// 	image: AllArmors,
			// },
			{
				name: 'Skills',
				description:
					'The list of armor skills, including zenith skills, skill slots and skills priority.',
				link: '/hunter-notes/armor/skills',
				image: JewelIconWhite,
			},
			{
				name: 'Colors',
				description: 'The list of armor pigment colors and how to unlock them.',
				link: '/hunter-notes/armor/colors',
				image: AllArmors,
			},
			// {
			// 	name: 'Transmog',
			// 	description: 'How to unlock transmog.',
			// 	link: '/hunter-notes/armor/transmog',
			// 	image: AllArmors,
			// },
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
			// {
			// 	name: 'Mezeporta Square',
			// 	description: 'List of NPC available at Mezeporta Square.',
			// 	link: '/hunter-notes/locations/mezeporta-square',
			// 	image: LocationIcons.find((e) => e.name === 'Mezeporta')?.icon,
			// },
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
			// {
			// 	name: "Hunter's Road",
			// 	description: 'The road skills list and how to upgrade them.',
			// 	link: '/hunter-notes/locations/road',
			// 	image: LocationIcons.find((e) => e.name === 'Road')?.icon,
			// },
			// {
			// 	name: 'Gathering Maps',
			// 	description:
			// 		'The various gathering spots for all locations of the game.',
			// 	link: '/hunter-notes/locations/gathering-maps',
			// 	image: MapIconWhite,
			// },
			{
				name: 'Caravan',
				description: 'Caravan gem, skills, colors, etc.',
				link: '/hunter-notes/locations/caravan',
				image: LocationIcons.find((e) => e.name === 'Caravan')?.icon,
			},
			// {
			// 	name: 'Blacksmith',
			// 	description: 'List of NPC available at the Blacksmith.',
			// 	link: '/hunter-notes/locations/blacksmith',
			// 	image: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
			// },
			{
				name: 'Prayer Fountain',
				description:
					'See how to complete the Diva questline in order to earn various rewards.',
				link: '/hunter-notes/locations/prayer-fountain',
				image: LocationIcons.find((e) => e.name === 'Prayer Fountain')?.icon,
			},
			// {
			// 	name: 'My House',
			// 	description: 'List of various options available in My House.',
			// 	link: '/hunter-notes/locations/my-house',
			// 	image: LocationIcons.find((e) => e.name === 'My House')?.icon,
			// },
			// {
			// 	name: 'My Gallery',
			// 	description: 'List of various options available in My Gallery.',
			// 	link: '/hunter-notes/locations/my-gallery',
			// 	image: LocationIcons.find((e) => e.name === 'My Gallery')?.icon,
			// },
			// {
			// 	name: 'My Garden',
			// 	description: 'List of various options available in My Garden.',
			// 	link: '/hunter-notes/locations/my-garden',
			// 	image: LocationIcons.find((e) => e.name === 'My Garden')?.icon,
			// },
			// {
			// 	name: 'My Missions',
			// 	description: 'List of various options available in My Missions.',
			// 	link: '/hunter-notes/locations/my-missions',
			// 	image: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
			// },
			// {
			// 	name: 'My Support',
			// 	description: 'List of various options available in My Support.',
			// 	link: '/hunter-notes/locations/my-support',
			// 	image: LocationIcons.find((e) => e.name === 'My Support')?.icon,
			// },
			// {
			// 	name: 'My Tore',
			// 	description: 'List of various options available in My Tore.',
			// 	link: '/hunter-notes/locations/my-tore',
			// 	image: LocationIcons.find((e) => e.name === 'My Tore')?.icon,
			// },
			{
				name: 'Rasta Bar',
				description: 'List of various options available in the Rasta Bar.',
				link: '/hunter-notes/locations/rasta-bar',
				image: LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon,
			},
			// {
			// 	name: 'Tent',
			// 	description: 'List of various options available in the Tent.',
			// 	link: '/hunter-notes/locations/tent',
			// 	image: LocationIcons.find((e) => e.name === 'Tent')?.icon,
			// },
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
			// {
			// 	name: 'Item Box',
			// 	description: 'Item Box capacity, presets and combinations.',
			// 	link: '/hunter-notes/items/item-box',
			// 	image: TrapToolIconWhite,
			// },
			// {
			// 	name: 'Decorations',
			// 	description: 'A list of decoration types.',
			// 	link: '/hunter-notes/items/decorations',
			// 	image: JewelIconWhite,
			// },
			// {
			// 	name: 'Armor Spheres',
			// 	description: 'List of armor spheres.',
			// 	link: '/hunter-notes/items/armor-spheres',
			// 	image: BallIconWhite,
			// },
			{
				name: 'Special Items',
				description:
					'List of items that are unique to Frontier or adjust the quest rewards.',
				link: '/hunter-notes/items/special-items',
				image: TicketIconWhite,
			},
			// {
			// 	name: 'Medal Trades',
			// 	description: 'List of items obtained by exchanging medals.',
			// 	link: '/hunter-notes/items/medal-trades',
			// 	image: SacIconWhite,
			// },
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
			// {
			// 	name: 'Hunter Festival',
			// 	description:
			// 		"Hunting Competition, Soul gathering and Winner's Week information.",
			// 	link: '/hunter-notes/events/hunter-festival',
			// 	image: LocationIcons.find((e) => e.name === 'Festi')?.icon,
			// },
			// {
			// 	name: 'Mezeporta Festival',
			// 	description:
			// 		"A list of minigames available during the festival's duration, with tips to get a highscore.",
			// 	link: '/hunter-notes/events/mezeporta-festival',
			// 	image: LocationIcons.find((e) => e.name === 'Mezfes')?.icon,
			// },
			{
				name: "Wycademy's Events",
				description:
					"Information about time-limited events hosted by Wycademy's developers.",
				link: '/hunter-notes/events/wycademy-events',
				image: Logo,
			},
		],
	},
	// {
	// 	category: {
	// 		name: 'Advanced',
	// 		description: 'Tips for advanced hunters.',
	// 		link: '/hunter-notes/advanced',
	// 		image: LocationIcons.find((e) => e.name === 'Transcend')?.icon,
	// 	},
	// 	pages: [
	// 		{
	// 			name: 'Item Sets',
	// 			description: 'The best item sets and how to obtain each item.',
	// 			link: '/hunter-notes/advanced/item-sets',
	// 			image: MedicineIconWhite,
	// 		},
	// 		{
	// 			name: 'Item Interactions',
	// 			description: 'Specific item interactions explained in greater detail.',
	// 			link: '/hunter-notes/advanced/item-interactions',
	// 			image: AllItems,
	// 		},
	// 		{
	// 			name: 'Mechanics',
	// 			description:
	// 				'Various advanced mechanics of the game explained in great detail.',
	// 			link: '/hunter-notes/advanced/mechanics',
	// 			image: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
	// 		},
	// 		{
	// 			name: 'Skills',
	// 			description:
	// 				'An overview of specific skill interactions, and which ones to use.',
	// 			link: '/hunter-notes/advanced/skills',
	// 			image: JewelIconWhite,
	// 		},
	// 	],
	// },
];
