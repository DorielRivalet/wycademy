<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import ViewTransition from '../Navigation.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { developmentStage } from '$lib/constants';
	import { goto } from '$app/navigation';
	import Toc from 'svelte-toc';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import RightPanelClose from 'carbon-icons-svelte/lib/RightPanelClose.svelte';

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
	const tocEnabledStore = getContext(
		Symbol.for('tocEnabled'),
	) as Writable<boolean>;
	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	let tocVisible = $state($tocEnabledStore);
	let isTocMoving = false;

	function onTOCToggleButtonPress(e: MouseEvent) {
		if (isTocMoving) return;
		isTocMoving = true;
		tocVisible = !tocVisible;
		tocEnabledStore.set(tocVisible ? true : false);

		// if (tocVisible) {
		// 	tocClass = 'left-column';
		// 	centerColumnClass = ''; // Reset to default width
		// } else {
		// 	tocClass = 'left-column collapsed';
		// 	centerColumnClass = 'expanded'; // Increase width to full
		// }
		isTocMoving = false;
	}

	let tocClass = $derived(tocVisible ? 'left-column' : 'left-column collapsed');
	let centerColumnClass = $derived(tocVisible ? '' : 'expanded');

	let headerClass = $state($stickyHeaderStore ? 'header sticky' : 'header');
</script>

<LocalStorage bind:value={$tocEnabledStore} key="__toc-enabled" />
<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

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
				{#snippet actions()}
					<NotificationActionButton
						on:click={() => goto('/support/website/development')}
						>Learn more</NotificationActionButton
					>
				{/snippet}
			</InlineNotification>
		{/if}
	</div>

	<div class="container">
		<div class={tocClass}>
			<Toc blurParams={{ duration: 0 }} --toc-desktop-sticky-top={'10vh'}>
				{#snippet title()}
					<span>
						{#if $breakpointLargerThanMedium}
							<h2 class="toc-title toc-exclude">
								<span
									>On this page <span>
										<Button
											iconDescription={'Close Sidebar'}
											kind="ghost"
											size={'small'}
											icon={RightPanelClose}
											on:click={onTOCToggleButtonPress}
										/>
									</span></span
								>
							</h2>
						{:else}
							<h2 class="toc-title toc-exclude">On this page</h2>
						{/if}
					</span>
				{/snippet}
			</Toc>
		</div>

		<main class="center-column {centerColumnClass}">
			{@render children?.()}
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
