/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import latteSquircle from '$lib/client/images/latte_squircle.png';
import macchiatoSquircle from '$lib/client/images/macchiato_squircle.png';
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

export function setTheme(selectedId: string) {
  let selectedThemeId: CarbonTheme = 'g100';
  switch (selectedId) {
    case '0':
      selectedThemeId = 'g10';
      break;
    case '1':
      selectedThemeId = 'g80';
      break;
    case '2':
      selectedThemeId = 'g90';
      break;
    case '3':
      selectedThemeId = 'g100';
      break;
  }

  theme.set(selectedThemeId);
}
