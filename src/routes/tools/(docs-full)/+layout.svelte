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
	import { cursorVars } from '$lib/client/themes/cursor';
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
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import TreeView, {
		type TreeNode,
	} from 'carbon-components-svelte/src/TreeView/TreeView.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
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
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import {
		getNavigationItemFromLink,
		toolsInfo,
	} from '$lib/client/modules/routes';
	import { getPageThumbnail } from '$lib/client/modules/thumbnails';

	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import type { FrontierMonsterNameExpanded } from '$lib/client/modules/frontier/types';
	import Binoculars from '$lib/client/images/icon/svg/Binoculars_Icon_White.svg';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
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

		if (tocVisible) {
			tocClass = 'aside';
			centerColumnClass = ''; // Reset to default width
		} else {
			tocClass = 'aside collapsed';
			centerColumnClass = 'expanded'; // Increase width to full
		}
	}

	let breadcrumbItems: URLItem[] = [];
	let headTitle = "Tools and Utilities — Frontier's Wycademy";
	let description =
		'Explore our tools and utilities of Monster Hunter Frontier Z.\n\nCalculate things such as your damage, use a tower weapon simulator, generate weapon images, and much more.\n\nDeveloped by Doriel Rivalet.';

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	const children: TreeNode[] = [
		{
			id: '/tools/calculator',
			text: 'Calculator',
			children: [
				{
					id: '/tools/calculator/damage',
					text: 'Damage',
				},
				{
					id: '/tools/calculator/ice-age',
					text: 'Ice Age',
				},
				{
					id: '/tools/calculator/crit-conversion',
					text: 'Crit Conversion',
				},
				{
					id: '/tools/calculator/gunlance-shells-and-wyvernfire',
					text: 'Gunlance Shells & Wyvernfire',
				},
				{
					id: '/tools/calculator/heavy-bowgun-heat-beam',
					text: 'Heavy Bowgun Heat Beam',
				},
				{
					id: '/tools/calculator/sigil',
					text: 'Sigils',
				},
			],
		},
		{
			id: '/tools/simulator',
			text: 'Simulator',
			children: [
				{
					id: '/tools/simulator/tower-weapon',
					text: 'Tower Weapon',
				},
				{
					id: '/tools/simulator/sigil',
					text: 'Sigils',
				},
				{
					id: '/tools/simulator/partner-skills',
					text: 'Partner Skills',
				},
			],
		},
		{
			id: '/tools/generator',
			text: 'Generator',
			children: [
				{
					id: '/tools/generator/weapon',
					text: 'Weapon',
				},
				{
					id: '/tools/generator/armor',
					text: 'Armor',
				},
				{
					id: '/tools/generator/item',
					text: 'Item',
				},
				{
					id: '/tools/generator/icon',
					text: 'Icon',
				},
				{
					id: '/tools/generator/thumbnail',
					text: 'Thumbnail',
				},
			],
		},
		{
			id: '/tools/external',
			text: 'External',
			children: [
				{
					id: '/tools/external/overlay',
					text: 'mhfz-overlay',
				},
				{
					id: '/tools/external/ezlion',
					text: 'EZlion',
				},
			],
		},
		{
			id: '/tools/search',
			text: 'Search',
			children: [
				{
					id: '/tools/search/armor-set-searcher',
					text: 'Armor Set Searcher',
				},
				{
					id: '/tools/search/advanced-search',
					text: 'Advanced Search',
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
		{ id: '/tools/calculator', icon: KnifeIconWhite },
		{
			id: '/tools/calculator/damage',
			icon: getWeaponIcon('Great Sword'),
		},
		{ id: '/tools/calculator/ice-age', icon: JewelIconWhite },
		{ id: '/tools/calculator/crit-conversion', icon: JewelIconWhite },
		{
			id: '/tools/calculator/gunlance-shells-and-wyvernfire',
			icon: getWeaponIcon('Gunlance'),
		},
		{
			id: '/tools/calculator/heavy-bowgun-heat-beam',
			icon: getWeaponIcon('Heavy Bowgun'),
		},
		{
			id: '/tools/calculator/sigil',
			icon: SigilIconWhite,
		},
		{
			id: '/tools/simulator',
			icon: LocationIcons.find((e) => e.name === 'Blacksmith')?.icon,
		},
		{
			id: '/tools/simulator/tower-weapon',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Duremudira',
				background: false,
			},
		},
		{
			id: '/tools/simulator/sigil',
			icon: SigilIconWhite,
		},
		{
			id: '/tools/simulator/partner-skills',
			icon: JewelIconWhite,
		},
		{
			id: '/tools/generator',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Abiorugu',
				background: false,
			},
		},
		{
			id: '/tools/generator/weapon',
			icon: getWeaponIcon('Long Sword'),
		},
		{
			id: '/tools/generator/armor',
			icon: HelmetIconWhite,
		},
		{
			id: '/tools/generator/item',
			icon: MantleIconWhite,
		},
		{
			id: '/tools/generator/icon',
			icon: MonsterComponent,
			iconProps: {
				currentMonster: 'Supremacy Teostra',
				background: false,
			},
		},
		{
			id: '/tools/generator/thumbnail',
			icon: VideoPlayer,
		},
		{
			id: '/tools/external',
			icon: Logo,
		},
		{
			id: '/tools/external/overlay',
			icon: Logo,
		},
		{
			id: '/tools/external/ezlion',
			icon: 'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
		},
		{
			id: '/tools/search',
			icon: Binoculars,
		},
		{
			id: '/tools/search/armor-set-searcher',
			icon: getArmorIcon('Stand'),
		},
		{
			id: '/tools/search/advanced-search',
			icon: Logo,
		},
	];

	let tocVisible = $hunterNotesSidebarEnabledStore;

	let centerColumnClass = tocVisible ? '' : 'expanded';
	let tocClass = tocVisible ? 'aside' : 'aside collapsed';
	let treeview: TreeView | null = null;

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';

	$: {
		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem, items } = processRoute(pageUrlPathName);
		headTitle = navigationItem?.name
			? navigationItem?.name + " — Frontier's Wycademy"
			: "Tools and Utilities — Frontier's Wycademy";
		description = navigationItem?.description ?? description;
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
		const { navigationItem, items } = processRoute(pageUrlPathName);
		headTitle = navigationItem?.name
			? navigationItem?.name + " — Frontier's Wycademy"
			: "Tools and Utilities — Frontier's Wycademy";
		description = navigationItem?.description ?? description;
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
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

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
				style="background-color: var(--ctp-surface0);  position: sticky; top: 10vh;"
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
