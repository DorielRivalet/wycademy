/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let tocEnabled = true;
let tocPosition = 'left';

if (browser) {
	const localStorageTocEnabledValue =
		window.localStorage.getItem('__toc-enabled');
	tocEnabled = localStorageTocEnabledValue
		? localStorageTocEnabledValue === 'true'
		: true;
	const localStorageTocPositionValue =
		window.localStorage.getItem('__toc-position');
	tocPosition = localStorageTocPositionValue ?? 'left';
} else {
	tocEnabled = true;
	tocPosition = 'left';
}

export const tocEnabledStore = writable(tocEnabled);
export const tocPositionStore = writable(tocPosition);
