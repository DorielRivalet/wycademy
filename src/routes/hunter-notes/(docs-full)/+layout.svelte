<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Header from '../../Header.svelte';
	import Footer from '../../Footer.svelte';
	import ViewTransition from '../../Navigation.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount, SvelteComponent, type ComponentType } from 'svelte';
	import pageThumbnail from '$lib/client/images/wycademy.png';
	import { cursorVars } from '$lib/client/themes/cursor';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import {
		authorName,
		authorUrl,
		datePublished,
		developmentStage,
		projectName,
		website,
	} from '$lib/constants';
	import { goto } from '$app/navigation';
	import Head from '$lib/client/components/Head.svelte';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import TreeView, {
		type TreeNode,
	} from 'carbon-components-svelte/src/TreeView/TreeView.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import ExtremeSleep from '$lib/client/components/frontier/icon/ailment/ExtremeSleep.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import ShotIcon from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
	import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
	import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
	import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
	import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
	import Logo from '$lib/client/images/logo.svg';
	import Transcend from '$lib/client/images/icon/transcend.webp';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import {
		getNavigationItemFromLink,
		guidesInfo,
	} from '$lib/client/modules/routes';
	import { page } from '$app/stores';
	import { getMonsterByPathName } from '$lib/client/modules/frontier/monsters';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import type { FrontierMonsterNameExpanded } from '$lib/client/modules/frontier/types';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { getPageThumbnail } from '$lib/client/modules/thumbnails';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import SidePanelClose from 'carbon-icons-svelte/lib/SidePanelClose.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
	const cursorIcon = getContext(Symbol.for('cursorIcon')) as Writable<string>;
	const stickyHeaderStore = getContext(
		Symbol.for('stickyHeader'),
	) as Writable<boolean>;
	const bannerEnabledStore = getContext(
		Symbol.for('banner'),
	) as Writable<boolean>;
	const hunterNotesSidebarEnabledStore = getContext(
		Symbol.for('hunterNotesSidebar'),
	) as Writable<boolean>;

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	$: tokens = themeTokens[$carbonThemeStore] || themeTokens.default;
	export let data: LayoutData;

	type URLItem = { href: string; text: string };

	function deslugify(slug: string) {
		return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
	}

	/**Generate breadcrumb items and get navigation item from path name*/
	function processRoute(pathName: string) {
		// Split the route ID by '/'
		let routeLevels = pathName.split('/').filter(Boolean);

		// Remove elements that match the pattern (text in parentheses)
		routeLevels = routeLevels.filter((level) => !/\(.*\)/.test(level));

		const navigationItem = getNavigationItemFromLink(guidesInfo, pathName);
		const monster = getMonsterByPathName(pathName);

		// Generate breadcrumb items
		let items = [{ href: '/', text: 'Home' }];
		for (let i = 0; i < routeLevels.length; i++) {
			const levelSlug = routeLevels[i];
			const levelText = deslugify(levelSlug); // Convert slug to title case
			const levelHref = `/${routeLevels.slice(0, i + 1).join('/')}`; // Construct href
			items.push({ href: levelHref, text: levelText });
		}

		return { navigationItem, items, monster };
	}

	// Function to handle scroll events
	function handleScroll() {
		const currentScrollPos =
			window.scrollY || document.documentElement.scrollTop;
		if (currentScrollPos > lastScrollTop) {
			// Scrolling down - hide the header
			headerClass = 'header-hidden';
		} else {
			// Scrolling up - show the header
			headerClass = $stickyHeaderStore ? 'header sticky' : 'header';
		}
		lastScrollTop = currentScrollPos;
	}

	function onTOCToggleButtonPress(e: MouseEvent) {
		tocVisible = !tocVisible;
		hunterNotesSidebarEnabledStore.set(tocVisible ? true : false);

		if (tocVisible) {
			tocClass = 'aside';
			centerColumnClass = ''; // Reset to default width
		} else {
			tocClass = 'aside collapsed';
			centerColumnClass = 'expanded'; // Increase width to full
		}
	}

	let breadcrumbItems: URLItem[] = [];
	let headTitle = "Hunter's Notes — Frontier's Wycademy";
	let description =
		'Explore our guides and tutorials of Monster Hunter Frontier Z.\n\nDeveloped by Doriel Rivalet.';
	let image = pageThumbnail;

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	const children: TreeNode[] = [
		{
			id: '/hunter-notes/getting-started',
			text: 'Getting started',
			children: [
				{
					id: '/hunter-notes/getting-started/your-first-hunts',
					text: 'Your First Hunts',
				},
				{
					text: 'Style Rank',
					id: '/hunter-notes/getting-started/style-rank',
				},
				{
					id: '/hunter-notes/getting-started/elements',
					text: 'Elements',
				},
				{
					id: '/hunter-notes/getting-started/ailments',
					text: 'Ailments',
				},
				{
					id: '/hunter-notes/getting-started/transcend',
					text: 'Transcend',
				},
			],
		},
		{
			id: '/hunter-notes/monsters',
			text: 'Monsters',
			children: [
				{
					id: '/hunter-notes/monsters/overview',
					text: 'Overview',
				},
				{
					id: '/hunter-notes/monsters/exotics',
					text: 'Exotics',
				},
				{
					id: '/hunter-notes/monsters/origin',
					text: 'Origin',
				},
				{
					id: '/hunter-notes/monsters/burst',
					text: 'Burst',
				},
				{
					id: '/hunter-notes/monsters/supremacy',
					text: 'Supremacy',
				},
				{
					id: '/hunter-notes/monsters/duremudira',
					text: 'Duremudira',
				},
				{
					id: '/hunter-notes/monsters/zenith',
					text: 'Zenith',
				},
				{
					id: '/hunter-notes/monsters/raviente',
					text: 'Raviente',
				},
				{
					id: '/hunter-notes/monsters/conquest',
					text: 'Conquest',
				},
				{
					id: '/hunter-notes/monsters/shiten',
					text: 'Shiten',
				},
				{
					id: '/hunter-notes/monsters/unlimited',
					text: 'Unlimited',
				},
				{
					id: '/hunter-notes/monsters/musou',
					text: 'Musou',
				},
			],
		},
		{
			id: '/hunter-notes/weapons',
			text: 'Weapons',
			children: [
				{
					id: '/hunter-notes/weapons/overview',
					text: 'Overview',
				},
				{
					text: 'Sword and Shield',
					id: '/hunter-notes/weapons/sword-and-shield',
				},
				{
					text: 'Dual Swords',
					id: '/hunter-notes/weapons/dual-swords',
				},
				{
					text: 'Great Sword',
					id: '/hunter-notes/weapons/great-sword',
				},
				{
					text: 'Long Sword',
					id: '/hunter-notes/weapons/long-sword',
				},
				{
					text: 'Lance',

					id: '/hunter-notes/weapons/lance',
				},
				{
					text: 'Gunlance',

					id: '/hunter-notes/weapons/gunlance',
				},
				{
					text: 'Hammer',

					id: '/hunter-notes/weapons/hammer',
				},
				{
					text: 'Hunting Horn',

					id: '/hunter-notes/weapons/hunting-horn',
				},

				{
					text: 'Tonfa',

					id: '/hunter-notes/weapons/tonfa',
				},
				{
					text: 'Switch Axe F',

					id: '/hunter-notes/weapons/switch-axe-f',
				},
				{
					text: 'Magnet Spike',

					id: '/hunter-notes/weapons/magnet-spike',
				},
				{
					text: 'Light Bowgun',

					id: '/hunter-notes/weapons/light-bowgun',
				},
				{
					text: 'Heavy Bowgun',

					id: '/hunter-notes/weapons/heavy-bowgun',
				},
				{
					text: 'Bow',
					id: '/hunter-notes/weapons/bow',
				},
				{
					id: '/hunter-notes/weapons/sigils',
					text: 'Sigils',
				},
				{
					id: '/hunter-notes/weapons/critical-distance',
					text: 'Critical Distance',
				},
				{
					id: '/hunter-notes/weapons/active-feature',
					text: 'Active Feature',
				},
				{
					id: '/hunter-notes/weapons/tower',
					text: 'Tower Weapons',
				},
			],
		},
		{
			id: '/hunter-notes/armor',
			text: 'Armor',
			children: [
				{
					id: '/hunter-notes/armor/overview',
					text: 'Overview',
				},
				{
					id: '/hunter-notes/armor/skills',
					text: 'Skills',
				},
				{
					id: '/hunter-notes/armor/colors',
					text: 'Colors',
				},
				{
					id: '/hunter-notes/armor/transmog',
					text: 'Transmog',
				},
			],
		},
		{
			id: '/hunter-notes/locations',
			text: 'Locations',
			children: [
				{
					id: '/hunter-notes/locations/mezeporta-square',
					text: 'Mezeporta Square',
				},
				{
					id: '/hunter-notes/locations/guild-hall',
					text: 'Guild Hall',
				},
				{
					id: '/hunter-notes/locations/bento',
					text: 'Bento',
				},
				{
					id: '/hunter-notes/locations/road',
					text: "Hunter's Road",
				},
				{
					id: '/hunter-notes/locations/gathering-maps',
					text: 'Gathering Maps',
				},
				{
					id: '/hunter-notes/locations/caravan',
					text: 'Caravan',
				},
				{
					id: '/hunter-notes/locations/blacksmith',
					text: 'Blacksmith',
				},
				{
					id: '/hunter-notes/locations/prayer-fountain',
					text: 'Prayer Fountain',
				},
				{
					id: '/hunter-notes/locations/my-house',
					text: 'My House',
				},
				{
					id: '/hunter-notes/locations/my-gallery',
					text: 'My Gallery',
				},
				{
					id: '/hunter-notes/locations/my-garden',
					text: 'My Garden',
				},
				{
					id: '/hunter-notes/locations/my-missions',
					text: 'My Missions',
				},
				{
					id: '/hunter-notes/locations/my-support',
					text: 'My Support',
				},
				{
					id: '/hunter-notes/locations/my-tore',
					text: 'My Tore',
				},
				{
					id: '/hunter-notes/locations/rasta-bar',
					text: 'Rasta Bar',
				},
				{
					id: '/hunter-notes/locations/tent',
					text: 'Tent',
				},
			],
		},
		{
			id: '/hunter-notes/items',
			text: 'Items',
			children: [
				{
					id: '/hunter-notes/items/item-box',
					text: 'Item Box',
				},
				{
					id: '/hunter-notes/items/decorations',
					text: 'Decorations',
				},
				{
					id: '/hunter-notes/items/armor-spheres',
					text: 'Armor Spheres',
				},
				{
					id: '/hunter-notes/items/special-items',
					text: 'Special Items',
				},
				{
					id: '/hunter-notes/items/medal-trades',
					text: 'Medal Trades',
				},
			],
		},
		{
			id: '/hunter-notes/events',
			text: 'Events',
			children: [
				{
					id: '/hunter-notes/events/diva-defense',
					text: 'Diva Defense',
				},
				{
					id: '/hunter-notes/events/hunter-festival',
					text: 'Hunter Festival',
				},
				{
					id: '/hunter-notes/events/mezeporta-festival',
					text: 'Mezeporta Festival',
				},
				{
					id: '/hunter-notes/events/wycademy-events',
					text: "Wycademy's Events",
				},
			],
		},
		{
			id: '/hunter-notes/advanced',
			text: 'Advanced',
			children: [
				{
					id: '/hunter-notes/advanced/item-sets',
					text: 'Item Sets',
				},
				{
					id: '/hunter-notes/advanced/item-interactions',
					text: 'Item Interactions',
				},
				{
					id: '/hunter-notes/advanced/mechanics',
					text: 'Mechanics',
				},
				{
					id: '/hunter-notes/advanced/skills',
					text: 'Skills',
				},
			],
		},
	];

	const iconsMap: {
		id: string;
		icon: string | ComponentType<SvelteComponent>;
		iconProps?: {
			size?: string;
			currentMonster?: FrontierMonsterNameExpanded;
			background?: boolean;
		};
	}[] = [
		{ id: '/hunter-notes/getting-started', icon: BookIconWhite },
		{
			id: '/hunter-notes/getting-started/your-first-hunts',
			icon: BookIconWhite,
		},
		{
			id: '/hunter-notes/getting-started/style-rank',
			icon: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
		},
		{
			id: '/hunter-notes/getting-started/elements',
			icon: ElementIcons.find((e) => e.name === 'Tenshou')?.icon,
		},
		{ id: '/hunter-notes/getting-started/ailments', icon: ExtremeSleep },
		{ id: '/hunter-notes/getting-started/transcend', icon: Transcend },
		{
			id: '/hunter-notes/monsters',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Abiorugu',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/overview',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Rathalos',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/exotics',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Stygian Zinogre',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/origin',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Yama Kurai',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/burst',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Zerureusu',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/supremacy',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Supremacy Doragyurosu',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/duremudira',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Duremudira',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/zenith',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Bogabadorumu',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/raviente',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Berserk Raviente',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/conquest',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Conquest Fatalis',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/shiten',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Disufiroa',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/unlimited',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Akura Jebia',
				background: false,
			},
		},
		{
			id: '/hunter-notes/monsters/musou',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Blinking Nargacuga',
				background: false,
			},
		},
		{
			id: '/hunter-notes/weapons',
			icon: getWeaponIcon('Dual Swords'),
		},
		{
			id: '/hunter-notes/weapons/overview',
			icon: getWeaponIcon('Great Sword'),
		},
		{
			id: '/hunter-notes/weapons/sword-and-shield',
			icon: getWeaponIcon('Sword and Shield'),
		},
		{
			id: '/hunter-notes/weapons/dual-swords',
			icon: getWeaponIcon('Dual Swords'),
		},
		{
			id: '/hunter-notes/weapons/great-sword',
			icon: getWeaponIcon('Great Sword'),
		},
		{
			id: '/hunter-notes/weapons/long-sword',
			icon: getWeaponIcon('Long Sword'),
		},
		{
			id: '/hunter-notes/weapons/lance',
			icon: getWeaponIcon('Lance'),
		},
		{
			id: '/hunter-notes/weapons/gunlance',
			icon: getWeaponIcon('Gunlance'),
		},
		{
			id: '/hunter-notes/weapons/hammer',
			icon: getWeaponIcon('Hammer'),
		},
		{
			id: '/hunter-notes/weapons/hunting-horn',
			icon: getWeaponIcon('Hunting Horn'),
		},

		{
			id: '/hunter-notes/weapons/tonfa',
			icon: getWeaponIcon('Tonfa'),
		},
		{
			id: '/hunter-notes/weapons/switch-axe-f',
			icon: getWeaponIcon('Switch Axe F'),
		},
		{
			id: '/hunter-notes/weapons/magnet-spike',
			icon: getWeaponIcon('Magnet Spike'),
		},
		{
			id: '/hunter-notes/weapons/light-bowgun',
			icon: getWeaponIcon('Light Bowgun'),
		},
		{
			id: '/hunter-notes/weapons/heavy-bowgun',
			icon: getWeaponIcon('Heavy Bowgun'),
		},
		{
			id: '/hunter-notes/weapons/bow',
			icon: getWeaponIcon('Bow'),
		},
		{
			id: '/hunter-notes/weapons/sigils',
			icon: SigilIconWhite,
		},
		{
			id: '/hunter-notes/weapons/critical-distance',
			icon: ShotIcon,
		},
		{
			id: '/hunter-notes/weapons/active-feature',
			icon: getWeaponIcon('Magnet Spike'),
		},
		{
			id: '/hunter-notes/weapons/tower',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Duremudira',
				background: false,
			},
		},
		{
			id: '/hunter-notes/armor',
			icon: HelmetIconWhite,
		},
		{
			id: '/hunter-notes/armor/overview',
			icon: ChestIconWhite,
		},
		{
			id: '/hunter-notes/armor/skills',
			icon: JewelIconWhite,
		},
		{
			id: '/hunter-notes/armor/colors',
			icon: HelmetIconWhite,
		},
		{
			id: '/hunter-notes/armor/transmog',
			icon: HelmetIconWhite,
		},
		{
			id: '/hunter-notes/locations',
			icon: MapIconWhite,
		},
		{
			id: '/hunter-notes/locations/mezeporta-square',
			icon: LocationIcons.find((e) => e.name === 'Mezeporta')?.icon,
		},
		{
			id: '/hunter-notes/locations/guild-hall',
			icon: LocationIcons.find((e) => e.name === 'Guild Hall')?.icon,
		},
		{
			id: '/hunter-notes/locations/bento',
			icon: LocationIcons.find((e) => e.name === 'Bento')?.icon,
		},
		{
			id: '/hunter-notes/locations/road',
			icon: LocationIcons.find((e) => e.name === 'Road')?.icon,
		},
		{
			id: '/hunter-notes/locations/gathering-maps',
			icon: MapIconWhite,
		},
		{
			id: '/hunter-notes/locations/caravan',
			icon: LocationIcons.find((e) => e.name === 'Caravan')?.icon,
		},
		{
			id: '/hunter-notes/locations/blacksmith',
			icon: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
		},
		{
			id: '/hunter-notes/locations/prayer-fountain',
			icon: LocationIcons.find((e) => e.name === 'Prayer Fountain')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-house',
			icon: LocationIcons.find((e) => e.name === 'My House')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-gallery',
			icon: LocationIcons.find((e) => e.name === 'My Gallery')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-garden',
			icon: LocationIcons.find((e) => e.name === 'My Garden')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-missions',
			icon: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-support',
			icon: LocationIcons.find((e) => e.name === 'My Support')?.icon,
		},
		{
			id: '/hunter-notes/locations/my-tore',
			icon: LocationIcons.find((e) => e.name === 'My Tore')?.icon,
		},
		{
			id: '/hunter-notes/locations/rasta-bar',
			icon: LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon,
		},
		{
			id: '/hunter-notes/locations/tent',
			icon: LocationIcons.find((e) => e.name === 'Tent')?.icon,
		},
		{
			id: '/hunter-notes/items',
			icon: getItemIcon('Sac'),
		},
		{
			id: '/hunter-notes/items/item-box',
			icon: getItemIcon('Trap Tool'),
		},
		{
			id: '/hunter-notes/items/decorations',
			icon: getItemIcon('Jewel'),
		},
		{
			id: '/hunter-notes/items/armor-spheres',
			icon: getItemIcon('Ball'),
		},
		{
			id: '/hunter-notes/items/special-items',
			icon: getItemIcon('Ticket'),
		},
		{
			id: '/hunter-notes/items/medal-trades',
			icon: getItemIcon('Sac'),
		},
		{
			id: '/hunter-notes/events',
			icon: LocationIcons.find((e) => e.name === 'Diva Defense')?.icon,
		},
		{
			id: '/hunter-notes/events/diva-defense',
			icon: LocationIcons.find((e) => e.name === 'Diva Defense')?.icon,
		},
		{
			id: '/hunter-notes/events/hunter-festival',
			icon: LocationIcons.find((e) => e.name === 'Hunter Festival')?.icon,
		},
		{
			id: '/hunter-notes/events/mezeporta-festival',
			icon: LocationIcons.find((e) => e.name === 'Mezeporta Festival')?.icon,
		},
		{
			id: '/hunter-notes/events/wycademy-events',
			icon: Logo,
		},
		{
			id: '/hunter-notes/advanced',
			icon: MantleIconWhite,
		},
		{
			id: '/hunter-notes/advanced/item-sets',
			icon: MedicineIconWhite,
		},
		{
			id: '/hunter-notes/advanced/item-interactions',
			icon: BallIconWhite,
		},
		{
			id: '/hunter-notes/advanced/mechanics',
			icon: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
		},
		{
			id: '/hunter-notes/advanced/skills',
			icon: JewelIconWhite,
		},
	];

	let tocVisible = $hunterNotesSidebarEnabledStore;

	let centerColumnClass = tocVisible ? '' : 'expanded';
	let tocClass = tocVisible ? 'aside' : 'aside collapsed';

	let treeview: TreeView | null = null;

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';

	$: {
		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem, items, monster } = processRoute(pageUrlPathName);
		headTitle = monster
			? monster.displayName + " — Frontier's Wycademy"
			: navigationItem?.name
				? navigationItem?.name + " — Frontier's Wycademy"
				: "Hunter's Notes — Frontier's Wycademy";
		description = monster?.ecology
			? monster.ecology
			: (navigationItem?.description ?? description);
		image = monster?.fullRender
			? monster.fullRender
			: getPageThumbnail(
					$page.url.pathname,
					$page.url.searchParams.get('embed'),
					$page.url.searchParams.get('embed-theme'),
				);
		breadcrumbItems = items;
	}

	onMount(() => {
		let themeValue = $carbonThemeStore;
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		let cursorValue = $cursorIcon;
		cssVarMap = cursorVars[cursorValue] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		window.addEventListener('scroll', handleScroll);

		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem, items, monster } = processRoute(pageUrlPathName);
		headTitle = monster
			? monster.displayName + " — Frontier's Wycademy"
			: navigationItem?.name
				? navigationItem?.name + " — Frontier's Wycademy"
				: "Hunter's Notes — Frontier's Wycademy";
		description = monster?.ecology
			? monster.ecology
			: (navigationItem?.description ?? description);
		image = monster?.fullRender
			? monster.fullRender
			: getPageThumbnail(
					$page.url.pathname,
					$page.url.searchParams.get('embed'),
					$page.url.searchParams.get('embed-theme'),
				);
		breadcrumbItems = items;
		const unsubscribe = page.subscribe(($page) => {
			treeview?.showNode($page.url.pathname || '');
		});

		return () => {
			unsubscribe(); // Clean up the subscription on unmount
		};
	});
</script>

<LocalStorage
	bind:value={$hunterNotesSidebarEnabledStore}
	key="__hunter-notes-sidebar-enabled"
/>

<Head
	title={headTitle}
	{description}
	{image}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

<Theme
	bind:theme={$carbonThemeStore}
	persist
	persistKey="__carbon-theme"
	{tokens}
/>

{#if !tocVisible && $breakpointLargerThanMedium}
	<div class="expand-TOC">
		<Button
			iconDescription="Expand Sidebar"
			tooltipPosition="right"
			size="small"
			kind="ghost"
			icon={ChevronRight}
			on:click={onTOCToggleButtonPress}
		/>
	</div>
{/if}

<div class="app">
	<ViewTransition />

	<div class={headerClass}>
		<Header />
	</div>
	<div class="banner">
		{#if $bannerEnabledStore}
			<InlineNotification
				lowContrast
				kind="warning"
				title="Status:"
				on:close={() => bannerEnabledStore.set(false)}
				subtitle="This site is currently in {developmentStage}."
			>
				<svelte:fragment slot="actions">
					<NotificationActionButton
						on:click={() => goto('/support/website/development')}
						>Learn more</NotificationActionButton
					>
				</svelte:fragment>
			</InlineNotification>
		{/if}
	</div>
	<main>
		<aside class={tocClass}>
			<TreeView
				style="background-color: var(--ctp-mantle); position: sticky; top: 10vh;
				height: 85vh;"
				{children}
				let:node
				bind:this={treeview}
				><span slot="labelText">
					<Button
						iconDescription={'Close Sidebar'}
						tooltipPosition="right"
						kind="ghost"
						size={'small'}
						icon={SidePanelClose}
						on:click={onTOCToggleButtonPress}
					/></span
				>
				<a
					class="tree-view-item"
					href={node.id}
					style:color={node.selected ? 'var(--cds-interactive-04)' : 'inherit'}
				>
					<div>
						{#if typeof iconsMap.find((e) => e.id === node.id)?.icon === 'string'}
							<img
								width="24"
								src={iconsMap.find((e) => e.id === node.id)?.icon}
								alt="Tree Item Icon"
							/>
						{:else}
							<svelte:component
								this={iconsMap.find((e) => e.id === node.id)?.icon}
								{...{
									background: iconsMap.find((e) => e.id === node.id)?.iconProps
										?.background,
									size: '24px',
									currentMonster: iconsMap.find((e) => e.id === node.id)
										?.iconProps?.currentMonster,
								}}
							/>
						{/if}
					</div>
					<p>
						{node.text}
					</p>
				</a>
			</TreeView>
		</aside>
		<div class="body {centerColumnClass}">
			<div class="breadcrumb">
				<Breadcrumb noTrailingSlash>
					{#each breadcrumbItems as item, i}
						<BreadcrumbItem
							href={i === breadcrumbItems.length - 1 ? undefined : item.href}
							isCurrentPage={i === breadcrumbItems.length - 1}
							>{#if i !== breadcrumbItems.length - 1}
								{item.text}
							{/if}
						</BreadcrumbItem>
					{/each}
				</Breadcrumb>
			</div>
			<div class="slot">
				<slot />
			</div>
		</div>
	</main>
	{#key $page.url.pathname}
		<Footer gitHubData={data.github} />
	{/key}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
		max-width: 100vw;
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		top: 0;
		position: static;
		transition: top motion.$duration-fast-02 motion.motion(standard, productive);
	}

	.sticky {
		position: -webkit-sticky; /* For Safari */
		position: sticky;
		top: 0;
		z-index: 1000; /* Ensure it stays above other content */
	}

	.header-hidden {
		position: absolute;
		top: -3rem; /* Match the height of the header */
	}

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	main {
		display: flex;
		flex-direction: row;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		gap: 2rem;
		padding-right: 1rem;
		max-width: 100vw;
	}

	@media (min-width: 320px) {
		.aside {
			flex: 0 0 auto;
			transition: margin motion.$duration-fast-02
				motion.motion(standard, expressive);
			width: 16.67%;
			background-color: var(--ctp-mantle);
			display: none;
		}

		.aside.collapsed {
			margin-left: -16.67%;
			display: none;
		}

		.body {
			margin: auto;
			background-color: var(--ctp-base);
			width: 90%;
		}

		.body.expanded {
			margin: auto;
			width: 90%;
		}
	}

	@media (min-width: 1056px) {
		.aside {
			display: block;
			flex: 0 0 auto;
			transition: margin motion.$duration-fast-02
				motion.motion(standard, expressive);
			width: 16.67%;
			background-color: var(--ctp-mantle);
		}

		.aside.collapsed {
			display: block;
			margin-left: -16.67%;
		}

		.body {
			margin: 0 auto;
			flex-shrink: 1;
			background-color: var(--ctp-base);
			flex: 1 0 0%;
			width: calc(
				100% - 16.67%
			); // Directly adds the TOC width to the main content width
		}

		.body.expanded {
			width: 100%;
			transition: width motion.$duration-fast-02
				motion.motion(standard, expressive);
		}
	}

	.breadcrumb {
		margin-bottom: var(--cds-spacing-06);
		margin-top: var(--cds-spacing-06);
	}

	.tree-view-item {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
	}

	.expand-TOC {
		position: fixed; /* Position the button relative to the viewport */
		top: 50%; /* Position it in the middle vertically */
		left: 0%; /* Position it at the left edge of the viewport */
		padding: 0;
		margin: 0;
		z-index: 1000; /* Ensure the button is above other content */
	}

	.slot {
		padding-bottom: 2rem;
		min-height: 90vh;
	}
</style>
