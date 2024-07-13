<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import ViewTransition from '../Navigation.svelte';
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
	import { developmentStage } from '$lib/constants';
	import { goto } from '$app/navigation';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/logo.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import { stickyHeaderStore } from '$lib/client/stores/toggles';
	import { guidesInfo } from '$lib/client/modules/routes';

	//TODO svg: mezfes, caravan, festi, transcend, etc
	//TODO animated webp: items, locations, events, etc.

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;

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

		window.addEventListener('scroll', handleScroll);
	});

	const customTitle = "Hunter's Notes";
	const url = $page.url.toString();
	const description =
		'Explore our guides and tutorials of Monster Hunter Frontier Z.';

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';

	let lastScrollTop = 0; // Variable to store the last scroll position

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
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
<Head
	title={customTitle}
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
					on:click={() => goto('/support/website/development')}
					>Learn more</NotificationActionButton
				>
			</svelte:fragment>
		</InlineNotification>
	</div>
	<main>
		<div class="container">
			<section class="top-level-section">
				<SectionHeadingTopLevel title="Hunter's Notes" />

				<p class="spaced-paragraph">
					Explore our guides and tutorials of <InlineTooltip
						tooltip="Game"
						text="Monster Hunter Frontier Z"
						iconType="file"
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier Z')
							?.icon}
					/>.
				</p>

				<p>
					If you are looking for a damage calculator, tower weapon simulator,
					icon generators and other tools, please refer to the <Link
						inline
						href="/tools">Tools and Utilities page.</Link
					>
				</p>

				<section>
					<SectionHeading level={2} title="Browse by section" />
					{#each guidesInfo as section}
						<section>
							<SectionHeading
								level={3}
								title={section.category.name === 'Getting Started'
									? '🔰 ' + section.category.name
									: section.category.name}
							/>
							<div class="container-tiles">
								{#each section.pages as page}
									<ClickableTileImage
										title={page.name === 'Your First Hunts'
											? '🔰 ' + page.name
											: page.name}
										description={page.description}
										imageSource={page.image}
										href={page.link}
									/>
								{/each}
							</div>
						</section>
					{/each}
				</section>
			</section>
		</div>
	</main>
	{#key $page.url.pathname}
		<Footer gitHubData={data.github} />
	{/key}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--cds-spacing-08);
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 90vh;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
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

	.container {
		width: 100%;
	}

	.top-level-section {
		width: 80%;
		margin: auto;
	}

	.container-tiles {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
	}
</style>
