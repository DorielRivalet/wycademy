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
	import Toc from 'svelte-toc';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import { tocEnabledStore } from '$lib/client/stores/toc';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import { stickyHeaderStore } from '$lib/client/stores/toggles';
	import { bannerEnabledStore } from '$lib/client/stores/banner';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

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
	});

	let tocVisible = $tocEnabledStore;
	let isTocMoving = false;

	function onTOCToggleButtonPress(e: MouseEvent) {
		if (isTocMoving) return;
		isTocMoving = true;
		tocVisible = !tocVisible;
		tocEnabledStore.set(tocVisible ? true : false);

		if (tocVisible) {
			tocClass = 'left-column';
			centerColumnClass = ''; // Reset to default width
		} else {
			tocClass = 'left-column collapsed';
			centerColumnClass = 'expanded'; // Increase width to full
		}
		isTocMoving = false;
	}

	let tocClass = tocVisible ? 'left-column' : 'left-column collapsed';
	let centerColumnClass = tocVisible ? '' : 'expanded';

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';
</script>

<LocalStorage bind:value={$tocEnabledStore} key="__toc-enabled" />
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />

{#if !tocVisible && $breakpointLargerThanMedium}
	<div class="expand-TOC">
		<Button
			iconDescription="Expand TOC"
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

	<div class="container">
		<div class={tocClass}>
			<Toc blurParams={{ duration: 0 }} --toc-desktop-sticky-top={'10vh'}>
				<span slot="title">
					{#if $breakpointLargerThanMedium}
						<h2 class="toc-title toc-exclude">
							<span
								>On this page <span>
									<Button
										iconDescription={'Hide'}
										kind="ghost"
										size={'small'}
										icon={ViewOff}
										on:click={onTOCToggleButtonPress}
									/>
								</span></span
							>
						</h2>
					{:else}
						<h2 class="toc-title toc-exclude">On this page</h2>
					{/if}
				</span>
			</Toc>
		</div>

		<main class="center-column {centerColumnClass}">
			<slot />
		</main>
	</div>

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

	.container {
		display: flex;
		flex-direction: row;
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		max-width: 100vw;
	}

	.center-column {
		padding: var(--cds-spacing-08);
		margin: 0 auto;
		flex-shrink: 1;
		min-height: 90vh;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		flex: 1 0 0%;
		width: calc(
			100% - 16.67%
		); // Directly adds the TOC width to the main content width
	}

	.center-column.expanded {
		width: 100%;
		transition: width motion.$duration-fast-02
			motion.motion(standard, expressive);
	}

	.left-column {
		flex: 0 0 auto;
		transition: margin motion.$duration-fast-02
			motion.motion(standard, expressive);
		width: 16.67%;
	}

	.left-column.collapsed {
		margin-left: -16.67%;
	}

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
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

	.inactive {
		display: none;
	}

	.toc-title {
		text-align: left;
		font-size: 1.5rem;
	}

	.expand-TOC {
		position: fixed; /* Position the button relative to the viewport */
		top: 50%; /* Position it in the middle vertically */
		left: 0%; /* Position it at the left edge of the viewport */
		padding: 0;
		margin: 0;
		z-index: 1000; /* Ensure the button is above other content */
	}

	.toc-title .toc-exclude {
		display: flex;
		flex-direction: row;
	}
</style>
