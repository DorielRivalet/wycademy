<script lang="ts">	
	import { getThemeIcon, setTheme } from '$lib/client/stores/theme.js';
	import {
		Dropdown,
  } from "carbon-components-svelte";
	import { themeOptions } from '$lib/client/themes/options.js';
</script>

<svelte:head>
	<title>Settings</title>
	<meta name="settings" content="Settings" />
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
</div> 

<div class="text-column">
	<h1>Settings</h1>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
