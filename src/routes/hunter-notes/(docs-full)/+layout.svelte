<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { run } from 'svelte/legacy';

	import Header from '../../Header.svelte';
	import Footer from '../../Footer.svelte';
	import ViewTransition from '../../Navigation.svelte';
	import { onMount, Component } from 'svelte';
	import pageThumbnail from '$lib/client/images/wycademy.png';
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
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import SidePanelClose from 'carbon-icons-svelte/lib/SidePanelClose.svelte';
	import TreeView from '$lib/client/components/TreeView.svelte';

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

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

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

	let breadcrumbItems: URLItem[] = $state([]);
	let headTitle = $state("Hunter's Notes — Frontier's Wycademy");
	let description = $state(
		'Explore our guides and tutorials of Monster Hunter Frontier Z.\n\nDeveloped by Doriel Rivalet.',
	);
	let image = $state(pageThumbnail);

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	const treeData = [
		{
			id: '/hunter-notes/getting-started',
			text: 'Getting started',
			icon: BookIconWhite,
			nodes: [
				{
					id: '/hunter-notes/getting-started/your-first-hunts',
					text: 'Your First Hunts',
					icon: BookIconWhite,
				},
				{
					id: '/hunter-notes/getting-started/style-rank',
					text: 'Style Rank',
					icon: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
				},
				{
					id: '/hunter-notes/getting-started/elements',
					text: 'Elements',
					icon: ElementIcons.find((e) => e.name === 'Tenshou')?.icon,
				},
				{
					id: '/hunter-notes/getting-started/ailments',
					text: 'Ailments',
					icon: ExtremeSleep,
				},
				{
					id: '/hunter-notes/getting-started/transcend',
					text: 'Transcend',
					icon: Transcend,
				},
			],
		},
		{
			id: '/hunter-notes/monsters',
			text: 'Monsters',
			icon: MonsterComponent,
			iconProps: { currentMonster: 'Abiorugu', background: false },
			nodes: [
				{
					id: '/hunter-notes/monsters/overview',
					text: 'Overview',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Rathalos', background: false },
				},
				{
					id: '/hunter-notes/monsters/exotics',
					text: 'Exotics',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Stygian Zinogre', background: false },
				},
				{
					id: '/hunter-notes/monsters/origin',
					text: 'Origin',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Yama Kurai', background: false },
				},
				{
					id: '/hunter-notes/monsters/burst',
					text: 'Burst',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Zerureusu', background: false },
				},
				{
					id: '/hunter-notes/monsters/supremacy',
					text: 'Supremacy',
					icon: MonsterComponent,
					iconProps: {
						currentMonster: 'Supremacy Doragyurosu',
						background: false,
					},
				},
				{
					id: '/hunter-notes/monsters/duremudira',
					text: 'Duremudira',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Duremudira', background: false },
				},
				{
					id: '/hunter-notes/monsters/zenith',
					text: 'Zenith',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Bogabadorumu', background: false },
				},
				{
					id: '/hunter-notes/monsters/raviente',
					text: 'Raviente',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Berserk Raviente', background: false },
				},
				{
					id: '/hunter-notes/monsters/conquest',
					text: 'Conquest',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Conquest Fatalis', background: false },
				},
				{
					id: '/hunter-notes/monsters/shiten',
					text: 'Shiten',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Disufiroa', background: false },
				},
				{
					id: '/hunter-notes/monsters/unlimited',
					text: 'Unlimited',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Akura Jebia', background: false },
				},
				{
					id: '/hunter-notes/monsters/musou',
					text: 'Musou',
					icon: MonsterComponent,
					iconProps: {
						currentMonster: 'Blinking Nargacuga',
						background: false,
					},
				},
			],
		},
		{
			id: '/hunter-notes/weapons',
			text: 'Weapons',
			icon: getWeaponIcon('Dual Swords'),
			nodes: [
				{
					id: '/hunter-notes/weapons/overview',
					text: 'Overview',
					icon: getWeaponIcon('Great Sword'),
				},
				{
					id: '/hunter-notes/weapons/sword-and-shield',
					text: 'Sword and Shield',
					icon: getWeaponIcon('Sword and Shield'),
				},
				{
					id: '/hunter-notes/weapons/dual-swords',
					text: 'Dual Swords',
					icon: getWeaponIcon('Dual Swords'),
				},
				{
					id: '/hunter-notes/weapons/great-sword',
					text: 'Great Sword',
					icon: getWeaponIcon('Great Sword'),
				},
				{
					id: '/hunter-notes/weapons/long-sword',
					text: 'Long Sword',
					icon: getWeaponIcon('Long Sword'),
				},
				{
					id: '/hunter-notes/weapons/lance',
					text: 'Lance',
					icon: getWeaponIcon('Lance'),
				},
				{
					id: '/hunter-notes/weapons/gunlance',
					text: 'Gunlance',
					icon: getWeaponIcon('Gunlance'),
				},
				{
					id: '/hunter-notes/weapons/hammer',
					text: 'Hammer',
					icon: getWeaponIcon('Hammer'),
				},
				{
					id: '/hunter-notes/weapons/hunting-horn',
					text: 'Hunting Horn',
					icon: getWeaponIcon('Hunting Horn'),
				},
				{
					id: '/hunter-notes/weapons/tonfa',
					text: 'Tonfa',
					icon: getWeaponIcon('Tonfa'),
				},
				{
					id: '/hunter-notes/weapons/switch-axe-f',
					text: 'Switch Axe F',
					icon: getWeaponIcon('Switch Axe F'),
				},
				{
					id: '/hunter-notes/weapons/magnet-spike',
					text: 'Magnet Spike',
					icon: getWeaponIcon('Magnet Spike'),
				},
				{
					id: '/hunter-notes/weapons/light-bowgun',
					text: 'Light Bowgun',
					icon: getWeaponIcon('Light Bowgun'),
				},
				{
					id: '/hunter-notes/weapons/heavy-bowgun',
					text: 'Heavy Bowgun',
					icon: getWeaponIcon('Heavy Bowgun'),
				},
				{
					id: '/hunter-notes/weapons/bow',
					text: 'Bow',
					icon: getWeaponIcon('Bow'),
				},
				{
					id: '/hunter-notes/weapons/sigils',
					text: 'Sigils',
					icon: SigilIconWhite,
				},
				{
					id: '/hunter-notes/weapons/critical-distance',
					text: 'Critical Distance',
					icon: ShotIcon,
				},
				{
					id: '/hunter-notes/weapons/active-feature',
					text: 'Active Feature',
					icon: getWeaponIcon('Magnet Spike'),
				},
				{
					id: '/hunter-notes/weapons/tower',
					text: 'Tower Weapons',
					icon: MonsterComponent,
					iconProps: { currentMonster: 'Duremudira', background: false },
				},
			],
		},
		{
			id: '/hunter-notes/armor',
			text: 'Armor',
			icon: HelmetIconWhite,
			nodes: [
				{
					id: '/hunter-notes/armor/overview',
					text: 'Overview',
					icon: ChestIconWhite,
				},
				{
					id: '/hunter-notes/armor/skills',
					text: 'Skills',
					icon: JewelIconWhite,
				},
				{
					id: '/hunter-notes/armor/colors',
					text: 'Colors',
					icon: HelmetIconWhite,
				},
				{
					id: '/hunter-notes/armor/transmog',
					text: 'Transmog',
					icon: HelmetIconWhite,
				},
			],
		},
		{
			id: '/hunter-notes/locations',
			text: 'Locations',
			icon: MapIconWhite,
			nodes: [
				{
					id: '/hunter-notes/locations/mezeporta-square',
					text: 'Mezeporta Square',
					icon: LocationIcons.find((e) => e.name === 'Mezeporta')?.icon,
				},
				{
					id: '/hunter-notes/locations/guild-hall',
					text: 'Guild Hall',
					icon: LocationIcons.find((e) => e.name === 'Guild Hall')?.icon,
				},
				{
					id: '/hunter-notes/locations/bento',
					text: 'Bento',
					icon: LocationIcons.find((e) => e.name === 'Bento')?.icon,
				},
				{
					id: '/hunter-notes/locations/road',
					text: "Hunter's Road",
					icon: LocationIcons.find((e) => e.name === 'Road')?.icon,
				},
				{
					id: '/hunter-notes/locations/gathering-maps',
					text: 'Gathering Maps',
					icon: MapIconWhite,
				},
				{
					id: '/hunter-notes/locations/caravan',
					text: 'Caravan',
					icon: LocationIcons.find((e) => e.name === 'Caravan')?.icon,
				},
				{
					id: '/hunter-notes/locations/blacksmith',
					text: 'Blacksmith',
					icon: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
				},
				{
					id: '/hunter-notes/locations/prayer-fountain',
					text: 'Prayer Fountain',
					icon: LocationIcons.find((e) => e.name === 'Prayer Fountain')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-house',
					text: 'My House',
					icon: LocationIcons.find((e) => e.name === 'My House')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-gallery',
					text: 'My Gallery',
					icon: LocationIcons.find((e) => e.name === 'My Gallery')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-garden',
					text: 'My Garden',
					icon: LocationIcons.find((e) => e.name === 'My Garden')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-missions',
					text: 'My Missions',
					icon: LocationIcons.find((e) => e.name === 'My Missions')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-support',
					text: 'My Support',
					icon: LocationIcons.find((e) => e.name === 'My Support')?.icon,
				},
				{
					id: '/hunter-notes/locations/my-tore',
					text: 'My Tore',
					icon: LocationIcons.find((e) => e.name === 'My Tore')?.icon,
				},
				{
					id: '/hunter-notes/locations/rasta-bar',
					text: 'Rasta Bar',
					icon: LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon,
				},
				{
					id: '/hunter-notes/locations/tent',
					text: 'Tent',
					icon: LocationIcons.find((e) => e.name === 'Tent')?.icon,
				},
			],
		},
		{
			id: '/hunter-notes/items',
			text: 'Items',
			icon: getItemIcon('Sac'),
			nodes: [
				{
					id: '/hunter-notes/items/item-box',
					text: 'Item Box',
					icon: getItemIcon('Trap Tool'),
				},
				{
					id: '/hunter-notes/items/decorations',
					text: 'Decorations',
					icon: getItemIcon('Jewel'),
				},
				{
					id: '/hunter-notes/items/armor-spheres',
					text: 'Armor Spheres',
					icon: getItemIcon('Ball'),
				},
				{
					id: '/hunter-notes/items/special-items',
					text: 'Special Items',
					icon: getItemIcon('Ticket'),
				},
				{
					id: '/hunter-notes/items/medal-trades',
					text: 'Medal Trades',
					icon: getItemIcon('Sac'),
				},
			],
		},
		{
			id: '/hunter-notes/events',
			text: 'Events',
			icon: LocationIcons.find((e) => e.name === 'Diva Defense')?.icon,
			nodes: [
				{
					id: '/hunter-notes/events/diva-defense',
					text: 'Diva Defense',
					icon: LocationIcons.find((e) => e.name === 'Diva Defense')?.icon,
				},
				{
					id: '/hunter-notes/events/hunter-festival',
					text: 'Hunter Festival',
					icon: LocationIcons.find((e) => e.name === 'Hunter Festival')?.icon,
				},
				{
					id: '/hunter-notes/events/mezeporta-festival',
					text: 'Mezeporta Festival',
					icon: LocationIcons.find((e) => e.name === 'Mezeporta Festival')
						?.icon,
				},
				{
					id: '/hunter-notes/events/wycademy-events',
					text: "Wycademy's Events",
					icon: Logo,
				},
			],
		},
		{
			id: '/hunter-notes/advanced',
			text: 'Advanced',
			icon: MantleIconWhite,
			nodes: [
				{
					id: '/hunter-notes/advanced/item-sets',
					text: 'Item Sets',
					icon: MedicineIconWhite,
				},
				{
					id: '/hunter-notes/advanced/item-interactions',
					text: 'Item Interactions',
					icon: BallIconWhite,
				},
				{
					id: '/hunter-notes/advanced/mechanics',
					text: 'Mechanics',
					icon: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
				},
				{
					id: '/hunter-notes/advanced/skills',
					text: 'Skills',
					icon: JewelIconWhite,
				},
			],
		},
	];

	let tocVisible = $state($hunterNotesSidebarEnabledStore);

	let centerColumnClass = $derived(tocVisible ? '' : 'expanded');
	let tocClass = $derived(tocVisible ? 'aside' : 'aside collapsed');

	let headerClass = $state($stickyHeaderStore ? 'header sticky' : 'header');

	// TODO unsure
	run(() => {
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
	});

	onMount(() => {
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
				{#snippet actions()}
					<NotificationActionButton
						on:click={() => goto('/support/website/development')}
						>Learn more</NotificationActionButton
					>
				{/snippet}
			</InlineNotification>
		{/if}
	</div>
	<main>
		<aside class={tocClass} style="background-color:var(--ctp-surface0)">
			<div class="aside-contents">
				<Button
					iconDescription={'Close Sidebar'}
					tooltipPosition="right"
					kind="ghost"
					size={'small'}
					icon={SidePanelClose}
					on:click={onTOCToggleButtonPress}
				/>
				<TreeView items={treeData} />
			</div>
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
				{@render children?.()}
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

	.aside-contents {
		position: sticky;
		top: 5vh;
		padding-bottom: 2rem;
		padding-top: 0.5rem;
		overflow-y: auto;
		height: 90vh;
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
