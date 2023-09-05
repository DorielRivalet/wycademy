import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import latteSquircle  from '$lib/client/images/latte_squircle.png';
import macchiatoSquircle  from '$lib/client/images/macchiato_squircle.png';
import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

const defaultValue:CarbonTheme = "g100";
const initialValue:CarbonTheme = browser ? window.localStorage.getItem('__carbon-theme') as CarbonTheme ?? defaultValue : defaultValue;

export const theme = writable<CarbonTheme>(initialValue);

theme.subscribe((value) => {
  if (browser){
    window.localStorage.setItem('__carbon-theme', value);
  }
});

export function getThemeIcon(themeId: string) {
  switch (themeId) {
    case "0":
      return latteSquircle;
    default:
      return macchiatoSquircle;
  }
}

export function setTheme(selectedId: string){
  let selectedThemeId:CarbonTheme = "g100";
  switch (selectedId) {
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

  theme.set(selectedThemeId);
}