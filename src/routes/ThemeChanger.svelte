<script lang="ts">
	import Sun from '$lib/client/images/icon/sun.webp';
	import Moon from '$lib/client/images/icon/moon.webp';
	import { getThemeNameFromId, setTheme } from '$lib/client/stores/theme';
	import { browser } from '$app/environment';
	import { catppuccinThemeMap } from '$lib/catppuccin';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	let icon = $derived($carbonThemeStore === 'g10' ? Sun : Moon);

	function changeTheme(themeID: string) {
		setTheme(carbonThemeStore, themeID);
		changeCatppuccinFlavorCSSVariables(themeID);
	}

	function clicked(e: MouseEvent) {
		let newIcon = icon === Sun ? 'moon' : 'sun';
		let themeID = newIcon === 'sun' ? '0' : '3';
		changeTheme(themeID);
	}

	function changeCatppuccinFlavorCSSVariables(themeID: string) {
		if (!browser) return;
		let themeValue = getThemeNameFromId(themeID);
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	}
</script>

<button onclick={(e) => clicked(e)}>
	<img src={icon} alt="theme icon" />
</button>

<style lang="scss">
	@use '@carbon/motion' as motion;

	button {
		width: 48px;
		height: 100%;
		background-color: transparent;
		border: 0px solid transparent;
		display: flex;
		transition:
			border-color motion.$duration-slow-02 motion.motion(standard, expressive),
			background-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			scrollbar-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			opacity motion.$duration-slow-02 motion.motion(standard, expressive),
			background-image motion.$duration-slow-02
				motion.motion(standard, expressive);
	}

	img {
		width: 20px;
		aspect-ratio: 1;
		margin: auto;
	}
</style>
