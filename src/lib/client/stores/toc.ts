/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let tocEnabled = true;
let hunterNotesSidebarEnabled = true;

if (browser) {
	const localStorageTocEnabledValue =
		window.localStorage.getItem('__toc-enabled');
	tocEnabled = localStorageTocEnabledValue
		? localStorageTocEnabledValue === 'true'
		: true;

	const localStorageHunterNotesSidebarEnabledValue =
		window.localStorage.getItem('__hunter-notes-sidebar-enabled');
	hunterNotesSidebarEnabled = localStorageHunterNotesSidebarEnabledValue
		? localStorageHunterNotesSidebarEnabledValue === 'true'
		: true;
} else {
	tocEnabled = true;
	hunterNotesSidebarEnabled = true;
}

export const tocEnabledStore = writable(tocEnabled);
export const hunterNotesSidebarEnabledStore = writable(
	hunterNotesSidebarEnabled,
);
