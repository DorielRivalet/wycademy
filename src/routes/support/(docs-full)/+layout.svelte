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
	import { onMount } from 'svelte';
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
	import pageThumbnail from '$lib/client/images/wycademy.png';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import TreeView, {
		type TreeNode,
	} from 'carbon-components-svelte/src/TreeView/TreeView.svelte';
	import Logo from '$lib/client/images/logo.svg';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import Bullhorn from 'carbon-icons-svelte/lib/Bullhorn.svelte';
	import Development from 'carbon-icons-svelte/lib/Development.svelte';
	import DocumentRequirements from 'carbon-icons-svelte/lib/DocumentRequirements.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import InformationSquare from 'carbon-icons-svelte/lib/InformationSquare.svelte';
	import PiggyBank from 'carbon-icons-svelte/lib/PiggyBank.svelte';
	import License from 'carbon-icons-svelte/lib/License.svelte';
	import QuestionAnswering from 'carbon-icons-svelte/lib/QuestionAnswering.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import {
		getNavigationItemFromLink,
		supportInfo,
	} from '$lib/client/modules/routes';
	import { getAnnouncementByPathName } from '$lib/client/modules/announcements';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import ReferenceArchitecture from 'carbon-icons-svelte/lib/ReferenceArchitecture.svelte';
	import Link from 'carbon-icons-svelte/lib/Link.svelte';
	import Security from 'carbon-icons-svelte/lib/Security.svelte';
	import UserFeedback from 'carbon-icons-svelte/lib/UserFeedback.svelte';
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

	/**Generate breadcrumb items and get navigation item from path name*/
	function processRoute(pathName: string) {
		// Split the route ID by '/'
		let routeLevels = pathName.split('/').filter(Boolean);

		// Remove elements that match the pattern (text in parentheses)
		routeLevels = routeLevels.filter((level) => !/\(.*\)/.test(level));

		const navigationItem = getNavigationItemFromLink(supportInfo, pathName);
		const announcement = getAnnouncementByPathName(pathName);

		// Generate breadcrumb items
		let items = [{ href: '/', text: 'Home' }];
		for (let i = 0; i < routeLevels.length; i++) {
			const levelSlug = routeLevels[i];
			const levelText = deslugify(levelSlug); // Convert slug to title case
			const levelHref = `/${routeLevels.slice(0, i + 1).join('/')}`; // Construct href
			items.push({ href: levelHref, text: levelText });
		}

		return { navigationItem, items, announcement };
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
	let headTitle = "Support Center — Frontier's Wycademy";
	let description =
		'This is a dedicated section where users can find help and resources to resolve issues, learn how to use the site, and get answers to common questions.\n\nDeveloped by Doriel Rivalet.';

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	const children: TreeNode[] = [
		{
			id: '/support/website',
			text: 'Website',
			children: [
				{
					id: '/support/website/announcements',
					text: 'Announcements',
				},
				{
					id: '/support/website/about',
					text: 'About',
				},
				{
					id: '/support/website/donate',
					text: 'Donate',
				},
				{
					id: '/support/website/faq',
					text: 'FAQ',
				},
				{
					text: 'Feedback',
					id: '/support/website/feedback',
				},
				{
					id: '/support/website/contribute',
					text: 'Contribute',
				},
				{
					id: '/support/website/development',
					text: 'Development',
				},
				{
					id: '/support/website/contact',
					text: 'Contact',
				},
			],
		},
		{
			id: '/support/policies',
			text: 'Policies',
			children: [
				{
					id: '/support/policies/terms-of-service',
					text: 'Terms of Service',
				},
				{
					id: '/support/policies/privacy-policy',
					text: 'Privacy Policy',
				},
				{
					id: '/support/policies/copyright',
					text: 'Copyright',
				},
				{
					text: 'Acknowledgements',
					id: '/support/policies/acknowledgements',
				},
				{
					text: 'Security',
					id: '/support/policies/security',
				},
			],
		},
		{
			id: '/support/wycademy-documentation',
			text: 'Wycademy Documentation',
			children: [
				{
					id: '/support/wycademy-documentation/architecture',
					text: 'Architecture',
				},
			],
		},
		{
			id: '/support/overlay-documentation',
			text: 'Overlay Documentation',
			children: [
				{
					id: '/support/overlay-documentation/architecture',
					text: 'Architecture',
				},
			],
		},
		{
			id: '/support/external',
			text: 'External',
			children: [
				{
					id: '/support/external/websites',
					text: 'Websites',
				},
			],
		},
	];

	const iconsMap: (
		| {
				id: string;
				icon: string;
		  }
		| {
				id: string;
				icon: any;
		  }
	)[] = [
		{ id: '/support/website', icon: Logo },
		{
			id: '/support/website/announcements',
			icon: Bullhorn,
		},
		{
			id: '/support/website/about',
			icon: InformationSquare,
		},
		{
			id: '/support/website/donate',
			icon: PiggyBank,
		},
		{
			id: '/support/website/faq',
			icon: QuestionAnswering,
		},
		{
			id: '/support/website/feedback',
			icon: UserFeedback,
		},
		{
			id: '/support/website/contribute',
			icon: Group,
		},
		{
			id: '/support/website/development',
			icon: Development,
		},
		{
			id: '/support/website/contact',
			icon: Email,
		},
		{
			id: '/support/policies',
			icon: BookIconWhite,
		},
		{
			id: '/support/policies/terms-of-service',
			icon: DocumentRequirements,
		},
		{
			id: '/support/policies/privacy-policy',
			icon: DocumentRequirements,
		},
		{
			id: '/support/policies/copyright',
			icon: License,
		},
		{
			id: '/support/policies/acknowledgements',
			icon: License,
		},
		{
			id: '/support/policies/security',
			icon: Security,
		},
		{
			id: '/support/wycademy-documentation',
			icon: BookIconWhite,
		},
		{
			id: '/support/wycademy-documentation/architecture',
			icon: ReferenceArchitecture,
		},
		{
			id: '/support/overlay-documentation',
			icon: BookIconWhite,
		},
		{
			id: '/support/overlay-documentation/architecture',
			icon: ReferenceArchitecture,
		},
		{
			id: '/support/external',
			icon: BookIconWhite,
		},
		{
			id: '/support/external/websites',
			icon: Link,
		},
	];

	let tocVisible = $hunterNotesSidebarEnabledStore;

	let centerColumnClass = tocVisible ? '' : 'expanded';
	let tocClass = tocVisible ? 'aside' : 'aside collapsed';

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';
	$: {
		const pageUrlPathName = $page.url.pathname || '/';
		const { navigationItem, items, announcement } =
			processRoute(pageUrlPathName);
		headTitle = announcement
			? announcement.title + " — Frontier's Wycademy"
			: navigationItem?.name
				? navigationItem?.name + " — Frontier's Wycademy"
				: "Support Center — Frontier's Wycademy";
		description = announcement
			? announcement.summary
			: (navigationItem?.description ?? description);
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
		const { navigationItem, items, announcement } =
			processRoute(pageUrlPathName);
		headTitle = announcement
			? announcement.title + " — Frontier's Wycademy"
			: navigationItem?.name
				? navigationItem?.name + " — Frontier's Wycademy"
				: "Support Center — Frontier's Wycademy";
		description = announcement
			? announcement.summary
			: (navigationItem?.description ?? description);
		breadcrumbItems = items;
		const unsubscribe = page.subscribe(($page) => {
			treeview?.showNode($page.url.pathname || '');
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
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

<Head
	title={headTitle}
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
