<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ViewTransition from './Navigation.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { theme } from '$lib/client/stores/theme';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorIcon } from '$lib/client/stores/cursor';
	import { cursorVars } from '$lib/client/themes/cursor';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';

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

	$: bgImage = getBackgroundImage($page.url.pathname);
	$: bgClass =
		getBackgroundImage($page.url.pathname) === 'none' ? 'none' : 'background';

	function getBackgroundImage(path: string) {
		switch (path) {
			case '/arena': {
				return "url('/src/lib/client/images/background/bg-arena.png')";
			}
			default:
				return 'none';
		}
	}
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
<div class="app">
	<ViewTransition />
	<Header />
	<div class={bgClass} style={`background-image: ${bgImage};`}>
		<main>
			<slot />
		</main>
	</div>
	{#key $page.url.pathname}
		<Footer githubData={data.github} />
	{/key}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	main {
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

	.none {
		padding-bottom: var(--cds-spacing-08);
	}

	.background {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
	}
</style>
