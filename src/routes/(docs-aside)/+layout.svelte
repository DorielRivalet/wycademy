<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import '../styles.css';
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
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import Move from 'carbon-icons-svelte/lib/Move.svelte';
	import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte';

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;
	console.log('layout.svelte');

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

	let hide = false;
	let isPositionedLeft = true;

	function onTOCButtonPress(e: MouseEvent) {
		hide = !hide;
	}

	function onTOCMoveButtonPress(e: MouseEvent) {
		isPositionedLeft = !isPositionedLeft;
	}

	$: contentsClass = isPositionedLeft ? 'contents' : 'contents-reverse';
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />

{#if hide}
	{#if isPositionedLeft}
		<div class="expand-TOC">
			<Button
				iconDescription="Expand TOC"
				tooltipPosition="right"
				size="small"
				kind="ghost"
				icon={ChevronRight}
				on:click={onTOCButtonPress}
			/>
		</div>
	{:else}
		<div class="expand-TOC-reverse">
			<Button
				iconDescription="Expand TOC"
				tooltipPosition="left"
				size="small"
				kind="ghost"
				icon={ChevronLeft}
				on:click={onTOCButtonPress}
			/>
		</div>
	{/if}
{/if}

<div class="app">
	<ViewTransition />

	<div class="header">
		<Header />
	</div>
	<div class="banner">
		<InlineNotification
			lowContrast
			on:close={() => close()}
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

	<div class={contentsClass}>
		{#if !hide}
			<div class="table-of-contents">
				<Toc blurParams={{ duration: 0 }} {hide}>
					<span slot="title"
						><div>
							<Button kind="ghost" icon={Move} on:click={onTOCMoveButtonPress}
								>{isPositionedLeft ? 'Move right' : 'Move left'}</Button
							>
							<Button kind="ghost" icon={ViewOff} on:click={onTOCButtonPress}
								>{hide ? 'Show' : 'Hide'}</Button
							>
						</div>
						<h2 class="toc-title toc-exclude">On this page</h2></span
					>
				</Toc>
			</div>
		{/if}

		<main>
			<slot />
		</main>
	</div>

	{#key $page.url.pathname}
		<Footer githubData={data.github} />
	{/key}
</div>

<style>
	.expand-TOC {
		position: fixed; /* Position the button relative to the viewport */
		top: 50%; /* Position it in the middle vertically */
		left: 0%; /* Position it at the left edge of the viewport */
		padding: 0;
		margin: 0;
		z-index: 1000; /* Ensure the button is above other content */
	}

	.expand-TOC-reverse {
		position: fixed; /* Position the button relative to the viewport */
		top: 50%; /* Position it in the middle vertically */
		right: 0%; /* Position it at the left edge of the viewport */
		padding: 0;
		margin: 0;
		z-index: 1000; /* Ensure the button is above other content */
	}

	.table-of-contents {
		min-width: 20vw;
	}

	.contents-reverse {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start; /* Align items to the start */
		width: 100%;
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.contents {
		display: flex;
		flex-direction: row;
		justify-content: flex-start; /* Align items to the start */
		width: 100%;
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
		max-width: 100vw;
	}

	main {
		flex: 1; /* This allows the main content to grow and take up the rest of the space */
		display: flex;
		flex-direction: column;
		padding: var(--cds-spacing-08);
		margin: 0 auto;
		width: 100%;
		box-sizing: border-box;
		min-height: 90vh;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		overflow-x: hidden; /* Prevent horizontal scrolling */
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}
</style>
