/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { type Writable } from 'svelte/store';
import latteSquircle from '$lib/client/images/latte_squircle.webp';
import macchiatoSquircle from '$lib/client/images/macchiato_squircle.webp';
import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

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

export function setTheme(theme: Writable<CarbonTheme>, selectedId: string) {
	theme.set(getThemeNameFromId(selectedId));
}
