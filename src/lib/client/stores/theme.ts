/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import latteSquircle from '$lib/client/images/latte_squircle.webp';
import macchiatoSquircle from '$lib/client/images/macchiato_squircle.webp';
import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

const defaultValue: CarbonTheme = 'g100';
const initialValue: CarbonTheme = browser
	? (window.localStorage.getItem('__carbon-theme') as CarbonTheme) ??
		defaultValue
	: defaultValue;
export const theme = writable<CarbonTheme>(initialValue);

// im using persist in theme component instead. so this is not needed.
// theme.subscribe((value) => {
//   if (browser){
//     window.localStorage.setItem('__carbon-theme', value);
//   }
// });
/*
Use this instead for components, as an example:

  export let theme = "white";

  // Set to `true` to persist the theme using window.localStorage
  export let persist = false;

  // Specify the local storage key
  export let persistKey = "theme";

{#if persist}
  <LocalStorage bind:value="{theme}" key="{persistKey}" />
{/if}
*/

export function getThemeIcon(themeId: string) {
	switch (themeId) {
		case '0':
			return latteSquircle;
		default:
			return macchiatoSquircle;
	}
}

export function getThemeId(themeName: CarbonTheme) {
	switch (themeName) {
		case 'g10':
		case 'white':
			return '0';
		case 'g80':
			return '1';
		case 'g90':
			return '2';
		case 'g100':
			return '3';
		default:
			return undefined;
	}
}

export function getThemeNameFromId(id: string) {
	switch (id) {
		case '0':
			return 'g10';
		case '1':
			return 'g80';
		case '2':
			return 'g90';
		case '3':
			return 'g100';
		default:
			return 'g100';
	}
}

export function setTheme(selectedId: string) {
	theme.set(getThemeNameFromId(selectedId));
}
