/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let bannerEnabled = true;

if (browser) {
	const localStorageBannerEnabledValue =
		window.localStorage.getItem('__banner-enabled');
	bannerEnabled = localStorageBannerEnabledValue
		? localStorageBannerEnabledValue === 'true'
		: true;
} else {
	bannerEnabled = true;
}

export const bannerEnabledStore = writable(bannerEnabled);
