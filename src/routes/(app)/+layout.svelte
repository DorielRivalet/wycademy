<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import ViewTransition from '../Navigation.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { developmentStage } from '$lib/constants';
	import { goto } from '$app/navigation';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
	const stickyHeaderStore = getContext(
		Symbol.for('stickyHeader'),
	) as Writable<boolean>;
	const bannerEnabledStore = getContext(
		Symbol.for('banner'),
	) as Writable<boolean>;

	export let data: LayoutData;

	onMount(() => {
		// Add event listener for scroll events
		window.addEventListener('scroll', handleScroll);
	});

	$: bgClass =
		getBackgroundImageClass($page.url.pathname) === 'none'
			? 'none'
			: $carbonThemeStore === 'g10'
				? `background-light ${getBackgroundImageClass($page.url.pathname)}`
				: `background ${getBackgroundImageClass($page.url.pathname)}`;

	function getBackgroundImageClass(path: string) {
		switch (path) {
			case '/arena': {
				return 'bg-arena';
			}
			case '/site-preferences': {
				return 'bg-equipment-box';
			}
			case '/smithy': {
				return 'bg-smithy';
			}
			case '/support': {
				return 'bg-support';
			}
			case '/leaderboard': {
				return 'bg-leaderboard';
			}
			case '/user': {
				return 'bg-profile';
			}
			default:
				return $carbonThemeStore === 'g10' ? 'none-light' : 'none';
		}
	}

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

<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

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
	<div class={bgClass}>
		<main>
			<slot />
		</main>
	</div>
	{#key $page.url.pathname}
		<div class="footer"><Footer gitHubData={data.github} /></div>
	{/key}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
		z-index: 99;
	}

	.footer {
		border-top: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.bg-arena {
		background-image: url('$lib/client/images/background/bg-arena.webp');
	}

	.bg-profile {
		background-image: url('$lib/client/images/background/bg-profile.webp');
	}

	.bg-smithy {
		background-image: url('$lib/client/images/background/bg-smithy.webp');
	}

	.bg-leaderboard {
		background-image: url('$lib/client/images/background/bg-leaderboard.webp');
	}

	.bg-hunter-notes {
		background-image: url('$lib/client/images/background/bg-hunter-notes.webp');
	}

	.bg-equipment-box {
		background-image: url('$lib/client/images/background/bg-equipment-box.webp');
	}

	.bg-bestiary {
		background-image: url('$lib/client/images/background/bg-bestiary.webp');
	}

	.bg-support {
		background-image: url('$lib/client/images/background/bg-support.webp');
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	@media (min-width: 320px) {
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
			border-radius: 0px 0px 10px 10px;
		}
	}

	@media (min-width: 1056px) {
		main {
			position: relative;
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: var(--cds-spacing-08);
			width: 100%;
			max-width: 70vw;
			margin: 0 auto;
			box-sizing: border-box;
			min-height: 90vh;
			background-color: var(--ctp-base);
			border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-radius: 0px 0px 10px 10px;
			box-shadow: 0px 0px 32px #00000080;
		}
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		top: 0;
		position: static;
		transition: top motion.$duration-fast-02 motion.motion(standard, productive);
		z-index: 1;
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

	.none {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
	}

	.none:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-image: url('$lib/client/images/background/noise.webp');
		background-size: 5%;
	}

	.none-light {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
	}

	.none-light:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-image: url('$lib/client/images/background/noise-light.webp');
		background-size: 5%;
	}

	.background {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 10%;
	}

	.background-light {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 10%;
	}

	.background-light:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-color: #fff;
		background-image: url('$lib/client/images/background/noise-light.webp');
		background-size: 5%;
	}

	.background:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-color: #000;
		background-image: url('$lib/client/images/background/noise.webp');
		background-size: 5%;
	}
</style>
