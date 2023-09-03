<script>
	import Header from './Header.svelte';
	import './styles.css';
	import {Button} from 'carbon-components-svelte';
	import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g100";
	let tokens = {};

	const themeOptions = [
    { value: "g10", labelText: "Catppuccin Latte" },
    { value: "g80", labelText: "Catppuccin Frappé" },
    { value: "g90", labelText: "Catppuccin Macchiato" },
    { value: "g100", labelText: "Catppuccin Mocha" },
  ];

	$: {
		if (theme === "g100") {
			tokens = {
				"interactive-01": "var(--ctp-mocha-green)",
				"hover-primary": "#ee5396",
				"active-primary": "#9f1853",
			};
		} else {
			// Update the tokens values for other themes
			tokens = {
				"interactive-01": "#ffffff",
				"hover-primary": "#ffffff",
				"active-primary": "#ffffff",
			};
		}
	}
</script>

<Theme bind:theme={theme} persist persistKey="__carbon-theme"
tokens={tokens}/>

<div class="app">
	<Header />
	<RadioButtonGroup legendText="Color theme" bind:selected={theme}>
		{#each themeOptions as option}
			<RadioButton labelText={option.labelText} value={option.value} />
		{/each}
	</RadioButtonGroup>
	<main>
		<slot />	
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
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
