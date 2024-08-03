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
	import { stickyHeaderStore } from '$lib/client/stores/toggles';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import { bannerEnabledStore } from '$lib/client/stores/banner';

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

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
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
		<slot />
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
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 90vh;
		background-color: var(--ctp-base);
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
</style>
