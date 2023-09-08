<script lang="ts">	
	import { getThemeIcon, setTheme } from '$lib/client/stores/theme';
	import logo from '$lib/client/images/logo.png';
	import Dropdown from "carbon-components-svelte/src/Dropdown/Dropdown.svelte";
	import Toggle from "carbon-components-svelte/src/Toggle/Toggle.svelte";
	import Slider from "carbon-components-svelte/src/Slider/Slider.svelte";
	import { themeOptions } from '$lib/client/themes/options';
	import ColorDot from '$lib/client/components/ColorDot.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
</script>

<svelte:head>
	<title>Frontier Compendium - Site Settings</title>
	<meta content="Frontier Compendium - Site Settings" property="og:title" />
	<meta content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." property="og:description" />
	<meta name="description" content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." />
	<meta content="https://frontier-compendium.vercel.app/site-settings" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div>
	<h1>Site Settings</h1>
	<p>If you are using DarkReader or similar, the website may look better with it disabled.</p>
	<div class="container-dropdown">
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
	</div>

	<div>
		{#each frontierColorNames as colorName, i}
			<h2>{colorName.name}</h2>
			<div class="container-color-grid">
				{#each frontierColorNames[i].values as colorValue}
					<ColorDot color={colorValue.var} name={colorValue.name}/>
				{/each}
			</div>
		{/each}
	</div>

	<div class="container-dropdown">
		<Dropdown disabled titleText="Language" selectedId="0" items={[
			{ id: "0", text: "English",},
			]}>
		</Dropdown>
	</div>

	<div class="container-toggle">
		<Toggle labelText="Push notifications" />
	</div>

	<div class="container-sound">
		<Toggle labelText="Sound" />
		<Slider labelText="Volume" value={0}/>
	</div>

</div> 

<style>
	.container-toggle{
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.container-sound{
		display: grid;
		grid-template-columns: 1fr 5fr;
		margin-top: 1rem;
		margin-bottom: 1rem;
		gap: .1rem;
	}

	.container-dropdown{
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.container-color-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	h2{
		margin-top: 1rem;
	}

	p{
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
</style>