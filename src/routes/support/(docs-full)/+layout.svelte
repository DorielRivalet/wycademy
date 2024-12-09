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
	import pageThumbnail from '$lib/client/images/wycademy.png';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import TreeView from '$lib/client/components/TreeView.svelte';
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
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import ReferenceArchitecture from 'carbon-icons-svelte/lib/ReferenceArchitecture.svelte';
	import Link from 'carbon-icons-svelte/lib/Link.svelte';
	import Security from 'carbon-icons-svelte/lib/Security.svelte';
	import UserFeedback from 'carbon-icons-svelte/lib/UserFeedback.svelte';
	import SidePanelClose from 'carbon-icons-svelte/lib/SidePanelClose.svelte';

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
	}

	let breadcrumbItems: URLItem[] = $state([]);
	let headTitle = $state("Support Center — Frontier's Wycademy");
	let description = $state(
		'This is a dedicated section where users can find help and resources to resolve issues, learn how to use the site, and get answers to common questions.\n\nDeveloped by Doriel Rivalet.',
	);

	const url = $page.url.toString();

	let lastScrollTop = 0; // Variable to store the last scroll position

	let tocVisible = $state($hunterNotesSidebarEnabledStore);

	let centerColumnClass = $derived(tocVisible ? '' : 'expanded');
	let tocClass = $derived(tocVisible ? 'aside' : 'aside collapsed');

	let headerClass = $state($stickyHeaderStore ? 'header sticky' : 'header');

	// TODO unsure
	run(() => {
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
	});

	onMount(() => {
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
	});

	const treeData = [
		{
			id: '/support/website',
			text: 'Website',
			icon: Logo,
			nodes: [
				{
					id: '/support/website/announcements',
					text: 'Announcements',
					icon: Bullhorn,
					href: '/support/website/announcements',
				},
				{
					id: '/support/website/about',
					text: 'About',
					href: '/support/website/about',
					icon: InformationSquare,
				},
				{
					id: '/support/website/donate',
					text: 'Donate',
					href: '/support/website/donate',
					icon: PiggyBank,
				},
				{
					id: '/support/website/faq',
					text: 'FAQ',
					icon: QuestionAnswering,

					href: '/support/website/faq',
				},
				{
					text: 'Feedback',
					id: '/support/website/feedback',
					icon: UserFeedback,

					href: '/support/website/feedback',
				},
				{
					id: '/support/website/contribute',
					text: 'Contribute',
					icon: Group,

					href: '/support/website/contribute',
				},
				{
					id: '/support/website/development',
					text: 'Development',
					icon: Development,

					href: '/support/website/development',
				},
				{
					id: '/support/website/contact',
					text: 'Contact',
					icon: Email,

					href: '/support/website/contact',
				},
			],
		},
		{
			id: '/support/policies',
			text: 'Policies',
			icon: BookIconWhite,

			nodes: [
				{
					id: '/support/policies/terms-of-service',
					text: 'Terms of Service',
					icon: DocumentRequirements,

					href: '/support/policies/terms-of-service',
				},
				{
					id: '/support/policies/privacy-policy',
					text: 'Privacy Policy',
					icon: DocumentRequirements,

					href: '/support/policies/privacy-policy',
				},
				{
					id: '/support/policies/copyright',
					text: 'Copyright',
					icon: License,

					href: '/support/policies/copyright',
				},
				{
					text: 'Acknowledgements',
					id: '/support/policies/acknowledgements',
					icon: License,

					href: '/support/policies/acknowledgements',
				},
				{
					text: 'Security',
					id: '/support/policies/security',
					icon: Security,

					href: '/support/policies/security',
				},
			],
		},
		{
			id: '/support/wycademy-documentation',
			text: 'Wycademy Documentation',
			icon: BookIconWhite,

			nodes: [
				{
					id: '/support/wycademy-documentation/architecture',
					text: 'Architecture',
					icon: ReferenceArchitecture,

					href: '/support/wycademy-documentation/architecture',
				},
			],
		},
		{
			id: '/support/overlay-documentation',
			text: 'Overlay Documentation',
			icon: BookIconWhite,

			nodes: [
				{
					id: '/support/overlay-documentation/architecture',
					text: 'Architecture',
					icon: ReferenceArchitecture,

					href: '/support/overlay-documentation/architecture',
				},
			],
		},
		{
			id: '/support/external',
			text: 'External',
			icon: BookIconWhite,

			nodes: [
				{
					id: '/support/external/websites',
					text: 'Websites',
					icon: Link,

					href: '/support/external/websites',
				},
			],
		},
	];
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

	.aside-contents {
		position: sticky;
		top: 5vh;
		padding-bottom: 2rem;
		padding-top: 0.5rem;
		overflow-y: auto;
		height: 90vh;
	}

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
