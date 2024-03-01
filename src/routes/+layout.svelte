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
	// import { pwaInfo } from 'virtual:pwa-info';

	// $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;
	console.log('layout.svelte');
	// console.log(webManifestLink);

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
		// console.log(webManifestLink);
	});

	// onMount(async () => {
	//   if (pwaInfo) {
	//     const { registerSW } = await import('virtual:pwa-register')
	//     registerSW({
	//       immediate: true,
	//       onRegistered(r) {
	//         // uncomment following code if you want check for updates
	//         // r && setInterval(() => {
	//         //    console.log('Checking for sw update')
	//         //    r.update()
	//         // }, 20000 /* 20s for testing purposes */)
	//         console.log(`SW Registered: ${r}`)
	//       },
	//       onRegisterError(error) {
	//         console.log('SW registration error', error)
	//       }
	//     })
	//   }
	// })
</script>

<!-- <svelte:head>
	{@html webManifestLink}
</svelte:head> -->

<!-- <svelte:head>
	<title>{$page.data.title}</title>
</svelte:head> -->

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
<div class="app">
	<ViewTransition />
	<Header />
	<main>
		<slot />
	</main>
	{#key $page.url.pathname}
		<Footer githubData={data.github} />
	{/key}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 70vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 90vh;
	}
</style>
