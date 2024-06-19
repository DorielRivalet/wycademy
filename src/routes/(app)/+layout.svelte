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
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import { stickyHeaderStore } from '$lib/client/stores/toggles';

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

	$: bgClass =
		getBackgroundImageClass($page.url.pathname) === 'none'
			? 'none'
			: $theme === 'g10'
				? `background-light ${getBackgroundImageClass($page.url.pathname)}`
				: `background ${getBackgroundImageClass($page.url.pathname)}`;

	function getBackgroundImageClass(path: string) {
		switch (path) {
			case '/arena': {
				return 'bg-arena';
			}
			// case '/bestiary': {
			// 	return 'bg-bestiary';
			// }
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
			// case '/hunter-notes': {
			// 	return 'bg-hunter-notes';
			// }
			case '/user': {
				return 'bg-profile';
			}
			default:
				return $theme === 'g10' ? 'none-light' : 'none';
		}
	}

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
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
	<div class={bgClass}>
		<main>
			<slot />
		</main>
	</div>
	{#key $page.url.pathname}
		<div class="footer"><Footer gitHubData={data.github} /></div>
	{/key}
</div>

<style lang="css">
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
		background-image: url($lib/client/images/background/bg-arena.webp);
	}

	.bg-profile {
		background-image: url($lib/client/images/background/bg-profile.webp);
	}

	.bg-smithy {
		background-image: url($lib/client/images/background/bg-smithy.webp);
	}

	.bg-leaderboard {
		background-image: url($lib/client/images/background/bg-leaderboard.webp);
	}

	.bg-hunter-notes {
		background-image: url($lib/client/images/background/bg-hunter-notes.webp);
	}

	.bg-equipment-box {
		background-image: url($lib/client/images/background/bg-equipment-box.webp);
	}

	.bg-bestiary {
		background-image: url($lib/client/images/background/bg-bestiary.webp);
	}

	.bg-support {
		background-image: url($lib/client/images/background/bg-support.webp);
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
			box-shadow: 0 0px 32px #00000080;
		}
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
		background-image: url($lib/client/images/background/noise.webp);
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
		background-image: url($lib/client/images/background/noise-light.webp);
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
		background-image: url($lib/client/images/background/noise-light.webp);
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
		background-image: url($lib/client/images/background/noise.webp);
		background-size: 5%;
	}
</style>
