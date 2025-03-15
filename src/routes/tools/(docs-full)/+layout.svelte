<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { run } from 'svelte/legacy';

	import Header from '../../Header.svelte';
	import Footer from '../../Footer.svelte';
	import ViewTransition from '../../Navigation.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
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
	import Breadcrumb from '$lib/client/components/Breadcrumb.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
	import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
	import Logo from '$lib/client/images/logo.svg';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import KnifeIconWhite from '$lib/client/components/frontier/icon/item/Knife_Icon_White.svelte';
	import VideoPlayer from 'carbon-icons-svelte/lib/VideoPlayer.svelte';
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import {
		getNavigationItemFromLink,
		toolsInfo,
	} from '$lib/client/modules/routes';
	import { getPageThumbnail } from '$lib/client/modules/thumbnails';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import Binoculars from '$lib/client/images/icon/svg/Binoculars_Icon_White.svg';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import SidePanelClose from 'carbon-icons-svelte/lib/SidePanelClose.svelte';
	import TreeView from '$lib/client/components/TreeView.svelte';
	import type { TreeItem } from '$lib/client/types/tree-item';
	import Tools from 'carbon-icons-svelte/lib/Tools.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
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

	function deslugify(slug: string) {
		return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
	}

	/**Generate breadcrumb items and get navigation item from path name*/
	function processRoute(pathName: string) {
		// Split the route ID by '/'
		let routeLevels = pathName.split('/').filter(Boolean);

		// Remove elements that match the pattern (text in parentheses)
		routeLevels = routeLevels.filter((level) => !/\(.*\)/.test(level));

		const navigationItem = getNavigationItemFromLink(toolsInfo, pathName);

		// Generate breadcrumb items
		let items = [{ href: '/', text: 'Home' }];
		for (let i = 0; i < routeLevels.length; i++) {
			const levelSlug = routeLevels[i];
			const levelText = deslugify(levelSlug); // Convert slug to title case
			const levelHref = `/${routeLevels.slice(0, i + 1).join('/')}`; // Construct href
			items.push({ href: levelHref, text: levelText });
		}

		return { navigationItem, items };
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
	}

	let headTitle = $state("Tools and Utilities — Frontier's Wycademy");
	let description = $state(
		'Explore our tools and utilities of Monster Hunter Frontier Z.\n\nCalculate things such as your damage, use a tower weapon simulator, generate weapon images, and much more.\n\nDeveloped by Doriel Rivalet.',
	);

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	const treeData: TreeItem[] = [
		{
			id: '/tools/calculator',
			text: 'Calculator',
			icon: KnifeIconWhite,
			nodes: [
				{
					id: '/tools/calculator/damage',
					href: '/tools/calculator/damage',
					icon: getWeaponIcon('Great Sword'),
					text: 'Damage',
				},
				{
					id: '/tools/calculator/ice-age',
					href: '/tools/calculator/ice-age',
					icon: JewelIconWhite,
					text: 'Ice Age',
				},
				{
					id: '/tools/calculator/crit-conversion',
					href: '/tools/calculator/crit-conversion',
					text: 'Crit Conversion',
					icon: JewelIconWhite,
				},
				{
					id: '/tools/calculator/gunlance-shells-and-wyvernfire',
					href: '/tools/calculator/gunlance-shells-and-wyvernfire',
					text: 'Gunlance Shells & Wyvernfire',
					icon: getWeaponIcon('Gunlance'),
				},
				{
					id: '/tools/calculator/heavy-bowgun-heat-beam',
					href: '/tools/calculator/heavy-bowgun-heat-beam',
					text: 'Heavy Bowgun Heat Beam',
					icon: getWeaponIcon('Heavy Bowgun'),
				},
				{
					id: '/tools/calculator/sigil',
					href: '/tools/calculator/sigil',
					icon: getItemIcon('Sigil'),
					text: 'Sigils',
				},
			],
		},
		{
			id: '/tools/simulator',
			text: 'Simulator',
			icon: getLocationIcon('Blacksmith'),
			nodes: [
				{
					id: '/tools/simulator/tower-weapon',
					href: '/tools/simulator/tower-weapon',
					icon: MonsterComponent,
					iconProps: {
						currentMonster: 'Duremudira',
						background: false,
					},
					text: 'Tower Weapon',
				},
				{
					id: '/tools/simulator/sigil',
					href: '/tools/simulator/sigil',
					icon: SigilIconWhite,
					text: 'Sigils',
				},
				{
					id: '/tools/simulator/partner-skills',
					href: '/tools/simulator/partner-skills',
					icon: JewelIconWhite,

					text: 'Partner Skills',
				},
			],
		},
		{
			id: '/tools/generator',
			text: 'Generator',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Abiorugu',
				background: false,
			},
			nodes: [
				{
					id: '/tools/generator/weapon',
					href: '/tools/generator/weapon',
					icon: getWeaponIcon('Long Sword'),
					text: 'Weapon',
				},
				{
					id: '/tools/generator/armor',
					href: '/tools/generator/armor',
					icon: HelmetIconWhite,
					text: 'Armor',
				},
				{
					id: '/tools/generator/item',
					href: '/tools/generator/item',
					icon: MantleIconWhite,
					text: 'Item',
				},
				{
					id: '/tools/generator/icon',
					href: '/tools/generator/icon',
					icon: MonsterComponent,
					iconProps: {
						currentMonster: 'Supremacy Teostra',
						background: false,
					},
					text: 'Icon',
				},
				{
					id: '/tools/generator/thumbnail',
					href: '/tools/generator/thumbnail',
					icon: VideoPlayer,
					text: 'Thumbnail',
				},
			],
		},
		{
			id: '/tools/external',
			text: 'External',
			icon: Logo,
			nodes: [
				{
					text: 'MHFZZDatabase', // the order is intentional
					id: '/tools/external/mhfzzdatabase',
					icon: Tools,
					href: '/tools/external/mhfzzdatabase',
				},
				{
					id: '/tools/external/overlay',
					href: '/tools/external/overlay',
					icon: Logo,
					text: 'mhfz-overlay',
				},
				{
					id: '/tools/external/ezlion',
					href: '/tools/external/ezlion',
					icon: 'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
					text: 'EZlion',
				},
				{
					text: 'Erupe',
					id: '/tools/external/erupe',
					icon: Tools,
					href: '/tools/external/erupe',
				},
				{
					text: 'FrontierTextHandler',
					id: '/tools/external/frontier-text-handler',
					icon: Tools,
					href: '/tools/external/frontier-text-handler',
				},
				{
					text: 'MHFrontier-Blender-Addon',
					id: '/tools/external/mhfrontier-blender-addon',
					icon: Tools,
					href: '/tools/external/mhfrontier-blender-addon',
				},
				{
					text: 'Monster-Hunter-Frontier-Patterns',
					id: '/tools/external/monster-hunter-frontier-patterns',
					icon: Tools,
					href: '/tools/external/monster-hunter-frontier-patterns',
				},
			],
		},
		// {
		// 	id: '/tools/search',
		// 	icon: Binoculars,
		// 	text: 'Search',
		// 	nodes: [
		// 		{
		// 			id: '/tools/search/armor-set-searcher',
		// 			href: '/tools/search/armor-set-searcher',
		// 			icon: getArmorIcon('Stand'),
		// 			text: 'Armor Set Searcher',
		// 		},
		// 		{
		// 			id: '/tools/search/advanced-search',
		// 			href: '/tools/search/advanced-search',
		// 			icon: Logo,
		// 			text: 'Advanced Search',
		// 		},
		// 	],
		// },
	];

	const blacklistedRoutesForHead = ['/tools/simulator/tower-weapon'];

	function isRouteBlacklisted(route: string) {
		return blacklistedRoutesForHead.find((e) => e === route);
	}

	let tocVisible = $state($hunterNotesSidebarEnabledStore);

	let centerColumnClass = $derived(tocVisible ? '' : 'expanded');
	let tocClass = $derived(tocVisible ? 'aside' : 'aside collapsed');

	let headerClass = $state($stickyHeaderStore ? 'header sticky' : 'header');

	// TODO unsure
	run(() => {
		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem } = processRoute(pageUrlPathName);
		headTitle = navigationItem?.name
			? navigationItem?.name + " — Frontier's Wycademy"
			: "Tools and Utilities — Frontier's Wycademy";
		description = navigationItem?.description ?? description;
	});

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem } = processRoute(pageUrlPathName);
		headTitle = navigationItem?.name
			? navigationItem?.name + " — Frontier's Wycademy"
			: "Tools and Utilities — Frontier's Wycademy";
		description = navigationItem?.description ?? description;
	});
</script>

<LocalStorage
	bind:value={$hunterNotesSidebarEnabledStore}
	key="__hunter-notes-sidebar-enabled"
/>
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

{#if !isRouteBlacklisted($page.url.pathname || '/')}
	<Head
		title={headTitle}
		{description}
		image={getPageThumbnail(
			$page.url.pathname,
			null,
			$carbonThemeStore === 'g10' ? 'light' : 'dark',
		)}
		{url}
		{website}
		{authorName}
		{datePublished}
		{authorUrl}
		contentType="SoftwareApplication"
		name={projectName}
		siteName={projectName}
	/>
{/if}

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
		<Header profile={data.profile} />
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
				<Breadcrumb page={$page} />
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
