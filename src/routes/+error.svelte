<script lang="ts">
	import { page } from '$app/stores';
	import cat from '$lib/client/images/error.webp';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorVars } from '$lib/client/themes/cursor';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { developmentStage } from '$lib/constants';
	import { goto } from '$app/navigation';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

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

	let tokens = $derived(themeTokens[$carbonThemeStore] || themeTokens.default);
	let bgClass =
		$derived($carbonThemeStore === 'g10'
			? `background-light bg-support`
			: `background bg-support`);
	const errorTitles = [
		'The Gargwa took the quest and ran away with it! 🐔',
		"We've encountered a tiny pawblem! 👀",
		'Ran out of Mega Dash Juice! 😴',
		'Meow-gency! ⚠',
		"Our supply box is empty like a Melynx's treasure trove! 🎒🐱",
		'It looks like a Bitterbug has wandered into our quest board! 🐛',
	];

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
	});

	let headerClass = $derived($stickyHeaderStore ? 'header sticky' : 'header');
</script>

<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

<Theme
	bind:theme={$carbonThemeStore}
	persist
	persistKey="__carbon-theme"
	{tokens}
/>
<div class="app">
	<div class={headerClass}>
		<Header />
	</div>
	<div class="banner">
		<!--TODO: banner folder and components-->
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
	<div class={bgClass}>
		<main>
			<div class="container">
				<h1>
					Error {$page.status} - {errorTitles[
						Math.floor(Math.random() * errorTitles.length)
					]}
				</h1>

				<p>Don't fret! Here's what you can do:</p>
				<UnorderedList class="spaced-list">
					<ListItem>
						🎵 Sharpen your Hunting Horn - We'll be back in tune in no time.
					</ListItem>
					<ListItem>
						🐷 Pet your Poogie for good luck and maybe a purrfect solution.
					</ListItem>
					<ListItem>🍖 Grab a Well-Done Steak while we sort this out.</ListItem>
				</UnorderedList>

				Remember, every hunter faces challenges, but we always come out stronger
				together, nya! 🎵🍖🐾
				<img src={cat} alt="Error" class="cat" />
				{#if $page.error !== null}
					<span style="font-size: 2em">
						{$page.error.message}
					</span>
				{/if}
				<div>Want to play as Raviente?</div>
				<Link href="/offline">Try this game!</Link>
			</div>
		</main>
	</div>
	{#key $page.url.pathname}
		<div class="footer"><Footer /></div>
	{/key}
</div>

<style lang="css">
	.cat {
		width: auto;
		height: 12rem;
	}

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
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		font-size: 1rem;
		background-color: var(--ctp-base);
	}

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.footer {
		border-top: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.bg-support {
		background-image: url($lib/client/images/background/bg-support.webp);
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
