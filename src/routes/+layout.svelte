<script lang="ts">

	import Header from './Header.svelte';
	import './styles.css';
	import {Button} from 'carbon-components-svelte';
	import github from '$lib/images/github.svg';
	import github_light from '$lib/images/github-light.svg';
	import {
    Theme,
		Dropdown,
  } from "carbon-components-svelte";
  import { themeTokens } from '$lib/themes/tokens.js';
	import { themeOptions } from '$lib/themes/options.js';
	import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';
	import latteSquircle  from '$lib/images/latte_squircle.png';
	import macchiatoSquircle  from '$lib/images/macchiato_squircle.png';

  let theme:CarbonTheme = "g100";
	let tokens = {}; // needed?

	function getThemeIcon(themeId: string) {
		switch (themeId) {
			case "0":
				return latteSquircle;
			default:
				return macchiatoSquircle;
		}
	}

	function changeTheme(event: any){
		let selectedThemeId:CarbonTheme = "g100";
		switch (event.detail.selectedId) {
			case "0":
				selectedThemeId = "g10";
				break;
			case "1":
				selectedThemeId = "g80";
				break;
			case "2":
				selectedThemeId = "g90";
				break;
			case "3":
				selectedThemeId = "g100";
				break;
		}

		theme = selectedThemeId;
	}

	$: {
		tokens = themeTokens[theme] || themeTokens.default;
	}
</script>

<Theme bind:theme={theme} persist persistKey="__carbon-theme"
tokens={tokens}/>

<div class="app">
	<Header />
	<div>
		<Dropdown
			titleText="Theme"
			hideLabel
			selectedId="0"
			items={[
				{ id: "0", text: themeOptions[0].labelText,},
				{ id: "1", text: themeOptions[1].labelText,},
				{ id: "2", text: themeOptions[2].labelText,},
				{ id: "3", text: themeOptions[3].labelText,},
			]}
			on:select={(event) => changeTheme(event)}
				let:item
		>
		<div>
			<img alt="Theme Icon" src={getThemeIcon(item.id)} width="24" height="auto"/>
			<strong>{item.text}</strong>
		</div>
		</Dropdown>
	</div>
	<main>
		<slot />	
	</main>

	<footer>
		<a href="https://github.com/DorielRivalet/frontier-compendium">
			<img src={github} alt="GitHub" title="Go to GitHub repository"/>
		</a>
		<Button>Primary button</Button>
	</footer>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
