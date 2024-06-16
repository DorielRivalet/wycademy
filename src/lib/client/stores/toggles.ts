/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

let soundValue = false;
let scrollToTopValue = false;
let stickyHeaderValue = false;

if (browser) {
	const localStorageSoundValue = window.localStorage.getItem('__sound-enabled');
	soundValue = localStorageSoundValue
		? localStorageSoundValue === 'true'
		: true;

	const localStorageScrollToTopValue = window.localStorage.getItem(
		'__scroll-to-top-enabled',
	);
	scrollToTopValue = localStorageScrollToTopValue
		? localStorageScrollToTopValue === 'true'
		: true;

	const localStorageStickyHeaderValue = window.localStorage.getItem(
		'__sticky-header-enabled',
	);
	stickyHeaderValue = localStorageStickyHeaderValue
		? localStorageStickyHeaderValue === 'true'
		: true;
} else {
	soundValue = true;
	scrollToTopValue = true;
	stickyHeaderValue = true;
}

export const soundStore = writable(soundValue);
export const scrollToTopStore = writable(scrollToTopValue);
export const stickyHeaderStore = writable(stickyHeaderValue);

export function onStoreToggle(
	store: Writable<boolean>,
	e: { detail: { toggled: boolean } },
) {
	store.set(e.detail.toggled);
}
