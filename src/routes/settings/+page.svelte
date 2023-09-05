<script lang="ts">	
	import { getThemeIcon, setTheme } from '$lib/client/stores/theme.js';
	import logo from '$lib/client/images/logo.png';
	import {
		Dropdown,
  } from "carbon-components-svelte";
	import { themeOptions } from '$lib/client/themes/options.js';
	import Dot from '$lib/client/components/Dot.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontierColorNames';

</script>

<svelte:head>
	<title>Frontier Compendium - Settings</title>
	<meta content="Frontier Compendium - Settings" property="og:title" />
	<meta content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." property="og:description" />
	<meta name="description" content="A compendium of resources for Monster Hunter Frontier Z by Dorial Rivalet." />
	<meta content="https://frontier-compendium.vercel.app/settings" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div>
	<Dropdown
		titleText="Theme"
		selectedId="0"
		items={[
			{ id: "0", text: themeOptions[0].labelText,},
			{ id: "1", text: themeOptions[1].labelText,},
			{ id: "2", text: themeOptions[2].labelText,},
			{ id: "3", text: themeOptions[3].labelText,},
		]}
		on:select={(event) => setTheme(event.detail.selectedId)}
			let:item
	>
	<div>
		<img alt="Theme Icon" src={getThemeIcon(item.id)} width="24" height="auto"/>
		<strong>{item.text}</strong>
	</div>
	</Dropdown>

	<div class="color-grid-container">
		{#each frontierColorNames as colorName}
				<Dot color={colorName.var} name={colorName.name}/>
			{/each}
	</div>
</div> 

<style>
	.color-grid-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin-top: 5%;
		gap: 10px; /* Adjust the gap value as needed */
	}
</style>