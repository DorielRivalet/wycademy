<script lang="ts">
	import Sun from '$lib/client/images/icon/sun.webp';
	import Moon from '$lib/client/images/icon/moon.webp';
	import {
		getThemeNameFromId,
		setTheme,
		theme,
	} from '$lib/client/stores/theme';
	import { browser } from '$app/environment';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';

	$: icon = $theme === 'g10' ? Sun : Moon;

	function changeTheme(themeID: string) {
		setTheme(themeID);
		changeCatppuccinFlavorCSSVariables(themeID);
	}

	function clicked(e: MouseEvent) {
		icon = icon === Sun ? Moon : Sun;
		let themeID = icon === Sun ? '0' : '3';
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

<button on:click={(e) => clicked(e)}>
	<img src={icon} alt="theme icon" />
</button>

<style>
	button {
		width: var(--cds-spacing-09);
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-overlay0);
		border-radius: 10%;
		display: flex;
		padding: var(--cds-spacing-01);
	}

	img {
		width: var(--cds-spacing-09);
	}
</style>
