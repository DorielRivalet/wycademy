<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import {
    Theme,
  } from "carbon-components-svelte";
	import { theme } from '$lib/client/stores/theme.js';
  import { themeTokens } from '$lib/client/themes/tokens.js';

	let tokens = themeTokens[$theme]; // needed?

	$: {
		tokens = themeTokens[$theme] || themeTokens.default;
	}
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme"
{tokens}/>

<div class="app">
	<Header />

	<main>
		<slot />	
	</main>

	<Footer/>
</div>

<style>
	@import "carbon-components-svelte/css/all.css";

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
