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
	import { theme } from '$lib/client/stores/theme';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorIcon } from '$lib/client/stores/cursor';
	import { cursorVars } from '$lib/client/themes/cursor';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		developmentStage,
		projectName,
		website,
	} from '$lib/constants';
	import { goto } from '$app/navigation';
	import Head from '$lib/client/components/Head.svelte';
	import pageThumbnail from '$lib/client/images/logo.png';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import TreeView, {
		type TreeNode,
	} from 'carbon-components-svelte/src/TreeView/TreeView.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import ExtremeDragonblight from '$lib/client/components/frontier/icon/ailment/ExtremeDragonblight.svelte';
	import ExtremeSleep from '$lib/client/components/frontier/icon/ailment/ExtremeSleep.svelte';
	import {
		getItemIcon,
		getMonsterIcon,
		getWeaponIcon,
	} from '$lib/client/modules/frontier/functions';
	import ShotIcon from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
	import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
	import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/objects';
	import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
	import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
	import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
	import Logo from '$lib/client/images/logo.svg';
	import Transcend from '$lib/client/images/icon/transcend.webp';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import { stickyHeaderStore } from '$lib/client/stores/toggles';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { hunterNotesSidebarEnabledStore } from '$lib/client/stores/toc';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;

	type URLItem = { href: string; text: string };

	onMount(() => {
		let themeValue = $theme;
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
	});

	function deslugify(slug: string) {
		return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
	}

	// Function to generate breadcrumb items and head title
	function processRoute(routeId: string) {
		// Split the route ID by '/'
		let routeLevels = routeId.split('/').filter(Boolean);

		// Remove elements that match the pattern (text in parentheses)
		routeLevels = routeLevels.filter((level) => !/\(.*\)/.test(level));

		// Set the last element as the head title
		const headTitle = routeLevels[routeLevels.length - 1] || 'Not Found';

		// Generate breadcrumb items
		let items = [{ href: '/', text: 'Home' }];
		for (let i = 0; i < routeLevels.length; i++) {
			const levelSlug = routeLevels[i];
			const levelText = deslugify(levelSlug); // Convert slug to title case
			const levelHref = `/${routeLevels.slice(0, i + 1).join('/')}`; // Construct href
			items.push({ href: levelHref, text: levelText });
		}

		return { headTitle, items };
	}

	let breadcrumbItems: URLItem[] = [];
	let headTitle = 'Not Found';

	$: {
		const pageRouteId = $page.route.id || 'Not Found';
		const { headTitle: title, items } = processRoute(pageRouteId);
		headTitle = title;
		breadcrumbItems = items;
	}

	const url = $page.url.toString();

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
					id: '/hunter-notes/weapons/hunting-horn-songs',
					text: 'Hunting Horn Songs',
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
					id: '/hunter-notes/locations/diva-fountain',
					text: 'Diva Fountain',
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

	const iconsMap = [
		{ id: '/hunter-notes/getting-started', icon: BookIconWhite },
		{
			id: '/hunter-notes/getting-started/your-first-hunts',
			icon: BookIconWhite,
		},
		{ id: '/hunter-notes/getting-started/elements', icon: ExtremeDragonblight },
		{ id: '/hunter-notes/getting-started/ailments', icon: ExtremeSleep },
		{ id: '/hunter-notes/getting-started/transcend', icon: Transcend },
		{
			id: '/hunter-notes/monsters',
			icon: getMonsterIcon('Abiorugu'),
		},
		{
			id: '/hunter-notes/monsters/overview',
			icon: getMonsterIcon('Rathalos'),
		},
		{
			id: '/hunter-notes/monsters/exotics',
			icon: getMonsterIcon('Stygian Zinogre'),
		},
		{
			id: '/hunter-notes/monsters/origin',
			icon: getMonsterIcon('Yama Kurai'),
		},
		{
			id: '/hunter-notes/monsters/burst',
			icon: getMonsterIcon('Zerureusu'),
		},
		{
			id: '/hunter-notes/monsters/supremacy',
			icon: getMonsterIcon('Supremacy Doragyurosu'),
		},
		{
			id: '/hunter-notes/monsters/duremudira',
			icon: getMonsterIcon('Duremudira'),
		},
		{
			id: '/hunter-notes/monsters/zenith',
			icon: getMonsterIcon('Bogabadorumu'),
		},
		{
			id: '/hunter-notes/monsters/raviente',
			icon: getMonsterIcon('Berserk Raviente'),
		},
		{
			id: '/hunter-notes/monsters/conquest',
			icon: getMonsterIcon('Conquest Fatalis'),
		},
		{
			id: '/hunter-notes/monsters/shiten',
			icon: getMonsterIcon('Disufiroa'),
		},
		{
			id: '/hunter-notes/monsters/unlimited',
			icon: getMonsterIcon('Akura Jebia'),
		},
		{
			id: '/hunter-notes/monsters/musou',
			icon: getMonsterIcon('Blinking Nargacuga'),
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
			id: '/hunter-notes/weapons/hunting-horn-songs',
			icon: getWeaponIcon('Hunting Horn'),
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
			id: '/hunter-notes/locations/diva-fountain',
			icon: LocationIcons.find((e) => e.name === 'Diva Fountain')?.icon,
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

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';

	let tocVisible = $hunterNotesSidebarEnabledStore;

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

	let centerColumnClass = tocVisible ? '' : 'expanded';
	let tocClass = tocVisible ? 'aside' : 'aside collapsed';

	onMount(() => {
		const pageRouteId = $page.route.id || 'Not Found';
		const { headTitle: title, items } = processRoute(pageRouteId);
		headTitle = title;
		breadcrumbItems = items;
		const unsubscribe = page.subscribe(($page) => {
			treeview?.showNode($page.route.id?.replace('(docs-full)/', '') || '');
		});

		return () => {
			unsubscribe(); // Clean up the subscription on unmount
		};
	});

	let treeview: TreeView | null = null;
</script>

<LocalStorage
	bind:value={$hunterNotesSidebarEnabledStore}
	key="__hunter-notes-sidebar-enabled"
/>

<Head
	title={deslugify(headTitle)}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />

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
		<InlineNotification
			lowContrast
			kind="warning"
			title="Status:"
			subtitle="This site is currently in {developmentStage}."
		>
			<svelte:fragment slot="actions">
				<NotificationActionButton
					on:click={() => goto('/about-development-stages')}
					>Learn more</NotificationActionButton
				>
			</svelte:fragment>
		</InlineNotification>
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
						iconDescription={'Hide Sidebar'}
						tooltipPosition="right"
						kind="ghost"
						size={'small'}
						icon={ViewOff}
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
								{...{ size: '24px' }}
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
		position: static;
	}

	.sticky {
		position: -webkit-sticky; /* For Safari */
		position: sticky;
		top: 0;
		z-index: 1000; /* Ensure it stays above other content */
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
